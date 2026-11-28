import ReactDOM from 'react-dom/client';
import { CardEditor } from './components/CardEditor';
import { SetupState } from './components/SetupState';
import { VacuumCard } from './components/VacuumCard';
import { loadDeviceFlags } from './catalog/device-flags';
import { buildConfig, listRoborockVacuums, loadVacuumSegmentOptions } from './discovery';
import { CARD_ELEMENT, SANDBOX } from './build-flags';
import { getStubConfig, normalizeConfig, validateConfig } from './config';
import { sandboxHass } from './sandbox';
import type { HomeAssistant, Language, RoborockVacuumMapCardConfig } from './types';
import styles from './styles/main.scss?inline';

const VERSION = __CARD_VERSION__;
const EDITOR_ELEMENT = `${CARD_ELEMENT}-editor`;
// In the sandbox build every hass the card sees can only read and touch rvmc_ test helpers.
const guard = (hass: HomeAssistant) => (SANDBOX ? sandboxHass(hass) : hass);

let warnedVacuumModeFallback = false;

function warnDeprecatedVacuumModeFallback() {
  if (warnedVacuumModeFallback) return;
  warnedVacuumModeFallback = true;
  console.warn(
    'roborock-vacuum-map-card: `vacuum_mode_fallback` is deprecated. Home Assistant 2026.8+ provides the Cleaning mode select; configure `entities.cleaning_mode` instead.',
  );
}

// Bottom edge of Home Assistant's fixed dashboard top bar, so a sheet never opens underneath it.
function topBarBottom(): number {
  const main = document.querySelector('home-assistant')?.shadowRoot?.querySelector('home-assistant-main');
  const panel = main?.shadowRoot?.querySelector('partial-panel-resolver ha-panel-lovelace');
  const header = panel?.shadowRoot?.querySelector('hui-root')?.shadowRoot?.querySelector('.header');
  if (!header || getComputedStyle(header).position !== 'fixed') return 0;
  return Math.max(0, header.getBoundingClientRect().bottom);
}

abstract class ReactElement extends HTMLElement {
  protected root?: ReactDOM.Root;
  protected container: HTMLDivElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = styles;
    shadow.append(style);
    this.container = document.createElement('div');
    shadow.append(this.container);
  }

  protected renderReact(node: React.ReactNode) {
    this.root ??= ReactDOM.createRoot(this.container);
    this.root.render(node);
  }
}

export class RoborockVacuumMapCard extends ReactElement {
  private config?: RoborockVacuumMapCardConfig;
  private configErrors: string[] = [];
  private rawConfig?: unknown;
  private language?: Language;
  private homeAssistant?: HomeAssistant;
  private sheetInsetObserver?: ResizeObserver;
  private sheetObserver?: MutationObserver;
  private sheetOpen = false;

  // Sheets are position:fixed. Expose the visible part of the card's own box as CSS vars,
  // so a sheet opens inside the card (like the main card window), not over the whole page.
  private updateSheetInset = () => {
    // The sheet covers only the part of the card that is on screen, below Home Assistant's own top bar.
    const rect = this.getBoundingClientRect();
    const width = window.innerWidth || document.documentElement.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight;
    this.style.setProperty('--rvm-sheet-left', `${Math.max(0, rect.left)}px`);
    this.style.setProperty('--rvm-sheet-right', `${Math.max(0, width - rect.right)}px`);
    this.style.setProperty('--rvm-sheet-top', `${Math.max(0, rect.top, topBarBottom())}px`);
    this.style.setProperty('--rvm-sheet-bottom', `${Math.max(0, height - rect.bottom)}px`);
  };

  // While a sheet is open the page behind it must not scroll: wheel, touch and scroll keys
  // only reach a scrollable area inside the sheet itself.
  private blockPageScroll = (event: Event) => {
    const path = event.composedPath();
    const sheet = path.find((node) => node instanceof HTMLElement && node.classList.contains('job-sheet')) as HTMLElement | undefined;
    if (!sheet) {
      event.preventDefault();
      return;
    }
    if (event.type === 'keydown') return;
    const scroller = path.find(
      (node) => node instanceof HTMLElement && sheet.contains(node) && node.scrollHeight > node.clientHeight && /(auto|scroll)/.test(getComputedStyle(node).overflowY),
    );
    if (!scroller) event.preventDefault();
  };

  private blockScrollKeys = (event: KeyboardEvent) => {
    const target = event.composedPath()[0];
    if (target instanceof HTMLElement && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))) return;
    if (!['PageUp', 'PageDown', 'Home', 'End', ' ', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
    this.blockPageScroll(event);
  };

  private syncSheetState = () => {
    const open = Boolean(this.container.querySelector('.sheet-layer'));
    if (open === this.sheetOpen) return;
    this.sheetOpen = open;
    // The page keeps scrolling while a sheet is open: the sheet sits on the card and stays in
    // view with position: sticky, so nothing needs to be measured or locked here.
    if (!open) {
      this.releaseSheet();
    }
  };

  private releaseSheet() {
    const options = { capture: true } as EventListenerOptions;
    window.removeEventListener('wheel', this.blockPageScroll, options);
    window.removeEventListener('touchmove', this.blockPageScroll, options);
    window.removeEventListener('keydown', this.blockScrollKeys, options);
    window.removeEventListener('scroll', this.updateSheetInset, options);
    this.sheetOpen = false;
  }

  setConfig(config: RoborockVacuumMapCardConfig) {
    // An unusable config shows the setup state instead of Home Assistant's error card.
    this.rawConfig = config;
    this.language = (config as Partial<RoborockVacuumMapCardConfig> | undefined)?.language;
    this.configErrors = validateConfig(config);
    this.config = this.configErrors.length === 0 ? normalizeConfig(config) : undefined;
    if (this.config?.vacuum_mode_fallback) warnDeprecatedVacuumModeFallback();
    this.render();
  }

  set hass(hass: HomeAssistant) {
    this.homeAssistant = guard(hass);
    this.render();
  }

  // Lovelace keeps left views detached in memory and stops sending them hass,
  // so the card has to stop its own background work while it is off the page.
  connectedCallback() {
    if (!this.sheetInsetObserver) {
      this.sheetInsetObserver = new ResizeObserver(() => this.updateSheetInset());
      this.sheetInsetObserver.observe(this);
    }
    if (!this.sheetObserver) {
      this.sheetObserver = new MutationObserver(this.syncSheetState);
      this.sheetObserver.observe(this.container, { childList: true, subtree: true });
    }
    window.addEventListener('resize', this.updateSheetInset);
    this.updateSheetInset();
    this.render();
  }

  disconnectedCallback() {
    this.sheetInsetObserver?.disconnect();
    this.sheetInsetObserver = undefined;
    this.sheetObserver?.disconnect();
    this.sheetObserver = undefined;
    this.releaseSheet();
    window.removeEventListener('resize', this.updateSheetInset);
    this.render();
  }

  private render() {
    const hass = this.homeAssistant;
    if (!hass) return;
    if (!this.config || !hass.states[this.config.entity]) {
      this.renderReact(<SetupState hass={hass} language={this.language} errors={this.configErrors} missingVacuum={this.config?.entity} config={this.rawConfig} />);
      return;
    }
    this.renderReact(<VacuumCard hass={hass} config={this.config} connected={this.isConnected} />);
  }

  getCardSize() {
    return 10;
  }

  getGridOptions() {
    return { columns: 12, rows: 'auto', min_rows: 10 };
  }

  static getConfigElement() {
    return document.createElement(EDITOR_ELEMENT);
  }

  /**
   * "Add card" starts from a discovered config for the first Roborock vacuum. Home
   * Assistant awaits this and passes `hass`; without a vacuum the plain stub is used.
   */
  static async getStubConfig(rawHass?: HomeAssistant): Promise<RoborockVacuumMapCardConfig> {
    const hass = rawHass && guard(rawHass);
    const vacuum = hass ? listRoborockVacuums(hass)[0] : undefined;
    if (!hass || !vacuum || !hass.entities) return getStubConfig();
    // Home Assistant's card picker waits for this forever if it rejects, so discovery
    // problems fall back to the plain stub; the setup assistant can retry.
    try {
      const [segmentOptions, deviceFlags] = await Promise.all([loadVacuumSegmentOptions(hass, vacuum), loadDeviceFlags(hass, vacuum)]);
      return buildConfig(hass, vacuum, segmentOptions, deviceFlags).config;
    } catch (error) {
      console.warn('roborock-vacuum-map-card: discovery failed, using the starter config', error);
      return { ...getStubConfig(), entity: vacuum };
    }
  }
}

export class RoborockVacuumMapCardEditor extends ReactElement {
  private config: RoborockVacuumMapCardConfig = getStubConfig();
  // Home Assistant sets hass before setConfig. Rendering the stub in between would make the
  // editor think the card is new and open the setup assistant on the stub, not the real config.
  private configured = false;
  private homeAssistant?: HomeAssistant;

  setConfig(config: RoborockVacuumMapCardConfig) {
    this.config = structuredClone(config);
    this.configured = true;
    this.render();
  }

  set hass(hass: HomeAssistant) {
    this.homeAssistant = guard(hass);
    this.render();
  }

  private render() {
    if (!this.homeAssistant || !this.configured) return;
    this.renderReact(
      <CardEditor
        hass={this.homeAssistant}
        config={this.config}
        onChange={(config) => {
          this.config = config;
          this.dispatchEvent(new CustomEvent('config-changed', { detail: { config }, bubbles: true, composed: true }));
          this.render();
        }}
      />,
    );
  }
}

if (!customElements.get(CARD_ELEMENT)) {
  customElements.define(CARD_ELEMENT, RoborockVacuumMapCard);
}
if (!customElements.get(EDITOR_ELEMENT)) {
  customElements.define(EDITOR_ELEMENT, RoborockVacuumMapCardEditor);
}

window.customCards ??= [];
window.customCards.push({
  type: CARD_ELEMENT,
  name: SANDBOX ? 'Roborock Vacuum Map Card (beta sandbox)' : 'Roborock Vacuum Map Card',
  description: SANDBOX
    ? 'Test build: separate from the installed card, and it blocks every command to the vacuum'
    : 'A Roborock-native room and whole-floor cleaning card',
  preview: true,
  documentationURL: 'https://github.com/domidyon/roborock-vacuum-map-card',
});

console.info(`%c ROBOROCK-VACUUM-MAP-CARD %c v${VERSION} `, 'color:white;background:#5965f2;font-weight:700', 'color:#5965f2;background:#eef0ff');

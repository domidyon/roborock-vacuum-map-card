import ReactDOM from 'react-dom/client';
import { CardEditor } from './components/CardEditor';
import { SetupState } from './components/SetupState';
import { VacuumCard } from './components/VacuumCard';
import { loadDeviceFlags } from './catalog/device-flags';
import { buildConfig, listRoborockVacuums, loadVacuumSegmentOptions } from './discovery';
import { getStubConfig, normalizeConfig, validateConfig } from './config';
import type { HomeAssistant, Language, RoborockVacuumMapCardConfig } from './types';
import styles from './styles/main.scss?inline';

const VERSION = __CARD_VERSION__;

let warnedVacuumModeFallback = false;

function warnDeprecatedVacuumModeFallback() {
  if (warnedVacuumModeFallback) return;
  warnedVacuumModeFallback = true;
  console.warn(
    'roborock-vacuum-map-card: `vacuum_mode_fallback` is deprecated. Home Assistant 2026.8+ provides the Cleaning mode select; configure `entities.cleaning_mode` instead.',
  );
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
  private language?: Language;
  private homeAssistant?: HomeAssistant;

  setConfig(config: RoborockVacuumMapCardConfig) {
    // An unusable config shows the setup state instead of Home Assistant's error card.
    this.language = (config as Partial<RoborockVacuumMapCardConfig> | undefined)?.language;
    this.configErrors = validateConfig(config);
    this.config = this.configErrors.length === 0 ? normalizeConfig(config) : undefined;
    if (this.config?.vacuum_mode_fallback) warnDeprecatedVacuumModeFallback();
    this.render();
  }

  set hass(hass: HomeAssistant) {
    this.homeAssistant = hass;
    this.render();
  }

  private render() {
    const hass = this.homeAssistant;
    if (!hass) return;
    if (!this.config || !hass.states[this.config.entity]) {
      this.renderReact(<SetupState hass={hass} language={this.language} errors={this.configErrors} missingVacuum={this.config?.entity} />);
      return;
    }
    this.renderReact(<VacuumCard hass={hass} config={this.config} />);
  }

  getCardSize() {
    return 10;
  }

  getGridOptions() {
    return { columns: 12, rows: 'auto', min_rows: 10 };
  }

  static getConfigElement() {
    return document.createElement('roborock-vacuum-map-card-editor');
  }

  /**
   * "Add card" starts from a discovered config for the first Roborock vacuum. Home
   * Assistant awaits this and passes `hass`; without a vacuum the plain stub is used.
   */
  static async getStubConfig(hass?: HomeAssistant): Promise<RoborockVacuumMapCardConfig> {
    const vacuum = hass ? listRoborockVacuums(hass)[0] : undefined;
    if (!hass || !vacuum || !hass.entities) return getStubConfig();
    const [segmentOptions, deviceFlags] = await Promise.all([loadVacuumSegmentOptions(hass, vacuum), loadDeviceFlags(hass, vacuum)]);
    return buildConfig(hass, vacuum, segmentOptions, deviceFlags).config;
  }
}

export class RoborockVacuumMapCardEditor extends ReactElement {
  private config: RoborockVacuumMapCardConfig = getStubConfig();
  private homeAssistant?: HomeAssistant;

  setConfig(config: RoborockVacuumMapCardConfig) {
    this.config = structuredClone(config);
    this.render();
  }

  set hass(hass: HomeAssistant) {
    this.homeAssistant = hass;
    this.render();
  }

  private render() {
    if (!this.homeAssistant) return;
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

if (!customElements.get('roborock-vacuum-map-card')) {
  customElements.define('roborock-vacuum-map-card', RoborockVacuumMapCard);
}
if (!customElements.get('roborock-vacuum-map-card-editor')) {
  customElements.define('roborock-vacuum-map-card-editor', RoborockVacuumMapCardEditor);
}

window.customCards ??= [];
window.customCards.push({
  type: 'roborock-vacuum-map-card',
  name: 'Roborock Vacuum Map Card',
  description: 'A Roborock-native room and whole-floor cleaning card',
  preview: true,
  documentationURL: 'https://github.com/domidyon/roborock-vacuum-map-card',
});

console.info(`%c ROBOROCK-VACUUM-MAP-CARD %c v${VERSION} `, 'color:white;background:#5965f2;font-weight:700', 'color:#5965f2;background:#eef0ff');

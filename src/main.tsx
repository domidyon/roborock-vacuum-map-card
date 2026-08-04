import ReactDOM from 'react-dom/client';
import { CardEditor } from './components/CardEditor';
import { VacuumCard } from './components/VacuumCard';
import { getStubConfig, normalizeConfig } from './config';
import type { HomeAssistant, RoborockVacuumMapCardConfig } from './types';
import styles from './styles/main.scss?inline';

const VERSION = '0.6.0';

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
  private homeAssistant?: HomeAssistant;

  setConfig(config: RoborockVacuumMapCardConfig) {
    this.config = normalizeConfig(config);
    this.render();
  }

  set hass(hass: HomeAssistant) {
    this.homeAssistant = hass;
    this.render();
  }

  private render() {
    if (!this.config || !this.homeAssistant) return;
    this.renderReact(<VacuumCard hass={this.homeAssistant} config={this.config} />);
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

  static getStubConfig() {
    return getStubConfig();
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

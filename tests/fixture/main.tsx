import ReactDOM from 'react-dom/client';
import { CardEditor } from '../../src/components/CardEditor';
import { VacuumCard } from '../../src/components/VacuumCard';
import { getStubConfig } from '../../src/config';
import { createDiscoveryHass } from '../../src/test/discovery-hass';
import type { RoborockVacuumMapCardConfig } from '../../src/types';
import { configFixture, createHass } from '../../src/test/fixtures';
import styles from '../../src/styles/main.scss?inline';

declare global {
  interface Window {
    __savedConfig?: RoborockVacuumMapCardConfig;
    __serviceCalls: Array<{ domain: string; service: string; data?: Record<string, unknown>; target?: Record<string, unknown> }>;
  }
}

const params = new URLSearchParams(location.search);
const scenario = params.get('scenario');
const dark = params.get('theme') === 'dark';
const hass = createHass();
const config = structuredClone(configFixture);
window.__serviceCalls = [];

if (scenario === 'missing-calibration') delete hass.states['image.downstairs'].attributes.calibration_points;
if (scenario === 'missing-map') hass.states['image.downstairs'].state = 'unavailable';
if (scenario === 'unmapped-room') config.floors[0].rooms[0].area_id = undefined;
if (scenario === 'empty-tank') {
  hass.states['binary_sensor.clean_water'] = { entity_id: 'binary_sensor.clean_water', state: 'on', attributes: {} };
  config.entities = { ...config.entities, dock_clean_water_empty: 'binary_sensor.clean_water' };
}
if (scenario === 'maintenance') {
  hass.states['sensor.sensor_time_left'] = { entity_id: 'sensor.sensor_time_left', state: '-2.5', attributes: { unit_of_measurement: 'h' } };
  hass.states['sensor.main_brush_time_left'] = { entity_id: 'sensor.main_brush_time_left', state: '246.9', attributes: { unit_of_measurement: 'h' } };
  config.consumables = [
    { kind: 'main_brush', sensor: 'sensor.main_brush_time_left' },
    { kind: 'sensors', sensor: 'sensor.sensor_time_left' },
  ];
}
if (scenario === 'drying') {
  hass.states['binary_sensor.mop_drying'].state = 'on';
  hass.states['sensor.mop_drying_remaining'].state = '3.9';
}

hass.callService = async (domain, service, data, target) => {
  window.__serviceCalls.push({ domain, service, data, target });
  if (scenario === 'service-error' && service === 'set_fan_speed') throw new Error('Fixture rejected fan setting');
  if (domain === 'select' && target?.entity_id) hass.states[String(target.entity_id)].state = String(data?.option);
};

const style = document.createElement('style');
style.textContent = `${styles.replace(':host', 'body')}
  body { margin: 0; min-height: 100vh; padding: 28px; background: ${dark ? '#111318' : '#e9edf3'}; }
  #root { width: min(860px, 100%); margin: 0 auto; }
  ha-icon { display: inline-block; width: 22px; height: 22px; }
  @media (max-width: 700px) { body { padding: 0; } }
`;
document.head.append(style);

if (dark) {
  document.documentElement.style.setProperty('--card-background-color', '#1b1d22');
  document.documentElement.style.setProperty('--secondary-background-color', '#292c33');
  document.documentElement.style.setProperty('--primary-text-color', '#f5f7fb');
  document.documentElement.style.setProperty('--secondary-text-color', '#abb1bd');
  document.documentElement.style.setProperty('--divider-color', 'rgba(255,255,255,.13)');
  document.documentElement.style.setProperty('--text-primary-color', '#fff');
}

// ?view=editor runs the visual editor against the redacted live Qrevo registry fixture.
const root = ReactDOM.createRoot(document.getElementById('root')!);
if (params.get('view') === 'editor') {
  const editorHass = createDiscoveryHass(undefined, { locale: { language: params.get('lang') ?? 'en' } });
  root.render(<div className="editor"><CardEditor hass={editorHass} config={getStubConfig()} onChange={(next) => { window.__savedConfig = next; }} /></div>);
} else {
  root.render(<VacuumCard hass={hass} config={config} />);
}

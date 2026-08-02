import ReactDOM from 'react-dom/client';
import { VacuumCard } from '../../src/components/VacuumCard';
import { configFixture, createHass } from '../../src/test/fixtures';
import styles from '../../src/styles/main.scss?inline';

declare global {
  interface Window {
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

ReactDOM.createRoot(document.getElementById('root')!).render(<VacuumCard hass={hass} config={config} />);

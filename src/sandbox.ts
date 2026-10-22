import type { HomeAssistant } from './types';

/**
 * Guards for the sandbox test build. The test card may read anything, but it may only
 * write to helpers it created itself (`input_*.rvmc_…`). Every other service call, every
 * other mutating WebSocket command and every non-GET REST call is refused before it
 * reaches Home Assistant, so nothing in the test can move the robot, start the dock or
 * change a setting of an existing setup.
 */
export class SandboxBlockedError extends Error {
  constructor(what: string) {
    super(`Blocked in the sandbox test build: ${what}`);
    this.name = 'SandboxBlockedError';
  }
}

const HELPER_DOMAINS = new Set(['input_select', 'input_boolean', 'input_text']);
const HELPER_SERVICES = new Set(['select_option', 'turn_on', 'turn_off', 'set_value']);
// WebSocket commands that only read. Exact names only: a prefix match would let writes
// such as `lovelace/config/save` through.
const READ_ONLY_WS = new Set([
  'get_states', 'get_config', 'get_services', 'get_panels', 'auth/current_user', 'render_template',
  'config/entity_registry/get', 'config/entity_registry/get_entries', 'config/entity_registry/list', 'config/entity_registry/list_for_display',
  'config/device_registry/list', 'config/area_registry/list', 'config/floor_registry/list', 'config/label_registry/list', 'config/category_registry/list',
  'config_entries/get', 'search/related', 'entity/source', 'manifest/get', 'manifest/list', 'integration/descriptions',
  'frontend/get_themes', 'frontend/get_translations', 'frontend/get_icons',
  'lovelace/config', 'lovelace/resources', 'lovelace/dashboards/list',
  'history/history_during_period', 'logbook/get_events',
]);

function targets(target?: Record<string, unknown>, data?: Record<string, unknown>): string[] {
  const raw = target?.entity_id ?? data?.entity_id;
  return (Array.isArray(raw) ? raw : raw === undefined ? [] : [raw]).map(String);
}

function isTestHelper(entityId: string): boolean {
  const [domain, objectId] = entityId.split('.');
  return HELPER_DOMAINS.has(domain) && objectId?.startsWith('rvmc_');
}

export function allowService(domain: string, service: string, data?: Record<string, unknown>, target?: Record<string, unknown>): boolean {
  const entities = targets(target, data);
  return HELPER_DOMAINS.has(domain) && HELPER_SERVICES.has(service) && entities.length > 0 && entities.every(isTestHelper);
}

export function allowWebSocket(message: Record<string, unknown>): boolean {
  const type = String(message.type ?? '');
  if (READ_ONLY_WS.has(type)) return true;
  // Creating or renaming test helpers: the id or name must be an rvmc_ name.
  const [domain, action] = type.split('/');
  if (HELPER_DOMAINS.has(domain) && (action === 'create' || action === 'update')) {
    const name = action === 'create' ? message.name : message[`${domain}_id`];
    return typeof name === 'string' && name.startsWith('rvmc_');
  }
  return false;
}

export function allowApi(method: string): boolean {
  return method.toUpperCase() === 'GET';
}

/** A copy of `hass` whose write paths are restricted to the sandbox rules. */
export function sandboxHass(hass: HomeAssistant): HomeAssistant {
  return {
    ...hass,
    callService: async (domain, service, data, target) => {
      if (!allowService(domain, service, data, target)) throw new SandboxBlockedError(`${domain}.${service}`);
      return hass.callService(domain, service, data, target);
    },
    callWS: hass.callWS && (async <T,>(message: Record<string, unknown>) => {
      if (!allowWebSocket(message)) throw new SandboxBlockedError(String(message.type));
      return hass.callWS!<T>(message);
    }),
    callApi: hass.callApi && (async <T,>(method: 'GET' | 'POST' | 'PUT' | 'DELETE', path: string, parameters?: Record<string, unknown>) => {
      if (!allowApi(method)) throw new SandboxBlockedError(`${method} ${path}`);
      return hass.callApi!<T>(method, path, parameters);
    }),
  };
}

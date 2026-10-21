import type { HomeAssistant } from '../types';
import qrevo from './fixtures/qrevo-curv-2-flow.json';

type Fixture = typeof qrevo;

/** A frontend-shaped `hass` built from a capture-discovery-fixture.mjs snapshot. */
export function createDiscoveryHass(fixture: Fixture = qrevo, overrides: Partial<HomeAssistant> = {}): HomeAssistant {
  const copy = structuredClone(fixture) as unknown as {
    config: { version: string };
    devices: NonNullable<HomeAssistant['devices']>;
    entities: NonNullable<HomeAssistant['entities']>;
    states: HomeAssistant['states'];
    areas: NonNullable<HomeAssistant['areas']>;
    vacuumOptions: Record<string, { vacuum: unknown }>;
  };
  return {
    config: copy.config,
    devices: copy.devices,
    entities: copy.entities,
    states: copy.states,
    areas: copy.areas,
    locale: { language: 'nl' },
    user: { is_admin: true },
    callService: async () => undefined,
    callWS: async <T,>(message: Record<string, unknown>) => {
      if (message.type === 'config/entity_registry/get') {
        const entityId = String(message.entity_id);
        return { entity_id: entityId, options: copy.vacuumOptions[entityId] ?? {} } as T;
      }
      throw new Error(`Unexpected ${String(message.type)}`);
    },
    hassUrl: (path: string) => path,
    ...overrides,
  };
}

import type { ConsumableConfig, ConsumableKind, HassEntity, HomeAssistant, RoborockVacuumMapCardConfig } from './types';

export type MaintenanceLevel = 'ok' | 'due' | 'overdue' | 'unknown';

export interface ConsumableStatus extends ConsumableConfig {
  /** Hours left for time sensors, percent left for life sensors. */
  remaining?: number;
  unit?: 'h' | '%';
  /** Share of the part's life left, when known. */
  percent?: number;
  level: MaintenanceLevel;
  /** The reset button exists and is available. */
  can_reset: boolean;
}

/**
 * Roborock's default part lifetimes in hours, as shown by the app (values from
 * juju35/ha-roborock-card, MIT). Parts without one are only flagged once they run out.
 */
const LIFETIME_HOURS: Partial<Record<ConsumableKind, number>> = {
  main_brush: 300,
  side_brush: 200,
  filter: 150,
  sensors: 30,
};

/** Below this share of life left, a part is due soon. */
const DUE_PERCENT = 10;

function hours(entity: HassEntity, value: number): number | undefined {
  switch (entity.attributes.unit_of_measurement) {
    case 'h': return value;
    case 'min': return value / 60;
    case 's': return value / 3600;
    case 'd': return value * 24;
    default: return undefined;
  }
}

export function consumableStatus(hass: HomeAssistant, consumable: ConsumableConfig): ConsumableStatus {
  const entity = hass.states[consumable.sensor];
  const reset = consumable.reset_button ? hass.states[consumable.reset_button] : undefined;
  const canReset = Boolean(reset && reset.state !== 'unavailable');
  const value = Number(entity?.state);
  if (!entity || entity.state === '' || !Number.isFinite(value)) return { ...consumable, level: 'unknown', can_reset: canReset };

  if (entity.attributes.unit_of_measurement === '%') {
    const level = value <= 0 ? 'overdue' : value < DUE_PERCENT ? 'due' : 'ok';
    return { ...consumable, remaining: value, unit: '%', percent: value, level, can_reset: canReset };
  }
  const left = hours(entity, value);
  if (left === undefined) return { ...consumable, level: 'unknown', can_reset: canReset };
  const lifetime = LIFETIME_HOURS[consumable.kind];
  const percent = lifetime ? Math.max(0, (left / lifetime) * 100) : undefined;
  const level = left <= 0 ? 'overdue' : percent !== undefined && percent < DUE_PERCENT ? 'due' : 'ok';
  return { ...consumable, remaining: left, unit: 'h', ...(percent !== undefined ? { percent } : {}), level, can_reset: canReset };
}

export function maintenanceStatus(hass: HomeAssistant, config: RoborockVacuumMapCardConfig): ConsumableStatus[] {
  return (config.consumables ?? []).map((consumable) => consumableStatus(hass, consumable));
}

export function overdueCount(statuses: ConsumableStatus[]): number {
  return statuses.filter((status) => status.level === 'overdue').length;
}

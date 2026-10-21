import { maintenanceStatus, overdueCount } from './maintenance';
import type { HomeAssistant, JobDraft, RoborockEntityConfig, RoborockVacuumMapCardConfig } from './types';

export type PreflightCode =
  | 'clean_water_empty'
  | 'water_shortage'
  | 'mop_detached'
  | 'water_box_detached'
  | 'dirty_water_full'
  | 'dock_error'
  | 'low_battery'
  | 'maintenance_overdue';

export interface PreflightCheck {
  code: PreflightCode;
  entity_id?: string;
  /** Raw state for checks that carry a reason, e.g. the dock error code. */
  detail?: string;
}

export interface PreflightResult {
  /** Problems that stop the job: the robot would fail or run dry. */
  blocking: PreflightCheck[];
  /** Problems worth a look; the user may start anyway. */
  warnings: PreflightCheck[];
}

const LOW_BATTERY = 20;
const DOCK_OK_STATES = new Set(['ok', 'none', 'unknown', 'unavailable', '']);

/** Jobs that put water on the floor need clean water and the mop hardware. */
export function usesWater(draft: Pick<JobDraft, 'strategy' | 'cleaning_type'>): boolean {
  return draft.strategy === 'smartplan' || draft.cleaning_type !== 'vacuum';
}

/**
 * Checks before a job starts. A sensor that is missing, unknown or unavailable never
 * blocks: the card can't prove a problem, and the robot reports real ones itself.
 */
export function preflightChecks(
  hass: HomeAssistant,
  config: RoborockVacuumMapCardConfig,
  draft: Pick<JobDraft, 'strategy' | 'cleaning_type'>,
): PreflightResult {
  const result: PreflightResult = { blocking: [], warnings: [] };
  const entity = (key: keyof RoborockEntityConfig) => {
    const id = config.entities?.[key];
    return id ? { id, state: hass.states[id]?.state } : undefined;
  };
  const when = (key: keyof RoborockEntityConfig, state: string, code: PreflightCode, list: PreflightCheck[]) => {
    const found = entity(key);
    if (found?.state === state) list.push({ code, entity_id: found.id });
  };

  if (usesWater(draft)) {
    when('dock_clean_water_empty', 'on', 'clean_water_empty', result.blocking);
    when('water_shortage', 'on', 'water_shortage', result.blocking);
    when('mop_attached', 'off', 'mop_detached', result.blocking);
    when('water_box_attached', 'off', 'water_box_detached', result.blocking);
    when('dock_dirty_water_full', 'on', 'dirty_water_full', result.warnings);
  }

  const dockError = entity('dock_error');
  if (dockError?.state !== undefined && !DOCK_OK_STATES.has(dockError.state)) {
    result.warnings.push({ code: 'dock_error', entity_id: dockError.id, detail: dockError.state });
  }
  const battery = entity('battery');
  if (battery?.state !== undefined && battery.state !== '' && Number(battery.state) < LOW_BATTERY) {
    result.warnings.push({ code: 'low_battery', entity_id: battery.id, detail: battery.state });
  }
  const overdue = overdueCount(maintenanceStatus(hass, config));
  if (overdue > 0) result.warnings.push({ code: 'maintenance_overdue', detail: String(overdue) });
  return result;
}

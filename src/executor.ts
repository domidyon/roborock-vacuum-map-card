import { entityAvailable, isVacuumBusy } from './capabilities';
import type { FloorConfig, HomeAssistant, JobDraft, RoborockVacuumMapCardConfig, RoomConfig } from './types';

const SAFE_SMARTPLAN_EXIT_MODES = new Set(['standard', 'deep', 'deep_plus', 'fast']);

export class JobExecutionError extends Error {
  constructor(
    public readonly operation: string,
    message: string,
    options?: ErrorOptions,
  ) {
    super(message, options);
    this.name = 'JobExecutionError';
  }
}

interface ExecuteJobOptions {
  getHass: () => HomeAssistant;
  config: RoborockVacuumMapCardConfig;
  floor: FloorConfig;
  rooms: RoomConfig[];
  draft: JobDraft;
  timeoutMs?: number;
  pollMs?: number;
  sleep?: (milliseconds: number) => Promise<void>;
}

async function waitForState(
  getHass: () => HomeAssistant,
  entityId: string,
  expected: string,
  timeoutMs: number,
  pollMs: number,
  sleep: (milliseconds: number) => Promise<void>,
): Promise<void> {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    if (getHass().states[entityId]?.state === expected) return;
    await sleep(pollMs);
  }
  throw new JobExecutionError('wait_for_state', `${entityId} did not become “${expected}” within ${timeoutMs / 1000}s`);
}

function requireOption(hass: HomeAssistant, entityId: string, option: string, operation: string): void {
  const entity = hass.states[entityId];
  if (!entityAvailable(hass, entityId)) throw new JobExecutionError(operation, `${entityId} is unavailable`);
  const options = Array.isArray(entity.attributes.options) ? entity.attributes.options.map(String) : [];
  if (!options.includes(option)) throw new JobExecutionError(operation, `${entityId} does not support “${option}”`);
}

async function selectOption(
  getHass: () => HomeAssistant,
  entityId: string,
  option: string,
  operation: string,
  timeoutMs: number,
  pollMs: number,
  sleep: (milliseconds: number) => Promise<void>,
): Promise<void> {
  const hass = getHass();
  requireOption(hass, entityId, option, operation);
  if (hass.states[entityId]?.state === option) return;
  try {
    await hass.callService('select', 'select_option', { option }, { entity_id: entityId });
    await waitForState(getHass, entityId, option, timeoutMs, pollMs, sleep);
  } catch (error) {
    if (error instanceof JobExecutionError) throw new JobExecutionError(operation, error.message, { cause: error });
    throw new JobExecutionError(operation, error instanceof Error ? error.message : String(error), { cause: error });
  }
}

export async function executeJob({
  getHass,
  config,
  floor,
  rooms,
  draft,
  timeoutMs = 10_000,
  pollMs = 150,
  sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds)),
}: ExecuteJobOptions): Promise<string[]> {
  const initialHass = getHass();
  const vacuum = initialHass.states[config.entity];
  if (!vacuum || vacuum.state === 'unavailable') throw new JobExecutionError('preflight', `${config.entity} is unavailable`);
  if (isVacuumBusy(vacuum.state)) throw new JobExecutionError('preflight', `Vacuum is ${vacuum.state}`);
  const errorEntity = config.entities?.error ? initialHass.states[config.entities.error] : undefined;
  if (errorEntity && !['none', 'unknown', 'unavailable', ''].includes(errorEntity.state)) {
    throw new JobExecutionError('preflight', `Vacuum error: ${errorEntity.state}`);
  }

  const areaIds = [...new Set(rooms.map((room) => room.area_id).filter((value): value is string => Boolean(value)))];
  if (areaIds.length === 0) throw new JobExecutionError('preflight', 'Select at least one room mapped to a Home Assistant area');

  const mapSelect = config.entities?.map_select;
  if (config.floors.length > 1) {
    if (!mapSelect || !floor.map_select_option) throw new JobExecutionError('select_floor', 'This floor has no map selector mapping');
    await selectOption(getHass, mapSelect, floor.map_select_option, 'select_floor', timeoutMs, pollMs, sleep);
  }

  if (draft.strategy === 'smartplan') {
    const mopMode = config.entities?.mop_mode;
    if (!mopMode) throw new JobExecutionError('set_smartplan', 'SmartPlan requires a mop-mode entity');
    await selectOption(getHass, mopMode, 'smart_mode', 'set_smartplan', timeoutMs, pollMs, sleep);
  } else {
    const mopMode = config.entities?.mop_mode;
    if (draft.mop_mode) {
      if (!mopMode) throw new JobExecutionError('set_mop_mode', 'The selected profile requires a mop-mode entity');
      const currentMode = getHass().states[mopMode]?.state;
      if (currentMode === 'smart_mode' && SAFE_SMARTPLAN_EXIT_MODES.has(draft.mop_mode)) {
        await selectOption(getHass, mopMode, 'custom', 'leave_smartplan', timeoutMs, pollMs, sleep);
      }
      await selectOption(getHass, mopMode, draft.mop_mode, 'set_mop_mode', timeoutMs, pollMs, sleep);
    }

    if (draft.mop_intensity) {
      const mopIntensity = config.entities?.mop_intensity;
      if (!mopIntensity) throw new JobExecutionError('set_mop_intensity', 'The selected profile requires a mop-intensity entity');
      await selectOption(getHass, mopIntensity, draft.mop_intensity, 'set_mop_intensity', timeoutMs, pollMs, sleep);
    }

    if (draft.fan_speed) {
      const hass = getHass();
      const rawFanSpeeds = hass.states[config.entity]?.attributes.fan_speed_list;
      const fanSpeeds = Array.isArray(rawFanSpeeds) ? rawFanSpeeds.map(String) : [];
      if (!fanSpeeds.includes(draft.fan_speed)) {
        throw new JobExecutionError('set_fan_speed', `${config.entity} does not support “${draft.fan_speed}”`);
      }
      try {
        await hass.callService('vacuum', 'set_fan_speed', { fan_speed: draft.fan_speed }, { entity_id: config.entity });
      } catch (error) {
        throw new JobExecutionError('set_fan_speed', error instanceof Error ? error.message : String(error), { cause: error });
      }
    }
  }

  try {
    await getHass().callService(
      'vacuum',
      'clean_area',
      { cleaning_area_id: areaIds },
      { entity_id: config.entity },
    );
  } catch (error) {
    throw new JobExecutionError('clean_area', error instanceof Error ? error.message : String(error), { cause: error });
  }
  return areaIds;
}

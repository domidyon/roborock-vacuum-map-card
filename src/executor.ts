import { isVacuumBusy } from './capabilities';
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
  if (!entity || entity.state === 'unavailable') throw new JobExecutionError(operation, `${entityId} is unavailable`);
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

async function setLegacyVacuumMode(hass: HomeAssistant, config: RoborockVacuumMapCardConfig): Promise<void> {
  const mode: Record<string, number> = {
    fan_power: 102,
    water_box_mode: 200,
  };
  if (config.entities?.mop_mode) mode.mop_mode = 300;
  try {
    await hass.callService(
      'vacuum',
      'send_command',
      { command: 'set_clean_motor_mode', params: [mode] },
      { entity_id: config.entity },
    );
  } catch (error) {
    throw new JobExecutionError('set_cleaning_mode', error instanceof Error ? error.message : String(error), { cause: error });
  }
}

async function sendCommand(
  hass: HomeAssistant,
  config: RoborockVacuumMapCardConfig,
  command: string,
  params: unknown,
  operation: string,
): Promise<void> {
  try {
    await hass.callService('vacuum', 'send_command', { command, params }, { entity_id: config.entity });
  } catch (error) {
    throw new JobExecutionError(operation, error instanceof Error ? error.message : String(error), { cause: error });
  }
}

async function setRepeat(hass: HomeAssistant, config: RoborockVacuumMapCardConfig, repeat: 1 | 2): Promise<void> {
  // Newer Roborock models reject [] and [{ repeat }]. The command specifically
  // expects a JSON object, even though most Roborock commands use an array.
  await sendCommand(hass, config, 'set_clean_repeat_times', { repeat }, 'set_cleaning_count');
}

async function setSmartPlan(hass: HomeAssistant, config: RoborockVacuumMapCardConfig): Promise<void> {
  await sendCommand(
    hass,
    config,
    'set_clean_motor_mode',
    [{ fan_power: 110, water_box_mode: 209, mop_mode: 306 }],
    'set_smartplan',
  );
}

function requireFanSpeed(hass: HomeAssistant, entityId: string, fanSpeed: string): void {
  const rawFanSpeeds = hass.states[entityId]?.attributes.fan_speed_list;
  const fanSpeeds = Array.isArray(rawFanSpeeds) ? rawFanSpeeds.map(String) : [];
  if (!fanSpeeds.includes(fanSpeed)) {
    throw new JobExecutionError('set_fan_speed', `${entityId} does not support “${fanSpeed}”`);
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
  const ensureFloorSelected = async (): Promise<void> => {
    if (config.floors.length <= 1) return;
    if (!mapSelect || !floor.map_select_option) throw new JobExecutionError('select_floor', 'This floor has no map selector mapping');
    await selectOption(getHass, mapSelect, floor.map_select_option, 'select_floor', timeoutMs, pollMs, sleep);
    if (pollMs > 0) await sleep(pollMs);
    if (getHass().states[mapSelect]?.state !== floor.map_select_option) {
      throw new JobExecutionError('select_floor', `${mapSelect} did not stay on “${floor.map_select_option}”`);
    }
  };

  await ensureFloorSelected();

  if (draft.cleaning_type === 'vacuum_then_mop' && draft.strategy !== 'smartplan') {
    const routine = floor.vacuum_then_mop_routine;
    if (routine) {
      const routineState = getHass().states[routine];
      if (!routineState || routineState.state === 'unavailable') {
        throw new JobExecutionError('start_vacuum_then_mop', `${routine} is unavailable`);
      }
      try {
        await getHass().callService('button', 'press', {}, { entity_id: routine });
      } catch (error) {
        throw new JobExecutionError('start_vacuum_then_mop', error instanceof Error ? error.message : String(error), { cause: error });
      }
      return floor.rooms
        .filter((room) => room.include_in_floor_clean !== false)
        .map((room) => room.area_id)
        .filter((areaId): areaId is string => Boolean(areaId));
    }
    const script = config.entities?.vacuum_then_mop_script;
    const scriptState = script ? getHass().states[script] : undefined;
    if (!script || !scriptState || scriptState.state === 'unavailable') {
      throw new JobExecutionError('start_vacuum_then_mop', 'Vac followed by Mop requires an available orchestration script');
    }
    const cleaningMode = config.entities?.cleaning_mode;
    if (!cleaningMode) {
      throw new JobExecutionError('set_cleaning_mode', 'Vac followed by Mop requires a cleaning-mode entity');
    }
    requireOption(getHass(), cleaningMode, 'vacuum', 'set_cleaning_mode');
    requireOption(getHass(), cleaningMode, 'mop', 'set_cleaning_mode');
    if (draft.mop_mode) {
      const mopMode = config.entities?.mop_mode;
      if (!mopMode) throw new JobExecutionError('set_mop_mode', 'The selected profile requires a mop-mode entity');
      requireOption(getHass(), mopMode, draft.mop_mode, 'set_mop_mode');
    }
    if (draft.mop_intensity) {
      const mopIntensity = config.entities?.mop_intensity;
      if (!mopIntensity) throw new JobExecutionError('set_mop_intensity', 'The selected profile requires a mop-intensity entity');
      requireOption(getHass(), mopIntensity, draft.mop_intensity, 'set_mop_intensity');
    }
    if (draft.fan_speed) requireFanSpeed(getHass(), config.entity, draft.fan_speed);
    await ensureFloorSelected();
    try {
      await getHass().callService(
        'script',
        'turn_on',
        {
          variables: {
            cleaning_area_id: areaIds,
            fan_speed: draft.fan_speed,
            mop_mode: draft.mop_mode,
            mop_intensity: draft.mop_intensity,
          },
        },
        { entity_id: script },
      );
    } catch (error) {
      throw new JobExecutionError('start_vacuum_then_mop', error instanceof Error ? error.message : String(error), { cause: error });
    }
    return areaIds;
  }

  if (draft.strategy === 'smartplan') {
    // SmartPlan is one atomic Roborock mode. Setting only mop_mode=smart_mode
    // leaves suction and water in their previous manual states.
    await setSmartPlan(getHass(), config);
    await setRepeat(getHass(), config, 1);
  } else {
    const cleaningMode = config.entities?.cleaning_mode;
    const targetCleaningMode = draft.cleaning_type === 'vacuum' ? 'vacuum' : 'vac_and_mop';
    const cleaningModeOptions = cleaningMode && getHass().states[cleaningMode]?.attributes.options;
    if (cleaningMode && Array.isArray(cleaningModeOptions) && cleaningModeOptions.map(String).includes(targetCleaningMode)) {
      await selectOption(getHass, cleaningMode, targetCleaningMode, 'set_cleaning_mode', timeoutMs, pollMs, sleep);
    } else if (draft.cleaning_type === 'vacuum' && config.vacuum_mode_fallback === 'set_clean_motor_mode') {
      await setLegacyVacuumMode(getHass(), config);
    } else if (draft.cleaning_type === 'vacuum') {
      throw new JobExecutionError('set_cleaning_mode', 'Vacuum-only requires a cleaning-mode entity');
    }

    const mopMode = config.entities?.mop_mode;
    if (draft.cleaning_type !== 'vacuum' && draft.mop_mode) {
      if (!mopMode) throw new JobExecutionError('set_mop_mode', 'The selected profile requires a mop-mode entity');
      const currentMode = getHass().states[mopMode]?.state;
      if (currentMode === 'smart_mode' && SAFE_SMARTPLAN_EXIT_MODES.has(draft.mop_mode)) {
        await selectOption(getHass, mopMode, 'custom', 'leave_smartplan', timeoutMs, pollMs, sleep);
      }
      await selectOption(getHass, mopMode, draft.mop_mode, 'set_mop_mode', timeoutMs, pollMs, sleep);
    }

    if (draft.cleaning_type !== 'vacuum' && draft.mop_intensity) {
      const mopIntensity = config.entities?.mop_intensity;
      if (!mopIntensity) throw new JobExecutionError('set_mop_intensity', 'The selected profile requires a mop-intensity entity');
      await selectOption(getHass, mopIntensity, draft.mop_intensity, 'set_mop_intensity', timeoutMs, pollMs, sleep);
    }

    if (draft.fan_speed) {
      const hass = getHass();
      requireFanSpeed(hass, config.entity, draft.fan_speed);
      try {
        await hass.callService('vacuum', 'set_fan_speed', { fan_speed: draft.fan_speed }, { entity_id: config.entity });
      } catch (error) {
        throw new JobExecutionError('set_fan_speed', error instanceof Error ? error.message : String(error), { cause: error });
      }
    }

    await setRepeat(getHass(), config, draft.cleaning_count);
  }

  // Roborock's map can change while cleaning settings are applied. In manual
  // multi-map mode, make the chosen floor authoritative at the last possible
  // moment and refuse to clean if the selection does not remain stable.
  await ensureFloorSelected();

  const selectedRoomIds = new Set(rooms.map((room) => room.segment_id));
  const entireFloorSelected = rooms.length === floor.rooms.length
    && floor.rooms.every((room) => selectedRoomIds.has(room.segment_id));

  try {
    if (entireFloorSelected) {
      await getHass().callService('vacuum', 'start', undefined, { entity_id: config.entity });
    } else {
      await getHass().callService(
        'vacuum',
        'clean_area',
        { cleaning_area_id: areaIds },
        { entity_id: config.entity },
      );
    }
  } catch (error) {
    throw new JobExecutionError(entireFloorSelected ? 'start_floor' : 'clean_area', error instanceof Error ? error.message : String(error), { cause: error });
  }
  return areaIds;
}

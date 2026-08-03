import type {
  AssistedCarryJob,
  AssistedCarryStage,
  FloorConfig,
  HomeAssistant,
  JobDraft,
  RoborockVacuumMapCardConfig,
} from './types';

const STAGES = new Set<AssistedCarryStage>([
  'idle',
  'preparing',
  'carry_upstairs',
  'cleaning_upstairs',
  'carry_downstairs',
  'finishing',
  'complete',
  'error',
]);

export class AssistedCarryError extends Error {
  constructor(
    public readonly operation: string,
    message: string,
    options?: ErrorOptions,
  ) {
    super(message, options);
    this.name = 'AssistedCarryError';
  }
}

export function assistedFloor(config: RoborockVacuumMapCardConfig): FloorConfig | undefined {
  return config.floors.find((floor) => floor.assisted_carry);
}

export function assistedStage(hass: HomeAssistant, config: RoborockVacuumMapCardConfig): AssistedCarryStage {
  const entityId = config.entities?.assisted_carry_stage;
  const state = entityId ? hass.states[entityId]?.state : undefined;
  return state && STAGES.has(state as AssistedCarryStage) ? state as AssistedCarryStage : 'idle';
}

export function createAssistedJob(segmentIds: number[], draft: JobDraft): AssistedCarryJob {
  const nativeRoutine = draft.cleaning_type === 'vacuum_then_mop';
  if (draft.strategy !== 'smartplan' && !nativeRoutine && !draft.fan_speed) {
    throw new AssistedCarryError('prepare', 'Suction is required');
  }
  if (draft.strategy !== 'smartplan' && !nativeRoutine && draft.cleaning_type !== 'vacuum' && (!draft.mop_mode || !draft.mop_intensity)) {
    throw new AssistedCarryError('prepare', 'Water flow and route are required');
  }
  return {
    segment_ids: [...new Set(segmentIds)],
    strategy: draft.strategy,
    cleaning_type: draft.cleaning_type,
    fan_speed: draft.strategy === 'smartplan' || nativeRoutine ? undefined : draft.fan_speed,
    mop_mode: draft.strategy === 'smartplan' || draft.cleaning_type === 'vacuum' || nativeRoutine ? undefined : draft.mop_mode,
    mop_intensity: draft.strategy === 'smartplan' || draft.cleaning_type === 'vacuum' || nativeRoutine ? undefined : draft.mop_intensity,
    cleaning_count: draft.strategy === 'smartplan' || draft.cleaning_type === 'vacuum_then_mop' ? 1 : draft.cleaning_count,
  };
}

export function encodeAssistedJob(job: AssistedCarryJob): string {
  return JSON.stringify({
    s: job.segment_ids,
    g: job.strategy,
    t: job.cleaning_type,
    f: job.fan_speed,
    m: job.mop_mode,
    w: job.mop_intensity,
    c: job.cleaning_count,
  });
}

export function decodeAssistedJob(value: string | undefined): AssistedCarryJob | undefined {
  if (!value || ['unknown', 'unavailable'].includes(value)) return undefined;
  try {
    const raw = JSON.parse(value) as Record<string, unknown>;
    if (!Array.isArray(raw.s) || !raw.s.every((item) => Number.isInteger(item))) return undefined;
    if (![1, 2].includes(Number(raw.c))) return undefined;
    const strategy = raw.g === undefined ? 'custom' : raw.g;
    const cleaningType = raw.t === undefined ? 'vacuum_and_mop' : raw.t;
    if (!['custom', 'smartplan'].includes(String(strategy))) return undefined;
    if (!['vacuum', 'vacuum_and_mop', 'vacuum_then_mop'].includes(String(cleaningType))) return undefined;
    const fanSpeed = typeof raw.f === 'string' ? raw.f : undefined;
    const mopMode = typeof raw.m === 'string' ? raw.m : undefined;
    const mopIntensity = typeof raw.w === 'string' ? raw.w : undefined;
    const nativeRoutine = cleaningType === 'vacuum_then_mop';
    if (strategy === 'custom' && !nativeRoutine && !fanSpeed) return undefined;
    if (strategy === 'custom' && !nativeRoutine && cleaningType !== 'vacuum' && (!mopMode || !mopIntensity)) return undefined;
    return {
      segment_ids: raw.s as number[],
      strategy: strategy as AssistedCarryJob['strategy'],
      cleaning_type: cleaningType as AssistedCarryJob['cleaning_type'],
      fan_speed: fanSpeed,
      mop_mode: mopMode,
      mop_intensity: mopIntensity,
      cleaning_count: Number(raw.c) as 1 | 2,
    };
  } catch {
    return undefined;
  }
}

function requireEntity(hass: HomeAssistant, entityId: string | undefined, operation: string): string {
  if (!entityId || !hass.states[entityId] || hass.states[entityId].state === 'unavailable') {
    throw new AssistedCarryError(operation, `${entityId ?? 'entity'} is unavailable`);
  }
  return entityId;
}

export async function setAssistedStage(
  hass: HomeAssistant,
  config: RoborockVacuumMapCardConfig,
  stage: AssistedCarryStage,
): Promise<void> {
  const entityId = requireEntity(hass, config.entities?.assisted_carry_stage, 'set_stage');
  await hass.callService('input_select', 'select_option', { option: stage }, { entity_id: entityId });
}

export async function prepareAssistedCarry(
  hass: HomeAssistant,
  config: RoborockVacuumMapCardConfig,
  job: AssistedCarryJob,
): Promise<void> {
  const jobEntity = requireEntity(hass, config.entities?.assisted_carry_job, 'save_job');
  const script = requireEntity(hass, config.entities?.assisted_carry_prepare_script, 'prepare');
  await hass.callService('input_text', 'set_value', { value: encodeAssistedJob(job) }, { entity_id: jobEntity });
  await setAssistedStage(hass, config, 'preparing');
  await hass.callService('script', 'turn_on', {}, { entity_id: script });
}

export async function startAssistedCarry(
  hass: HomeAssistant,
  config: RoborockVacuumMapCardConfig,
  floor: FloorConfig,
  job: AssistedCarryJob,
): Promise<void> {
  const script = requireEntity(hass, config.entities?.assisted_carry_start_script, 'start_upstairs');
  const areaIds = floor.rooms
    .filter((room) => job.segment_ids.includes(room.segment_id))
    .map((room) => room.area_id)
    .filter((areaId): areaId is string => Boolean(areaId));
  if (areaIds.length === 0) throw new AssistedCarryError('start_upstairs', 'No mapped rooms were saved');
  const variables: Record<string, unknown> = {
    cleaning_area_id: areaIds,
    strategy: job.strategy,
    cleaning_type: job.cleaning_type,
    cleaning_count: job.cleaning_count,
  };
  if (job.fan_speed) variables.fan_speed = job.fan_speed;
  if (job.mop_mode) variables.mop_mode = job.mop_mode;
  if (job.mop_intensity) variables.mop_intensity = job.mop_intensity;
  await hass.callService('script', 'turn_on', {
    variables,
  }, { entity_id: script });
}

export async function finishAssistedCarry(hass: HomeAssistant, config: RoborockVacuumMapCardConfig): Promise<void> {
  const script = requireEntity(hass, config.entities?.assisted_carry_finish_script, 'finish');
  await hass.callService('script', 'turn_on', {}, { entity_id: script });
}

export async function resetAssistedCarry(hass: HomeAssistant, config: RoborockVacuumMapCardConfig): Promise<void> {
  await setAssistedStage(hass, config, 'idle');
  const jobEntity = requireEntity(hass, config.entities?.assisted_carry_job, 'reset');
  await hass.callService('input_text', 'set_value', { value: '' }, { entity_id: jobEntity });
}

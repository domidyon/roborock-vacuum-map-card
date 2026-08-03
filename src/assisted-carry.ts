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
  if (draft.strategy !== 'custom' || draft.cleaning_type !== 'vacuum_and_mop') {
    throw new AssistedCarryError('prepare', 'Assisted carry requires Vac & Mop');
  }
  if (!draft.fan_speed || !draft.mop_mode || !draft.mop_intensity) {
    throw new AssistedCarryError('prepare', 'Suction, water flow, and route are required');
  }
  return {
    segment_ids: [...new Set(segmentIds)],
    fan_speed: draft.fan_speed,
    mop_mode: draft.mop_mode,
    mop_intensity: draft.mop_intensity,
    cleaning_count: draft.cleaning_count,
  };
}

export function encodeAssistedJob(job: AssistedCarryJob): string {
  return JSON.stringify({
    s: job.segment_ids,
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
    if (![raw.f, raw.m, raw.w].every((item) => typeof item === 'string')) return undefined;
    if (![1, 2].includes(Number(raw.c))) return undefined;
    return {
      segment_ids: raw.s as number[],
      fan_speed: String(raw.f),
      mop_mode: String(raw.m),
      mop_intensity: String(raw.w),
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
  await hass.callService('script', 'turn_on', {
    variables: {
      cleaning_area_id: areaIds,
      fan_speed: job.fan_speed,
      mop_mode: job.mop_mode,
      mop_intensity: job.mop_intensity,
      cleaning_count: job.cleaning_count,
    },
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

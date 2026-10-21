import { setAssistedStage } from '../../assisted-carry';
import { ZONE_CLEANING_TYPES } from '../../executor';
import { roomUsable } from '../../health';
import type { AvailablePreset } from '../../presets';
import type { AssistedCarryStage, FloorConfig, HomeAssistant, PresetConfig, RoborockVacuumMapCardConfig } from '../../types';

/** Rooms that make up "Entire floor": included and with an area that still exists. */
export function entireFloorSegments(hass: HomeAssistant, floor: FloorConfig): number[] {
  return floor.rooms
    .filter((room) => room.include_in_floor_clean !== false && roomUsable(hass, room))
    .map((room) => room.segment_id);
}

const available = (presets: AvailablePreset[], id: string) => presets.find(({ preset, available: ok }) => preset.id === id && ok)?.preset;

/** Assisted carry starts from the default mode, else Vacuum only, else anything available. */
export function assistedPreset(presets: AvailablePreset[], defaultPreset?: string): PresetConfig | undefined {
  return (defaultPreset ? available(presets, defaultPreset) : undefined)
    ?? available(presets, 'vacuum_only')
    ?? presets.find(({ available: ok }) => ok)?.preset;
}

/** Zones only run custom Vacuum / Mop / Vac & Mop jobs. */
export function zonePreset(presets: AvailablePreset[]): PresetConfig | undefined {
  return available(presets, 'vacuum_only')
    ?? available(presets, 'vacuum_and_mop')
    ?? presets.find(({ preset, available: ok }) => ok && preset.strategy === 'custom' && ZONE_CLEANING_TYPES.has(preset.cleaning_type ?? 'vacuum'))?.preset;
}

export type TransportService = 'pause' | 'start' | 'stop' | 'return_to_base';

/**
 * Pause, resume, stop and dock. Stop and Dock first cancel a running Vac followed by Mop
 * script and an active assisted start script, so a later phase can't start by itself.
 */
export async function runTransport(
  hass: HomeAssistant,
  config: RoborockVacuumMapCardConfig,
  service: TransportService,
  assisted: { active: boolean; stage?: AssistedCarryStage },
): Promise<void> {
  const running = (entityId?: string): entityId is string => Boolean(entityId && hass.states[entityId] && hass.states[entityId].state !== 'unavailable');
  if (service === 'stop' || service === 'return_to_base') {
    const script = config.entities?.vacuum_then_mop_script;
    if (running(script)) await hass.callService('script', 'turn_off', {}, { entity_id: script });
    const carryScript = config.entities?.assisted_carry_start_script;
    if (assisted.active && running(carryScript)) await hass.callService('script', 'turn_off', {}, { entity_id: carryScript });
  }
  await hass.callService('vacuum', service, {}, { entity_id: config.entity });
  if (service === 'stop' && assisted.stage === 'cleaning_upstairs') await setAssistedStage(hass, config, 'carry_downstairs');
}

import { parseCalibrationPoints } from './map';
import type { HomeAssistant, RoborockVacuumMapCardConfig, RoomConfig } from './types';

export type HealthIssue =
  | { code: 'area_missing'; floor_id: string; segment_id: number; room: string; area_id: string }
  | { code: 'entity_missing'; key: string; entity_id: string }
  | { code: 'map_option_missing'; floor_id: string; option: string }
  | { code: 'map_uncalibrated'; floor_id: string; entity_id: string };

/**
 * A room's area no longer exists. Only decided when Home Assistant provides its area
 * registry; otherwise the room is assumed fine.
 */
export function areaMissing(hass: HomeAssistant, room: Pick<RoomConfig, 'area_id'>): boolean {
  return Boolean(room.area_id && hass.areas && !hass.areas[room.area_id]);
}

/** A room can be cleaned by area: it has an area and that area still exists. */
export function roomUsable(hass: HomeAssistant, room: Pick<RoomConfig, 'area_id'>): boolean {
  return Boolean(room.area_id) && !areaMissing(hass, room);
}

/**
 * Config drift that degrades the card without making it unusable: renamed areas, deleted
 * entities, renamed maps, lost calibration. The card shows these as a dismissible notice.
 */
export function configHealth(hass: HomeAssistant, config: RoborockVacuumMapCardConfig): HealthIssue[] {
  const issues: HealthIssue[] = [];
  const exists = (entityId: string) => Boolean(hass.states[entityId]);

  if (!exists(config.entity)) issues.push({ code: 'entity_missing', key: 'entity', entity_id: config.entity });
  for (const [key, entityId] of Object.entries(config.entities ?? {})) {
    if (typeof entityId === 'string' && !exists(entityId)) issues.push({ code: 'entity_missing', key: `entities.${key}`, entity_id: entityId });
  }
  for (const consumable of config.consumables ?? []) {
    if (!exists(consumable.sensor)) issues.push({ code: 'entity_missing', key: `consumables.${consumable.kind}`, entity_id: consumable.sensor });
  }

  const mapSelect = config.entities?.map_select ? hass.states[config.entities.map_select] : undefined;
  const mapOptions = Array.isArray(mapSelect?.attributes.options) ? mapSelect.attributes.options.map(String) : undefined;
  for (const floor of config.floors) {
    if (!exists(floor.map_entity)) {
      issues.push({ code: 'entity_missing', key: `floors.${floor.id}.map_entity`, entity_id: floor.map_entity });
    } else if (parseCalibrationPoints(hass.states[floor.map_entity]).length < 3) {
      issues.push({ code: 'map_uncalibrated', floor_id: floor.id, entity_id: floor.map_entity });
    }
    if (floor.vacuum_then_mop_routine && !exists(floor.vacuum_then_mop_routine)) {
      issues.push({ code: 'entity_missing', key: `floors.${floor.id}.vacuum_then_mop_routine`, entity_id: floor.vacuum_then_mop_routine });
    }
    if (floor.map_select_option && mapOptions && !mapOptions.includes(floor.map_select_option)) {
      issues.push({ code: 'map_option_missing', floor_id: floor.id, option: floor.map_select_option });
    }
    for (const room of floor.rooms) {
      if (room.area_id && areaMissing(hass, room)) {
        issues.push({ code: 'area_missing', floor_id: floor.id, segment_id: room.segment_id, room: room.name, area_id: room.area_id });
      }
    }
  }
  return issues;
}

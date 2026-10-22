import { areaMissing } from '../health';
import type { EditorKey } from '../i18n/editor';
import type { ConsumableConfig, FloorConfig, HomeAssistant, RoborockEntityConfig, RoborockVacuumMapCardConfig, RoomConfig } from '../types';
import type { DiscoveryResult } from '.';
import { normalizeName } from './maps';

type FactKey = 'enable_mop_only' | 'mop_routes' | 'cleaning_count_command' | 'enable_smartplan';

export type ConfigChange =
  | { id: string; kind: 'entity'; key: keyof RoborockEntityConfig; from?: string; to: string }
  | { id: string; kind: 'floor_added'; floor: FloorConfig }
  | { id: string; kind: 'floor_map'; floor_id: string; from: string; to: string }
  | { id: string; kind: 'floor_option'; floor_id: string; from?: string; to: string }
  | { id: string; kind: 'room_area'; floor_id: string; segment_id: number; room: string; from?: string; to: string }
  | { id: string; kind: 'room_added'; floor_id: string; room: RoomConfig }
  | { id: string; kind: 'consumables'; to: ConsumableConfig[] }
  | { id: string; kind: 'model_fact'; key: FactKey; to: unknown }
  | { id: string; kind: 'config_version'; to: number };

const FACT_SOURCES: Record<FactKey, string> = {
  enable_mop_only: 'mop_only',
  mop_routes: 'mop_routes',
  cleaning_count_command: 'repeat',
  enable_smartplan: 'smartplan',
};

/** Pairs a configured floor with its detected counterpart: same map image, map option, or name. */
export function matchFloor(floor: FloorConfig, detected: FloorConfig[]): FloorConfig | undefined {
  return detected.find((candidate) => candidate.map_entity === floor.map_entity)
    ?? detected.find((candidate) => floor.map_select_option && normalizeName(candidate.map_select_option ?? '') === normalizeName(floor.map_select_option))
    ?? detected.find((candidate) => normalizeName(candidate.name) === normalizeName(floor.name));
}

/**
 * What a fresh discovery would add or fix in the current config. It never replaces a
 * working choice: names, icons, existing entities and valid areas are left alone; only
 * missing or broken values are offered, each as a separate change the user can accept.
 */
export function diffConfig(hass: HomeAssistant, current: RoborockVacuumMapCardConfig, detected: DiscoveryResult): ConfigChange[] {
  const changes: ConfigChange[] = [];
  const exists = (entityId?: string) => Boolean(entityId && hass.states[entityId]);

  for (const [key, to] of Object.entries(detected.config.entities ?? {}) as Array<[keyof RoborockEntityConfig, string | undefined]>) {
    const from = current.entities?.[key];
    if (to && from !== to && !exists(from)) changes.push({ id: `entity:${key}`, kind: 'entity', key, from, to });
  }

  const matched = new Set<FloorConfig>();
  for (const floor of current.floors) {
    const twin = matchFloor(floor, detected.config.floors);
    if (!twin) continue;
    matched.add(twin);
    if (twin.map_entity !== floor.map_entity && !exists(floor.map_entity)) {
      changes.push({ id: `floor_map:${floor.id}`, kind: 'floor_map', floor_id: floor.id, from: floor.map_entity, to: twin.map_entity });
    }
    const mapOptions = current.entities?.map_select ? hass.states[current.entities.map_select]?.attributes.options : undefined;
    const optionValid = floor.map_select_option && Array.isArray(mapOptions) && mapOptions.includes(floor.map_select_option);
    if (twin.map_select_option && twin.map_select_option !== floor.map_select_option && !optionValid) {
      changes.push({ id: `floor_option:${floor.id}`, kind: 'floor_option', floor_id: floor.id, from: floor.map_select_option, to: twin.map_select_option });
    }
    for (const room of twin.rooms) {
      const existing = floor.rooms.find((candidate) => candidate.segment_id === room.segment_id);
      if (!existing) {
        changes.push({ id: `room_added:${floor.id}:${room.segment_id}`, kind: 'room_added', floor_id: floor.id, room });
      } else if (room.area_id && room.area_id !== existing.area_id && (!existing.area_id || areaMissing(hass, existing))) {
        changes.push({ id: `room_area:${floor.id}:${room.segment_id}`, kind: 'room_area', floor_id: floor.id, segment_id: room.segment_id, room: existing.name, from: existing.area_id, to: room.area_id });
      }
    }
  }
  for (const floor of detected.config.floors) {
    if (!matched.has(floor)) changes.push({ id: `floor_added:${floor.id}`, kind: 'floor_added', floor });
  }

  if (!current.consumables?.length && detected.config.consumables?.length) {
    changes.push({ id: 'consumables', kind: 'consumables', to: detected.config.consumables });
  }
  // Facts the card derives at runtime anyway are not offered; facts read from the robot are.
  for (const [key, source] of Object.entries(FACT_SOURCES) as Array<[FactKey, string]>) {
    const to = detected.config[key];
    if (to !== undefined && current[key] === undefined && detected.report.fact_sources[source] === 'device') {
      changes.push({ id: `fact:${key}`, kind: 'model_fact', key, to });
    }
  }
  if (detected.config.config_version && current.config_version === undefined) {
    changes.push({ id: 'config_version', kind: 'config_version', to: detected.config.config_version as number });
  }
  return changes;
}

/** Applies the accepted changes to a copy of the config. */
export function applyChanges(current: RoborockVacuumMapCardConfig, changes: ConfigChange[]): RoborockVacuumMapCardConfig {
  const config = structuredClone(current);
  const floor = (id: string) => config.floors.find((candidate) => candidate.id === id);
  for (const change of changes) {
    switch (change.kind) {
      case 'entity': config.entities = { ...config.entities, [change.key]: change.to }; break;
      case 'floor_added': config.floors.push(structuredClone(change.floor)); break;
      case 'floor_map': { const target = floor(change.floor_id); if (target) target.map_entity = change.to; break; }
      case 'floor_option': { const target = floor(change.floor_id); if (target) target.map_select_option = change.to; break; }
      case 'room_area': {
        const room = floor(change.floor_id)?.rooms.find((candidate) => candidate.segment_id === change.segment_id);
        if (room) room.area_id = change.to;
        break;
      }
      case 'room_added': {
        const target = floor(change.floor_id);
        if (target) target.rooms = [...target.rooms, structuredClone(change.room)].sort((a, b) => a.segment_id - b.segment_id);
        break;
      }
      case 'consumables': config.consumables = structuredClone(change.to); break;
      case 'model_fact': (config as Record<string, unknown>)[change.key] = structuredClone(change.to); break;
      case 'config_version': config.config_version = change.to; break;
    }
  }
  return config;
}

/** One-line description for the editor's Re-detect list. */
export function describeChange(change: ConfigChange, t: (key: EditorKey, values?: Record<string, string | number>) => string): string {
  const none = t('none');
  switch (change.kind) {
    case 'entity': {
      const label = t(`entity_${change.key}` as EditorKey);
      return change.from ? t('change_entity_replace', { label, from: change.from, to: change.to }) : t('change_entity_add', { label, to: change.to });
    }
    case 'floor_added': return t('change_floor_added', { name: change.floor.name, n: change.floor.rooms.length });
    case 'floor_map': return t('change_floor_map', { floor: change.floor_id, from: change.from, to: change.to });
    case 'floor_option': return t('change_floor_option', { floor: change.floor_id, from: change.from ?? none, to: change.to });
    case 'room_area': return t('change_room_area', { room: change.room, from: change.from ?? none, to: change.to });
    case 'room_added': return t(change.room.area_id ? 'change_room_added' : 'change_room_added_unmapped', { room: change.room.name, floor: change.floor_id });
    case 'consumables': return t('change_consumables', { n: change.to.length });
    case 'model_fact': return t('change_model_fact', { key: change.key });
    case 'config_version': return t('change_config_version', { n: change.to });
  }
}

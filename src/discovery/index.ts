import type { FloorConfig, HomeAssistant, Language, RoborockEntityConfig, RoborockVacuumMapCardConfig, RoomConfig } from '../types';
import { entitiesOfDevices, findCandidate, listRoutines, resolveRoborockDevices, type RoborockDevices } from './devices';
import { ENTITY_CANDIDATES, NATIVE_DOCK_CANDIDATES } from './keys';
import {
  discoverCustomMaps,
  listSegments,
  matchArea,
  normalizeName,
  resolveMapFlags,
  roomsForMap,
  slugify,
  type CustomMap,
  type VacuumSegmentOptions,
} from './maps';

export { listRoborockVacuums, resolveRoborockDevices } from './devices';
export { discoverCustomMaps, type CustomMap, type VacuumSegmentOptions } from './maps';

export type DiscoveryIssue =
  | { code: 'robot_device_missing' }
  | { code: 'custom_map_missing' }
  | { code: 'map_not_calibrated'; entity_id: string }
  | { code: 'map_without_image'; map_name: string }
  | { code: 'segment_mapping_unavailable' }
  | { code: 'room_unmapped'; floor_id: string; segment_id: number; name: string }
  | { code: 'rooms_from_image'; floor_id: string };

export interface DiscoveredFloor {
  floor_id: string;
  map_entity: string;
  map_name: string;
  routine?: string;
}

export interface DiscoveryReport {
  vacuum: string;
  model?: string;
  devices: RoborockDevices;
  entities: Partial<RoborockEntityConfig>;
  floors: DiscoveredFloor[];
  routines: Array<{ entity_id: string; name: string }>;
  native_dock: Record<string, string>;
  area_source: 'mapping' | 'name';
  issues: DiscoveryIssue[];
}

export interface DiscoveryResult {
  config: RoborockVacuumMapCardConfig;
  report: DiscoveryReport;
}

const LANGUAGES: Language[] = ['en', 'nl', 'pl', 'tr'];

/**
 * Reads the vacuum's segment ↔ area mapping. It lives in the entity registry options,
 * which needs an admin connection; dashboard editors are admins. Resolves undefined
 * when unavailable.
 */
export async function loadVacuumSegmentOptions(hass: HomeAssistant, vacuum: string): Promise<VacuumSegmentOptions | undefined> {
  if (!hass.callWS) return undefined;
  try {
    const entry = await hass.callWS<{ options?: { vacuum?: VacuumSegmentOptions } }>({ type: 'config/entity_registry/get', entity_id: vacuum });
    return entry.options?.vacuum;
  } catch {
    return undefined;
  }
}

function discoverEntities(hass: HomeAssistant, devices: RoborockDevices): Partial<RoborockEntityConfig> {
  const entries = entitiesOfDevices(hass, [devices.robot?.id, devices.dock?.id]);
  const entities: Partial<RoborockEntityConfig> = {};
  for (const [key, candidates] of Object.entries(ENTITY_CANDIDATES) as Array<[keyof RoborockEntityConfig, typeof ENTITY_CANDIDATES[keyof RoborockEntityConfig]]>) {
    const match = candidates?.map((candidate) => findCandidate(hass, entries, candidate)).find(Boolean);
    if (match) entities[key] = match;
  }
  return entities;
}

function discoverNativeDock(hass: HomeAssistant, devices: RoborockDevices): Record<string, string> {
  const entries = entitiesOfDevices(hass, [devices.dock?.id]);
  return Object.fromEntries(Object.entries(NATIVE_DOCK_CANDIDATES).flatMap(([key, candidate]) => {
    const match = findCandidate(hass, entries, candidate);
    return match ? [[key, match]] : [];
  }));
}

function matchOption(name: string, options: string[]): string | undefined {
  return options.find((option) => option === name) ?? options.find((option) => normalizeName(option) === normalizeName(name));
}

/** A routine is used for Vac followed by Mop only when its name names the map and a vac+mop job. */
function routineForMap(mapName: string, routines: Array<{ entity_id: string; name: string }>): string | undefined {
  const map = normalizeName(mapName);
  return routines.find((routine) => {
    const name = normalizeName(routine.name);
    return name.includes(map) && /vac.*mop/.test(name.replace(/ /g, ''));
  })?.entity_id;
}

function uniqueId(base: string, used: Set<string>): string {
  let id = base;
  for (let index = 2; used.has(id); index += 1) id = `${base}_${index}`;
  used.add(id);
  return id;
}

/**
 * Builds a complete card config for one Roborock vacuum from the registries and live
 * states. Pure apart from reading `hass`; pass `segmentOptions` from
 * `loadVacuumSegmentOptions` to use Home Assistant's own room ↔ area mapping.
 */
export function buildConfig(hass: HomeAssistant, vacuum: string, segmentOptions?: VacuumSegmentOptions): DiscoveryResult {
  const devices = resolveRoborockDevices(hass, vacuum);
  const issues: DiscoveryIssue[] = [];
  if (!devices.robot) issues.push({ code: 'robot_device_missing' });

  const entities = discoverEntities(hass, devices);
  const mapOptions = entities.map_select ? (hass.states[entities.map_select]?.attributes.options ?? []).map(String) : [];
  const maps = discoverCustomMaps(hass, devices);
  if (devices.robot && maps.length === 0) issues.push({ code: 'custom_map_missing' });
  if (!segmentOptions?.area_mapping) issues.push({ code: 'segment_mapping_unavailable' });

  const segments = listSegments(segmentOptions);
  const flags = resolveMapFlags(segments, mapOptions);
  const flagByMap = new Map([...flags].map(([flag, name]) => [normalizeName(name), flag]));
  const routines = listRoutines(hass, devices);
  const areas = Object.values(hass.areas ?? {});

  // Floors follow the robot's map order; images without a map option go last.
  const ordered: CustomMap[] = [
    ...mapOptions.flatMap((option) => maps.filter((map) => normalizeName(map.map_name) === normalizeName(option))),
    ...maps.filter((map) => !mapOptions.some((option) => normalizeName(option) === normalizeName(map.map_name))),
  ];
  for (const option of mapOptions) {
    if (!maps.some((map) => normalizeName(map.map_name) === normalizeName(option))) issues.push({ code: 'map_without_image', map_name: option });
  }

  const usedIds = new Set<string>();
  const discoveredFloors: DiscoveredFloor[] = [];
  const floors: FloorConfig[] = ordered.map((map) => {
    if (!map.calibrated) issues.push({ code: 'map_not_calibrated', entity_id: map.entity_id });
    const id = uniqueId(slugify(map.map_name), usedIds);
    const flag = flagByMap.get(normalizeName(map.map_name));
    const found = roomsForMap(map, flag, segments);
    // Image room names are only trustworthy for the active map; ask the user to verify them.
    if (found.source === 'image') issues.push({ code: 'rooms_from_image', floor_id: id });
    const rooms: RoomConfig[] = found.rooms.map((room) => {
      const area = matchArea(room, flag, segmentOptions, areas);
      if (!area) issues.push({ code: 'room_unmapped', floor_id: id, segment_id: room.segment_id, name: room.name });
      const icon = area ? hass.areas?.[area.area_id]?.icon ?? undefined : undefined;
      return {
        segment_id: room.segment_id,
        ...(area ? { area_id: area.area_id } : {}),
        name: room.name,
        ...(icon ? { icon } : {}),
        include_in_floor_clean: Boolean(area),
      };
    });
    const routine = routineForMap(map.map_name, routines);
    const option = matchOption(map.map_name, mapOptions);
    discoveredFloors.push({ floor_id: id, map_entity: map.entity_id, map_name: map.map_name, ...(routine ? { routine } : {}) });
    return {
      id,
      name: map.map_name,
      map_entity: map.entity_id,
      ...(option ? { map_select_option: option } : {}),
      ...(routine ? { vacuum_then_mop_routine: routine } : {}),
      rooms,
    };
  });

  const localeLanguage = hass.locale?.language?.split('-')[0] as Language | undefined;
  const config: RoborockVacuumMapCardConfig = {
    type: 'custom:roborock-vacuum-map-card',
    entity: vacuum,
    ...(localeLanguage && LANGUAGES.includes(localeLanguage) && localeLanguage !== 'en' ? { language: localeLanguage } : {}),
    entities: entities as RoborockEntityConfig,
    floors,
    default_preset: 'vacuum_only',
  };

  return {
    config,
    report: {
      vacuum,
      model: devices.robot?.model_id ?? devices.robot?.model ?? undefined,
      devices,
      entities,
      floors: discoveredFloors,
      routines,
      native_dock: discoverNativeDock(hass, devices),
      area_source: segmentOptions?.area_mapping ? 'mapping' : 'name',
      issues,
    },
  };
}

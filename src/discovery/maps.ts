import { parseCalibrationPoints, parseRooms } from '../map';
import type { DiscoveredRoom, HassArea, HomeAssistant } from '../types';
import { CUSTOM_MAP_PLATFORM, entitiesOfDevices, type RoborockDevices } from './devices';

export interface CustomMap {
  entity_id: string;
  /** Roborock map name, e.g. "Beneden"; matches a `selected_map` option. */
  map_name: string;
  rooms: DiscoveredRoom[];
  calibrated: boolean;
}

/** Home Assistant's segment ↔ area mapping from the vacuum entity's registry options (HA 2026.3+). */
export interface VacuumSegmentOptions {
  area_mapping?: Record<string, string[]>;
  last_seen_segments?: Array<{ id: string; name: string; group?: string }>;
}

export interface Segment {
  map_flag: number;
  segment_id: number;
  name: string;
  group?: string;
}

const CUSTOM_SUFFIX = /_custom$/i;

export function normalizeName(value: string): string {
  return value.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

export function slugify(value: string): string {
  return normalizeName(value).replace(/ /g, '_') || 'floor';
}

/**
 * Custom map images belong to the Roborock Custom Map device registered for the robot.
 * Their registry name is "<map name>_custom".
 */
export function discoverCustomMaps(hass: HomeAssistant, devices: RoborockDevices): CustomMap[] {
  const robotName = devices.robot?.name_by_user ?? devices.robot?.name ?? '';
  return entitiesOfDevices(hass, devices.companions.map((device) => device.id))
    .filter((entry) => entry.platform === CUSTOM_MAP_PLATFORM && entry.entity_id.startsWith('image.'))
    .map((entry) => {
      const state = hass.states[entry.entity_id];
      const friendly = String(state?.attributes.friendly_name ?? '');
      const fromFriendly = robotName && friendly.startsWith(`${robotName} `) ? friendly.slice(robotName.length + 1) : friendly;
      return {
        entity_id: entry.entity_id,
        map_name: (entry.name ?? fromFriendly ?? entry.entity_id).replace(CUSTOM_SUFFIX, ''),
        rooms: parseRooms(state),
        calibrated: parseCalibrationPoints(state).length >= 3,
      };
    })
    .sort((a, b) => a.entity_id.localeCompare(b.entity_id));
}

/** Parses "<map flag>_<segment id>" keys such as "1_5". */
export function parseSegmentKey(key: string): { map_flag: number; segment_id: number } | undefined {
  const match = /^(\d+)_(\d+)$/.exec(key);
  return match ? { map_flag: Number(match[1]), segment_id: Number(match[2]) } : undefined;
}

export function listSegments(options?: VacuumSegmentOptions): Segment[] {
  return (options?.last_seen_segments ?? []).flatMap((segment) => {
    const key = parseSegmentKey(segment.id);
    return key ? [{ ...key, name: segment.name, group: segment.group || undefined }] : [];
  });
}

/**
 * Assigns each Roborock map flag to a map name. A segment's `group` names its map when
 * set. Other flags fall back to the `selected_map` option at the same index, but only
 * when every named group agrees with that ordering. Room names inside custom map images
 * are not used: Roborock Custom Map labels inactive maps with the active map's names.
 */
export function resolveMapFlags(segments: Segment[], mapOptions: string[]): Map<number, string> {
  const result = new Map<number, string>();
  const flags = [...new Set(segments.map((segment) => segment.map_flag))].sort((a, b) => a - b);
  for (const flag of flags) {
    const group = segments.find((segment) => segment.map_flag === flag && segment.group)?.group;
    if (group) result.set(flag, group);
  }
  const ordered = [...result].every(([flag, name]) => normalizeName(mapOptions[flag] ?? '') === normalizeName(name));
  if (!ordered) return result;
  for (const flag of flags) {
    if (!result.has(flag) && mapOptions[flag]) result.set(flag, mapOptions[flag]);
  }
  return result;
}

/** Rooms of one map from Home Assistant's segment list, falling back to the image's rooms. */
export function roomsForMap(map: CustomMap, flag: number | undefined, segments: Segment[]): { rooms: Array<{ segment_id: number; name: string }>; source: 'segments' | 'image' } {
  const own = flag === undefined ? [] : segments.filter((segment) => segment.map_flag === flag);
  if (own.length > 0) {
    return { rooms: own.map((segment) => ({ segment_id: segment.segment_id, name: segment.name })).sort((a, b) => a.segment_id - b.segment_id), source: 'segments' };
  }
  return { rooms: map.rooms.map((room) => ({ segment_id: room.segment_id, name: room.source_name })), source: 'image' };
}

export type AreaMatch = { area_id: string; source: 'mapping' | 'name' } | undefined;

/**
 * Picks the area for a room. When Home Assistant has a segment ↔ area mapping it is
 * authoritative: unmapped segments stay unmapped instead of being guessed by name.
 */
export function matchArea(
  room: { segment_id: number; name: string },
  mapFlag: number | undefined,
  options: VacuumSegmentOptions | undefined,
  areas: HassArea[],
): AreaMatch {
  if (options?.area_mapping) {
    if (mapFlag === undefined) return undefined;
    const key = `${mapFlag}_${room.segment_id}`;
    const area = Object.entries(options.area_mapping).find(([, segments]) => segments.includes(key))?.[0];
    return area ? { area_id: area, source: 'mapping' } : undefined;
  }
  const name = normalizeName(room.name);
  const area = areas.find((candidate) => normalizeName(candidate.name) === name);
  return area ? { area_id: area.area_id, source: 'name' } : undefined;
}

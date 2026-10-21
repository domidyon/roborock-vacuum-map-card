import type { HassDevice, HassEntityRegistryDisplayEntry, HomeAssistant } from '../types';
import type { EntityCandidate } from './keys';

export const ROBOROCK_PLATFORM = 'roborock';
export const CUSTOM_MAP_PLATFORM = 'roborock_custom_map';

export interface RoborockDevices {
  vacuum: string;
  robot?: HassDevice;
  dock?: HassDevice;
  /** Devices of other integrations (Roborock Custom Map) registered for the same robot. */
  companions: HassDevice[];
}

function domainOf(entityId: string): string {
  return entityId.split('.')[0];
}

function robotIdentifiers(device: HassDevice): Set<string> {
  return new Set((device.identifiers ?? []).map(([, id]) => id));
}

/** Roborock vacuums, using the entity registry when the frontend provides it. */
export function listRoborockVacuums(hass: HomeAssistant): string[] {
  if (hass.entities) {
    return Object.values(hass.entities)
      .filter((entry) => entry.platform === ROBOROCK_PLATFORM && !entry.hidden && domainOf(entry.entity_id) === 'vacuum')
      .map((entry) => entry.entity_id)
      .sort();
  }
  return Object.keys(hass.states).filter((id) => domainOf(id) === 'vacuum').sort();
}

/**
 * Finds the robot device, its dock and companion devices. The dock is a separate
 * "<robot> Dock" device without `via_device`; it is matched by its `<duid>_dock`
 * identifier, then by name and model (heuristic adapted from juju35/ha-roborock-card,
 * MIT). Roborock Custom Map registers its own device with the robot's identifier.
 */
export function resolveRoborockDevices(hass: HomeAssistant, vacuum: string): RoborockDevices {
  const deviceId = hass.entities?.[vacuum]?.device_id;
  const robot = deviceId ? hass.devices?.[deviceId] : undefined;
  if (!robot) return { vacuum, companions: [] };

  const ids = robotIdentifiers(robot);
  const others = Object.values(hass.devices ?? {}).filter((device) => device.id !== robot.id);
  const dock =
    others.find((device) => (device.identifiers ?? []).some(([, id]) => id.endsWith('_dock') && ids.has(id.slice(0, -5)))) ??
    others.find((device) => device.via_device_id === robot.id && /\sDock$/.test(device.model ?? device.name ?? '')) ??
    others.find((device) => robot.name && device.name === `${robot.name} Dock`) ??
    others.find((device) => robot.model && device.model === `${robot.model} Dock`);
  const companions = others.filter((device) => device !== dock && [...robotIdentifiers(device)].some((id) => ids.has(id)));
  return { vacuum, robot, dock, companions };
}

export function entitiesOfDevices(hass: HomeAssistant, deviceIds: Array<string | undefined>): HassEntityRegistryDisplayEntry[] {
  const wanted = new Set(deviceIds.filter(Boolean));
  return Object.values(hass.entities ?? {}).filter((entry) => !entry.hidden && entry.device_id && wanted.has(entry.device_id));
}

export function findCandidate(
  hass: HomeAssistant,
  entries: HassEntityRegistryDisplayEntry[],
  candidate: EntityCandidate,
): string | undefined {
  return entries.find((entry) => {
    if (entry.platform !== ROBOROCK_PLATFORM || domainOf(entry.entity_id) !== candidate.domain) return false;
    if (candidate.translation_key) return entry.translation_key === candidate.translation_key;
    return hass.states[entry.entity_id]?.attributes.device_class === candidate.device_class;
  })?.entity_id;
}

/** Saved Roborock app routines: robot buttons without a translation key. */
export function listRoutines(hass: HomeAssistant, devices: RoborockDevices): Array<{ entity_id: string; name: string }> {
  return entitiesOfDevices(hass, [devices.robot?.id])
    .filter((entry) => entry.platform === ROBOROCK_PLATFORM && domainOf(entry.entity_id) === 'button' && !entry.translation_key)
    .map((entry) => ({ entity_id: entry.entity_id, name: entry.name ?? String(hass.states[entry.entity_id]?.attributes.friendly_name ?? entry.entity_id) }));
}

import type { HomeAssistant, RoborockCapabilities, RoborockVacuumMapCardConfig } from './types';

const FEATURE = {
  pause: 4,
  stop: 8,
  returnHome: 16,
  start: 8192,
} as const;

function options(hass: HomeAssistant, entityId?: string): string[] {
  if (!entityId) return [];
  const entity = hass.states[entityId];
  if (!entity || entity.state === 'unavailable') return [];
  return Array.isArray(entity.attributes.options) ? entity.attributes.options.map(String) : [];
}

export function detectCapabilities(hass: HomeAssistant, config: RoborockVacuumMapCardConfig): RoborockCapabilities {
  const vacuum = hass.states[config.entity];
  const supported = Number(vacuum?.attributes.supported_features ?? 0);
  const fanSpeeds = Array.isArray(vacuum?.attributes.fan_speed_list)
    ? vacuum.attributes.fan_speed_list.map(String)
    : [];
  const mapOptions = options(hass, config.entities?.map_select);
  const cleaningModes = options(hass, config.entities?.cleaning_mode);
  const mopModes = options(hass, config.entities?.mop_mode);
  const mopIntensities = options(hass, config.entities?.mop_intensity);
  return {
    fanSpeeds,
    mapOptions,
    cleaningModes,
    mopModes,
    mopIntensities,
    canStart: Boolean(supported & FEATURE.start),
    canPause: Boolean(supported & FEATURE.pause),
    canStop: Boolean(supported & FEATURE.stop),
    canDock: Boolean(supported & FEATURE.returnHome),
    hasMapSelect: mapOptions.length > 0,
    hasCleaningMode: cleaningModes.length > 0,
    hasMopMode: mopModes.length > 0,
    hasMopIntensity: mopIntensities.length > 0,
  };
}

export function entityAvailable(hass: HomeAssistant, entityId?: string): boolean {
  if (!entityId) return false;
  const state = hass.states[entityId]?.state;
  return Boolean(state && state !== 'unavailable' && state !== 'unknown');
}

export function isVacuumBusy(state?: string): boolean {
  return ['cleaning', 'paused', 'returning', 'returning_home', 'error', 'unavailable'].includes(state ?? 'unavailable');
}

export function isVacuumActive(state?: string): boolean {
  return ['cleaning', 'paused', 'returning', 'returning_home'].includes(state ?? '');
}

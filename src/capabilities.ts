import { modelFacts } from './catalog';
import { vacuumModel } from './profiles';
import type { HomeAssistant, RepeatStrategy, RoborockCapabilities, RoborockVacuumMapCardConfig } from './types';

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
  const model = vacuumModel(hass, config.entity);
  const facts = modelFacts(model);
  const profile = facts.profile;
  // Precedence for app-only facts: explicit config, then the model profile, then the
  // python-roborock catalog flags for the model, then live options (S7 detection
  // originally from PR #3).
  const liveSmartPlan = fanSpeeds.includes('smart_mode') && mopModes.includes('smart_mode');
  const liveRepeat: RepeatStrategy = liveSmartPlan || mopIntensities.some((option) => ['slight', 'moderate', 'extreme'].includes(option))
    ? 'set_clean_repeat_times'
    : 'app_segment_clean';
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
    hasSmartPlan: config.enable_smartplan ?? facts.smartplan ?? liveSmartPlan,
    roomRepeatStrategy: config.cleaning_count_command ?? facts.repeat ?? liveRepeat,
    mopRoutes: config.mop_routes ?? facts.mop_routes,
    profile: profile ? { label: profile.label, status: profile.status } : undefined,
    model,
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

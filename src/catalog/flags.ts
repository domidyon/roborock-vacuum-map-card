import type { RepeatStrategy } from '../types';

/** Snake-case python-roborock DeviceFeatures flags that are supported (true). */
export type FeatureFlags = ReadonlySet<string>;

export interface FlagCapabilities {
  repeat: RepeatStrategy;
  smartplan: boolean;
  /** App-facing mop routes, in python-roborock's order. Empty when the robot has no route setting. */
  mop_routes: string[];
  /** Native Vac followed by Mop (clean-then-mop) mode. */
  vac_then_mop: boolean;
  multi_floor: boolean;
  dock: { auto_empty: boolean; mop_wash: boolean; hot_water: boolean; mop_dry: boolean };
}

/** Same conversion as python-roborock's `_decamelize` (isCleanCountSettingSupported → is_clean_count_setting_supported). */
export function decamelize(value: string): string {
  return value
    .replace(/(?<=[a-z0-9])([A-Z])/g, '_$1')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
    .replace(/([a-zA-Z])([0-9]+)/g, '$1_$2')
    .toLowerCase();
}

/** Supported flags from a diagnostics `device_features` object (camelCase booleans). */
export function flagsFromDeviceFeatures(features: Record<string, unknown>): FeatureFlags {
  return new Set(Object.entries(features).filter(([, value]) => value === true).map(([key]) => decamelize(key)));
}

/**
 * Port of python-roborock `get_clean_routes` (roborock/data/v1/v1_clean_modes.py, v7.13.0,
 * Apache-2.0) without the internal smart_mode/custom routes. China's Deep+ (305) is
 * shown as deep_plus by Home Assistant too, so the region does not matter here.
 */
export function cleanRoutes(flags: FeatureFlags): string[] {
  const has = (flag: string) => flags.has(flag);
  if (!has('is_clean_route_setting_supported')) return [];
  if (has('is_none_pure_clean_mop_with_max_plus')) return ['fast', 'standard'];
  const routes = ['standard'];
  if (!has('is_clean_efficiency_supported')) routes.push('deep');
  if (has('is_careful_slow_mop_supported')) routes.push('deep_plus');
  if (has('is_clean_route_fast_mode_supported')) routes.push('fast');
  return routes;
}

/**
 * What the robot's own feature flags say. Mop only is deliberately not derived: robots
 * report `is_pure_clean_mop_supported` even when their app has no Mop-only mode
 * (Qrevo Curv 2 Flow).
 */
export function capabilitiesFromFlags(flags: FeatureFlags): FlagCapabilities {
  const has = (flag: string) => flags.has(flag);
  return {
    // Without the cleaning-count setting the app sends the repeat with the segments (issue #2).
    repeat: has('is_clean_count_setting_supported') ? 'set_clean_repeat_times' : 'app_segment_clean',
    smartplan: has('is_smart_clean_mode_set_supported'),
    mop_routes: cleanRoutes(flags),
    vac_then_mop: has('is_clean_then_mop_mode_supported'),
    multi_floor: has('is_multi_floor_supported'),
    dock: {
      auto_empty: has('is_dust_collection_setting_supported'),
      mop_wash: has('is_back_charge_auto_wash_supported') || has('is_wash_then_charge_cmd_supported'),
      hot_water: has('is_hot_wash_towel_supported'),
      mop_dry: has('is_supported_drying'),
    },
  };
}

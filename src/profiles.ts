import type { HomeAssistant, MopRouteMode, RepeatStrategy } from './types';

export type ProfileStatus = 'tested' | 'community' | 'experimental';

/**
 * What a Roborock model's app offers that Home Assistant's entity options cannot tell us.
 * Every field is optional: a missing field falls back to live-option detection. Explicit
 * card config always wins over a profile.
 */
export interface ModelProfile {
  /** Roborock model ids as reported in the device registry (`model_id`/`model`). */
  models: string[];
  label: string;
  status: ProfileStatus;
  /** Where the facts come from, so they can be re-checked. */
  sources: string[];
  /** The Roborock app offers a Mop-only mode. */
  mop_only?: boolean;
  /** Routes the app offers per mode; HA may list more. */
  mop_routes?: Partial<Record<MopRouteMode, string[]>>;
  /** How the cleaning count (1 or 2 passes) is applied to room jobs. */
  repeat?: RepeatStrategy;
  /** The app offers AI SmartPlan. */
  smartplan?: boolean;
  /** Dock abilities, used by the dock panel and setup assistant. */
  dock?: { auto_empty?: boolean; mop_wash?: boolean; hot_water?: boolean; mop_dry?: boolean };
  notes?: string;
}

const PYTHON_ROBOROCK = 'python-roborock SUPPORTED_FEATURES.md (v7.13.0, Apache-2.0)';

export const MODEL_PROFILES: ModelProfile[] = [
  {
    models: ['roborock.vacuum.a245'],
    label: 'Qrevo Curv 2 Flow',
    status: 'tested',
    sources: ["Maintainer's daily driver (Home Assistant 2026.10)"],
    // HA lists `mop` as a Cleaning mode, but the app has no Mop-only mode.
    mop_only: false,
    // The app's third route is Deep+; HA no longer lists plain `deep` for this model.
    mop_routes: { vacuum_and_mop: ['fast', 'standard', 'deep_plus'] },
    repeat: 'set_clean_repeat_times',
    smartplan: true,
    dock: { auto_empty: true, mop_wash: true, hot_water: true, mop_dry: true },
  },
  {
    models: ['roborock.vacuum.a144'],
    label: 'Saros 10R',
    status: 'community',
    sources: [PYTHON_ROBOROCK, 'Real-device test by @infy1995 (PR #4)'],
    mop_only: true,
    // Vac & Mop only offers Fast/Standard in the app; Mop offers all four routes.
    mop_routes: { vacuum_and_mop: ['fast', 'standard'], mop: ['fast', 'standard', 'deep', 'deep_plus'] },
    repeat: 'set_clean_repeat_times',
    smartplan: true,
    dock: { auto_empty: true, mop_wash: true, hot_water: true, mop_dry: true },
  },
  {
    models: ['roborock.vacuum.a15'],
    label: 'S7 / S7+',
    status: 'experimental',
    sources: [PYTHON_ROBOROCK, 'Issue #2 (S7+, Home Assistant core integration)'],
    notes: 'No cleaning-count setting, so two-pass room jobs use the per-segment repeat. Awaiting hardware confirmation (issue #2).',
    // is_clean_count_setting_supported and is_smart_clean_mode_set_supported are absent.
    repeat: 'app_segment_clean',
    smartplan: false,
    // The S7+ auto-empty dock is optional hardware; the S7 has no washing or drying dock.
    dock: { mop_wash: false, hot_water: false, mop_dry: false },
  },
];

/** The registry model of the vacuum's device, e.g. "roborock.vacuum.a245". */
export function vacuumModel(hass: HomeAssistant, vacuum: string): string | undefined {
  const deviceId = hass.entities?.[vacuum]?.device_id;
  const device = deviceId ? hass.devices?.[deviceId] : undefined;
  return device?.model_id ?? device?.model ?? undefined;
}

export function findProfile(model?: string): ModelProfile | undefined {
  return model ? MODEL_PROFILES.find((profile) => profile.models.includes(model)) : undefined;
}

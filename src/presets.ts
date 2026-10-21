import type { FloorConfig, JobDraft, PresetConfig, RoborockCapabilities, RoborockVacuumMapCardConfig } from './types';

export interface AvailablePreset {
  preset: PresetConfig;
  available: boolean;
  reason?: string;
}

export const BUILT_IN_PRESETS: PresetConfig[] = [
  {
    id: 'smartplan',
    name: 'SmartPlan',
    icon: 'mdi:creation',
    strategy: 'smartplan',
    cleaning_type: 'vacuum_and_mop',
    cleaning_count: 1,
  },
  {
    id: 'vacuum_then_mop',
    name: 'Vac followed by Mop',
    icon: 'mdi:vacuum-outline',
    strategy: 'custom',
    cleaning_type: 'vacuum_then_mop',
    fan_speed: 'balanced',
    mop_mode: 'standard',
    mop_intensity: 'medium',
    cleaning_count: 1,
  },
  {
    id: 'vacuum_and_mop',
    name: 'Vac & Mop',
    icon: 'mdi:water-plus',
    strategy: 'custom',
    cleaning_type: 'vacuum_and_mop',
    fan_speed: 'balanced',
    mop_mode: 'standard',
    mop_intensity: 'medium',
    cleaning_count: 1,
  },
  {
    id: 'vacuum_only',
    name: 'Vacuum only',
    icon: 'mdi:vacuum',
    strategy: 'custom',
    cleaning_type: 'vacuum',
    fan_speed: 'balanced',
    mop_mode: 'standard',
    cleaning_count: 1,
  },
  {
    id: 'mop_only',
    name: 'Mop only',
    icon: 'mdi:water',
    strategy: 'custom',
    cleaning_type: 'mop',
    mop_mode: 'standard',
    mop_intensity: 'medium',
    cleaning_count: 1,
  },
];

function missingOption(
  config: RoborockVacuumMapCardConfig,
  capabilities: RoborockCapabilities,
  preset: PresetConfig,
  floor?: FloorConfig,
): string | undefined {
  const canSetVacuumMode = capabilities.cleaningModes.includes('vacuum')
    || config.vacuum_mode_fallback === 'set_clean_motor_mode';
  if (preset.cleaning_type === 'vacuum' && !canSetVacuumMode) {
    return 'cleaning mode “vacuum”';
  }
  // HA can list "mop" on models whose app has no Mop-only mode, so it is opt-in.
  if (preset.cleaning_type === 'mop' && !config.enable_mop_only) {
    return 'Mop only (set enable_mop_only: true)';
  }
  if (preset.cleaning_type === 'mop' && !capabilities.cleaningModes.includes('mop')) {
    return 'cleaning mode “mop”';
  }
  if (preset.cleaning_type === 'vacuum_then_mop') {
    if (floor?.vacuum_then_mop_routine) return undefined;
    if (floor?.assisted_carry && config.entities?.assisted_carry_start_script) return undefined;
    if (!config.entities?.vacuum_then_mop_script) return 'Vac followed by Mop script';
    if (!capabilities.cleaningModes.includes('vacuum') || !capabilities.cleaningModes.includes('mop')) {
      return 'cleaning modes “vacuum” and “mop”';
    }
  }
  if (preset.fan_speed && !capabilities.fanSpeeds.includes(preset.fan_speed)) return `fan speed “${preset.fan_speed}”`;
  if (preset.cleaning_type !== 'vacuum' && preset.mop_mode && !capabilities.mopModes.includes(preset.mop_mode)) {
    return `mop mode “${preset.mop_mode}”`;
  }
  if (preset.cleaning_type !== 'vacuum' && preset.mop_intensity && !capabilities.mopIntensities.includes(preset.mop_intensity)) {
    return `mop intensity “${preset.mop_intensity}”`;
  }
  return undefined;
}

export function getAvailablePresets(
  config: RoborockVacuumMapCardConfig,
  capabilities: RoborockCapabilities,
  floor?: FloorConfig,
): AvailablePreset[] {
  const builtIns = config.enable_mop_only
    ? BUILT_IN_PRESETS
    : BUILT_IN_PRESETS.filter((preset) => preset.cleaning_type !== 'mop');
  return [...builtIns, ...(config.presets ?? [])].map((preset) => {
    const missing = missingOption(config, capabilities, preset, floor);
    return {
      preset,
      available: !missing,
      reason: missing ? `Unsupported ${missing}` : undefined,
    };
  });
}

export function draftFromPreset(preset: PresetConfig): JobDraft {
  return {
    preset_id: preset.id,
    strategy: preset.strategy,
    cleaning_type: preset.cleaning_type ?? 'vacuum_and_mop',
    fan_speed: preset.fan_speed,
    mop_mode: preset.mop_mode,
    mop_intensity: preset.mop_intensity,
    cleaning_count: preset.cleaning_count ?? 1,
  };
}

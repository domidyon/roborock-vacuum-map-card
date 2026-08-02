import type { JobDraft, PresetConfig, RoborockCapabilities, RoborockVacuumMapCardConfig } from './types';

export interface AvailablePreset {
  preset: PresetConfig;
  available: boolean;
  reason?: string;
}

export const BUILT_IN_PRESETS: PresetConfig[] = [
  {
    id: 'vacuum_only',
    name: 'Vacuum only',
    icon: 'mdi:vacuum',
    strategy: 'custom',
    cleaning_type: 'vacuum',
    fan_speed: 'balanced',
    mop_mode: 'custom',
    mop_intensity: 'off',
  },
  {
    id: 'vacuum_and_mop',
    name: 'Vacuum and mop',
    icon: 'mdi:water-plus',
    strategy: 'custom',
    cleaning_type: 'vacuum_and_mop',
    fan_speed: 'balanced',
    mop_mode: 'custom',
    mop_intensity: 'medium',
  },
  {
    id: 'smartplan',
    name: 'SmartPlan',
    icon: 'mdi:creation',
    strategy: 'smartplan',
    cleaning_type: 'vacuum_and_mop',
    mop_mode: 'smart_mode',
  },
];

function missingOption(capabilities: RoborockCapabilities, preset: PresetConfig): string | undefined {
  if (preset.fan_speed && !capabilities.fanSpeeds.includes(preset.fan_speed)) return `fan speed “${preset.fan_speed}”`;
  if (preset.mop_mode && !capabilities.mopModes.includes(preset.mop_mode)) return `mop mode “${preset.mop_mode}”`;
  if (preset.mop_intensity && !capabilities.mopIntensities.includes(preset.mop_intensity)) {
    return `mop intensity “${preset.mop_intensity}”`;
  }
  return undefined;
}

export function getAvailablePresets(
  config: RoborockVacuumMapCardConfig,
  capabilities: RoborockCapabilities,
): AvailablePreset[] {
  return [...BUILT_IN_PRESETS, ...(config.presets ?? [])].map((preset) => {
    const missing = missingOption(capabilities, preset);
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
  };
}

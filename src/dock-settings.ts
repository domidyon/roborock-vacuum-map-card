import type { DockSettingKey, RoborockEntityConfig } from './types';

export type DockSelectSetting = Exclude<DockSettingKey, 'auto_empty' | 'auto_dry'>;

/** Values the dock panel offers; helper options must match them exactly. */
export const DOCK_SETTING_OPTIONS: Record<DockSelectSetting, string[]> = {
  mop_wash_frequency: ['smart', '10_min', '15_min', '20_min', '25_min', '30_min'],
  wash_mode: ['smart', 'light', 'balanced', 'deep'],
  wash_temperature: ['normal', 'warm', 'hot'],
  empty_mode: ['smart', 'light', 'balanced', 'max'],
  dry_duration: ['2h', '3h', '4h'],
};

/** Shown until a helper records the last setting the device accepted. */
export const DOCK_SETTING_DEFAULTS: Record<DockSettingKey, string | boolean> = {
  mop_wash_frequency: 'smart',
  wash_mode: 'smart',
  wash_temperature: 'hot',
  auto_empty: false,
  empty_mode: 'smart',
  auto_dry: true,
  dry_duration: '3h',
};

export const DOCK_SETTING_ENTITIES: Record<DockSettingKey, keyof RoborockEntityConfig> = {
  mop_wash_frequency: 'dock_mop_wash_frequency',
  wash_mode: 'dock_wash_mode',
  wash_temperature: 'dock_wash_temperature',
  auto_empty: 'dock_auto_empty',
  empty_mode: 'dock_empty_mode',
  auto_dry: 'dock_auto_dry',
  dry_duration: 'dock_dry_duration',
};

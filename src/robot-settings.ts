import type { RoborockEntityConfig, RoborockVacuumMapCardConfig } from './types';

export type RobotSwitchKey = 'do_not_disturb' | 'off_peak_charging';
export type RobotTimeKey = 'do_not_disturb_start' | 'do_not_disturb_end' | 'off_peak_start' | 'off_peak_end';

/** Entities the robot panel can show; the panel button only appears when at least one is set. */
export const ROBOT_PANEL_KEYS: Array<keyof RoborockEntityConfig> = [
  'robot_volume',
  'do_not_disturb',
  'do_not_disturb_start',
  'do_not_disturb_end',
  'off_peak_charging',
  'off_peak_start',
  'off_peak_end',
  'total_cleaning_time',
  'total_cleaning_area',
  'total_cleaning_count',
  'last_clean_start',
];

export function hasRobotPanel(config: RoborockVacuumMapCardConfig): boolean {
  return ROBOT_PANEL_KEYS.some((key) => Boolean(config.entities?.[key]));
}

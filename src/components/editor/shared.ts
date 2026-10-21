import type { EditorKey } from '../../i18n/editor';
import type { HomeAssistant, Language, RoborockEntityConfig, RoborockVacuumMapCardConfig } from '../../types';

export type Translate = (key: EditorKey, values?: Record<string, string | number>) => string;

export interface SectionProps {
  hass: HomeAssistant;
  config: RoborockVacuumMapCardConfig;
  language: Language;
  t: Translate;
  onChange: (config: RoborockVacuumMapCardConfig) => void;
}

export type EntityGroup = 'robot' | 'status' | 'dock' | 'helpers' | 'assisted' | 'legacy';

export interface EntityField {
  key: keyof RoborockEntityConfig;
  domains: readonly string[];
  group: EntityGroup;
  /** Comes from the Roborock devices, so the picker is narrowed to them. */
  device: boolean;
}

const field = (key: keyof RoborockEntityConfig, domains: string | string[], group: EntityGroup, device = true): EntityField =>
  ({ key, domains: typeof domains === 'string' ? [domains] : domains, group, device });

/** Every entity the card can use, grouped as the editor shows them. */
export const ENTITY_FIELDS: EntityField[] = [
  field('map_select', 'select', 'robot'),
  field('cleaning_mode', 'select', 'robot'),
  field('mop_mode', 'select', 'robot'),
  field('mop_intensity', 'select', 'robot'),
  field('water_shortage', 'binary_sensor', 'robot'),
  field('mop_attached', 'binary_sensor', 'robot'),
  field('water_box_attached', 'binary_sensor', 'robot'),
  field('do_not_disturb', 'switch', 'robot'),
  field('battery', 'sensor', 'status'),
  field('status', 'sensor', 'status'),
  field('error', 'sensor', 'status'),
  field('current_room', 'sensor', 'status'),
  field('cleaning_area', 'sensor', 'status'),
  field('cleaning_time', 'sensor', 'status'),
  field('cleaning_progress', 'sensor', 'status'),
  field('last_clean_end', 'sensor', 'status'),
  field('dock_mop_drying', ['switch', 'binary_sensor'], 'dock'),
  field('dock_mop_drying_remaining_time', 'sensor', 'dock'),
  field('dock_child_lock', 'switch', 'dock'),
  field('dock_clean_water_empty', 'binary_sensor', 'dock'),
  field('dock_dirty_water_full', 'binary_sensor', 'dock'),
  field('dock_error', 'sensor', 'dock'),
  field('dock_clean_fluid_empty', 'binary_sensor', 'dock'),
  field('dock_detergent_empty', 'binary_sensor', 'dock'),
  field('dock_mop_wash_frequency', 'input_select', 'helpers', false),
  field('dock_wash_mode', 'input_select', 'helpers', false),
  field('dock_wash_temperature', 'input_select', 'helpers', false),
  field('dock_auto_empty', 'input_boolean', 'helpers', false),
  field('dock_empty_mode', 'input_select', 'helpers', false),
  field('dock_auto_dry', 'input_boolean', 'helpers', false),
  field('dock_dry_duration', 'input_select', 'helpers', false),
  field('assisted_carry_stage', 'input_select', 'assisted', false),
  field('assisted_carry_job', 'input_text', 'assisted', false),
  field('assisted_carry_prepare_script', 'script', 'assisted', false),
  field('assisted_carry_start_script', 'script', 'assisted', false),
  field('assisted_carry_finish_script', 'script', 'assisted', false),
  field('vacuum_then_mop_script', 'script', 'legacy', false),
];

export function fieldsOf(group: EntityGroup): EntityField[] {
  return ENTITY_FIELDS.filter((item) => item.group === group);
}

export function move<T>(items: T[], from: number, to: number): T[] {
  const next = [...items];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

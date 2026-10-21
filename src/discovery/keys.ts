import type { ConsumableKind, RoborockEntityConfig } from '../types';

export interface EntityCandidate {
  domain: string;
  translation_key?: string;
  /** Matches the state's `device_class` attribute for entities without a translation key. */
  device_class?: string;
}

/**
 * How each card entity is found among the Roborock robot and dock entities, in order of
 * preference. Translation keys come from Home Assistant core
 * (homeassistant/components/roborock/{select,sensor,binary_sensor,switch}.py) and were
 * verified against a live Qrevo Curv 2 Flow on Home Assistant 2026.10.
 *
 * Keys without a native entity (dock setting helpers, assisted-carry helpers and scripts,
 * the legacy Vac followed by Mop script) are intentionally absent: they are user-created.
 */
export const ENTITY_CANDIDATES: Partial<Record<keyof RoborockEntityConfig, EntityCandidate[]>> = {
  map_select: [{ domain: 'select', translation_key: 'selected_map' }],
  cleaning_mode: [{ domain: 'select', translation_key: 'cleaning_mode' }],
  mop_mode: [{ domain: 'select', translation_key: 'mop_mode' }],
  mop_intensity: [{ domain: 'select', translation_key: 'mop_intensity' }],
  // The dock switch replaced the deprecated `mop_drying_status` binary sensor; both report `on` while drying.
  dock_mop_drying: [
    { domain: 'switch', translation_key: 'mop_drying' },
    { domain: 'binary_sensor', translation_key: 'mop_drying_status' },
  ],
  dock_mop_drying_remaining_time: [{ domain: 'sensor', translation_key: 'mop_drying_remaining_time' }],
  dock_child_lock: [{ domain: 'switch', translation_key: 'child_lock' }],
  water_shortage: [{ domain: 'binary_sensor', translation_key: 'water_shortage' }],
  mop_attached: [{ domain: 'binary_sensor', translation_key: 'mop_attached' }],
  water_box_attached: [{ domain: 'binary_sensor', translation_key: 'water_box_attached' }],
  do_not_disturb: [{ domain: 'switch', translation_key: 'dnd_switch' }],
  battery: [{ domain: 'sensor', device_class: 'battery' }],
  current_room: [{ domain: 'sensor', translation_key: 'current_room' }],
  cleaning_area: [{ domain: 'sensor', translation_key: 'cleaning_area' }],
  cleaning_time: [{ domain: 'sensor', translation_key: 'cleaning_time' }],
  cleaning_progress: [{ domain: 'sensor', translation_key: 'clean_percent' }],
  status: [{ domain: 'sensor', translation_key: 'status' }],
  error: [{ domain: 'sensor', translation_key: 'vacuum_error' }],
  last_clean_end: [{ domain: 'sensor', translation_key: 'last_clean_end' }],
  dock_clean_water_empty: [{ domain: 'binary_sensor', translation_key: 'clean_box_empty' }],
  dock_dirty_water_full: [{ domain: 'binary_sensor', translation_key: 'dirty_box_full' }],
  dock_error: [{ domain: 'sensor', translation_key: 'dock_error' }],
  dock_clean_fluid_empty: [{ domain: 'binary_sensor', translation_key: 'clean_fluid_empty' }],
  dock_detergent_empty: [{ domain: 'binary_sensor', translation_key: 'detergent_empty' }],
};

/**
 * Consumable sensors and their reset buttons (translation keys from HA core
 * sensor.py/button.py; pairing adapted from juju35/ha-roborock-card, MIT). Reset buttons
 * are disabled by default in Home Assistant, so they are often absent.
 */
export const CONSUMABLE_CANDIDATES: Array<{ kind: ConsumableKind; sensor: string; reset?: string }> = [
  { kind: 'main_brush', sensor: 'main_brush_time_left', reset: 'reset_main_brush_consumable' },
  { kind: 'side_brush', sensor: 'side_brush_time_left', reset: 'reset_side_brush_consumable' },
  { kind: 'filter', sensor: 'filter_time_left', reset: 'reset_air_filter_consumable' },
  { kind: 'sensors', sensor: 'sensor_time_left', reset: 'reset_sensor_consumable' },
  { kind: 'strainer', sensor: 'strainer_time_left', reset: 'reset_dock_strainer_consumable' },
  { kind: 'cleaning_brush', sensor: 'cleaning_brush_time_left', reset: 'reset_dock_cleaning_brush_consumable' },
  { kind: 'mop', sensor: 'mop_life_time_left' },
  { kind: 'roller', sensor: 'brush_remaining' },
  // Percentage variants on other protocols.
  { kind: 'main_brush', sensor: 'main_brush_life' },
  { kind: 'side_brush', sensor: 'side_brush_life' },
  { kind: 'filter', sensor: 'filter_life' },
  { kind: 'sensors', sensor: 'sensor_life' },
];

/**
 * Native dock controls that may replace the hand-made dock helpers in Phase 3. They are
 * reported, never written into the config, until each one passes the native-entity checks.
 */
export const NATIVE_DOCK_CANDIDATES: Record<string, EntityCandidate> = {
  dust_collection_mode: { domain: 'select', translation_key: 'dust_collection_mode' },
  dust_emptying: { domain: 'switch', translation_key: 'dust_emptying' },
  mop_washing: { domain: 'switch', translation_key: 'mop_washing' },
  mop_drying: { domain: 'switch', translation_key: 'mop_drying' },
};

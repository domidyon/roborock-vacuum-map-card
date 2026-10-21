// Real-world configs written against v0.8.0. They must keep parsing and normalizing
// identically in every later release; see src/legacy-config.test.ts.

/** The full multi-floor example from the v0.8.0 README. */
export const readmeConfig08 = {
  type: 'custom:roborock-vacuum-map-card',
  entity: 'vacuum.qrevo_curv_2_flow',
  language: 'nl',
  entities: {
    map_select: 'select.qrevo_curv_2_flow_selected_map',
    cleaning_mode: 'select.woonkamer_qrevo_curv_2_flow_cleaning_mode',
    vacuum_then_mop_script: 'script.roborock_vacuum_then_mop',
    mop_mode: 'select.qrevo_curv_2_flow_mop_mode',
    mop_intensity: 'select.qrevo_curv_2_flow_mop_intensity',
    dock_mop_drying: 'binary_sensor.qrevo_curv_2_flow_dock_mop_drying',
    dock_mop_drying_remaining_time: 'sensor.qrevo_curv_2_flow_dock_mop_drying_remaining_time',
    dock_child_lock: 'switch.qrevo_curv_2_flow_dock_child_lock',
    dock_mop_wash_frequency: 'input_select.qrevo_dock_mop_wash_frequency',
    dock_wash_mode: 'input_select.qrevo_dock_washing_mode',
    dock_wash_temperature: 'input_select.qrevo_dock_wash_temperature',
    dock_auto_empty: 'input_boolean.qrevo_dock_auto_empty',
    dock_empty_mode: 'input_select.qrevo_dock_empty_mode',
    dock_auto_dry: 'input_boolean.qrevo_dock_auto_dry',
    dock_dry_duration: 'input_select.qrevo_dock_drying_duration',
    assisted_carry_stage: 'input_select.qrevo_upstairs_stage',
    assisted_carry_job: 'input_text.qrevo_upstairs_job',
    assisted_carry_prepare_script: 'script.qrevo_upstairs_prepare',
    assisted_carry_start_script: 'script.qrevo_upstairs_start',
    assisted_carry_finish_script: 'script.qrevo_upstairs_finish',
    water_shortage: 'binary_sensor.qrevo_curv_2_flow_water_shortage',
    mop_attached: 'binary_sensor.qrevo_curv_2_flow_mop_attached',
    water_box_attached: 'binary_sensor.qrevo_curv_2_flow_water_box_attached',
    do_not_disturb: 'switch.qrevo_curv_2_flow_do_not_disturb',
    battery: 'sensor.qrevo_curv_2_flow_battery',
    current_room: 'sensor.qrevo_curv_2_flow_current_room',
    cleaning_area: 'sensor.qrevo_curv_2_flow_cleaning_area',
    cleaning_time: 'sensor.qrevo_curv_2_flow_cleaning_time',
    cleaning_progress: 'sensor.qrevo_curv_2_flow_cleaning_progress',
    status: 'sensor.qrevo_curv_2_flow_status',
    error: 'sensor.qrevo_curv_2_flow_vacuum_error',
  },
  floors: [
    {
      id: 'downstairs',
      name: 'Beneden',
      map_entity: 'image.woonkamer_qrevo_curv_2_flow_beneden_custom',
      map_select_option: 'Beneden',
      vacuum_then_mop_routine: 'button.woonkamer_qrevo_curv_2_flow_vac_followed_by_mop',
      rooms: [
        { segment_id: 1, area_id: 'kitchen', name: 'Keuken', icon: 'mdi:countertop', include_in_floor_clean: true },
        { segment_id: 2, area_id: 'hallway', name: 'Hal', icon: 'mdi:coat-rack', include_in_floor_clean: true },
        { segment_id: 4, area_id: 'living_room', name: 'Woonkamer', icon: 'mdi:sofa', include_in_floor_clean: true },
      ],
    },
    {
      id: 'upstairs',
      name: 'Boven',
      map_entity: 'image.woonkamer_qrevo_curv_2_flow_bovenverdieping_custom',
      map_select_option: 'Bovenverdieping',
      vacuum_then_mop_routine: 'button.woonkamer_qrevo_curv_2_flow_boven_vacmop',
      assisted_carry: true,
      rooms: [
        { segment_id: 1, area_id: 'office', name: 'Kantoor', icon: 'mdi:desk', include_in_floor_clean: true },
        { segment_id: 2, area_id: 'overloop', name: 'Overloop', icon: 'mdi:stairs', include_in_floor_clean: true },
        { segment_id: 3, area_id: 'bedroom', name: 'Slaapkamer', icon: 'mdi:bed-king', include_in_floor_clean: true },
        { segment_id: 4, area_id: 'waskamer', name: 'Waskamer', icon: 'mdi:washing-machine', include_in_floor_clean: true },
      ],
    },
  ],
  presets: [
    {
      id: 'avond',
      name: 'Avond',
      icon: 'mdi:weather-night',
      strategy: 'custom',
      cleaning_type: 'vacuum',
      fan_speed: 'quiet',
      mop_mode: 'standard',
      cleaning_count: 1,
    },
  ],
  default_preset: 'vacuum_only',
};

/** Minimal single-floor config relying on defaults, plus every 0.8 opt-in flag. */
export const optInConfig08 = {
  type: 'custom:roborock-vacuum-map-card',
  entity: 'vacuum.saros_10r',
  entities: {
    cleaning_mode: 'select.saros_10r_cleaning_mode',
    mop_mode: 'select.saros_10r_mop_mode',
  },
  floors: [
    {
      id: 'home',
      name: 'Home',
      map_entity: 'image.saros_10r_home_custom',
      rooms: [
        { segment_id: 16, area_id: 'kitchen', name: 'Kitchen' },
        { segment_id: 17, name: 'Unmapped room', include_in_floor_clean: false },
      ],
    },
  ],
  presets: [
    { id: 'deep_mop', name: 'Deep mop', strategy: 'custom', cleaning_type: 'mop', mop_mode: 'deep', cleaning_count: 2 },
    { id: 'ai', name: 'AI', strategy: 'smartplan' },
  ],
  default_preset: 'deep_mop',
  vacuum_mode_fallback: 'set_clean_motor_mode',
  enable_mop_only: true,
  mop_routes: { vacuum_and_mop: ['fast', 'standard'], mop: ['fast', 'standard', 'deep', 'deep_plus'] },
  card_mod: { style: 'ha-card { border-radius: 24px; }' },
};

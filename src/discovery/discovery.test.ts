import { describe, expect, it } from 'vitest';
import { validateConfig } from '../config';
import { createDiscoveryHass } from '../test/discovery-hass';
import { buildConfig, listRoborockVacuums, loadVacuumSegmentOptions, resolveRoborockDevices } from '.';
import { resolveMapFlags } from './maps';
import { flagsFromDeviceFeatures } from '../catalog';
import qrevoFeatures from '../test/fixtures/qrevo-curv-2-flow.device-features.json';

const VACUUM = 'vacuum.qrevo_curv_2_flow';
const ROBOT = 'c044667c97b62cdcf9dc0dedb199a197';
const DOCK = '0631c181320651d4df2a7fea1d5fa83e';
const CUSTOM_MAP = 'fd37421f317c7f1fd0a97a5ac179832e';

async function discover(hass = createDiscoveryHass()) {
  return buildConfig(hass, VACUUM, await loadVacuumSegmentOptions(hass, VACUUM));
}

describe('device discovery (live Qrevo Curv 2 Flow fixture)', () => {
  it('lists Roborock vacuums from the entity registry', () => {
    expect(listRoborockVacuums(createDiscoveryHass())).toEqual([VACUUM]);
  });

  it('falls back to vacuum states without registry data', () => {
    expect(listRoborockVacuums(createDiscoveryHass(undefined, { entities: undefined }))).toEqual([VACUUM]);
  });

  it('finds the robot, its separate dock device, and the Custom Map device', () => {
    const devices = resolveRoborockDevices(createDiscoveryHass(), VACUUM);
    expect(devices.robot?.id).toBe(ROBOT);
    expect(devices.dock?.id).toBe(DOCK);
    expect(devices.companions.map((device) => device.id)).toEqual([CUSTOM_MAP]);
  });

  it('discovers every native entity the live card config uses, including dock entities', async () => {
    const { report } = await discover();
    // Values from the hand-written dashboard config on the same Home Assistant.
    expect(report.entities).toEqual({
      map_select: 'select.qrevo_curv_2_flow_selected_map',
      cleaning_mode: 'select.woonkamer_qrevo_curv_2_flow_cleaning_mode',
      mop_mode: 'select.qrevo_curv_2_flow_mop_mode',
      mop_intensity: 'select.qrevo_curv_2_flow_mop_intensity',
      dock_mop_drying: 'switch.woonkamer_qrevo_curv_2_flow_dock_mop_drying',
      dock_mop_drying_remaining_time: 'sensor.qrevo_curv_2_flow_dock_mop_drying_remaining_time',
      dock_child_lock: 'switch.qrevo_curv_2_flow_dock_child_lock',
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
      last_clean_end: 'sensor.qrevo_curv_2_flow_last_clean_end',
      // Not in the hand-written config yet; used by the pre-start checks.
      dock_clean_water_empty: 'binary_sensor.woonkamer_qrevo_curv_2_flow_dock_clean_water_box',
      dock_dirty_water_full: 'binary_sensor.woonkamer_qrevo_curv_2_flow_dock_dirty_water_box',
      dock_error: 'sensor.woonkamer_qrevo_curv_2_flow_dock_dock_error',
    });
    expect(report.model).toBe('roborock.vacuum.a245');
  });

  it('discovers consumables from the robot and the dock', async () => {
    const { config } = await discover();
    // Reset buttons are disabled by default in Home Assistant, so none are found here.
    expect(config.consumables).toEqual([
      { kind: 'main_brush', sensor: 'sensor.qrevo_curv_2_flow_main_brush_time_left' },
      { kind: 'side_brush', sensor: 'sensor.qrevo_curv_2_flow_side_brush_time_left' },
      { kind: 'filter', sensor: 'sensor.qrevo_curv_2_flow_filter_time_left' },
      { kind: 'sensors', sensor: 'sensor.qrevo_curv_2_flow_sensor_time_left' },
      { kind: 'strainer', sensor: 'sensor.woonkamer_qrevo_curv_2_flow_dock_strainer_time_left' },
    ]);
  });

  it('reports native dock controls without writing them into the config', async () => {
    const { report, config } = await discover();
    expect(report.native_dock).toEqual({
      dust_collection_mode: 'select.woonkamer_qrevo_curv_2_flow_dock_empty_mode',
      dust_emptying: 'switch.woonkamer_qrevo_curv_2_flow_dock_dust_emptying',
      mop_washing: 'switch.woonkamer_qrevo_curv_2_flow_dock_mop_washing',
      mop_drying: 'switch.woonkamer_qrevo_curv_2_flow_dock_mop_drying',
    });
    expect(config.entities?.dock_empty_mode).toBeUndefined();
  });

  it('builds one floor per map in selector order, paired with its custom image', async () => {
    const { config } = await discover();
    expect(config.floors.map((floor) => [floor.id, floor.map_select_option, floor.map_entity])).toEqual([
      ['beneden', 'Beneden', 'image.woonkamer_qrevo_curv_2_flow_beneden_custom'],
      ['map_1', 'Map 1', 'image.woonkamer_qrevo_curv_2_flow_map_1_custom'],
      ['badkamer', 'Badkamer', 'image.woonkamer_qrevo_curv_2_flow_badkamer_custom'],
      ['onder_bed', 'Onder Bed', 'image.woonkamer_qrevo_curv_2_flow_onder_bed_custom'],
    ]);
  });

  it('uses the segment list for rooms and Home Assistant\'s own area mapping', async () => {
    const { config } = await discover();
    const rooms = Object.fromEntries(config.floors.map((floor) => [floor.id, floor.rooms.map((room) => [room.segment_id, room.name, room.area_id ?? null, room.include_in_floor_clean])]));
    expect(rooms).toEqual({
      beneden: [[1, 'Keuken', 'kitchen', true], [2, 'Hal', 'hallway', true], [4, 'Woonkamer', 'living_room', true]],
      map_1: [[1, 'Slaapkamer', 'bedroom', true], [2, 'Waskamer', 'waskamer', true], [3, 'Overloop', 'overloop', true], [4, 'Room', null, false], [5, 'Kantoor', 'office', true]],
      badkamer: [[1, 'Badkamer', 'bathroom', true]],
      onder_bed: [[1, 'Bathroom', null, false], [2, 'Onder Bed', 'bedroom', true]],
    });
    expect(config.floors[0].rooms[0].icon).toBe('mdi:countertop-outline');
  });

  it('keeps rooms Home Assistant never mapped off the card', async () => {
    const { config } = await discover();
    const hidden = config.floors.flatMap((floor) => floor.rooms.filter((room) => room.hidden).map((room) => `${floor.id}:${room.name}`));
    expect(hidden).toEqual(['map_1:Room', 'onder_bed:Bathroom']);
  });

  it('assigns a Vac followed by Mop routine only when its name names the map', async () => {
    const { config, report } = await discover();
    expect(config.floors[0].vacuum_then_mop_routine).toBe('button.woonkamer_qrevo_curv_2_flow_vac_followed_by_mop');
    expect(config.floors.slice(1).every((floor) => !floor.vacuum_then_mop_routine)).toBe(true);
    expect(report.routines.map((routine) => routine.name).sort()).toEqual(['Beneden VacMop', 'Boven VacMop', 'Deep Clean', 'Intensive Sweeping']);
  });

  it('produces a valid config in the user\'s language and reports unmapped rooms', async () => {
    const { config, report } = await discover();
    expect(validateConfig(config)).toEqual([]);
    expect(config.language).toBe('nl');
    expect(report.area_source).toBe('mapping');
    expect(report.issues).toEqual([
      { code: 'room_unmapped', floor_id: 'map_1', segment_id: 4, name: 'Room' },
      { code: 'room_unmapped', floor_id: 'onder_bed', segment_id: 1, name: 'Bathroom' },
    ]);
  });

  it('falls back to image rooms and area-name matching without the registry mapping', async () => {
    const hass = createDiscoveryHass(undefined, { callWS: undefined });
    const { config, report } = buildConfig(hass, VACUUM, await loadVacuumSegmentOptions(hass, VACUUM));
    expect(report.area_source).toBe('name');
    expect(report.issues).toContainEqual({ code: 'segment_mapping_unavailable' });
    expect(report.issues).toContainEqual({ code: 'rooms_from_image', floor_id: 'map_1' });
    expect(config.floors[0].rooms.map((room) => room.area_id)).toEqual(['kitchen', 'hallway', 'living_room']);
  });

  it('reports a missing Roborock Custom Map instead of inventing floors', () => {
    const hass = createDiscoveryHass();
    for (const [id, entry] of Object.entries(hass.entities ?? {})) if (entry.platform === 'roborock_custom_map') delete hass.entities?.[id];
    const { config, report } = buildConfig(hass, VACUUM);
    expect(config.floors).toEqual([]);
    expect(report.issues).toContainEqual({ code: 'custom_map_missing' });
    expect(report.issues).toContainEqual({ code: 'map_without_image', map_name: 'Beneden' });
  });

  it('resolves a second vacuum independently', () => {
    const hass = createDiscoveryHass();
    hass.devices!.other = { id: 'other', name: 'S7', model: 'roborock.vacuum.a15', identifiers: [['roborock', 'duid9']] };
    hass.entities!['vacuum.s7'] = { entity_id: 'vacuum.s7', device_id: 'other', platform: 'roborock', translation_key: 'roborock' };
    hass.states['vacuum.s7'] = { entity_id: 'vacuum.s7', state: 'docked', attributes: {} };
    expect(listRoborockVacuums(hass)).toEqual([VACUUM, 'vacuum.s7']);
    const { report } = buildConfig(hass, 'vacuum.s7');
    expect(report.devices.dock).toBeUndefined();
    expect(report.entities).toEqual({});
    expect(report.issues).toContainEqual({ code: 'custom_map_missing' });
  });

  it('ignores other integrations\' numeric device identifiers', async () => {
    // Real installs have devices whose identifier values are numbers, not strings.
    const hass = createDiscoveryHass();
    hass.devices!.zwave = { id: 'zwave', name: 'Z-Wave node', identifiers: [['zwave_js', 3925142398 as unknown as string]] };
    hass.devices!.mixed = { id: 'mixed', name: 'Hue', identifiers: [['hue', 12 as unknown as string], ['hue', 'abc']] };
    const devices = resolveRoborockDevices(hass, VACUUM);
    expect(devices.dock?.id).toBe(DOCK);
    expect(devices.companions.map((device) => device.id)).toEqual([CUSTOM_MAP]);
    expect(validateConfig((await discover(hass)).config)).toEqual([]);
  });

  it('keeps an unknown vacuum harmless', () => {
    const { report } = buildConfig(createDiscoveryHass(), 'vacuum.missing');
    expect(report.issues).toContainEqual({ code: 'robot_device_missing' });
  });
});

describe('model profiles in discovery', () => {
  it('reports the tested Qrevo profile and its Deep+ route without enabling Mop only', async () => {
    const { config, report } = await discover();
    expect(report.profile?.status).toBe('tested');
    expect(config.enable_mop_only).toBeUndefined();
    expect(config.mop_routes).toEqual({ vacuum_and_mop: ['fast', 'standard', 'deep_plus'] });
  });

  it('writes profile facts into the config for models that need them', () => {
    const hass = createDiscoveryHass();
    hass.devices![ROBOT] = { ...hass.devices![ROBOT], model: 'roborock.vacuum.a144', model_id: 'roborock.vacuum.a144' };
    const { config, report } = buildConfig(hass, VACUUM);
    expect(report.profile?.label).toBe('Saros 10R');
    expect(config.enable_mop_only).toBe(true);
    expect(config.mop_routes).toEqual({ vacuum_and_mop: ['fast', 'standard'], mop: ['fast', 'standard', 'deep', 'deep_plus'] });
    expect(validateConfig(config)).toEqual([]);
  });

  it('flags unknown models for a model report', () => {
    const hass = createDiscoveryHass();
    hass.devices![ROBOT] = { ...hass.devices![ROBOT], model: 'roborock.vacuum.zz1', model_id: 'roborock.vacuum.zz1' };
    expect(buildConfig(hass, VACUUM).report.issues).toContainEqual({ code: 'unknown_model', model: 'roborock.vacuum.zz1' });
  });
});

describe('capability inference in discovery', () => {
  const unknownModel = () => {
    const hass = createDiscoveryHass();
    hass.devices![ROBOT] = { ...hass.devices![ROBOT], model: 'roborock.vacuum.zz1', model_id: 'roborock.vacuum.zz1' };
    return hass;
  };

  it('reports the Qrevo as supported', async () => {
    const { report } = await discover();
    expect(report.compatibility).toMatchObject({ verdict: 'supported', reasons: [], name: 'Qrevo Curv 2 Flow' });
  });

  it('writes facts read from the robot\'s own flags for models the card cannot know', () => {
    const flags = { model: 'roborock.vacuum.zz1', protocol: '1.0', flags: flagsFromDeviceFeatures(qrevoFeatures.device_features) };
    const { config, report } = buildConfig(unknownModel(), VACUUM, undefined, flags);
    expect(config).toMatchObject({
      cleaning_count_command: 'set_clean_repeat_times',
      enable_smartplan: true,
      mop_routes: { vacuum_and_mop: ['standard', 'deep_plus', 'fast'], mop: ['standard', 'deep_plus', 'fast'] },
    });
    expect(config.enable_mop_only).toBeUndefined();
    expect(report.fact_sources).toEqual({ repeat: 'device', smartplan: 'device', mop_routes: 'device' });
    expect(report.compatibility.verdict).toBe('supported');
    expect(report.issues.some((issue) => issue.code === 'unknown_model')).toBe(false);
    expect(validateConfig(config)).toEqual([]);
  });

  it('leaves catalog facts to the card at runtime', () => {
    const hass = createDiscoveryHass();
    hass.devices![ROBOT] = { ...hass.devices![ROBOT], model: 'roborock.vacuum.a15', model_id: 'roborock.vacuum.a15' };
    const { config, report } = buildConfig(hass, VACUUM);
    expect(report.fact_sources).toEqual({ repeat: 'catalog', smartplan: 'catalog', mop_routes: 'catalog' });
    expect(config.cleaning_count_command).toBeUndefined();
    expect(config.mop_routes).toBeUndefined();
  });

  it('flags robots with an unsupported protocol', () => {
    const flags = { model: 'roborock.vacuum.zz1', protocol: 'B01', flags: new Set<string>() };
    const { report } = buildConfig(unknownModel(), VACUUM, undefined, flags);
    expect(report.compatibility.verdict).toBe('unsupported');
    expect(report.issues).toContainEqual({ code: 'unsupported', reasons: ['protocol_unsupported'] });
  });
});

describe('resolveMapFlags', () => {
  const segment = (map_flag: number, segment_id: number, group?: string) => ({ map_flag, segment_id, name: 'Room', group });

  it('prefers group names and fills gaps from the selector order', () => {
    const flags = resolveMapFlags([segment(0, 1, 'Down'), segment(1, 1), segment(2, 1, 'Attic')], ['Down', 'Up', 'Attic']);
    expect([...flags]).toEqual([[0, 'Down'], [2, 'Attic'], [1, 'Up']]);
  });

  it('does not guess from the selector order when groups contradict it', () => {
    const flags = resolveMapFlags([segment(0, 1, 'Attic'), segment(1, 1)], ['Down', 'Up', 'Attic']);
    expect([...flags]).toEqual([[0, 'Attic']]);
  });
});

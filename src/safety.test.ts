import { describe, expect, it } from 'vitest';
import { areaMissing, configHealth, roomUsable } from './health';
import { consumableStatus, maintenanceStatus, overdueCount } from './maintenance';
import { preflightChecks, usesWater } from './preflight';
import { configFixture, createHass } from './test/fixtures';
import type { HomeAssistant } from './types';

const VAC_AND_MOP = { strategy: 'custom', cleaning_type: 'vacuum_and_mop' } as const;
const VACUUM = { strategy: 'custom', cleaning_type: 'vacuum' } as const;

function withDock(states: Record<string, string>): { hass: HomeAssistant; config: typeof configFixture } {
  const hass = createHass();
  const entities = {
    ...configFixture.entities,
    dock_clean_water_empty: 'binary_sensor.clean_water',
    dock_dirty_water_full: 'binary_sensor.dirty_water',
    dock_error: 'sensor.dock_error',
  };
  for (const [entityId, state] of Object.entries({ 'binary_sensor.clean_water': 'off', 'binary_sensor.dirty_water': 'off', 'sensor.dock_error': 'ok', ...states })) {
    hass.states[entityId] = { entity_id: entityId, state, attributes: hass.states[entityId]?.attributes ?? {} };
  }
  return { hass, config: { ...configFixture, entities } };
}

describe('maintenance', () => {
  const sensor = (state: string, unit: string) => {
    const hass = createHass();
    hass.states['sensor.part'] = { entity_id: 'sensor.part', state, attributes: { unit_of_measurement: unit } };
    return hass;
  };

  it('grades hours against the Roborock lifetime of the part', () => {
    expect(consumableStatus(sensor('246.97', 'h'), { kind: 'main_brush', sensor: 'sensor.part' })).toMatchObject({ level: 'ok', unit: 'h' });
    expect(consumableStatus(sensor('20', 'h'), { kind: 'main_brush', sensor: 'sensor.part' })).toMatchObject({ level: 'due' });
    // The live Qrevo's sensor-cleaning counter at capture time.
    expect(consumableStatus(sensor('-2.49', 'h'), { kind: 'sensors', sensor: 'sensor.part' })).toMatchObject({ level: 'overdue', remaining: -2.49 });
    expect(consumableStatus(sensor('90', 'min'), { kind: 'filter', sensor: 'sensor.part' }).remaining).toBe(1.5);
  });

  it('flags parts without a known lifetime only once they run out', () => {
    expect(consumableStatus(sensor('2', 'h'), { kind: 'strainer', sensor: 'sensor.part' }).level).toBe('ok');
    expect(consumableStatus(sensor('0', 'h'), { kind: 'strainer', sensor: 'sensor.part' }).level).toBe('overdue');
  });

  it('handles percentages, unknown states and reset availability', () => {
    expect(consumableStatus(sensor('5', '%'), { kind: 'filter', sensor: 'sensor.part' })).toMatchObject({ level: 'due', unit: '%', percent: 5 });
    expect(consumableStatus(sensor('unavailable', 'h'), { kind: 'filter', sensor: 'sensor.part' }).level).toBe('unknown');
    const hass = sensor('10', 'h');
    hass.states['button.reset'] = { entity_id: 'button.reset', state: 'unknown', attributes: {} };
    expect(consumableStatus(hass, { kind: 'filter', sensor: 'sensor.part', reset_button: 'button.reset' }).can_reset).toBe(true);
    expect(consumableStatus(hass, { kind: 'filter', sensor: 'sensor.part', reset_button: 'button.missing' }).can_reset).toBe(false);
  });

  it('counts overdue parts across the config', () => {
    const hass = sensor('-1', 'h');
    const statuses = maintenanceStatus(hass, { ...configFixture, consumables: [{ kind: 'filter', sensor: 'sensor.part' }, { kind: 'mop', sensor: 'sensor.none' }] });
    expect(overdueCount(statuses)).toBe(1);
  });
});

describe('pre-start checks', () => {
  it('knows which jobs use water', () => {
    expect(usesWater(VACUUM)).toBe(false);
    expect(usesWater({ strategy: 'smartplan', cleaning_type: 'vacuum' })).toBe(true);
    expect(usesWater({ strategy: 'custom', cleaning_type: 'vacuum_then_mop' })).toBe(true);
  });

  it('blocks water jobs without water or mop hardware, but not vacuum jobs', () => {
    const { hass, config } = withDock({ 'binary_sensor.clean_water': 'on', 'binary_sensor.mop_attached': 'off', 'binary_sensor.water_shortage': 'on', 'binary_sensor.water_box_attached': 'off' });
    expect(preflightChecks(hass, config, VAC_AND_MOP).blocking.map((check) => check.code)).toEqual(['clean_water_empty', 'water_shortage', 'mop_detached', 'water_box_detached']);
    expect(preflightChecks(hass, config, VACUUM)).toEqual({ blocking: [], warnings: [] });
  });

  it('warns about a full dirty tank, dock errors, low battery and overdue parts', () => {
    const { hass, config } = withDock({ 'binary_sensor.dirty_water': 'on', 'sensor.dock_error': 'duct_blockage', 'sensor.battery': '12' });
    hass.states['sensor.filter'] = { entity_id: 'sensor.filter', state: '0', attributes: { unit_of_measurement: 'h' } };
    const result = preflightChecks(hass, { ...config, consumables: [{ kind: 'filter', sensor: 'sensor.filter' }] }, VAC_AND_MOP);
    expect(result.blocking).toEqual([]);
    expect(result.warnings).toEqual([
      { code: 'dirty_water_full', entity_id: 'binary_sensor.dirty_water' },
      { code: 'dock_error', entity_id: 'sensor.dock_error', detail: 'duct_blockage' },
      { code: 'low_battery', entity_id: 'sensor.battery', detail: '12' },
      { code: 'maintenance_overdue', detail: '1' },
    ]);
  });

  it('never blocks on unknown or unavailable sensors', () => {
    const { hass, config } = withDock({ 'binary_sensor.clean_water': 'unavailable', 'binary_sensor.mop_attached': 'unknown', 'sensor.dock_error': 'unavailable', 'sensor.battery': 'unknown' });
    expect(preflightChecks(hass, config, VAC_AND_MOP)).toEqual({ blocking: [], warnings: [] });
  });
});

describe('config health', () => {
  it('is clean for a healthy config', () => {
    expect(configHealth(createHass(), configFixture)).toEqual([]);
  });

  it('finds missing areas, entities, map options and calibration', () => {
    const hass = createHass();
    delete hass.states['sensor.battery'];
    delete hass.states['image.upstairs'].attributes.calibration_points;
    const config = structuredClone(configFixture);
    config.floors[0].rooms[0].area_id = 'badkamer';
    config.floors[0].map_select_option = 'Bovenverdieping';
    expect(configHealth(hass, config)).toEqual([
      { code: 'entity_missing', key: 'entities.battery', entity_id: 'sensor.battery' },
      { code: 'map_option_missing', floor_id: config.floors[0].id, option: 'Bovenverdieping' },
      { code: 'area_missing', floor_id: config.floors[0].id, segment_id: config.floors[0].rooms[0].segment_id, room: config.floors[0].rooms[0].name, area_id: 'badkamer' },
      { code: 'map_uncalibrated', floor_id: config.floors[1].id, entity_id: config.floors[1].map_entity },
    ]);
  });

  it('only judges areas when Home Assistant provides its area registry', () => {
    const hass = createHass();
    expect(areaMissing(hass, { area_id: 'badkamer' })).toBe(true);
    expect(roomUsable(hass, { area_id: 'badkamer' })).toBe(false);
    expect(roomUsable(hass, { area_id: undefined })).toBe(false);
    hass.areas = undefined;
    expect(areaMissing(hass, { area_id: 'badkamer' })).toBe(false);
  });
});

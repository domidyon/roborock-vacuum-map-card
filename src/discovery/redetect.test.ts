import { describe, expect, it } from 'vitest';
import { normalizeConfig, validateConfig } from '../config';
import { createDiscoveryHass } from '../test/discovery-hass';
import liveConfig from '../test/fixtures/qrevo-live-card-config.json';
import type { RoborockVacuumMapCardConfig } from '../types';
import { buildConfig, loadVacuumSegmentOptions } from '.';
import { applyChanges, diffConfig } from './redetect';

const VACUUM = 'vacuum.qrevo_curv_2_flow';

async function detect(hass = createDiscoveryHass()) {
  return buildConfig(hass, VACUUM, await loadVacuumSegmentOptions(hass, VACUUM));
}

describe('re-detect against the live dashboard config', () => {
  it('offers only missing or broken values, never replacing working choices', async () => {
    const hass = createDiscoveryHass();
    const current = normalizeConfig(liveConfig);
    const changes = diffConfig(hass, current, await detect(hass));
    expect(changes.map((change) => change.id)).toEqual([
      'entity:dock_clean_water_empty',
      'entity:dock_dirty_water_full',
      'entity:dock_error',
      'room_added:upstairs:4',
      'room_area:bathroom:1',
      'room_added:under_bed:1',
      'consumables',
      'config_version',
    ]);
    // The stale `badkamer` area is replaced by the area Home Assistant maps the segment to.
    expect(changes.find((change) => change.id === 'room_area:bathroom:1')).toMatchObject({ room: 'Badkamer', from: 'badkamer', to: 'bathroom' });
    // Hand-made names and icons, the Boven routine, and the configured floors stay untouched.
    expect(changes.some((change) => change.kind === 'floor_added' || change.kind === 'floor_map')).toBe(false);
  });

  it('applies accepted changes and keeps everything else', async () => {
    const hass = createDiscoveryHass();
    const current = normalizeConfig(liveConfig);
    const changes = diffConfig(hass, current, await detect(hass)).filter((change) => change.id !== 'room_added:upstairs:4');
    const next = applyChanges(current, changes);
    expect(validateConfig(next)).toEqual([]);
    expect(next.floors.find((floor) => floor.id === 'bathroom')?.rooms[0]).toMatchObject({ area_id: 'bathroom', icon: 'mdi:shower', name: 'Badkamer' });
    expect(next.floors.find((floor) => floor.id === 'under_bed')?.rooms.map((room) => room.segment_id)).toEqual([1, 2]);
    expect(next.floors.find((floor) => floor.id === 'upstairs')?.rooms).toHaveLength(4);
    expect(next.floors[1].vacuum_then_mop_routine).toBe('button.woonkamer_qrevo_curv_2_flow_boven_vacmop');
    expect(next.entities?.dock_error).toBe('sensor.woonkamer_qrevo_curv_2_flow_dock_dock_error');
    expect(next.consumables).toHaveLength(5);
    expect(next.config_version).toBe(1);
    expect(current.config_version).toBeUndefined();
  });

  it('repairs a renamed map image and map option', async () => {
    const hass = createDiscoveryHass();
    const current = structuredClone(normalizeConfig(liveConfig)) as RoborockVacuumMapCardConfig;
    current.floors[1].map_entity = 'image.woonkamer_qrevo_curv_2_flow_bovenverdieping_custom';
    current.floors[1].map_select_option = 'Bovenverdieping';
    current.floors[1].name = 'Map 1';
    const changes = diffConfig(hass, current, await detect(hass));
    expect(changes).toContainEqual({ id: 'floor_map:upstairs', kind: 'floor_map', floor_id: 'upstairs', from: 'image.woonkamer_qrevo_curv_2_flow_bovenverdieping_custom', to: 'image.woonkamer_qrevo_curv_2_flow_map_1_custom' });
    expect(changes).toContainEqual({ id: 'floor_option:upstairs', kind: 'floor_option', floor_id: 'upstairs', from: 'Bovenverdieping', to: 'Map 1' });
  });

  it('offers maps the config does not have yet', async () => {
    const hass = createDiscoveryHass();
    const current = normalizeConfig({ ...liveConfig, floors: liveConfig.floors.slice(0, 2) });
    const added = diffConfig(hass, current, await detect(hass)).filter((change) => change.kind === 'floor_added');
    expect(added.map((change) => change.kind === 'floor_added' && change.floor.id)).toEqual(['badkamer', 'onder_bed']);
  });
});

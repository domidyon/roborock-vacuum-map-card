import { describe, expect, it, vi } from 'vitest';
import { executeJob } from './executor';
import { configFixture, createHass } from './test/fixtures';

describe('job executor', () => {
  it('orders floor, safe SmartPlan exit, mop, fan and clean-area calls', async () => {
    const hass = createHass();
    hass.states['select.mop_mode'].state = 'smart_mode';
    const calls: string[] = [];
    hass.callService = vi.fn(async (domain, service, data, target) => {
      calls.push(`${domain}.${service}:${String(data?.option ?? data?.fan_speed ?? (data?.cleaning_area_id as string[] | undefined)?.join(','))}`);
      if (domain === 'select') hass.states[String(target?.entity_id)].state = String(data?.option);
    });
    const upstairs = configFixture.floors[1];
    const rooms = [upstairs.rooms[0], upstairs.rooms[2]];
    const result = await executeJob({
      getHass: () => hass,
      config: configFixture,
      floor: upstairs,
      rooms,
      draft: { preset_id: 'custom', strategy: 'custom', cleaning_type: 'vacuum_and_mop', fan_speed: 'balanced', mop_mode: 'standard', mop_intensity: 'medium' },
      pollMs: 0,
    });
    expect(result).toEqual(['office', 'overloop']);
    expect(calls).toEqual([
      'select.select_option:Upstairs',
      'select.select_option:custom',
      'select.select_option:standard',
      'select.select_option:medium',
      'vacuum.set_fan_speed:balanced',
      'vacuum.clean_area:office,overloop',
    ]);
  });

  it('lets SmartPlan own suction and intensity', async () => {
    const hass = createHass();
    const calls: string[] = [];
    hass.callService = vi.fn(async (domain, service, data, target) => {
      calls.push(`${domain}.${service}`);
      if (domain === 'select') hass.states[String(target?.entity_id)].state = String(data?.option);
    });
    await executeJob({
      getHass: () => hass,
      config: configFixture,
      floor: configFixture.floors[0],
      rooms: [configFixture.floors[0].rooms[0]],
      draft: { preset_id: 'smartplan', strategy: 'smartplan', cleaning_type: 'vacuum_and_mop', fan_speed: 'turbo', mop_intensity: 'high' },
      pollMs: 0,
    });
    expect(calls).toEqual(['select.select_option', 'vacuum.clean_area']);
  });

  it('aborts before cleaning after a settings failure', async () => {
    const hass = createHass();
    const calls: string[] = [];
    hass.callService = vi.fn(async (domain, service) => {
      calls.push(`${domain}.${service}`);
      if (service === 'set_fan_speed') throw new Error('device rejected setting');
    });
    await expect(executeJob({
      getHass: () => hass,
      config: configFixture,
      floor: configFixture.floors[0],
      rooms: [configFixture.floors[0].rooms[0]],
      draft: { preset_id: 'vacuum_only', strategy: 'custom', cleaning_type: 'vacuum', fan_speed: 'balanced', mop_mode: 'custom', mop_intensity: 'off' },
      pollMs: 0,
    })).rejects.toMatchObject({ operation: 'set_fan_speed' });
    expect(calls).not.toContain('vacuum.clean_area');
  });

  it('rejects busy, errored, unmapped and unsupported jobs during preflight', async () => {
    const hass = createHass();
    hass.states['vacuum.roborock'].state = 'cleaning';
    await expect(executeJob({ getHass: () => hass, config: configFixture, floor: configFixture.floors[0], rooms: [], draft: { preset_id: 'x', strategy: 'custom', cleaning_type: 'vacuum' } })).rejects.toMatchObject({ operation: 'preflight' });
  });
});

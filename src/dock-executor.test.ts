import { describe, expect, it, vi } from 'vitest';
import { executeDockAction, executeDockSetting } from './dock-executor';
import { configFixture, createHass } from './test/fixtures';

describe('dock executor', () => {
  it('uses device-native payloads and updates HA helpers after acceptance', async () => {
    const hass = createHass();
    const calls: Array<{ domain: string; service: string; data?: Record<string, unknown>; target?: Record<string, unknown> }> = [];
    hass.callService = vi.fn(async (domain, service, data, target) => {
      calls.push({ domain, service, data, target });
    });

    await executeDockSetting(hass, configFixture, 'mop_wash_frequency', '15_min');
    await executeDockSetting(hass, configFixture, 'wash_mode', 'deep');
    await executeDockSetting(hass, configFixture, 'wash_temperature', 'hot');
    await executeDockSetting(hass, configFixture, 'auto_empty', false);
    await executeDockSetting(hass, configFixture, 'empty_mode', 'smart');
    await executeDockSetting(hass, configFixture, 'auto_dry', true);
    await executeDockSetting(hass, configFixture, 'dry_duration', '3h');

    expect(calls.filter(({ domain }) => domain === 'vacuum').map(({ data }) => data)).toEqual([
      { command: 'set_smart_wash_params', params: { smart_wash: 0, wash_interval: 900 } },
      { command: 'set_wash_towel_mode', params: { wash_mode: 2 } },
      { command: 'set_wash_water_temperature', params: { values: 2 } },
      { command: 'set_dust_collection_switch_status', params: { status: 0 } },
      { command: 'set_dust_collection_mode', params: { mode: 0 } },
      { command: 'app_set_dryer_setting', params: { status: 1 } },
      { command: 'app_set_dryer_setting', params: { on: { dry_time: 10_800 } } },
    ]);
    expect(calls.filter(({ domain }) => domain !== 'vacuum')).toHaveLength(7);
  });

  it('does not update a helper if the vacuum rejects the setting', async () => {
    const hass = createHass();
    hass.callService = vi.fn(async (domain) => {
      if (domain === 'vacuum') throw new Error('rejected');
    });
    await expect(executeDockSetting(hass, configFixture, 'wash_mode', 'deep')).rejects.toMatchObject({ operation: 'wash_mode' });
    expect(hass.callService).toHaveBeenCalledTimes(1);
  });

  it('maps guarded dock actions without conflating dryer settings and dryer start', async () => {
    const hass = createHass();
    const calls: Array<Record<string, unknown> | undefined> = [];
    hass.callService = vi.fn(async (_domain, _service, data) => { calls.push(data); });
    await executeDockAction(hass, configFixture, 'empty', false);
    await executeDockAction(hass, configFixture, 'wash', false);
    await executeDockAction(hass, configFixture, 'dry', false);
    await executeDockAction(hass, configFixture, 'dry', true);
    await executeDockAction(hass, configFixture, 'drain', false);
    expect(calls).toEqual([
      { command: 'app_start_collect_dust' },
      { command: 'app_start_wash' },
      { command: 'app_set_dryer_status', params: { status: 1 } },
      { command: 'app_set_dryer_status', params: { status: 0 } },
      { command: 'app_empty_rinse_tank_water' },
    ]);
  });
});

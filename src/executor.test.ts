import { describe, expect, it, vi } from 'vitest';
import { executeJob } from './executor';
import { configFixture, createHass } from './test/fixtures';

describe('job executor', () => {
  it('orders floor, safe SmartPlan exit, mop, fan and clean-area calls', async () => {
    const hass = createHass();
    hass.states['select.mop_mode'].state = 'smart_mode';
    hass.states['select.mop_intensity'].state = 'off';
    const calls: string[] = [];
    hass.callService = vi.fn(async (domain, service, data, target) => {
      calls.push(`${domain}.${service}:${String(data?.option ?? data?.fan_speed ?? data?.command ?? (data?.cleaning_area_id as string[] | undefined)?.join(','))}`);
      if (domain === 'select') hass.states[String(target?.entity_id)].state = String(data?.option);
    });
    const upstairs = configFixture.floors[1];
    const rooms = [upstairs.rooms[0], upstairs.rooms[2]];
    const result = await executeJob({
      getHass: () => hass,
      config: configFixture,
      floor: upstairs,
      rooms,
      draft: { preset_id: 'custom', strategy: 'custom', cleaning_type: 'vacuum_and_mop', fan_speed: 'balanced', mop_mode: 'standard', mop_intensity: 'medium', cleaning_count: 1 },
      pollMs: 0,
    });
    expect(result).toEqual(['office', 'bedroom']);
    expect(calls).toEqual([
      'select.select_option:Upstairs',
      'select.select_option:custom',
      'select.select_option:standard',
      'select.select_option:medium',
      'vacuum.set_fan_speed:balanced',
      'vacuum.send_command:set_clean_repeat_times',
      'vacuum.clean_area:office,bedroom',
    ]);
  });

  it('lets SmartPlan own suction and intensity', async () => {
    const hass = createHass();
    const calls: Array<{ domain: string; service: string; data?: Record<string, unknown> }> = [];
    hass.callService = vi.fn(async (domain, service, data, target) => {
      calls.push({ domain, service, data });
      if (domain === 'select') hass.states[String(target?.entity_id)].state = String(data?.option);
    });
    await executeJob({
      getHass: () => hass,
      config: configFixture,
      floor: configFixture.floors[0],
      rooms: [configFixture.floors[0].rooms[0]],
      draft: { preset_id: 'smartplan', strategy: 'smartplan', cleaning_type: 'vacuum_and_mop', fan_speed: 'turbo', mop_intensity: 'high', cleaning_count: 1 },
      pollMs: 0,
    });
    expect(calls).toEqual([
      {
        domain: 'vacuum',
        service: 'send_command',
        data: {
          command: 'set_clean_motor_mode',
          params: [{ fan_power: 110, water_box_mode: 209, mop_mode: 306 }],
        },
      },
      {
        domain: 'vacuum',
        service: 'send_command',
        data: { command: 'set_clean_repeat_times', params: { repeat: 1 } },
      },
      {
        domain: 'vacuum',
        service: 'clean_area',
        data: { cleaning_area_id: ['kitchen'] },
      },
    ]);
  });

  it('aborts before cleaning after a settings failure', async () => {
    const hass = createHass();
    const calls: string[] = [];
    hass.callService = vi.fn(async (domain, service, data, target) => {
      calls.push(`${domain}.${service}`);
      if (domain === 'select') hass.states[String(target?.entity_id)].state = String(data?.option);
      if (service === 'set_fan_speed') throw new Error('device rejected setting');
    });
    await expect(executeJob({
      getHass: () => hass,
      config: configFixture,
      floor: configFixture.floors[0],
      rooms: [configFixture.floors[0].rooms[0]],
      draft: { preset_id: 'vacuum_and_mop', strategy: 'custom', cleaning_type: 'vacuum_and_mop', fan_speed: 'balanced', mop_mode: 'custom', mop_intensity: 'off', cleaning_count: 1 },
      pollMs: 0,
    })).rejects.toMatchObject({ operation: 'set_fan_speed' });
    expect(calls).not.toContain('vacuum.clean_area');
  });

  it('rejects busy, errored, unmapped and unsupported jobs during preflight', async () => {
    const hass = createHass();
    hass.states['vacuum.roborock'].state = 'cleaning';
    await expect(executeJob({ getHass: () => hass, config: configFixture, floor: configFixture.floors[0], rooms: [], draft: { preset_id: 'x', strategy: 'custom', cleaning_type: 'vacuum', cleaning_count: 1 } })).rejects.toMatchObject({ operation: 'preflight' });
  });

  it('uses the high-level Vacuum mode and never sends mop intensity off', async () => {
    const hass = createHass();
    // HA 2026.8 can expose the new entity as unknown until its first write.
    hass.states['select.cleaning_mode'].state = 'unknown';
    const calls: string[] = [];
    hass.callService = vi.fn(async (domain, service, data, target) => {
      calls.push(`${domain}.${service}:${String(data?.option ?? data?.fan_speed ?? data?.command ?? (data?.cleaning_area_id as string[] | undefined)?.join(','))}`);
      if (domain === 'select') hass.states[String(target?.entity_id)].state = String(data?.option);
    });
    await executeJob({
      getHass: () => hass,
      config: configFixture,
      floor: configFixture.floors[0],
      rooms: [configFixture.floors[0].rooms[0]],
      draft: { preset_id: 'vacuum_only', strategy: 'custom', cleaning_type: 'vacuum', fan_speed: 'balanced', mop_mode: 'standard', cleaning_count: 1 },
      pollMs: 0,
    });
    expect(calls).toEqual([
      'select.select_option:vacuum',
      'select.select_option:standard',
      'vacuum.set_fan_speed:balanced',
      'vacuum.send_command:set_clean_repeat_times',
      'vacuum.clean_area:kitchen',
    ]);
    expect(calls.some((call) => call.includes(':off'))).toBe(false);
  });

  it('uses one atomic Vacuum-mode command on Home Assistant 2026.7 and older', async () => {
    const hass = createHass();
    const calls: Array<{ domain: string; service: string; data?: Record<string, unknown> }> = [];
    hass.callService = vi.fn(async (domain, service, data, target) => {
      calls.push({ domain, service, data });
      if (domain === 'select') hass.states[String(target?.entity_id)].state = String(data?.option);
    });
    await executeJob({
      getHass: () => hass,
      config: {
        ...configFixture,
        entities: { ...configFixture.entities, cleaning_mode: 'select.not_installed_yet' },
        vacuum_mode_fallback: 'set_clean_motor_mode',
      },
      floor: configFixture.floors[0],
      rooms: [configFixture.floors[0].rooms[0]],
      draft: { preset_id: 'vacuum_only', strategy: 'custom', cleaning_type: 'vacuum', fan_speed: 'balanced', mop_mode: 'standard', cleaning_count: 1 },
      pollMs: 0,
    });
    expect(calls[0]).toEqual({
      domain: 'vacuum',
      service: 'send_command',
      data: {
        command: 'set_clean_motor_mode',
        params: [{ fan_power: 102, water_box_mode: 200, mop_mode: 300 }],
      },
    });
    expect(calls.some(({ domain, data }) => domain === 'select' && data?.option === 'off')).toBe(false);
    expect(calls.at(-1)).toMatchObject({ domain: 'vacuum', service: 'clean_area' });
  });

  it('sends the device-native x2 object before a native HA area clean', async () => {
    const hass = createHass();
    const calls: Array<{ domain: string; service: string; data?: Record<string, unknown> }> = [];
    hass.callService = vi.fn(async (domain, service, data, target) => {
      calls.push({ domain, service, data });
      if (domain === 'select') hass.states[String(target?.entity_id)].state = String(data?.option);
    });
    await executeJob({
      getHass: () => hass,
      config: configFixture,
      floor: configFixture.floors[0],
      rooms: [configFixture.floors[0].rooms[1]],
      draft: { preset_id: 'vacuum_only', strategy: 'custom', cleaning_type: 'vacuum', fan_speed: 'balanced', mop_mode: 'standard', cleaning_count: 2 },
      pollMs: 0,
    });
    expect(calls).toContainEqual({
      domain: 'vacuum',
      service: 'send_command',
      data: { command: 'set_clean_repeat_times', params: { repeat: 2 } },
    });
    expect(calls.at(-1)).toEqual({
      domain: 'vacuum',
      service: 'clean_area',
      data: { cleaning_area_id: ['hallway'] },
    });
  });

  it('launches Vac followed by Mop through the configured two-phase script', async () => {
    const hass = createHass();
    const calls: Array<{ domain: string; service: string; data?: Record<string, unknown> }> = [];
    hass.callService = vi.fn(async (domain, service, data, target) => {
      calls.push({ domain, service, data });
      if (domain === 'select') hass.states[String(target?.entity_id)].state = String(data?.option);
    });
    await executeJob({
      getHass: () => hass,
      config: configFixture,
      floor: configFixture.floors[0],
      rooms: [configFixture.floors[0].rooms[1], configFixture.floors[0].rooms[2]],
      draft: { preset_id: 'vacuum_then_mop', strategy: 'custom', cleaning_type: 'vacuum_then_mop', fan_speed: 'turbo', mop_mode: 'fast', mop_intensity: 'medium', cleaning_count: 1 },
      pollMs: 0,
    });
    expect(calls.at(-1)).toEqual({
      domain: 'script',
      service: 'turn_on',
      data: {
        variables: {
          cleaning_area_id: ['hallway', 'living_room'],
          fan_speed: 'turbo',
          mop_mode: 'fast',
          mop_intensity: 'medium',
        },
      },
    });
    expect(calls.some(({ service }) => service === 'clean_area')).toBe(false);
    expect(calls.some(({ data }) => data?.command === 'app_segment_clean')).toBe(false);
  });

  it('rejects Vac followed by Mop when the orchestration script is missing', async () => {
    const hass = createHass();
    await expect(executeJob({
      getHass: () => hass,
      config: { ...configFixture, entities: { ...configFixture.entities, vacuum_then_mop_script: undefined } },
      floor: configFixture.floors[0],
      rooms: [configFixture.floors[0].rooms[1]],
      draft: { preset_id: 'vacuum_then_mop', strategy: 'custom', cleaning_type: 'vacuum_then_mop', fan_speed: 'quiet', mop_mode: 'fast', mop_intensity: 'medium', cleaning_count: 1 },
    })).rejects.toMatchObject({ operation: 'start_vacuum_then_mop' });
  });
});

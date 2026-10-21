import { describe, expect, it, vi } from 'vitest';
import { executeJob } from './executor';
import { configFixture, createHass } from './test/fixtures';

describe('job executor', () => {
  it('starts a Vacuum zone through the native Roborock action without a separate repeat command', async () => {
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
      rooms: [],
      zone: { x1: 25000, y1: 21000, x2: 28000, y2: 24000 },
      draft: { preset_id: 'vacuum_only', strategy: 'custom', cleaning_type: 'vacuum', fan_speed: 'balanced', cleaning_count: 2 },
      pollMs: 0,
    });
    expect(calls).toEqual([
      { domain: 'select', service: 'select_option', data: { option: 'vacuum' } },
      { domain: 'vacuum', service: 'set_fan_speed', data: { fan_speed: 'balanced' } },
      {
        domain: 'roborock',
        service: 'set_vacuum_zoned_cleaning',
        data: { x1: 25000, y1: 21000, x2: 28000, y2: 24000, repeats: 2 },
      },
    ]);
    expect(calls.some(({ data }) => data?.command === 'set_clean_repeat_times')).toBe(false);
  });

  it('applies Vac & Mop settings before starting a native Roborock zone', async () => {
    const hass = createHass();
    const calls: string[] = [];
    hass.callService = vi.fn(async (domain, service, data, target) => {
      calls.push(`${domain}.${service}:${String(data?.option ?? data?.fan_speed ?? data?.command ?? data?.x1)}`);
      if (domain === 'select') hass.states[String(target?.entity_id)].state = String(data?.option);
    });
    await executeJob({
      getHass: () => hass,
      config: configFixture,
      floor: configFixture.floors[0],
      rooms: [],
      zone: { x1: 25000, y1: 21000, x2: 28000, y2: 24000 },
      draft: { preset_id: 'vacuum_and_mop', strategy: 'custom', cleaning_type: 'vacuum_and_mop', fan_speed: 'turbo', mop_mode: 'deep', mop_intensity: 'high', cleaning_count: 1 },
      pollMs: 0,
    });
    expect(calls).toEqual([
      'select.select_option:deep',
      'select.select_option:high',
      'vacuum.set_fan_speed:turbo',
      'roborock.set_vacuum_zoned_cleaning:25000',
    ]);
  });

  it('runs Mop only through the cleaning-mode selector without touching suction', async () => {
    const hass = createHass();
    const calls: string[] = [];
    hass.callService = vi.fn(async (domain, service, data, target) => {
      calls.push(`${domain}.${service}:${String(data?.option ?? data?.fan_speed ?? data?.command ?? (data?.cleaning_area_id as string[] | undefined)?.join(','))}`);
      if (domain === 'select') hass.states[String(target?.entity_id)].state = String(data?.option);
    });
    await executeJob({
      getHass: () => hass,
      config: { ...configFixture, enable_mop_only: true },
      floor: configFixture.floors[0],
      rooms: [configFixture.floors[0].rooms[0]],
      draft: { preset_id: 'mop_only', strategy: 'custom', cleaning_type: 'mop', fan_speed: 'turbo', mop_mode: 'deep', mop_intensity: 'high', cleaning_count: 1 },
      pollMs: 0,
    });
    expect(calls).toEqual([
      'select.select_option:mop',
      'select.select_option:deep',
      'select.select_option:high',
      'vacuum.send_command:set_clean_repeat_times',
      'vacuum.clean_area:kitchen',
    ]);
  });

  it('refuses Mop only unless enable_mop_only is set', async () => {
    const hass = createHass();
    hass.callService = vi.fn();
    await expect(executeJob({
      getHass: () => hass,
      config: configFixture,
      floor: configFixture.floors[0],
      rooms: [configFixture.floors[0].rooms[0]],
      draft: { preset_id: 'mop_only', strategy: 'custom', cleaning_type: 'mop', mop_mode: 'standard', mop_intensity: 'medium', cleaning_count: 1 },
      pollMs: 0,
    })).rejects.toMatchObject({ operation: 'preflight' });
    expect(hass.callService).not.toHaveBeenCalled();
  });

  it('rejects Mop only when the cleaning-mode selector lacks mop', async () => {
    const hass = createHass();
    hass.states['select.cleaning_mode'].attributes.options = ['vacuum', 'vac_and_mop'];
    hass.callService = vi.fn();
    await expect(executeJob({
      getHass: () => hass,
      config: { ...configFixture, enable_mop_only: true },
      floor: configFixture.floors[0],
      rooms: [configFixture.floors[0].rooms[0]],
      draft: { preset_id: 'mop_only', strategy: 'custom', cleaning_type: 'mop', mop_mode: 'standard', mop_intensity: 'medium', cleaning_count: 1 },
      pollMs: 0,
    })).rejects.toMatchObject({ operation: 'set_cleaning_mode' });
    expect(hass.callService).not.toHaveBeenCalledWith('vacuum', 'clean_area', expect.anything(), expect.anything());
  });

  it('rejects unsupported zone modes before changing vacuum settings', async () => {
    const hass = createHass();
    hass.callService = vi.fn();
    await expect(executeJob({
      getHass: () => hass,
      config: configFixture,
      floor: configFixture.floors[0],
      rooms: [],
      zone: { x1: 25000, y1: 21000, x2: 28000, y2: 24000 },
      draft: { preset_id: 'smartplan', strategy: 'smartplan', cleaning_type: 'vacuum_and_mop', cleaning_count: 1 },
    })).rejects.toMatchObject({ operation: 'preflight' });
    expect(hass.callService).not.toHaveBeenCalled();
  });

  it('rejects a mop route outside the configured mode allow-list before changing settings', async () => {
    const hass = createHass();
    hass.callService = vi.fn();
    await expect(executeJob({
      getHass: () => hass,
      config: { ...configFixture, mop_routes: { vacuum_and_mop: ['fast'] } },
      floor: configFixture.floors[0],
      rooms: [configFixture.floors[0].rooms[0]],
      draft: { preset_id: 'vacuum_and_mop', strategy: 'custom', cleaning_type: 'vacuum_and_mop', fan_speed: 'balanced', mop_mode: 'standard', mop_intensity: 'medium', cleaning_count: 1 },
    })).rejects.toMatchObject({ operation: 'preflight' });
    expect(hass.callService).not.toHaveBeenCalled();
  });

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

  it('reasserts the selected floor when a settings write changes the active map', async () => {
    const hass = createHass();
    const mapSelect = configFixture.entities?.map_select as string;
    const calls: string[] = [];
    hass.callService = vi.fn(async (domain, service, data, target) => {
      calls.push(`${domain}.${service}:${String(data?.option ?? data?.fan_speed ?? data?.command ?? (data?.cleaning_area_id as string[] | undefined)?.join(','))}`);
      if (domain === 'select') hass.states[String(target?.entity_id)].state = String(data?.option);
      if (service === 'set_fan_speed') hass.states[mapSelect].state = 'Downstairs';
    });
    const upstairs = configFixture.floors[1];
    await executeJob({
      getHass: () => hass,
      config: configFixture,
      floor: upstairs,
      rooms: [upstairs.rooms[0]],
      draft: { preset_id: 'vacuum_only', strategy: 'custom', cleaning_type: 'vacuum', fan_speed: 'balanced', mop_mode: 'standard', cleaning_count: 1 },
      pollMs: 0,
    });
    expect(calls).toEqual([
      'select.select_option:Upstairs',
      'select.select_option:vacuum',
      'vacuum.set_fan_speed:balanced',
      'vacuum.send_command:set_clean_repeat_times',
      'select.select_option:Upstairs',
      'vacuum.clean_area:office',
    ]);
  });

  it('starts one whole-map job when every room on the floor is selected', async () => {
    const hass = createHass();
    const calls: Array<{ domain: string; service: string; data?: Record<string, unknown> }> = [];
    hass.callService = vi.fn(async (domain, service, data, target) => {
      calls.push({ domain, service, data });
      if (domain === 'select') hass.states[String(target?.entity_id)].state = String(data?.option);
    });
    const upstairs = configFixture.floors[1];
    const result = await executeJob({
      getHass: () => hass,
      config: configFixture,
      floor: upstairs,
      rooms: upstairs.rooms,
      draft: { preset_id: 'vacuum_only', strategy: 'custom', cleaning_type: 'vacuum', fan_speed: 'balanced', mop_mode: 'standard', cleaning_count: 1 },
      pollMs: 0,
    });
    expect(result).toEqual(['office', 'overloop', 'bedroom', 'waskamer']);
    expect(calls.at(-1)).toEqual({ domain: 'vacuum', service: 'start', data: undefined });
    expect(calls.some(({ service }) => service === 'clean_area')).toBe(false);
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
      'vacuum.set_fan_speed:balanced',
      'vacuum.send_command:set_clean_repeat_times',
      'vacuum.clean_area:kitchen',
    ]);
    expect(calls.some((call) => call.includes(':off'))).toBe(false);
  });

  it('starts Vac & Mop when HA accepts the mode but keeps its derived selector unknown', async () => {
    const hass = createHass();
    hass.states['select.cleaning_mode'].state = 'unknown';
    const calls: string[] = [];
    hass.callService = vi.fn(async (domain, service, data, target) => {
      calls.push(`${domain}.${service}:${String(data?.option ?? data?.fan_speed ?? data?.command ?? (data?.cleaning_area_id as string[] | undefined)?.join(','))}`);
      if (domain === 'select' && target?.entity_id !== 'select.cleaning_mode') {
        hass.states[String(target?.entity_id)].state = String(data?.option);
      }
    });
    await executeJob({
      getHass: () => hass,
      config: configFixture,
      floor: configFixture.floors[0],
      rooms: [configFixture.floors[0].rooms[0]],
      draft: { preset_id: 'vacuum_and_mop', strategy: 'custom', cleaning_type: 'vacuum_and_mop', fan_speed: 'balanced', mop_mode: 'standard', mop_intensity: 'medium', cleaning_count: 1 },
      pollMs: 0,
    });
    expect(hass.states['select.cleaning_mode'].state).toBe('unknown');
    expect(calls).toEqual([
      'select.select_option:vac_and_mop',
      'select.select_option:standard',
      'vacuum.set_fan_speed:balanced',
      'vacuum.send_command:set_clean_repeat_times',
      'vacuum.clean_area:kitchen',
    ]);
  });

  it('still aborts Vac & Mop when HA rejects the cleaning mode service call', async () => {
    const hass = createHass();
    hass.states['select.cleaning_mode'].state = 'unknown';
    const calls: string[] = [];
    hass.callService = vi.fn(async (domain, service, _data, target) => {
      calls.push(`${domain}.${service}`);
      if (target?.entity_id === 'select.cleaning_mode') throw new Error('device rejected setting');
    });
    await expect(executeJob({
      getHass: () => hass,
      config: configFixture,
      floor: configFixture.floors[0],
      rooms: [configFixture.floors[0].rooms[0]],
      draft: { preset_id: 'vacuum_and_mop', strategy: 'custom', cleaning_type: 'vacuum_and_mop', fan_speed: 'balanced', mop_mode: 'standard', mop_intensity: 'medium', cleaning_count: 1 },
      pollMs: 0,
    })).rejects.toMatchObject({ operation: 'set_cleaning_mode' });
    expect(calls).not.toContain('vacuum.clean_area');
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

  it('launches Vac followed by Mop through the floor native routine', async () => {
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
      domain: 'button',
      service: 'press',
      data: {},
    });
    expect(calls.some(({ service }) => service === 'clean_area')).toBe(false);
    expect(calls.some(({ data }) => data?.command === 'app_segment_clean')).toBe(false);
  });

  it('rejects Vac followed by Mop when the orchestration script is missing', async () => {
    const hass = createHass();
    const floor = { ...configFixture.floors[0], vacuum_then_mop_routine: undefined };
    await expect(executeJob({
      getHass: () => hass,
      config: { ...configFixture, entities: { ...configFixture.entities, vacuum_then_mop_script: undefined } },
      floor,
      rooms: [floor.rooms[1]],
      draft: { preset_id: 'vacuum_then_mop', strategy: 'custom', cleaning_type: 'vacuum_then_mop', fan_speed: 'quiet', mop_mode: 'fast', mop_intensity: 'medium', cleaning_count: 1 },
    })).rejects.toMatchObject({ operation: 'start_vacuum_then_mop' });
  });
});

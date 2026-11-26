import { describe, expect, it } from 'vitest';
import { configFixture, createHass } from './test/fixtures';
import { actionFor, cardSchedules, isSimpleSchedule, scheduleActions, schedulePayload, scriptFields, weekdayList, weekdaySet, type SchedulerItem } from './schedules';

const vacAndMop = { name: 'Vac & Mop', script: 'script.clean', data: { cleaning_mode: 'vac_and_mop' } };
const vacuum = { name: 'Vacuum', script: 'script.clean', data: { cleaning_mode: 'vacuum' }, fields: ['suction'] };

function item(overrides: Partial<SchedulerItem> = {}): SchedulerItem {
  return {
    schedule_id: 'abc',
    entity_id: 'switch.schedule_abc',
    weekdays: ['daily'],
    timeslots: [{ start: '03:00:00', stop: null, conditions: [], actions: [{ service: 'script.clean', service_data: { cleaning_mode: 'vac_and_mop', kitchen: 'clean', job_source: 'Scheduled' } }] }],
    repeat_type: 'repeat',
    enabled: true,
    ...overrides,
  };
}

describe('schedules', () => {
  it('offers configured actions, or the preset scripts that exist', () => {
    const hass = createHass();
    expect(scheduleActions({ ...configFixture, schedule_actions: [vacAndMop] }, hass)).toEqual([vacAndMop]);
    const config = { ...configFixture, presets: [{ id: 'evening', name: 'Evening' }] } as typeof configFixture;
    const script = `script.rvmc_${configFixture.entity.split('.')[1]}_evening`;
    expect(scheduleActions(config, hass)).toEqual([]);
    hass.states[script] = { entity_id: script, state: 'off', attributes: {} } as never;
    expect(scheduleActions(config, hass)).toEqual([{ name: 'Evening', script }]);
  });

  it('asks only for the fields that are not fixed', () => {
    const hass = createHass();
    hass.services = { script: { clean: { fields: { cleaning_mode: {}, suction: { name: 'Suction' }, kitchen: {} } } } };
    expect(scriptFields(hass, vacAndMop).map(([key]) => key)).toEqual(['suction', 'kitchen']);
    expect(scriptFields(hass, vacuum).map(([key]) => key)).toEqual(['suction']);
  });

  it('matches a schedule to the job with the same fixed data', () => {
    const actions = [vacuum, vacAndMop];
    expect(actionFor(item().timeslots[0].actions[0], actions)).toBe(vacAndMop);
    expect(cardSchedules([item(), item({ schedule_id: 'x', timeslots: [{ start: '01:00:00', actions: [{ service: 'light.turn_on' }] }] })], actions)).toHaveLength(1);
    expect(isSimpleSchedule(item())).toBe(true);
    expect(isSimpleSchedule(item({ timeslots: [...item().timeslots, ...item().timeslots] }))).toBe(false);
  });

  it('keeps real conditions when editing', () => {
    const conditions = [{ entity_id: 'binary_sensor.home', value: 'on', match_type: 'is' }];
    const existing = item({ timeslots: [{ start: '03:00:00', stop: null, conditions, condition_type: 'and', track_conditions: false, actions: item().timeslots[0].actions }] });
    const payload = schedulePayload({ action: 0, time: '03:00', values: {} }, vacAndMop, existing) as { timeslots: Array<Record<string, unknown>> };
    expect(payload.timeslots[0]).toMatchObject({ conditions, condition_type: 'and', track_conditions: false });
    expect(payload.timeslots[0]).not.toHaveProperty('stop');
  });

  it('reads and writes weekdays', () => {
    expect([...weekdaySet(['workday'])]).toEqual(['mon', 'tue', 'wed', 'thu', 'fri']);
    expect(weekdayList(weekdaySet(['daily']))).toEqual(['daily']);
    expect(weekdayList(new Set(['sun', 'mon']))).toEqual(['mon', 'sun']);
  });

  it('builds add and edit payloads and keeps what it does not edit', () => {
    expect(schedulePayload({ action: 0, time: '07:30', days: new Set(['sat']), values: { kitchen: 'clean', empty: '' } }, vacAndMop)).toEqual({
      weekdays: ['sat'],
      timeslots: [{ start: '07:30:00', actions: [{ service: 'script.clean', service_data: { cleaning_mode: 'vac_and_mop', kitchen: 'clean' } }] }],
      repeat_type: 'repeat',
    });
    const existing = item({ weekdays: ['workday'], name: 'Night' });
    expect(schedulePayload({ action: 0, time: '04:00', values: { kitchen: 'skip' } }, vacAndMop, existing)).toEqual({
      entity_id: 'switch.schedule_abc',
      name: 'Night',
      weekdays: ['workday'],
      timeslots: [{ start: '04:00:00', actions: [{ service: 'script.clean', service_data: { cleaning_mode: 'vac_and_mop', kitchen: 'skip', job_source: 'Scheduled' } }] }],
      repeat_type: 'repeat',
    });
  });
});

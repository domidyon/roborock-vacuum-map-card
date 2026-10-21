import { describe, expect, it, vi } from 'vitest';
import { DOCK_SETTING_OPTIONS } from '../dock-settings';
import { configFixture, createHass } from '../test/fixtures';
import type { HomeAssistant } from '../types';
import { createHelpers, helperSpecs, helpersYaml, planHelpers, ProvisioningError } from './helpers';

const VACUUM = 'vacuum.qrevo_curv_2_flow';
const bare = { ...configFixture, entities: {} };

function recordingHass(): { hass: HomeAssistant; ws: Array<Record<string, unknown>>; services: unknown[][] } {
  const hass = createHass();
  const ws: Array<Record<string, unknown>> = [];
  const services: unknown[][] = [];
  hass.user = { is_admin: true };
  hass.callWS = vi.fn(async (message: Record<string, unknown>) => {
    ws.push(message);
    // Home Assistant derives the id from the name; the rvmc_ name keeps it deterministic.
    return { id: message.name } as never;
  }) as HomeAssistant['callWS'];
  hass.callService = vi.fn(async (...args: unknown[]) => { services.push(args); });
  return { hass, ws, services };
}

describe('helper specs', () => {
  it('describes every dock helper with the dock panel options and deterministic ids', () => {
    const specs = helperSpecs(VACUUM, 'Qrevo');
    expect(specs.map((spec) => `${spec.domain}.${spec.object_id}`)).toEqual([
      'input_select.rvmc_qrevo_curv_2_flow_dock_mop_wash_frequency',
      'input_select.rvmc_qrevo_curv_2_flow_dock_wash_mode',
      'input_select.rvmc_qrevo_curv_2_flow_dock_wash_temperature',
      'input_boolean.rvmc_qrevo_curv_2_flow_dock_auto_empty',
      'input_select.rvmc_qrevo_curv_2_flow_dock_empty_mode',
      'input_boolean.rvmc_qrevo_curv_2_flow_dock_auto_dry',
      'input_select.rvmc_qrevo_curv_2_flow_dock_dry_duration',
    ]);
    expect(specs.find((spec) => spec.key === 'dock_empty_mode')?.options).toEqual(DOCK_SETTING_OPTIONS.empty_mode);
    expect(specs.find((spec) => spec.key === 'dock_auto_dry')?.start).toBe(true);
  });

  it('skips helpers for abilities the dock lacks and adds assisted carry on request', () => {
    const specs = helperSpecs(VACUUM, 'S7', { dock: { auto_empty: true, mop_wash: false, hot_water: false, mop_dry: false }, assistedCarry: true });
    expect(specs.map((spec) => spec.key)).toEqual(['dock_auto_empty', 'dock_empty_mode', 'assisted_carry_stage', 'assisted_carry_job']);
    expect(specs.find((spec) => spec.key === 'assisted_carry_stage')?.options).toContain('carry_downstairs');
  });
});

describe('helper planning', () => {
  it('creates only what is missing and reuses configured helpers', () => {
    const hass = createHass();
    const plan = planHelpers(hass, configFixture, helperSpecs(VACUUM, 'Qrevo'));
    // The fixture config already wires every dock helper.
    expect(plan.create).toEqual([]);
    expect(plan.existing.dock_empty_mode).toBe(configFixture.entities?.dock_empty_mode);
  });

  it('finds earlier rvmc_ helpers and reports select helpers with missing options', () => {
    const hass = createHass();
    hass.states['input_select.rvmc_qrevo_curv_2_flow_dock_wash_mode'] = {
      entity_id: 'input_select.rvmc_qrevo_curv_2_flow_dock_wash_mode', state: 'smart', attributes: { options: ['smart', 'light'] },
    };
    const plan = planHelpers(hass, bare, helperSpecs(VACUUM, 'Qrevo'));
    expect(plan.existing).toEqual({ dock_wash_mode: 'input_select.rvmc_qrevo_curv_2_flow_dock_wash_mode' });
    expect(plan.mismatched).toEqual([{ key: 'dock_wash_mode', entity_id: 'input_select.rvmc_qrevo_curv_2_flow_dock_wash_mode', missing: ['balanced', 'deep'] }]);
    expect(plan.create).toHaveLength(6);
  });
});

describe('helper creation', () => {
  it('creates, renames and initialises helpers, then returns the config entities', async () => {
    const { hass, ws, services } = recordingHass();
    const specs = helperSpecs(VACUUM, 'Qrevo').filter((spec) => ['dock_empty_mode', 'dock_auto_dry'].includes(spec.key));
    const entities = await createHelpers(hass, planHelpers(hass, bare, specs));
    expect(ws).toEqual([
      { type: 'input_select/create', name: 'rvmc_qrevo_curv_2_flow_dock_empty_mode', icon: 'mdi:delete-variant', options: ['smart', 'light', 'balanced', 'max'] },
      { type: 'input_select/update', input_select_id: 'rvmc_qrevo_curv_2_flow_dock_empty_mode', name: 'Qrevo dock empty mode', icon: 'mdi:delete-variant', options: ['smart', 'light', 'balanced', 'max'] },
      { type: 'input_boolean/create', name: 'rvmc_qrevo_curv_2_flow_dock_auto_dry', icon: 'mdi:fan' },
      { type: 'input_boolean/update', input_boolean_id: 'rvmc_qrevo_curv_2_flow_dock_auto_dry', name: 'Qrevo dock auto-drying', icon: 'mdi:fan' },
    ]);
    expect(services).toEqual([
      ['input_select', 'select_option', { option: 'smart' }, { entity_id: 'input_select.rvmc_qrevo_curv_2_flow_dock_empty_mode' }],
      ['input_boolean', 'turn_on', {}, { entity_id: 'input_boolean.rvmc_qrevo_curv_2_flow_dock_auto_dry' }],
    ]);
    expect(entities).toEqual({
      dock_empty_mode: 'input_select.rvmc_qrevo_curv_2_flow_dock_empty_mode',
      dock_auto_dry: 'input_boolean.rvmc_qrevo_curv_2_flow_dock_auto_dry',
    });
  });

  it('is idempotent once the helpers exist', async () => {
    const { hass, ws } = recordingHass();
    const specs = helperSpecs(VACUUM, 'Qrevo');
    for (const spec of specs) hass.states[`${spec.domain}.${spec.object_id}`] = { entity_id: `${spec.domain}.${spec.object_id}`, state: 'off', attributes: { options: spec.options } };
    const entities = await createHelpers(hass, planHelpers(hass, bare, specs));
    expect(ws).toEqual([]);
    expect(Object.keys(entities)).toHaveLength(specs.length);
  });

  it('refuses without an administrator', async () => {
    const { hass } = recordingHass();
    hass.user = { is_admin: false };
    await expect(createHelpers(hass, planHelpers(hass, bare, helperSpecs(VACUUM, 'Qrevo')))).rejects.toBeInstanceOf(ProvisioningError);
  });

  it('offers configuration.yaml for non-admins', () => {
    const yaml = helpersYaml(helperSpecs(VACUUM, 'Qrevo').filter((spec) => ['dock_dry_duration', 'dock_auto_dry'].includes(spec.key)));
    expect(yaml).toBe([
      'input_select:',
      '  rvmc_qrevo_curv_2_flow_dock_dry_duration:',
      '    name: Qrevo dock drying duration',
      '    icon: mdi:timer-outline',
      '    options: [2h, 3h, 4h]',
      'input_boolean:',
      '  rvmc_qrevo_curv_2_flow_dock_auto_dry:',
      '    name: Qrevo dock auto-drying',
      '    icon: mdi:fan',
      '',
    ].join('\n'));
  });
});

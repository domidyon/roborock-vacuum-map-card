import { describe, expect, it, vi } from 'vitest';
import { BUILT_IN_PRESETS } from './presets';
import { presetScript, PresetExportError, saveScript } from './presets-export';
import { configFixture, createHass, createS7Hass } from './test/fixtures';
import { toYaml } from './yaml';

const preset = (id: string) => BUILT_IN_PRESETS.find((item) => item.id === id)!;

describe('preset scripts', () => {
  it.each(['smartplan', 'vacuum_and_mop', 'vacuum_only', 'vacuum_then_mop'])('exports the %s preset', (id) => {
    const script = presetScript(createHass(), configFixture, preset(id));
    expect(script.id).toBe(`rvmc_roborock_${id}`);
    expect(toYaml(script.config)).toMatchSnapshot();
  });

  it('exports Mop only when it is enabled', () => {
    expect(() => presetScript(createHass(), configFixture, preset('mop_only'))).toThrow(PresetExportError);
    const script = presetScript(createHass(), { ...configFixture, enable_mop_only: true }, preset('mop_only'));
    const steps = JSON.stringify(script.config.sequence);
    expect(steps).toContain('"option":"mop"');
    expect(steps).not.toContain('set_fan_speed');
  });

  it('mirrors the card: map first, settings, cleaning count, then whole floor or areas', () => {
    const script = presetScript(createHass(), configFixture, { id: 'evening', name: 'Evening', strategy: 'custom', cleaning_type: 'vacuum', fan_speed: 'quiet', cleaning_count: 2 });
    const aliases = (script.config.sequence as Array<{ alias?: string }>).map((step) => step.alias);
    expect(aliases).toEqual(['Select the floor map', 'Cleaning mode', 'Suction', 'Cleaning count', 'Start cleaning']);
    expect(JSON.stringify(script.config.sequence)).toContain('"params":{"repeat":2}');
    expect(script.config.fields).toMatchObject({ floor: { default: configFixture.floors[0].id }, areas: { selector: { area: { multiple: true } } } });
  });

  it('uses the per-segment repeat on models without a cleaning-count setting', () => {
    const script = presetScript(createS7Hass(), configFixture, { id: 'twice', name: 'Twice', strategy: 'custom', cleaning_type: 'vacuum', fan_speed: 'balanced', cleaning_count: 2 });
    const steps = JSON.stringify(script.config.sequence);
    expect(steps).not.toContain('set_clean_repeat_times');
    expect(steps).toContain('app_segment_clean');
  });

  it('refuses presets the robot cannot run', () => {
    expect(() => presetScript(createS7Hass(), configFixture, preset('smartplan'))).toThrow('SmartPlan');
  });

  it('saves through the script config API for administrators only', async () => {
    const hass = createHass();
    hass.user = { is_admin: true };
    hass.callApi = vi.fn(async () => ({ result: 'ok' })) as never;
    const script = presetScript(hass, configFixture, preset('vacuum_only'));
    await expect(saveScript(hass, script)).resolves.toBe('script.rvmc_roborock_vacuum_only');
    expect(hass.callApi).toHaveBeenCalledWith('POST', 'config/script/config/rvmc_roborock_vacuum_only', script.config);
    hass.user = { is_admin: false };
    await expect(saveScript(hass, script)).rejects.toBeInstanceOf(PresetExportError);
  });
});

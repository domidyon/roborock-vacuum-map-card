import { describe, expect, it } from 'vitest';
import { detectCapabilities } from './capabilities';
import { MODEL_PROFILES, findProfile } from './profiles';
import { getAvailablePresets } from './presets';
import { configFixture, createHass, createS7Hass, withModel } from './test/fixtures';

describe('model profiles', () => {
  it('has unique model ids and documented sources', () => {
    const models = MODEL_PROFILES.flatMap((profile) => profile.models);
    expect(new Set(models).size).toBe(models.length);
    for (const profile of MODEL_PROFILES) expect(profile.sources.length).toBeGreaterThan(0);
  });

  it('resolves profiles by registry model id', () => {
    expect(findProfile('roborock.vacuum.a245')?.label).toBe('Qrevo Curv 2 Flow');
    expect(findProfile('roborock.vacuum.a15')?.repeat).toBe('app_segment_clean');
    expect(findProfile('roborock.vacuum.unknown')).toBeUndefined();
    expect(findProfile(undefined)).toBeUndefined();
  });

  it('detects S7-style behavior from live options when no profile matches', () => {
    const capabilities = detectCapabilities(createS7Hass(), configFixture);
    expect(capabilities).toMatchObject({ hasSmartPlan: false, roomRepeatStrategy: 'app_segment_clean', profile: undefined });
  });

  it('keeps the modern command path for SmartPlan models without a profile', () => {
    const capabilities = detectCapabilities(createHass(), configFixture);
    expect(capabilities).toMatchObject({ hasSmartPlan: true, roomRepeatStrategy: 'set_clean_repeat_times' });
  });

  it('lets a profile override live-option detection', () => {
    // Modern-looking options, but the registry says S7: the profile wins.
    const capabilities = detectCapabilities(withModel(createHass(), 'roborock.vacuum.a15'), configFixture);
    expect(capabilities).toMatchObject({
      model: 'roborock.vacuum.a15',
      profile: { label: 'S7 / S7+', status: 'experimental' },
      hasSmartPlan: false,
      roomRepeatStrategy: 'app_segment_clean',
    });
  });

  it('lets explicit config override the profile', () => {
    const config = { ...configFixture, enable_smartplan: true, cleaning_count_command: 'set_clean_repeat_times' as const, mop_routes: { mop: ['fast'] } };
    const capabilities = detectCapabilities(withModel(createS7Hass(), 'roborock.vacuum.a144'), config);
    expect(capabilities).toMatchObject({ hasSmartPlan: true, roomRepeatStrategy: 'set_clean_repeat_times', mopRoutes: { mop: ['fast'] } });
  });

  it('applies profile mop routes when the config has none', () => {
    const capabilities = detectCapabilities(withModel(createHass(), 'roborock.vacuum.a144'), configFixture);
    expect(capabilities.mopRoutes).toEqual({ vacuum_and_mop: ['fast', 'standard'], mop: ['fast', 'standard', 'deep', 'deep_plus'] });
  });

  it('hides SmartPlan and adapts built-in water flow on S7 profiles', () => {
    const capabilities = detectCapabilities(createS7Hass(), configFixture);
    const presets = getAvailablePresets(configFixture, capabilities);
    expect(presets.find(({ preset }) => preset.id === 'smartplan')).toMatchObject({ available: false, reason: 'Unsupported SmartPlan' });
    expect(presets.find(({ preset }) => preset.id === 'vacuum_and_mop')).toMatchObject({
      available: true,
      preset: { mop_mode: 'standard', mop_intensity: 'standard' },
    });
  });

  it('keeps the modern Vac & Mop default', () => {
    const presets = getAvailablePresets(configFixture, detectCapabilities(createHass(), configFixture));
    expect(presets.find(({ preset }) => preset.id === 'vacuum_and_mop')).toMatchObject({ available: true, preset: { mop_intensity: 'medium' } });
  });
});

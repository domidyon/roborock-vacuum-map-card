import { describe, expect, it } from 'vitest';
import { detectCapabilities } from './capabilities';
import { getAvailablePresets } from './presets';
import { configFixture, createHass } from './test/fixtures';

describe('capability detection and presets', () => {
  it('derives transport and setting options from live entities', () => {
    const capabilities = detectCapabilities(createHass(), configFixture);
    expect(capabilities).toMatchObject({ canStart: true, canPause: true, canStop: true, canDock: true, hasCleaningMode: true, hasMopMode: true });
    expect(capabilities.fanSpeeds).toEqual(['quiet', 'balanced', 'turbo', 'max', 'max_plus', 'off_raise_main_brush', 'smart_mode', 'custom']);
    expect(capabilities.cleaningModes).toEqual(['vacuum', 'vac_and_mop', 'mop']);
  });

  it('marks presets unavailable when required live options are absent', () => {
    const hass = createHass();
    hass.states['select.mop_intensity'].attributes.options = ['off'];
    const presets = getAvailablePresets(configFixture, detectCapabilities(hass, configFixture));
    expect(presets.find(({ preset }) => preset.id === 'vacuum_only')?.available).toBe(true);
    expect(presets.find(({ preset }) => preset.id === 'vacuum_and_mop')?.available).toBe(false);
  });

  it('disables vacuum-only presets without the high-level cleaning mode', () => {
    const config = { ...configFixture, entities: { ...configFixture.entities, cleaning_mode: undefined } };
    const presets = getAvailablePresets(config, detectCapabilities(createHass(), config));
    expect(presets.find(({ preset }) => preset.id === 'vacuum_only')).toMatchObject({
      available: false,
      reason: 'Unsupported cleaning mode “vacuum”',
    });
    expect(presets.find(({ preset }) => preset.id === 'vacuum_and_mop')?.available).toBe(true);
  });

  it('enables vacuum-only with the explicit stable-channel fallback', () => {
    const config = {
      ...configFixture,
      entities: { ...configFixture.entities, cleaning_mode: undefined },
      vacuum_mode_fallback: 'set_clean_motor_mode' as const,
    };
    const presets = getAvailablePresets(config, detectCapabilities(createHass(), config));
    expect(presets.find(({ preset }) => preset.id === 'vacuum_only')?.available).toBe(true);
  });
});

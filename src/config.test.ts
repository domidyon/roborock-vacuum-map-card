import { describe, expect, it } from 'vitest';
import { normalizeConfig, validateConfig } from './config';
import { configFixture } from './test/fixtures';

describe('card config', () => {
  it('applies defaults and preserves unknown keys', () => {
    const parsed = normalizeConfig({ ...configFixture, language: undefined, future_option: { enabled: true } });
    expect(parsed.language).toBe('en');
    expect(parsed.entities).toBeDefined();
    expect(parsed.future_option).toEqual({ enabled: true });
  });

  it('requires a map selector for multiple floors', () => {
    const invalid = { ...configFixture, entities: { ...configFixture.entities, map_select: undefined } };
    expect(validateConfig(invalid)).toContain('entities.map_select: Multiple floors require a map-select entity');
  });

  it('rejects duplicate floor, room and preset IDs', () => {
    const duplicate = {
      ...configFixture,
      floors: [configFixture.floors[0], { ...configFixture.floors[0] }],
      presets: [{ id: 'vacuum_only', name: 'Duplicate', strategy: 'custom' }],
    };
    const errors = validateConfig(duplicate).join('\n');
    expect(errors).toContain('Floor IDs must be unique');
    expect(errors).toContain('Preset IDs must be unique');
  });

  it('requires durable helpers and scripts for assisted carry', () => {
    const invalid = {
      ...configFixture,
      entities: { ...configFixture.entities, assisted_carry_start_script: undefined },
    };
    expect(validateConfig(invalid)).toContain('entities.assisted_carry_start_script: Assisted carry requires this entity');
  });
});

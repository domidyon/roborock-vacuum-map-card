import { describe, expect, it } from 'vitest';
import { normalizeConfig, validateConfig } from './config';
import { configFixture } from './test/fixtures';

describe('card config', () => {
  it('applies defaults and preserves unknown keys', () => {
    const parsed = normalizeConfig({ ...configFixture, language: undefined, future_option: { enabled: true } });
    expect(parsed.language).toBe('en');
    expect(parsed.enable_mop_only).toBe(false);
    expect(parsed.entities).toBeDefined();
    expect(parsed.future_option).toEqual({ enabled: true });
  });

  it('accepts per-mode mop routes and rejects empty route lists', () => {
    expect(validateConfig({ ...configFixture, mop_routes: { vacuum_and_mop: ['fast', 'standard'], mop: ['deep'] } })).toEqual([]);
    expect(validateConfig({ ...configFixture, mop_routes: { mop: [] } }).join('\n')).toContain('mop_routes.mop');
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

  it('allows multiple isolated floors to share one durable assisted-carry workflow', () => {
    const extraFloor = {
      id: 'bathroom',
      name: 'Bathroom',
      map_entity: 'image.bathroom',
      map_select_option: 'Bathroom',
      assisted_carry: true,
      rooms: [{ segment_id: 1, area_id: 'bathroom', name: 'Bathroom' }],
    };
    expect(validateConfig({ ...configFixture, floors: [...configFixture.floors, extraFloor] })).toEqual([]);
  });
});

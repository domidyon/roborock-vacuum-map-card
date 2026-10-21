import { describe, expect, it } from 'vitest';
import { normalizeConfig, validateConfig } from './config';
import { optInConfig08, readmeConfig08 } from './test/legacy-configs';

// Backward-compatibility guard: v0.8.0 configs must keep loading unchanged.
// Only update these snapshots for a deliberate, documented migration.
describe.each([
  ['README multi-floor config', readmeConfig08],
  ['opt-in flags config', optInConfig08],
])('v0.8.0 %s', (_name, config) => {
  it('still validates', () => {
    expect(validateConfig(config)).toEqual([]);
  });

  it('normalizes to the same result', () => {
    expect(normalizeConfig(config)).toMatchSnapshot();
  });

  it('normalizes idempotently', () => {
    const once = normalizeConfig(config);
    expect(normalizeConfig(once)).toEqual(once);
  });
});

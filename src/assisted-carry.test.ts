import { describe, expect, it } from 'vitest';
import { createAssistedJob, decodeAssistedJob, encodeAssistedJob } from './assisted-carry';
import type { JobDraft } from './types';

const drafts: JobDraft[] = [
  {
    preset_id: 'smartplan',
    strategy: 'smartplan',
    cleaning_type: 'vacuum_and_mop',
    cleaning_count: 1,
  },
  {
    preset_id: 'vacuum_then_mop',
    strategy: 'custom',
    cleaning_type: 'vacuum_then_mop',
    fan_speed: 'turbo',
    mop_mode: 'fast',
    mop_intensity: 'high',
    cleaning_count: 1,
  },
  {
    preset_id: 'vacuum_and_mop',
    strategy: 'custom',
    cleaning_type: 'vacuum_and_mop',
    fan_speed: 'balanced',
    mop_mode: 'standard',
    mop_intensity: 'medium',
    cleaning_count: 2,
  },
  {
    preset_id: 'vacuum_only',
    strategy: 'custom',
    cleaning_type: 'vacuum',
    fan_speed: 'max_plus',
    cleaning_count: 2,
  },
];

describe('assisted carry payload', () => {
  it.each(drafts)('round-trips $preset_id below the helper limit', (draft) => {
    const job = createAssistedJob([1, 2, 3, 5, 5], draft);
    const encoded = encodeAssistedJob(job);
    expect(encoded.length).toBeLessThanOrEqual(255);
    expect(decodeAssistedJob(encoded)).toEqual(job);
  });

  it('decodes the old payload as Vac & Mop', () => {
    expect(decodeAssistedJob('{"s":[1,5],"f":"balanced","m":"standard","w":"medium","c":1}')).toEqual({
      segment_ids: [1, 5],
      strategy: 'custom',
      cleaning_type: 'vacuum_and_mop',
      fan_speed: 'balanced',
      mop_mode: 'standard',
      mop_intensity: 'medium',
      cleaning_count: 1,
    });
  });

  it('omits mop controls from Vacuum-only and all manual controls from SmartPlan', () => {
    expect(JSON.parse(encodeAssistedJob(createAssistedJob([1], drafts[3])))).toEqual({
      s: [1], g: 'custom', t: 'vacuum', f: 'max_plus', c: 2,
    });
    expect(JSON.parse(encodeAssistedJob(createAssistedJob([1], drafts[0])))).toEqual({
      s: [1], g: 'smartplan', t: 'vacuum_and_mop', c: 1,
    });
    expect(JSON.parse(encodeAssistedJob(createAssistedJob([1], drafts[1])))).toEqual({
      s: [1], g: 'custom', t: 'vacuum_then_mop', c: 1,
    });
  });
});

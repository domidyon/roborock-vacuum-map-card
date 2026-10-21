import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it, vi } from 'vitest';
import qrevoFeatures from '../test/fixtures/qrevo-curv-2-flow.device-features.json';
import { CATALOG_FLAGS, CATALOG_MODELS, capabilitiesFromFlags, compatibility, findCatalogModel, flagsFromDeviceFeatures, modelFacts, modelName } from '.';
import { loadDeviceFlags } from './device-flags';
import { cleanRoutes, decamelize } from './flags';
import { createDiscoveryHass } from '../test/discovery-hass';

const qrevoFlags = flagsFromDeviceFeatures(qrevoFeatures.device_features);
const catalogFlags = (model: string) => new Set(findCatalogModel(model)?.features ?? []);

describe('feature flags', () => {
  it('converts diagnostics names like python-roborock', () => {
    expect(decamelize('isCleanCountSettingSupported')).toBe('is_clean_count_setting_supported');
    expect(decamelize('isCes2022Supported')).toBe('is_ces_2022_supported');
    expect(decamelize('isSupportedDrying')).toBe('is_supported_drying');
  });

  it('only reads flags the catalog generator exports', () => {
    const source = readFileSync(resolve(__dirname, 'flags.ts'), 'utf8');
    const used = [...new Set(source.match(/'is_[a-z0-9_]+'/g)?.map((flag) => flag.slice(1, -1)))];
    expect(used.filter((flag) => !CATALOG_FLAGS.includes(flag))).toEqual([]);
  });

  it('derives the live Qrevo Curv 2 Flow behaviour from its own flags', () => {
    expect(capabilitiesFromFlags(qrevoFlags)).toEqual({
      repeat: 'set_clean_repeat_times',
      smartplan: true,
      // Matches the selector options Home Assistant shows (no plain deep: clean efficiency).
      mop_routes: ['standard', 'deep_plus', 'fast'],
      vac_then_mop: true,
      multi_floor: true,
      dock: { auto_empty: true, mop_wash: true, hot_water: true, mop_dry: true },
    });
  });

  it('derives the S7 behaviour from issue #2 from catalog data', () => {
    const s7 = capabilitiesFromFlags(catalogFlags('roborock.vacuum.a15'));
    expect(s7).toMatchObject({ repeat: 'app_segment_clean', smartplan: false });
    // Issue #2 listed the S7 mop modes as standard, deep, deep_plus (+ custom).
    expect(s7.mop_routes).toEqual(['standard', 'deep', 'deep_plus']);
  });

  it('follows python-roborock route rules', () => {
    expect(cleanRoutes(new Set())).toEqual([]);
    expect(cleanRoutes(new Set(['is_clean_route_setting_supported', 'is_none_pure_clean_mop_with_max_plus']))).toEqual(['fast', 'standard']);
    expect(cleanRoutes(new Set(['is_clean_route_setting_supported', 'is_clean_efficiency_supported', 'is_clean_route_fast_mode_supported']))).toEqual(['standard', 'fast']);
  });
});

describe('model catalog', () => {
  it('is generated from python-roborock with unique models', () => {
    const models = CATALOG_MODELS.map((entry) => entry.model);
    expect(new Set(models).size).toBe(models.length);
    expect(findCatalogModel('roborock.vacuum.a144')).toMatchObject({ names: ['Saros 10R'], family: 'CoralPro', protocol: '1.0' });
    expect(findCatalogModel('roborock.vacuum.ss07')?.protocol).toBe('B01');
    expect(modelName('roborock.vacuum.a245')).toBe('Qrevo Curv 2 Flow');
    expect(modelName('roborock.vacuum.a40')).toBe('Q7 / Q7+');
  });

  it('resolves facts: profile quirks first, then device flags, then catalog', () => {
    expect(modelFacts('roborock.vacuum.a144')).toMatchObject({
      repeat: 'set_clean_repeat_times',
      smartplan: true,
      mop_only: true,
      mop_routes: { vacuum_and_mop: ['fast', 'standard'] },
      sources: { repeat: 'catalog', smartplan: 'catalog', mop_only: 'profile', mop_routes: 'profile' },
    });
    expect(modelFacts('roborock.vacuum.a15').sources).toEqual({ repeat: 'catalog', smartplan: 'catalog', mop_routes: 'catalog' });
    // An unknown model with flags read from the robot.
    expect(modelFacts('roborock.vacuum.zz1', qrevoFlags)).toMatchObject({
      repeat: 'set_clean_repeat_times',
      smartplan: true,
      mop_routes: { vacuum_and_mop: ['standard', 'deep_plus', 'fast'], mop: ['standard', 'deep_plus', 'fast'] },
      sources: { repeat: 'device', smartplan: 'device', mop_routes: 'device' },
    });
    expect(modelFacts('roborock.vacuum.zz1')).toEqual({ sources: {}, profile: undefined });
  });

  it('keeps hand profiles consistent with the robot\'s own flags', () => {
    const profile = modelFacts('roborock.vacuum.a245');
    const fromFlags = capabilitiesFromFlags(qrevoFlags);
    expect(profile.repeat).toBe(fromFlags.repeat);
    expect(profile.smartplan).toBe(fromFlags.smartplan);
    expect([...profile.mop_routes!.vacuum_and_mop!].sort()).toEqual([...fromFlags.mop_routes].sort());
  });
});

describe('compatibility', () => {
  it('supports known V1 vacuums', () => {
    expect(compatibility({ model: 'roborock.vacuum.a245', haVersion: '2026.10.2', hasCustomMap: true })).toEqual({
      verdict: 'supported', reasons: [], name: 'Qrevo Curv 2 Flow', protocol: undefined,
    });
    expect(compatibility({ model: 'roborock.vacuum.a144', hasCustomMap: true }).verdict).toBe('supported');
  });

  it('rejects other protocols, non-vacuums and old Home Assistant', () => {
    expect(compatibility({ model: 'roborock.vacuum.ss07' })).toMatchObject({ verdict: 'unsupported', reasons: ['protocol_unsupported'] });
    expect(compatibility({ model: 'roborock.wetdryvac.a56' }).reasons).toContain('not_a_robot_vacuum');
    expect(compatibility({ model: 'roborock.vacuum.a245', haVersion: '2026.7.3' }).reasons).toContain('home_assistant_too_old');
    expect(compatibility({ model: 'roborock.vacuum.zz1', protocol: 'B01' }).verdict).toBe('unsupported');
  });

  it('marks unknown models and missing maps as limited', () => {
    expect(compatibility({ model: 'roborock.vacuum.zz1', hasCustomMap: true })).toMatchObject({ verdict: 'limited', reasons: ['unknown_model'] });
    expect(compatibility({ model: 'roborock.vacuum.zz1', hasCustomMap: true, hasDeviceFlags: true }).verdict).toBe('supported');
    expect(compatibility({ model: 'roborock.vacuum.a245', hasCustomMap: false })).toMatchObject({ verdict: 'limited', reasons: ['custom_map_missing'] });
  });
});

describe('loadDeviceFlags', () => {
  const ROBOT = 'c044667c97b62cdcf9dc0dedb199a197';
  const diagnostics = (duid: string) => ({
    home_assistant: { version: '2026.10.2' },
    data: {
      config_entry: { token: 'secret' },
      coordinators: {
        '**REDACTED-0**': {
          device: { duid, pv: '1.0', localKey: 'secret', extra: 'secret' },
          product: { model: 'roborock.vacuum.a245' },
          traits: {
            device_features: { ...qrevoFeatures.device_features, newFeatureInfoStr: 'abc', featureInfo: [111] },
            map_content: { imageContent: 'private-map' },
            network_info: { ip: '10.0.0.1' },
          },
        },
      },
    },
  });

  function hassWith(callApi: ReturnType<typeof vi.fn>) {
    const hass = createDiscoveryHass();
    hass.devices![ROBOT] = { ...hass.devices![ROBOT], config_entries: ['entry1'] };
    hass.callApi = callApi as never;
    return hass;
  }

  it('returns only the model, protocol and supported flags of the matching robot', async () => {
    const callApi = vi.fn(async () => diagnostics('duid1'));
    const result = await loadDeviceFlags(hassWith(callApi), 'vacuum.qrevo_curv_2_flow');
    expect(callApi).toHaveBeenCalledWith('GET', 'diagnostics/config_entry/entry1');
    expect(Object.keys(result!)).toEqual(['model', 'protocol', 'flags']);
    expect(result).toMatchObject({ model: 'roborock.vacuum.a245', protocol: '1.0' });
    expect([...result!.flags].every((flag) => /^is_[a-z0-9_]+$/.test(flag))).toBe(true);
    expect(JSON.stringify([...result!.flags])).not.toMatch(/secret|private-map|10\.0\.0\.1/);
    expect(capabilitiesFromFlags(result!.flags).mop_routes).toEqual(['standard', 'deep_plus', 'fast']);
  });

  it('falls back to an unambiguous model match and fails quietly', async () => {
    expect(await loadDeviceFlags(hassWith(vi.fn(async () => diagnostics('other'))), 'vacuum.qrevo_curv_2_flow')).toBeDefined();
    expect(await loadDeviceFlags(hassWith(vi.fn(async () => { throw new Error('403'); })), 'vacuum.qrevo_curv_2_flow')).toBeUndefined();
    const nonAdmin = hassWith(vi.fn(async () => diagnostics('duid1')));
    nonAdmin.user = { is_admin: false };
    expect(await loadDeviceFlags(nonAdmin, 'vacuum.qrevo_curv_2_flow')).toBeUndefined();
  });
});

import { findProfile, type ModelProfile } from '../profiles';
import type { MopRouteMode, RepeatStrategy } from '../types';
import { capabilitiesFromFlags, type FeatureFlags } from './flags';
import catalog from './models.generated.json';

export { capabilitiesFromFlags, flagsFromDeviceFeatures, type FeatureFlags } from './flags';

export interface CatalogModel {
  model: string;
  names?: string[];
  family?: string;
  protocol?: string;
  /** Supported flags from a real-device dump; absent when python-roborock has none. */
  features?: string[];
}

export const CATALOG_SOURCE = catalog.source;
export const CATALOG_FLAGS: readonly string[] = catalog.flags;
export const CATALOG_MODELS: readonly CatalogModel[] = catalog.models;

export function findCatalogModel(model?: string): CatalogModel | undefined {
  return model ? CATALOG_MODELS.find((entry) => entry.model === model) : undefined;
}

export function modelName(model?: string): string | undefined {
  return findProfile(model)?.label ?? findCatalogModel(model)?.names?.join(' / ');
}

export type FactSource = 'profile' | 'device' | 'catalog';

/** App facts about a model that Home Assistant entity options cannot express reliably. */
export interface ModelFacts {
  repeat?: RepeatStrategy;
  smartplan?: boolean;
  mop_only?: boolean;
  mop_routes?: Partial<Record<MopRouteMode, string[]>>;
  sources: Partial<Record<'repeat' | 'smartplan' | 'mop_only' | 'mop_routes', FactSource>>;
  profile?: ModelProfile;
}

/**
 * Resolves model facts: hand profile (app quirks), then the robot's own feature flags
 * from diagnostics (setup only), then the python-roborock catalog dump for the model.
 * Card config is applied on top by the caller; live entity options are the last resort.
 */
export function modelFacts(model?: string, deviceFlags?: FeatureFlags): ModelFacts {
  const profile = findProfile(model);
  const catalogFeatures = findCatalogModel(model)?.features;
  const flagSources: Array<[FactSource, FeatureFlags]> = [];
  if (deviceFlags) flagSources.push(['device', deviceFlags]);
  if (catalogFeatures) flagSources.push(['catalog', new Set(catalogFeatures)]);
  const fromFlags = flagSources[0] ? { source: flagSources[0][0], caps: capabilitiesFromFlags(flagSources[0][1]) } : undefined;

  const facts: ModelFacts = { sources: {}, profile };
  const pick = <K extends 'repeat' | 'smartplan' | 'mop_only' | 'mop_routes'>(key: K, fromProfile: ModelFacts[K], derived?: ModelFacts[K]) => {
    if (fromProfile !== undefined) {
      facts[key] = fromProfile;
      facts.sources[key] = 'profile';
    } else if (derived !== undefined && fromFlags) {
      facts[key] = derived;
      facts.sources[key] = fromFlags.source;
    }
  };
  pick('repeat', profile?.repeat, fromFlags?.caps.repeat);
  pick('smartplan', profile?.smartplan, fromFlags?.caps.smartplan);
  pick('mop_only', profile?.mop_only);
  const routes = fromFlags?.caps.mop_routes;
  pick('mop_routes', profile?.mop_routes, routes && routes.length > 0 ? { vacuum_and_mop: routes, mop: routes } : undefined);
  return facts;
}

export type CompatibilityVerdict = 'supported' | 'limited' | 'unsupported';

export type CompatibilityReason =
  | 'not_a_robot_vacuum'
  | 'protocol_unsupported'
  | 'home_assistant_too_old'
  | 'custom_map_missing'
  | 'unknown_model';

export interface Compatibility {
  verdict: CompatibilityVerdict;
  reasons: CompatibilityReason[];
  name?: string;
  protocol?: string;
}

export const MIN_HA_VERSION = [2026, 8] as const;

function haTooOld(version?: string): boolean {
  if (!version) return false;
  const [year, month] = version.split('.').map(Number);
  if (!Number.isFinite(year) || !Number.isFinite(month)) return false;
  return year < MIN_HA_VERSION[0] || (year === MIN_HA_VERSION[0] && month < MIN_HA_VERSION[1]);
}

/**
 * Whether the card can drive this robot, decided before setup. The card speaks the V1
 * Roborock protocol through Home Assistant; B01 (Q7/Q10 families) and A01 (Zeo/Dyad)
 * devices expose different entities and are not supported.
 */
export function compatibility(options: {
  model?: string;
  protocol?: string;
  haVersion?: string;
  hasCustomMap?: boolean;
  hasDeviceFlags?: boolean;
}): Compatibility {
  const entry = findCatalogModel(options.model);
  const protocol = options.protocol ?? entry?.protocol;
  const reasons: CompatibilityReason[] = [];
  if (options.model && !options.model.startsWith('roborock.vacuum.')) reasons.push('not_a_robot_vacuum');
  if (protocol && protocol !== '1.0') reasons.push('protocol_unsupported');
  if (haTooOld(options.haVersion)) reasons.push('home_assistant_too_old');
  if (reasons.length > 0) return { verdict: 'unsupported', reasons, name: modelName(options.model), protocol };
  if (options.hasCustomMap === false) reasons.push('custom_map_missing');
  if (!findProfile(options.model) && !entry?.features && !options.hasDeviceFlags) reasons.push('unknown_model');
  return {
    verdict: reasons.length > 0 ? 'limited' : 'supported',
    reasons,
    name: modelName(options.model),
    protocol,
  };
}

/** What the dock can do: the robot's own flags, then the profile, then the catalog. */
export function dockAbilities(model?: string, deviceFlags?: FeatureFlags): FlagDockAbilities | undefined {
  if (deviceFlags) return capabilitiesFromFlags(deviceFlags).dock;
  const profile = findProfile(model)?.dock;
  if (profile) return profile;
  const features = findCatalogModel(model)?.features;
  return features ? capabilitiesFromFlags(new Set(features)).dock : undefined;
}

type FlagDockAbilities = Partial<ReturnType<typeof capabilitiesFromFlags>['dock']>;

import { detectCapabilities } from './capabilities';
import { compatibility } from './catalog';
import { normalizeConfig, validateConfig } from './config';
import { buildConfig } from './discovery';
import { configHealth } from './health';
import { prerequisites } from './onboarding/prerequisites';
import { vacuumModel } from './profiles';
import type { HomeAssistant, RoborockVacuumMapCardConfig } from './types';

const SECRET_KEYS = /token|password|secret|access|entity_picture|api_key/i;

/** Drops values that could carry credentials or signed URLs. */
export function redact(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(redact);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, SECRET_KEYS.test(key) ? '**REDACTED**' : redact(item)]));
  }
  if (typeof value === 'string' && /[?&](token|access_token|authSig)=/i.test(value)) return '**REDACTED**';
  return value;
}

/**
 * Everything a bug or model report needs, without secrets: versions, model and
 * profile, what discovery and the health check see, entity states the card uses,
 * and the config. Nothing leaves the browser until the user pastes it.
 */
export function buildDiagnostics(hass: HomeAssistant, rawConfig: unknown): Record<string, unknown> {
  const errors = validateConfig(rawConfig);
  const config = errors.length === 0 ? normalizeConfig(rawConfig) : undefined;
  const vacuum = (rawConfig as Partial<RoborockVacuumMapCardConfig> | undefined)?.entity;
  const model = vacuum ? vacuumModel(hass, vacuum) : undefined;
  const report = vacuum && hass.entities && hass.states[vacuum] ? buildConfig(hass, vacuum).report : undefined;
  const capabilities = config ? detectCapabilities(hass, config) : undefined;
  const entityStates = config
    ? Object.fromEntries(Object.entries(config.entities ?? {}).map(([key, entityId]) => [key, entityId ? hass.states[entityId]?.state ?? 'missing' : undefined]))
    : undefined;

  return redact({
    generated: new Date().toISOString(),
    card_version: __CARD_VERSION__,
    home_assistant: hass.config?.version,
    user_is_admin: hass.user?.is_admin,
    vacuum,
    vacuum_state: vacuum ? hass.states[vacuum]?.state ?? 'missing' : undefined,
    model,
    compatibility: compatibility({ model, haVersion: hass.config?.version }),
    capabilities,
    prerequisites: prerequisites(hass),
    config_errors: errors,
    health: config ? configHealth(hass, config) : undefined,
    discovery: report && {
      issues: report.issues,
      fact_sources: report.fact_sources,
      floors: report.floors,
      native_dock: Object.keys(report.native_dock),
      entities_found: Object.keys(report.entities),
    },
    entity_states: entityStates,
    config: rawConfig,
  }) as Record<string, unknown>;
}

/** Copies diagnostics as JSON; resolves false when the clipboard is unavailable. */
export async function copyDiagnostics(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

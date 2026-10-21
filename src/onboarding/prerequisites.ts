import { MIN_HA_VERSION } from '../catalog';
import { CUSTOM_MAP_PLATFORM, listRoborockVacuums } from '../discovery/devices';
import type { HomeAssistant, RoborockVacuumMapCardConfig } from '../types';

export type PrerequisiteId = 'home_assistant_version' | 'roborock_integration' | 'custom_map' | 'administrator';

export interface Prerequisite {
  id: PrerequisiteId;
  ok: boolean;
  /** Setup can't continue without it. */
  blocking: boolean;
  /** Where to fix it. */
  fix_url?: string;
}

export const FIX_URLS: Record<Exclude<PrerequisiteId, 'administrator'>, string> = {
  home_assistant_version: 'https://my.home-assistant.io/redirect/updates/',
  roborock_integration: 'https://my.home-assistant.io/redirect/config_flow_start/?domain=roborock',
  custom_map: 'https://my.home-assistant.io/redirect/hacs_repository/?owner=Python-roborock&repository=RoborockCustomMap&category=integration',
};

function versionOk(version?: string): boolean | undefined {
  if (!version) return undefined;
  const [year, month] = version.split('.').map(Number);
  if (!Number.isFinite(year) || !Number.isFinite(month)) return undefined;
  return year > MIN_HA_VERSION[0] || (year === MIN_HA_VERSION[0] && month >= MIN_HA_VERSION[1]);
}

/**
 * What the card needs before it can be set up. Checks that can't be decided (no version
 * or registry data) pass, so older frontends aren't blocked by missing information.
 */
export function prerequisites(hass: HomeAssistant): Prerequisite[] {
  const hasRegistry = Boolean(hass.entities);
  const customMap = hasRegistry
    ? Object.values(hass.entities ?? {}).some((entry) => entry.platform === CUSTOM_MAP_PLATFORM)
    : Object.keys(hass.states).some((id) => id.startsWith('image.') && id.endsWith('_custom'));
  return [
    { id: 'home_assistant_version', ok: versionOk(hass.config?.version) ?? true, blocking: true, fix_url: FIX_URLS.home_assistant_version },
    { id: 'roborock_integration', ok: listRoborockVacuums(hass).length > 0, blocking: true, fix_url: FIX_URLS.roborock_integration },
    { id: 'custom_map', ok: customMap, blocking: true, fix_url: FIX_URLS.custom_map },
    // Needed for Home Assistant's room-to-area mapping and creating helpers; setup works without.
    { id: 'administrator', ok: hass.user?.is_admin !== false, blocking: false },
  ];
}

export function canSetUp(checks: Prerequisite[]): boolean {
  return checks.every((check) => check.ok || !check.blocking);
}

/** A config that can't work yet: no vacuum, or no floor with an existing map image. */
export function needsSetup(hass: HomeAssistant, config: RoborockVacuumMapCardConfig): boolean {
  return !hass.states[config.entity] || !config.floors.some((floor) => floor.map_entity && hass.states[floor.map_entity]);
}

import type { HomeAssistant } from './types';

/**
 * Home Assistant 2026.11 fixed the dock *Empty mode* select (core PR #186486). Older
 * versions send the command in a format docks reject, so the card only uses the native
 * select from 2026.11 on and keeps sending its own command before that.
 */
const NATIVE_EMPTY_MODE_SINCE: [number, number] = [2026, 11];

export function haVersionAtLeast(hass: HomeAssistant, [year, month]: [number, number]): boolean {
  const [major, minor] = (hass.config?.version ?? '').split('.').map(Number);
  if (!Number.isFinite(major) || !Number.isFinite(minor)) return false;
  return major > year || (major === year && minor >= month);
}

export function nativeEmptyModeWorks(hass: HomeAssistant): boolean {
  return haVersionAtLeast(hass, NATIVE_EMPTY_MODE_SINCE);
}

/** A select that belongs to the Roborock integration, as opposed to a user helper. */
export function isNativeRoborockSelect(hass: HomeAssistant, entityId: string | undefined): entityId is string {
  return Boolean(entityId?.startsWith('select.') && hass.entities?.[entityId]?.platform === 'roborock');
}

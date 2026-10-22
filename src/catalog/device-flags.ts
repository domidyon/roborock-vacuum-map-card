import type { HomeAssistant } from '../types';
import { flagsFromDeviceFeatures, type FeatureFlags } from './flags';

export interface DeviceFlags {
  model?: string;
  /** Roborock protocol version, e.g. "1.0" (V1) or "B01". */
  protocol?: string;
  flags: FeatureFlags;
}

interface DiagnosticsCoordinator {
  device?: { duid?: unknown; pv?: unknown };
  product?: { model?: unknown };
  traits?: { device_features?: Record<string, unknown> };
}

const cache = new WeakMap<object, Map<string, Promise<DeviceFlags | undefined>>>();

/**
 * Reads the robot's own feature flags from Home Assistant's Roborock diagnostics. Admin
 * only, used during setup. The diagnostics payload also contains the map, cleaning
 * history and identifiers: only the boolean feature flags, model and protocol leave this
 * function, and nothing is stored. Resolves undefined on any failure.
 */
export function loadDeviceFlags(hass: HomeAssistant, vacuum: string): Promise<DeviceFlags | undefined> {
  const key = hass.devices ?? hass;
  const perHass = cache.get(key) ?? new Map<string, Promise<DeviceFlags | undefined>>();
  cache.set(key, perHass);
  const cached = perHass.get(vacuum);
  if (cached) return cached;
  const result = fetchDeviceFlags(hass, vacuum).catch(() => undefined);
  perHass.set(vacuum, result);
  return result;
}

async function fetchDeviceFlags(hass: HomeAssistant, vacuum: string): Promise<DeviceFlags | undefined> {
  const deviceId = hass.entities?.[vacuum]?.device_id;
  const device = deviceId ? hass.devices?.[deviceId] : undefined;
  if (!device || !hass.callApi || hass.user?.is_admin === false) return undefined;
  const duids = new Set((device.identifiers ?? []).filter(([domain]) => domain === 'roborock').map(([, id]) => String(id)));
  const model = device.model_id ?? device.model ?? undefined;

  for (const entryId of device.config_entries ?? []) {
    const diagnostics = await hass.callApi<{ data?: { coordinators?: Record<string, DiagnosticsCoordinator> } }>(
      'GET',
      `diagnostics/config_entry/${entryId}`,
    ).catch(() => undefined);
    const coordinators = Object.values(diagnostics?.data?.coordinators ?? {});
    // Match by device id; fall back to the model only when it is unambiguous.
    const sameModel = coordinators.filter((coordinator) => coordinator.product?.model === model);
    const match = coordinators.find((coordinator) => duids.has(String(coordinator.device?.duid)))
      ?? (sameModel.length === 1 ? sameModel[0] : undefined);
    const features = match?.traits?.device_features;
    if (!match || !features) continue;
    return {
      model: typeof match.product?.model === 'string' ? match.product.model : model,
      protocol: typeof match.device?.pv === 'string' ? match.device.pv : undefined,
      flags: flagsFromDeviceFeatures(features),
    };
  }
  return undefined;
}

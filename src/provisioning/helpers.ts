import { DOCK_SETTING_DEFAULTS, DOCK_SETTING_ENTITIES, DOCK_SETTING_OPTIONS } from '../dock-settings';
import type { AssistedCarryStage, DockSettingKey, HomeAssistant, RoborockEntityConfig, RoborockVacuumMapCardConfig } from '../types';

export interface HelperSpec {
  /** Card config key the helper fills, e.g. `dock_wash_mode`. */
  key: keyof RoborockEntityConfig;
  domain: 'input_select' | 'input_boolean' | 'input_text';
  /** Deterministic object id: `rvmc_<vacuum object id>_<key>`. */
  object_id: string;
  name: string;
  icon: string;
  options?: string[];
  max?: number;
  /** State set right after creation. `initial` is not used: it would reset the helper on every restart. */
  start?: string | boolean;
}

export interface DockAbilities {
  auto_empty?: boolean;
  mop_wash?: boolean;
  hot_water?: boolean;
  mop_dry?: boolean;
}

export interface HelperPlan {
  create: HelperSpec[];
  /** Helpers that already exist: configured ones or earlier `rvmc_` helpers. */
  existing: Partial<Record<keyof RoborockEntityConfig, string>>;
  /** Existing select helpers missing options the card needs. */
  mismatched: Array<{ key: keyof RoborockEntityConfig; entity_id: string; missing: string[] }>;
}

const ASSISTED_CARRY_STAGES = [
  'idle', 'preparing', 'carry_upstairs', 'cleaning_upstairs', 'carry_downstairs', 'finishing', 'complete', 'error',
] as const satisfies readonly AssistedCarryStage[];

const DOCK_HELPERS: Array<{ setting: DockSettingKey; label: string; icon: string; needs: keyof DockAbilities }> = [
  { setting: 'mop_wash_frequency', label: 'mop wash frequency', icon: 'mdi:timer-sand', needs: 'mop_wash' },
  { setting: 'wash_mode', label: 'washing mode', icon: 'mdi:washing-machine', needs: 'mop_wash' },
  { setting: 'wash_temperature', label: 'wash temperature', icon: 'mdi:thermometer-water', needs: 'hot_water' },
  { setting: 'auto_empty', label: 'auto-empty', icon: 'mdi:delete-restore', needs: 'auto_empty' },
  { setting: 'empty_mode', label: 'empty mode', icon: 'mdi:delete-variant', needs: 'auto_empty' },
  { setting: 'auto_dry', label: 'auto-drying', icon: 'mdi:fan', needs: 'mop_dry' },
  { setting: 'dry_duration', label: 'drying duration', icon: 'mdi:timer-outline', needs: 'mop_dry' },
];

function objectId(vacuum: string, key: string): string {
  return `rvmc_${vacuum.split('.')[1]}_${key}`;
}

/**
 * Helpers the card needs for a vacuum. Dock helpers are limited to what the dock can do
 * when its abilities are known; assisted-carry helpers are only added on request.
 */
export function helperSpecs(
  vacuum: string,
  vacuumName: string,
  options: { dock?: DockAbilities; assistedCarry?: boolean } = {},
): HelperSpec[] {
  const specs: HelperSpec[] = DOCK_HELPERS
    .filter(({ needs }) => options.dock?.[needs] !== false)
    .map(({ setting, label, icon }) => {
      const key = DOCK_SETTING_ENTITIES[setting];
      const select = setting !== 'auto_empty' && setting !== 'auto_dry';
      return {
        key,
        domain: select ? 'input_select' : 'input_boolean',
        object_id: objectId(vacuum, key),
        name: `${vacuumName} dock ${label}`,
        icon,
        ...(select ? { options: [...DOCK_SETTING_OPTIONS[setting]] } : {}),
        start: DOCK_SETTING_DEFAULTS[setting],
      };
    });
  if (options.assistedCarry) {
    specs.push(
      { key: 'assisted_carry_stage', domain: 'input_select', object_id: objectId(vacuum, 'assisted_carry_stage'), name: `${vacuumName} assisted carry stage`, icon: 'mdi:stairs', options: [...ASSISTED_CARRY_STAGES], start: 'idle' },
      { key: 'assisted_carry_job', domain: 'input_text', object_id: objectId(vacuum, 'assisted_carry_job'), name: `${vacuumName} assisted carry job`, icon: 'mdi:clipboard-text-outline', max: 255 },
    );
  }
  return specs;
}

/** Decides which helpers to create, reusing configured or earlier-created ones. */
export function planHelpers(hass: HomeAssistant, config: RoborockVacuumMapCardConfig, specs: HelperSpec[]): HelperPlan {
  const plan: HelperPlan = { create: [], existing: {}, mismatched: [] };
  for (const spec of specs) {
    const configured = config.entities?.[spec.key];
    const candidates = [configured, `${spec.domain}.${spec.object_id}`].filter((id): id is string => Boolean(id));
    const found = candidates.find((id) => hass.states[id]);
    if (!found) {
      plan.create.push(spec);
      continue;
    }
    plan.existing[spec.key] = found;
    const available = hass.states[found].attributes.options;
    if (spec.options && Array.isArray(available)) {
      const missing = spec.options.filter((option) => !available.map(String).includes(option));
      if (missing.length > 0) plan.mismatched.push({ key: spec.key, entity_id: found, missing });
    }
  }
  return plan;
}

export class ProvisioningError extends Error {}

/**
 * Creates the planned helpers through Home Assistant's helper collections (admin only)
 * and returns the entity ids to merge into `config.entities`. Each helper is created
 * with its `rvmc_` object id, then renamed to a friendly name and set to its start state.
 */
export async function createHelpers(hass: HomeAssistant, plan: HelperPlan): Promise<Partial<Record<keyof RoborockEntityConfig, string>>> {
  if (!hass.callWS || hass.user?.is_admin === false) throw new ProvisioningError('Creating helpers needs a Home Assistant administrator');
  const created: Partial<Record<keyof RoborockEntityConfig, string>> = {};
  for (const spec of plan.create) {
    const fields = {
      icon: spec.icon,
      ...(spec.options ? { options: spec.options } : {}),
      ...(spec.max ? { max: spec.max } : {}),
    };
    const item = await hass.callWS<{ id: string }>({ type: `${spec.domain}/create`, name: spec.object_id, ...fields });
    await hass.callWS({ type: `${spec.domain}/update`, [`${spec.domain}_id`]: item.id, name: spec.name, ...fields });
    const entityId = `${spec.domain}.${item.id}`;
    if (typeof spec.start === 'string') {
      await hass.callService('input_select', 'select_option', { option: spec.start }, { entity_id: entityId });
    } else if (spec.start !== undefined) {
      await hass.callService('input_boolean', spec.start ? 'turn_on' : 'turn_off', {}, { entity_id: entityId });
    }
    created[spec.key] = entityId;
  }
  return { ...plan.existing, ...created };
}

/** configuration.yaml snippet for users who cannot create helpers from the dashboard. */
export function helpersYaml(specs: HelperSpec[]): string {
  const lines: string[] = [];
  for (const domain of ['input_select', 'input_boolean', 'input_text'] as const) {
    const ofDomain = specs.filter((spec) => spec.domain === domain);
    if (ofDomain.length === 0) continue;
    lines.push(`${domain}:`);
    for (const spec of ofDomain) {
      lines.push(`  ${spec.object_id}:`, `    name: ${spec.name}`, `    icon: ${spec.icon}`);
      if (spec.options) lines.push(`    options: [${spec.options.join(', ')}]`);
      if (spec.max) lines.push(`    max: ${spec.max}`);
    }
  }
  return `${lines.join('\n')}\n`;
}

import type {
  DockAction,
  DockSettingKey,
  HomeAssistant,
  RoborockEntityConfig,
  RoborockVacuumMapCardConfig,
} from './types';

const SETTING_ENTITIES: Record<DockSettingKey, keyof RoborockEntityConfig> = {
  mop_wash_frequency: 'dock_mop_wash_frequency',
  wash_mode: 'dock_wash_mode',
  wash_temperature: 'dock_wash_temperature',
  auto_empty: 'dock_auto_empty',
  empty_mode: 'dock_empty_mode',
  auto_dry: 'dock_auto_dry',
  dry_duration: 'dock_dry_duration',
};

const WASH_MODE_CODES: Record<string, number> = {
  light: 0,
  balanced: 1,
  deep: 2,
  smart: 10,
};

const WASH_TEMPERATURE_CODES: Record<string, number> = {
  normal: 0,
  warm: 1,
  hot: 2,
};

const EMPTY_MODE_CODES: Record<string, number> = {
  smart: 0,
  light: 1,
  balanced: 2,
  max: 4,
};

const DRY_DURATION_SECONDS: Record<string, number> = {
  '2h': 7_200,
  '3h': 10_800,
  '4h': 14_400,
};

export class DockExecutionError extends Error {
  constructor(
    public readonly operation: string,
    message: string,
    options?: ErrorOptions,
  ) {
    super(message, options);
    this.name = 'DockExecutionError';
  }
}

async function sendDockCommand(
  hass: HomeAssistant,
  config: RoborockVacuumMapCardConfig,
  command: string,
  params?: unknown,
): Promise<void> {
  const data: Record<string, unknown> = { command };
  if (params !== undefined) data.params = params;
  await hass.callService('vacuum', 'send_command', data, { entity_id: config.entity });
}

function numberCode(mapping: Record<string, number>, value: string, operation: string): number {
  const code = mapping[value];
  if (code === undefined) throw new DockExecutionError(operation, `Unsupported value: ${value}`);
  return code;
}

function frequencyParams(value: string): { smart_wash: number; wash_interval: number } {
  if (value === 'smart') return { smart_wash: 1, wash_interval: 1_200 };
  const minutes = Number(value.replace('_min', ''));
  if (![10, 15, 20, 25, 30].includes(minutes)) {
    throw new DockExecutionError('mop_wash_frequency', `Unsupported value: ${value}`);
  }
  return { smart_wash: 0, wash_interval: minutes * 60 };
}

async function updateHelper(
  hass: HomeAssistant,
  config: RoborockVacuumMapCardConfig,
  setting: DockSettingKey,
  value: string | boolean,
): Promise<void> {
  const entityId = config.entities?.[SETTING_ENTITIES[setting]];
  if (!entityId) return;
  const domain = entityId.split('.')[0];
  if (typeof value === 'boolean') {
    if (!['input_boolean', 'switch'].includes(domain)) {
      throw new DockExecutionError(setting, `${entityId} is not a boolean helper`);
    }
    await hass.callService(domain, value ? 'turn_on' : 'turn_off', {}, { entity_id: entityId });
    return;
  }
  if (!['input_select', 'select'].includes(domain)) {
    throw new DockExecutionError(setting, `${entityId} is not a select helper`);
  }
  await hass.callService(domain, 'select_option', { option: value }, { entity_id: entityId });
}

export async function executeDockSetting(
  hass: HomeAssistant,
  config: RoborockVacuumMapCardConfig,
  setting: DockSettingKey,
  value: string | boolean,
): Promise<void> {
  try {
    switch (setting) {
      case 'mop_wash_frequency':
        await sendDockCommand(hass, config, 'set_smart_wash_params', frequencyParams(String(value)));
        break;
      case 'wash_mode':
        await sendDockCommand(hass, config, 'set_wash_towel_mode', {
          wash_mode: numberCode(WASH_MODE_CODES, String(value), setting),
        });
        break;
      case 'wash_temperature':
        await sendDockCommand(hass, config, 'set_wash_water_temperature', {
          values: numberCode(WASH_TEMPERATURE_CODES, String(value), setting),
        });
        break;
      case 'auto_empty':
        await sendDockCommand(hass, config, 'set_dust_collection_switch_status', { status: value ? 1 : 0 });
        break;
      case 'empty_mode':
        await sendDockCommand(hass, config, 'set_dust_collection_mode', {
          mode: numberCode(EMPTY_MODE_CODES, String(value), setting),
        });
        break;
      case 'auto_dry':
        await sendDockCommand(hass, config, 'app_set_dryer_setting', { status: value ? 1 : 0 });
        break;
      case 'dry_duration':
        await sendDockCommand(hass, config, 'app_set_dryer_setting', {
          on: { dry_time: numberCode(DRY_DURATION_SECONDS, String(value), setting) },
        });
        break;
    }
    await updateHelper(hass, config, setting, value);
  } catch (error) {
    if (error instanceof DockExecutionError) throw error;
    throw new DockExecutionError(setting, error instanceof Error ? error.message : String(error), { cause: error });
  }
}

export async function executeDockAction(
  hass: HomeAssistant,
  config: RoborockVacuumMapCardConfig,
  action: DockAction,
  active = false,
): Promise<void> {
  const operation = `${active ? 'stop' : 'start'}_${action}`;
  try {
    if (action === 'empty') await sendDockCommand(hass, config, active ? 'app_stop_collect_dust' : 'app_start_collect_dust');
    if (action === 'wash') await sendDockCommand(hass, config, active ? 'app_stop_wash' : 'app_start_wash');
    if (action === 'dry') await sendDockCommand(hass, config, 'app_set_dryer_status', { status: active ? 0 : 1 });
    if (action === 'drain') await sendDockCommand(hass, config, 'app_empty_rinse_tank_water');
  } catch (error) {
    throw new DockExecutionError(operation, error instanceof Error ? error.message : String(error), { cause: error });
  }
}

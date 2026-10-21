import { detectCapabilities } from './capabilities';
import { roomUsable } from './health';
import { BUILT_IN_PRESETS, getAvailablePresets } from './presets';
import type { HomeAssistant, PresetConfig, RoborockVacuumMapCardConfig } from './types';

const CLEANING_MODE_OPTIONS = { vacuum: 'vacuum', mop: 'mop', vacuum_and_mop: 'vac_and_mop', vacuum_then_mop: 'vac_and_mop' } as const;
const MAP_TIMEOUT = '00:01:30';
const BUILT_IN_IDS = new Set(BUILT_IN_PRESETS.map((preset) => preset.id));

export interface PresetScript {
  /** Object id of the script, e.g. `rvmc_qrevo_curv_2_flow_evening`. */
  id: string;
  config: Record<string, unknown>;
}

export class PresetExportError extends Error {}

function sendCommand(vacuum: string, command: string, params: unknown) {
  return { action: 'vacuum.send_command', target: { entity_id: vacuum }, data: { command, params } };
}

function select(entityId: string, option: string) {
  return { action: 'select.select_option', target: { entity_id: entityId }, data: { option } };
}

/**
 * A Home Assistant script that runs a card preset the same way the card does (see
 * executeJob): select the floor's map, apply the mode and settings, set the cleaning
 * count, then start the whole floor or clean the given areas. The script is a snapshot:
 * re-create it after changing the preset.
 */
export function presetScript(hass: HomeAssistant, config: RoborockVacuumMapCardConfig, preset: PresetConfig): PresetScript {
  const capabilities = detectCapabilities(hass, config);
  const withPreset = BUILT_IN_IDS.has(preset.id) ? config : { ...config, presets: [...(config.presets ?? []).filter((item) => item.id !== preset.id), preset] };
  const available = getAvailablePresets(withPreset, capabilities).find((item) => item.preset.id === preset.id);
  if (!available?.available) throw new PresetExportError(available?.reason ?? `Preset ${preset.id} is not available`);
  const type = preset.cleaning_type ?? 'vacuum_and_mop';
  const vacuum = config.entity;
  const mapSelect = config.entities?.map_select;
  const routine = type === 'vacuum_then_mop';
  const segmentRepeat = capabilities.roomRepeatStrategy === 'app_segment_clean';
  const count = preset.strategy === 'smartplan' || routine ? 1 : preset.cleaning_count ?? 1;

  const floors = Object.fromEntries(config.floors.map((floor) => {
    const included = floor.rooms.filter((room) => room.include_in_floor_clean !== false && roomUsable(hass, room));
    return [floor.id, {
      option: floor.map_select_option ?? '',
      routine: floor.vacuum_then_mop_routine ?? '',
      areas: [...new Set(included.map((room) => room.area_id as string))],
      whole_map: included.length === floor.rooms.length,
      segments: Object.fromEntries(included.map((room) => [room.area_id as string, room.segment_id])),
    }];
  }));
  if (routine && !config.floors.some((floor) => floor.vacuum_then_mop_routine)) {
    throw new PresetExportError('Vac followed by Mop presets need a floor with a native Roborock routine');
  }

  const sequence: unknown[] = [];
  if (mapSelect) {
    sequence.push({
      alias: 'Select the floor map',
      if: [`{{ info.option != '' and not is_state('${mapSelect}', info.option) }}`],
      then: [
        { action: 'select.select_option', target: { entity_id: mapSelect }, data: { option: '{{ info.option }}' } },
        { wait_template: `{{ is_state('${mapSelect}', info.option) }}`, timeout: MAP_TIMEOUT, continue_on_timeout: true },
        { if: ['{{ not wait.completed }}'], then: [{ stop: 'The floor map did not become active.', error: true }] },
      ],
    });
  }
  if (routine) {
    sequence.push(
      { if: ["{{ info.routine == '' }}"], then: [{ stop: 'This floor has no Vac followed by Mop routine.', error: true }] },
      { alias: 'Run the saved Roborock routine', action: 'button.press', target: { entity_id: '{{ info.routine }}' } },
    );
    return finish();
  }

  if (preset.strategy === 'smartplan') {
    sequence.push({ alias: 'AI SmartPlan', ...sendCommand(vacuum, 'set_clean_motor_mode', [{ fan_power: 110, water_box_mode: 209, mop_mode: 306 }]) });
  } else {
    const cleaningMode = config.entities?.cleaning_mode;
    if (!cleaningMode) throw new PresetExportError('Exporting presets needs the Cleaning mode entity');
    sequence.push({ alias: 'Cleaning mode', ...select(cleaningMode, CLEANING_MODE_OPTIONS[type]) });
    const mopMode = config.entities?.mop_mode;
    if (type !== 'vacuum' && preset.mop_mode && mopMode) {
      sequence.push(
        { alias: 'Leave SmartPlan routes', if: [{ condition: 'state', entity_id: mopMode, state: 'smart_mode' }], then: [select(mopMode, 'custom')] },
        { alias: 'Mop route', ...select(mopMode, preset.mop_mode) },
      );
    }
    if (type !== 'vacuum' && preset.mop_intensity && config.entities?.mop_intensity) {
      sequence.push({ alias: 'Water flow', ...select(config.entities.mop_intensity, preset.mop_intensity) });
    }
    if (preset.fan_speed && type !== 'mop') {
      sequence.push({ alias: 'Suction', action: 'vacuum.set_fan_speed', target: { entity_id: vacuum }, data: { fan_speed: preset.fan_speed } });
    }
  }
  if (!segmentRepeat) sequence.push({ alias: 'Cleaning count', ...sendCommand(vacuum, 'set_clean_repeat_times', { repeat: count }) });

  const start = [
    { conditions: ['{{ whole_floor and info.whole_map }}'], sequence: [{ action: 'vacuum.start', target: { entity_id: vacuum } }] },
    { conditions: ['{{ true }}'], sequence: [{ action: 'vacuum.clean_area', target: { entity_id: vacuum }, data: { cleaning_area_id: '{{ target_areas }}' } }] },
  ];
  if (segmentRepeat && count === 2) {
    // Models without a cleaning-count setting take the repeat in the segment command.
    start.unshift({
      conditions: ['{{ true }}'],
      sequence: [sendCommand(vacuum, 'app_segment_clean', [{ segments: '{{ target_areas | map("extract", info.segments) | list }}', repeat: 2 }])],
    });
  }
  sequence.push({ alias: 'Start cleaning', choose: start });
  return finish();

  function finish(): PresetScript {
    return {
      id: `rvmc_${vacuum.split('.')[1]}_${preset.id}`,
      config: {
        alias: `${config.name ?? 'Roborock'} ${preset.name}`,
        description: `Runs the "${preset.name}" preset of the Roborock Vacuum Map Card. Generated by the card; create it again after changing the preset.`,
        icon: preset.icon ?? 'mdi:robot-vacuum',
        mode: 'single',
        fields: {
          floor: {
            name: 'Floor',
            required: true,
            default: config.floors[0].id,
            selector: { select: { options: config.floors.map((floor) => ({ value: floor.id, label: floor.name })) } },
          },
          ...(routine ? {} : { areas: { name: 'Areas', description: 'Leave empty to clean the whole floor.', required: false, selector: { area: { multiple: true } } } }),
        },
        variables: {
          floors,
          info: '{{ floors[floor] }}',
          ...(routine ? {} : { whole_floor: '{{ not areas }}', target_areas: '{{ areas if areas else info.areas }}' }),
        },
        sequence,
      },
    };
  }
}

/** Creates or replaces the script through Home Assistant's script config API (administrators). */
export async function saveScript(hass: HomeAssistant, script: PresetScript): Promise<string> {
  if (!hass.callApi || hass.user?.is_admin === false) throw new PresetExportError('Creating scripts needs a Home Assistant administrator');
  await hass.callApi('POST', `config/script/config/${script.id}`, script.config);
  return `script.${script.id}`;
}

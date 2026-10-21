# Configuration reference

Everything the visual editor sets can also be written in YAML. This page is the complete reference; see the [README](../README.md) for installation and a quick start.

## Visual editor setup

**Add card** starts from a discovered config: the first Roborock vacuum, its entities
(matched by Home Assistant's translation keys, not entity ids), one floor per Roborock
map, its rooms, and the areas Home Assistant's Roborock settings map them to. Model
facts come from the model profile, the robot's own feature flags (read from Home
Assistant's Roborock diagnostics, administrators only) or the python-roborock catalog.

The **setup assistant** in the editor opens by itself for a card that can't work yet,
and is always available from the toolbar. Its steps:

1. **Before you start:** Home Assistant version, Roborock integration, Roborock Custom
   Map, administrator rights, each with a link to fix it.
2. **Your robot:** compatibility, model profile, SmartPlan, routes, how two passes are
   sent, dock abilities, and the Mop only switch.
3. **Floors:** which maps to show, their names, Vac followed by Mop routines, and assisted carry.
4. **Rooms:** names, areas, icons, Entire floor membership.
5. **Dock and helpers:** creates the missing dock helpers (administrators) or shows
   `configuration.yaml`. Assisted carry links its blueprints.
6. **Presets:** the default mode and an optional Evening preset.
7. **Review and save:** the generated YAML.

Re-running the assistant for the same vacuum keeps your name, language and presets.

The editor itself is grouped into collapsible sections: **Basics**, **Floors and rooms**
(with assisted-carry entities when a floor uses it), **Dock** (remembered settings,
helper creation, maintenance parts), **Presets** (suction, route and water flow chosen
from what your robot supports) and **Advanced: entities**. Entity fields are marked
*auto-detected* when they match discovery and *manual* when they differ, and an empty
field offers the detected entity. Pickers use Home Assistant's own entity, area and icon
pickers, narrowed to the vacuum's devices. The editor follows your Home Assistant
language (English, Nederlands, Polski, Türkçe); the card's own language is set
separately.

**Re-detect** compares the config with a fresh discovery and lists each fix or addition
separately: new entities, rooms and maps, renamed map images or options, deleted areas,
consumables. It never replaces a working entity, a valid area, or your names and icons.

**Presets as scripts:** the editor's preset section can turn any available preset into
a Home Assistant script with `floor` and optional `areas` fields, so automations,
schedules and voice assistants can run it. Administrators create it directly
(`script.rvmc_<vacuum>_<preset>`); others get YAML. The script mirrors what the card does
and is a snapshot, so create it again after changing the preset.

If areas are missing, configure segment-to-area mapping in the Roborock vacuum entity settings first.

### Config versions

Configs written by the assistant include `config_version: 1`. Configs without it are
treated as version 1. When a future release changes the format, the card migrates older
configs in memory, and the editor offers to save the new format.

For Roborock multi-level homes, enable **Multi-level** and **Manual Selection** in
the Roborock app. Smart Recognition can override Home Assistant's selected map
or localize against the wrong floor. The card reasserts and verifies the
configured `map_select_option` immediately before every cleaning command.

## YAML reference

```yaml
type: custom:roborock-vacuum-map-card
entity: vacuum.qrevo_curv_2_flow
language: nl

entities:
  map_select: select.qrevo_curv_2_flow_selected_map
  cleaning_mode: select.woonkamer_qrevo_curv_2_flow_cleaning_mode
  # Legacy fallback when a floor has no native Roborock routine.
  vacuum_then_mop_script: script.roborock_vacuum_then_mop
  mop_mode: select.qrevo_curv_2_flow_mop_mode
  mop_intensity: select.qrevo_curv_2_flow_mop_intensity
  dock_mop_drying: binary_sensor.qrevo_curv_2_flow_dock_mop_drying
  dock_mop_drying_remaining_time: sensor.qrevo_curv_2_flow_dock_mop_drying_remaining_time
  dock_child_lock: switch.qrevo_curv_2_flow_dock_child_lock
  dock_mop_wash_frequency: input_select.qrevo_dock_mop_wash_frequency
  dock_wash_mode: input_select.qrevo_dock_washing_mode
  dock_wash_temperature: input_select.qrevo_dock_wash_temperature
  dock_auto_empty: input_boolean.qrevo_dock_auto_empty
  dock_empty_mode: input_select.qrevo_dock_empty_mode
  dock_auto_dry: input_boolean.qrevo_dock_auto_dry
  dock_dry_duration: input_select.qrevo_dock_drying_duration
  assisted_carry_stage: input_select.qrevo_upstairs_stage
  assisted_carry_job: input_text.qrevo_upstairs_job
  assisted_carry_prepare_script: script.qrevo_upstairs_prepare
  assisted_carry_start_script: script.qrevo_upstairs_start
  assisted_carry_finish_script: script.qrevo_upstairs_finish
  water_shortage: binary_sensor.qrevo_curv_2_flow_water_shortage
  mop_attached: binary_sensor.qrevo_curv_2_flow_mop_attached
  water_box_attached: binary_sensor.qrevo_curv_2_flow_water_box_attached
  do_not_disturb: switch.qrevo_curv_2_flow_do_not_disturb
  battery: sensor.qrevo_curv_2_flow_battery
  current_room: sensor.qrevo_curv_2_flow_current_room
  cleaning_area: sensor.qrevo_curv_2_flow_cleaning_area
  cleaning_time: sensor.qrevo_curv_2_flow_cleaning_time
  cleaning_progress: sensor.qrevo_curv_2_flow_cleaning_progress
  status: sensor.qrevo_curv_2_flow_status
  error: sensor.qrevo_curv_2_flow_vacuum_error

floors:
  - id: downstairs
    name: Beneden
    map_entity: image.woonkamer_qrevo_curv_2_flow_beneden_custom
    map_select_option: Beneden
    vacuum_then_mop_routine: button.woonkamer_qrevo_curv_2_flow_vac_followed_by_mop
    rooms:
      - segment_id: 1
        area_id: kitchen
        name: Keuken
        icon: mdi:countertop
        include_in_floor_clean: true
      - segment_id: 2
        area_id: hallway
        name: Hal
        icon: mdi:coat-rack
        include_in_floor_clean: true
      - segment_id: 4
        area_id: living_room
        name: Woonkamer
        icon: mdi:sofa
        include_in_floor_clean: true
  - id: upstairs
    name: Boven
    map_entity: image.woonkamer_qrevo_curv_2_flow_bovenverdieping_custom
    map_select_option: Bovenverdieping
    vacuum_then_mop_routine: button.woonkamer_qrevo_curv_2_flow_boven_vacmop
    assisted_carry: true
    rooms:
      - segment_id: 1
        area_id: office
        name: Kantoor
        icon: mdi:desk
        include_in_floor_clean: true
      - segment_id: 2
        area_id: overloop
        name: Overloop
        icon: mdi:stairs
        include_in_floor_clean: true
      - segment_id: 3
        area_id: bedroom
        name: Slaapkamer
        icon: mdi:bed-king
        include_in_floor_clean: true
      - segment_id: 4
        area_id: waskamer
        name: Waskamer
        icon: mdi:washing-machine
        include_in_floor_clean: true

presets:
  - id: avond
    name: Avond
    icon: mdi:weather-night
    strategy: custom
    cleaning_type: vacuum
    fan_speed: quiet
    mop_mode: standard
    cleaning_count: 1

default_preset: vacuum_only
```

### Configuration fields

| Field | Required | Description |
|---|---:|---|
| `entity` | Yes | Roborock `vacuum.*` entity |
| `language` | No | `en` (default), `nl`, `pl`, or `tr` |
| `entities.map_select` | For 2+ floors | Select entity and live floor options |
| `entities.cleaning_mode` | Recommended | High-level Roborock mode select (`vacuum`, `vac_and_mop`, and optionally `mop`) |
| `entities.vacuum_then_mop_script` | Legacy fallback | Cancellable two-phase HA script used only when the active floor has no native routine |
| `entities.mop_mode` | No | Roborock mop route/mode select |
| `entities.mop_intensity` | No | Roborock mop intensity select |
| `entities.dock_mop_drying` | No | Binary sensor that adds the active mop-drying state beside the docked state |
| `entities.dock_mop_drying_remaining_time` | No | Duration sensor shown while mop drying is active |
| `entities.dock_child_lock` | No | Native Roborock dock child-lock switch |
| `entities.dock_mop_wash_frequency` | No | Persistent `input_select` with `smart`, `10_min`, `15_min`, `20_min`, `25_min`, and `30_min` |
| `entities.dock_wash_mode` | No | Persistent `input_select` with `smart`, `light`, `balanced`, and `deep` |
| `entities.dock_wash_temperature` | No | Persistent `input_select` with `normal`, `warm`, and `hot` |
| `entities.dock_auto_empty` | No | Persistent `input_boolean` reflecting the last accepted auto-empty setting |
| `entities.dock_empty_mode` | No | Persistent `input_select` with `smart`, `light`, `balanced`, and `max` |
| `entities.dock_auto_dry` | No | Persistent `input_boolean` reflecting the last accepted auto-drying setting |
| `entities.dock_dry_duration` | No | Persistent `input_select` with `2h`, `3h`, and `4h` |
| `entities.assisted_carry_stage` | For assisted carry | Persistent `input_select` with `idle`, `preparing`, `carry_upstairs`, `cleaning_upstairs`, `carry_downstairs`, `finishing`, `complete`, and `error` |
| `entities.assisted_carry_job` | For assisted carry | Persistent `input_text` used for the compact saved room/settings payload |
| `entities.assisted_carry_*_script` | For assisted carry | Prepare, start, and finish scripts that own the long-running dock and cleaning steps |
| `entities.water_shortage`, `mop_attached`, `water_box_attached`, `do_not_disturb` | No | Safety and quiet-mode inputs used by the assisted scripts and the [pre-start checks](#pre-start-checks) |
| `entities.dock_clean_water_empty`, `dock_dirty_water_full` | No | Dock *Clean water box* / *Dirty water box* binary sensors for the pre-start checks |
| `entities.dock_error` | No | Dock *Dock error* sensor; anything other than `ok` is shown before starting |
| `entities.dock_clean_fluid_empty`, `dock_detergent_empty` | No | Detergent sensors on docks that have them (shown in the editor; checks are planned) |
| `consumables` | No | Parts shown in the [maintenance view](#maintenance), as a list of `{ kind, sensor, reset_button }`. `kind` is `main_brush`, `side_brush`, `filter`, `sensors`, `strainer`, `mop`, `roller` or `cleaning_brush`; `sensor` is a remaining-time or remaining-life sensor; `reset_button` is the matching Roborock reset button |
| `entities.*` status fields | No | Compact values shown only when configured and available |
| `floors` | Yes | One or more floor mappings |
| `floor.map_entity` | Yes | Calibrated Roborock Custom Map image |
| `floor.vacuum_then_mop_routine` | Recommended | Native Roborock routine button for the whole floor; the routine owns rooms, suction, water, passes, and route |
| `floor.rooms` | Yes | Segment-to-area mappings and floor-clean membership |
| `floor.assisted_carry` | No | Enables the guided no-dock carry workflow for this floor; multiple isolated maps can share the durable workflow helpers |
| `presets` | No | Structured additional presets with optional `cleaning_count: 1` or `2`; arbitrary service YAML is intentionally unsupported |
| `default_preset` | No | Built-in or configured preset ID |
| `vacuum_mode_fallback` | No | **Deprecated.** `set_clean_motor_mode` enabled true Vacuum mode on HA 2026.7 and older. It still works for existing configs but is hidden from the editor; configure `entities.cleaning_mode` instead |
| `enable_mop_only` | No | `true` shows the built-in Mop only mode. Defaults to `false` because some models (e.g. Qrevo Curv 2 Flow) list `mop` in the HA Cleaning mode select although the Roborock app has no Mop-only mode. Enable it only if your app offers Mop only (e.g. Saros 10R) |
| `mop_routes` | No | Per-mode allow-list of mop routes shown in the sheet, e.g. `vacuum_and_mop: [fast, standard]` and `mop: [fast, standard, deep, deep_plus]`. Use it when Home Assistant lists routes your model does not offer in that mode. Defaults to `fast`, `standard`, `deep` filtered by the live `mop_mode` options |
| `enable_smartplan` | No | Overrides the [model profile](models.md): `false` hides AI SmartPlan, `true` shows it. Without a profile, SmartPlan is shown when the live fan-speed and mop-mode options both offer `smart_mode` |
| `cleaning_count_command` | No | Overrides the [model profile](models.md) for room jobs: `set_clean_repeat_times` (newer models) or `app_segment_clean` (models without a cleaning-count setting, such as the S7, which take the repeat in the segment command). Without a profile, it is detected from the live options |

## Service behavior

Start validates every requested option against live entity options. It then:

1. Selects and confirms the target floor when necessary.
2. Applies the high-level `cleaning_mode` for Vacuum, Mop, or Vac & Mop when configured. Mop only requires the `mop` option and never sends a fan speed, so suction stays off. Existing configs with the deprecated `vacuum_mode_fallback` still use one atomic `set_clean_motor_mode` command for Vacuum mode.
3. Applies only the app-supported manual route, water-flow, and suction values selected in the sheet.
4. For room and floor jobs, sets the robot's native cleaning count with `set_clean_repeat_times` using the device-required `{ repeat: 1|2 }` object. Models without that setting (such as the S7) skip it; their two-pass room jobs start with one `app_segment_clean` command carrying the repeat. Zone jobs pass the count directly to the zoned-cleaning action.
5. Starts one native whole-map job with `vacuum.start` when every configured
   room is selected. Partial or exclusion-based jobs use one
   `vacuum.clean_area` call with the selected HA area IDs.

Zone mode uses the same validated cleaning-profile sequence, converts the drawn rectangle through the configured `calibration_points`, and calls the official `roborock.set_vacuum_zoned_cleaning` action with normalized `x1`, `y1`, `x2`, `y2`, and repeat count. Zone jobs intentionally expose only Vacuum, Mop, and Vac & Mop; SmartPlan, Vac followed by Mop, and assisted-carry floors remain room/floor workflows.

Vac followed by Mop presses the active floor's `floor.vacuum_then_mop_routine`. It is always treated as a whole-floor job, and the card deliberately hides suction, water flow, cleaning count, and route because those settings belong to the saved Roborock routine. If a floor has no native routine configured, the older `entities.vacuum_then_mop_script` two-phase orchestration remains available as a compatibility fallback.

The easiest way to create this script is the [Vac followed by Mop blueprint](#script-blueprints). The same script is also available as plain YAML in [`docs/vacuum-then-mop-script.yaml`](vacuum-then-mop-script.yaml); replace its five Roborock entity IDs with your own. Then select the script in the card editor.

SmartPlan atomically sets Roborock's complete AI bundle (`fan_power: 110`, `water_box_mode: 209`, `mop_mode: 306`) and does not send manual overrides. An Entire-floor selection that excludes configured rooms stays on `vacuum.clean_area`; only a true all-room selection uses `vacuum.start`.

Assisted carry is designed for a saved floor that has no dock and exposes the same four app-style modes. The compact `input_text` payload persists rooms, strategy, cleaning type, and applicable manual settings, while old payloads decode as Vac & Mop. Vacuum-only skips mop hardware checks, pre-wetting, manual mop settings, washing, and drying. SmartPlan uses its atomic AI bundle and conservatively prepares/services the mop. A floor-native Vac followed by Mop routine is stored without manual overrides and launched by the assisted start script after the carry handoff. The scripts and stage helper remain the durable source of truth if the dashboard closes.

Pause, resume, stop, and dock use `vacuum.pause`, `vacuum.start`, `vacuum.stop`, and `vacuum.return_to_base`. `vacuum.start` is exposed only as Resume while paused. Stop and Dock also cancel the configured Vac followed by Mop script and any active assisted upstairs start script before controlling the vacuum.

Dock settings use `vacuum.send_command` with the device-native Roborock payload and update the configured HA helper only after the device accepts the command. This avoids displaying a successful value after a rejected setting. The helpers are optional; without them, the panel uses the documented defaults for its initial display. Empty, Wash, Dry, and Drain are deliberately separate from settings and always require confirmation before starting. The dryer setting command cannot start the dryer; the guarded Dry action uses the distinct dryer-status command.

The onboard dirty-water drain is shown as unavailable because the current Python Roborock transport rewrites the command's required empty-object payload as an empty list. Use the Roborock app for this maintenance action until the upstream transport preserves `{}`.

## Dock settings: helpers and native entities

Home Assistant cannot read most dock settings back from the robot, so the card stores the
last setting the dock accepted in a helper. Native entities replace a helper only after
they pass every check: a 1:1 value mapping, app changes showing up in Home Assistant,
settings from Home Assistant accepted and kept after a restart, and confirmation on a
second model.

| Card setting | Native Home Assistant entity | Status (2026-10-22) |
|---|---|---|
| Empty mode | Dock `select` *Empty mode* (`dust_collection_mode`) | Helper for now. Home Assistant 2026.10 and older send this command in a format docks reject; fixed in core PR #186486 (expected in 2026.11). Re-check after that release |
| Auto-empty on/off | none | Helper. The dock *Dust emptying* switch starts emptying right away; it's an action, not this setting |
| Mop wash frequency | none | Helper |
| Washing mode | none | Helper |
| Wash temperature | none | Helper |
| Auto-drying on/off | none | Helper. The dock *Mop drying* switch starts or stops drying right away; it's an action, not this setting |
| Drying duration | none | Helper |
| Child lock | Dock `switch` *Child lock* | Native |

The dock's *Dust emptying*, *Mop washing* and *Mop drying* switches are the same actions
as the card's Empty, Wash and Dry buttons.

### Creating the helpers

The upcoming setup assistant creates the missing helpers for you: it asks first, needs an
administrator, and reuses helpers you already have. They are named
`rvmc_<vacuum>_<setting>`, for example `input_select.rvmc_qrevo_curv_2_flow_dock_empty_mode`.
To create them by hand, add them in **Settings → Devices & services → Helpers** with exactly
the options listed in [Configuration fields](#configuration-fields), or in `configuration.yaml`:

```yaml
input_select:
  rvmc_my_roborock_dock_empty_mode:
    name: My Roborock dock empty mode
    icon: mdi:delete-variant
    options: [smart, light, balanced, max]
input_boolean:
  rvmc_my_roborock_dock_auto_dry:
    name: My Roborock dock auto-drying
    icon: mdi:fan
```

Don't set `initial`: it resets the helper on every Home Assistant restart.

## Script blueprints

Script blueprints for the optional scripts are in
[`blueprints/script/roborock_vacuum_map_card`](../blueprints/script/roborock_vacuum_map_card).
Import them with the links in the card editor, then create a script from each and pick
your Roborock entities.

| Blueprint | Card setting | What it does |
|---|---|---|
| Vac followed by Mop | `entities.vacuum_then_mop_script` | Two-phase fallback for floors without a native Roborock routine |
| Assisted carry: prepare | `entities.assisted_carry_prepare_script` | Checks the robot, prepares the mop, drives to the pickup point |
| Assisted carry: start | `entities.assisted_carry_start_script` | Runs the saved job on the carried-to map |
| Assisted carry: finish | `entities.assisted_carry_finish_script` | Docks, empties, washes and dries after the carry back |

The assisted-carry blueprints need the stage (`input_select`) and job (`input_text`)
helpers; the setup assistant can create those too.

## Pre-start checks

Before a job starts, the job sheet checks the configured sensors:

| Check | Applies to | Result |
|---|---|---|
| Clean water tank empty, water shortage, mop not attached, water tank not attached | Jobs that use water (everything except Vacuum only) | **Blocks** Start |
| Dirty water tank full | Jobs that use water | Warning, *Start anyway* |
| Dock error, battery below 20 %, a part overdue for maintenance | All jobs | Warning, *Start anyway* |

Sensors that are missing, `unknown` or `unavailable` never block a job. The card checks
again right before sending commands, so a blocked job never reaches the robot.

## Maintenance

The dock panel lists the parts in `consumables` with the time or life left: *OK*,
*Due soon* (under 10 % of the part's Roborock lifetime: main brush 300 h, side brush
200 h, filter 150 h, sensors 30 h) or *Due now* (run out). The Dock station button shows
a badge with the number of overdue parts.

Home Assistant disables the Roborock reset buttons by default. Enable them on the
Roborock device page to reset counters from the card; every reset asks for confirmation.

## Setup health

When the card notices drift, it shows a *Setup needs attention* notice. Examples are an
area that was deleted or renamed, an entity that no longer exists, a map the selector no
longer offers, or a map image without calibration. Rooms whose area is gone are shown
but can't be selected. Dismissing the notice hides it until the issues change.

## Troubleshooting

See [troubleshooting](troubleshooting.md).

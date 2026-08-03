# Roborock Vacuum Map Card

A Roborock-native Home Assistant Dashboard card for selecting multiple rooms and launching app-style Roborock cleaning jobs.

![Desktop job configuration](docs/screenshots/demo-desktop.png)

## Features

- Calibrated Roborock maps with zoom, pan, accessible SVG room overlays, and room labels
- Multiple room selection followed by an explicit **Configure job** step
- Configurable **Entire floor** membership, including excluded-but-individually-selectable rooms
- Roborock-style SmartPlan, Vac followed by Mop, Vac & Mop, and Vacuum mode tabs
- App-facing suction, water-flow, cleaning-count, and route controls; internal Roborock modes are filtered out
- Live capability detection for fan speeds, mop routes, mop intensity, transport controls, and floor options
- Dock-aware mop washing/drying status with formatted drying time remaining
- App-style dock panel for Empty, Wash, Dry, wash frequency/mode/temperature, auto-empty, empty mode, auto-drying, drying duration, child lock, and onboard-tank drain
- Confirmation gates before every noisy dock start/drain action, with persistent HA helper-backed setting state
- Atomic SmartPlan control of suction, water, and route, plus native one-pass/two-pass cleaning
- Draft-only settings until Start is pressed; service failures abort before cleaning and retain the draft
- Visual Lovelace editor with room discovery, HA-area mapping, floor/preset reordering, and lossless YAML round-tripping
- Responsive mobile bottom sheet, desktop dialog, light/dark HA themes, keyboard support, English, and Dutch
- One HACS-installable JavaScript bundle
- Optional assisted-carry workflow for a floor without its dock, with durable HA-backed progress across phone reloads

## Requirements

- Home Assistant 2026.3 or newer for native `vacuum.clean_area`
- The official Roborock integration with map segments mapped to Home Assistant areas
- [Roborock Custom Map](https://github.com/Python-roborock/RoborockCustomMap) for an image entity containing `rooms` and `calibration_points`
- HACS is recommended for installation

The card never guesses room hitboxes. A missing custom-map image, room metadata, or calibration produces a prerequisite error.

## Install with HACS

1. In HACS, open the three-dot menu and choose **Custom repositories**.
2. Add `https://github.com/domidyon/roborock-vacuum-map-card` as a **Dashboard** repository.
3. Install **Roborock Vacuum Map Card**.
4. Refresh the browser when HACS asks.
5. Add a card and choose **Roborock Vacuum Map Card** in the visual editor.

Manual installation is also possible: download `roborock-vacuum-map-card.js` from the latest release, place it under `/config/www/`, and register it as a JavaScript module in Settings → Dashboards → Resources.

## Visual editor setup

The editor supports the complete setup without hand-written YAML:

1. Select the vacuum and optional status/settings entities.
2. Add each floor and select its Roborock Custom Map image.
3. The editor discovers segments from the image entity's `rooms` attribute.
4. Map each segment to a Home Assistant area, then set its label, icon, and **Include in Entire floor** value.
5. Add optional presets and select a default.

If areas are missing, configure segment-to-area mapping in the Roborock vacuum entity settings first.

## YAML reference

```yaml
type: custom:roborock-vacuum-map-card
entity: vacuum.qrevo_curv_2_flow
language: nl

entities:
  map_select: select.qrevo_curv_2_flow_selected_map
  # Home Assistant 2026.8+.
  cleaning_mode: select.woonkamer_qrevo_curv_2_flow_cleaning_mode
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

# Explicit stable-channel fallback until Home Assistant 2026.8 is installed.
vacuum_mode_fallback: set_clean_motor_mode

floors:
  - id: downstairs
    name: Beneden
    map_entity: image.woonkamer_qrevo_curv_2_flow_beneden_custom
    map_select_option: Beneden
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
| `language` | No | `en` (default) or `nl` |
| `entities.map_select` | For 2+ floors | Select entity and live floor options |
| `entities.cleaning_mode` | Recommended | High-level Roborock mode select (`vacuum`, `vac_and_mop`, and optionally `mop`) from Home Assistant 2026.8+ |
| `entities.vacuum_then_mop_script` | For Vac followed by Mop | Cancellable two-phase HA script; receives `cleaning_area_id`, `fan_speed`, `mop_mode`, and `mop_intensity` variables |
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
| `entities.water_shortage`, `mop_attached`, `water_box_attached`, `do_not_disturb` | No | Safety and quiet-mode inputs used by the assisted scripts |
| `entities.*` status fields | No | Compact values shown only when configured and available |
| `floors` | Yes | One or more floor mappings |
| `floor.map_entity` | Yes | Calibrated Roborock Custom Map image |
| `floor.rooms` | Yes | Segment-to-area mappings and floor-clean membership |
| `floor.assisted_carry` | No | Makes this the single floor that uses the guided no-dock carry workflow |
| `presets` | No | Structured additional presets with optional `cleaning_count: 1` or `2`; arbitrary service YAML is intentionally unsupported |
| `default_preset` | No | Built-in or configured preset ID |
| `vacuum_mode_fallback` | No | `set_clean_motor_mode` enables true Vacuum mode on HA 2026.7 and older with one atomic Roborock command |

## Service behavior

Start validates every requested option against live entity options. It then:

1. Selects and confirms the target floor when necessary.
2. Applies the Home Assistant 2026.8+ high-level `cleaning_mode` for Vacuum or Vac & Mop when configured. On HA 2026.7 and older, the explicit fallback uses one atomic `set_clean_motor_mode` command for Vacuum mode.
3. Applies only the app-supported manual route, water-flow, and suction values selected in the sheet.
4. Sets the robot's native cleaning count with `set_clean_repeat_times` using the device-required `{ repeat: 1|2 }` object.
5. Calls `vacuum.clean_area` once with all selected HA area IDs.

Vac followed by Mop uses `entities.vacuum_then_mop_script` because the Roborock command exposed through Home Assistant does not reliably activate this app-only one-time sequence. The card validates both `vacuum` and `mop` cleaning modes, then starts the script with the selected areas and settings. Configure that script to run a Vacuum `vacuum.clean_area` phase, wait for it to finish and return, then run a Mop `vacuum.clean_area` phase over the same areas. Stop and Dock first turn off this script, preventing a cancelled vacuum phase from starting a later mop phase.

A complete, commented starting point is provided in [`docs/vacuum-then-mop-script.yaml`](docs/vacuum-then-mop-script.yaml). Replace its five Roborock entity IDs with your own, create or import the script, and select that script in the card editor.

SmartPlan atomically sets Roborock's complete AI bundle (`fan_power: 110`, `water_box_mode: 209`, `mop_mode: 306`) and does not send manual overrides. Entire-floor jobs always use their configured room list rather than `vacuum.start`, so excluded rooms stay excluded.

Assisted carry is designed for a saved floor that has no dock. Its HA scripts prepare and pre-wet the mop at the dock, optionally drive to a configured safe pickup coordinate, run one explicit Vac & Mop area job on the remote floor, and finish with docking, emptying outside do-not-disturb mode, mop washing, and verified auto-drying. The card stores only a compact room/settings payload in `input_text`; the scripts and stage helper remain the source of truth if the dashboard closes.

Pause, resume, stop, and dock use `vacuum.pause`, `vacuum.start`, `vacuum.stop`, and `vacuum.return_to_base`. `vacuum.start` is exposed only as Resume while paused. Stop and Dock also cancel the configured Vac followed by Mop script before controlling the vacuum.

Dock settings use `vacuum.send_command` with the device-native Roborock payload and update the configured HA helper only after the device accepts the command. This avoids displaying a successful value after a rejected setting. The helpers are optional; without them, the panel uses the documented defaults for its initial display. Empty, Wash, Dry, and Drain are deliberately separate from settings and always require confirmation before starting. The dryer setting command cannot start the dryer; the guarded Dry action uses the distinct dryer-status command.

## Troubleshooting

- **Calibration/rooms missing:** confirm the selected image comes from `roborock_custom_map`, then reload that integration after the core Roborock integration is loaded.
- **Room disabled:** assign an HA `area_id` in the visual editor and make sure that segment is mapped in Roborock entity settings.
- **Preset unavailable:** its fan speed, mop mode, or intensity is absent from the live entity options. Use a supported value or another preset.
- **Vacuum only is unavailable:** configure the Roborock high-level Cleaning mode select on Home Assistant 2026.8+, or set `vacuum_mode_fallback: set_clean_motor_mode` on older stable releases. The fallback is atomic and does not call the incompatible mop-intensity `off` select.
- **Vac followed by Mop is unavailable:** configure `entities.vacuum_then_mop_script` and a Cleaning mode entity that offers both `vacuum` and `mop`.
- **Floor timeout:** verify `map_select_option` exactly matches a live option on `entities.map_select`.
- **Card not found after install:** hard-refresh the browser and verify the HACS resource is loaded as a JavaScript module.
- **Cleaning does not start:** the error toast names the failed operation. The card deliberately does not fall back or roll back device settings automatically.

## Development

```bash
npm install
npm run verify
npx playwright install chromium
npm run test:e2e
```

The production bundle is `dist/roborock-vacuum-map-card.js`.

## Credits and trademark notice

Selected interaction and presentation patterns were adapted from the MIT-licensed [Dreame Vacuum Map Card](https://github.com/noambergauz/dreame-vacuum-map-card). See [NOTICE](NOTICE) for exact attribution.

Roborock is a trademark of Beijing Roborock Technology Co., Ltd. This unofficial project is not affiliated with or endorsed by Roborock.

## License

[MIT](LICENSE)

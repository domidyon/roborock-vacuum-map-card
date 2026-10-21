# Changelog

## Unreleased

- Require Home Assistant 2026.8 or newer, which provides the Roborock Cleaning mode select.
- Deprecate `vacuum_mode_fallback`. Existing configs keep working and log a console notice; the option is hidden from the editor unless already set.
- Report the card version from `package.json` instead of a hand-maintained constant.
- Add a backward-compatibility test suite for v0.8.0 configs.
- Run CI and HACS validation on the `beta` branch.
- Add registry-based device discovery (`src/discovery/`): finds the robot, its separate dock device and the Roborock Custom Map device. Entities are matched by translation key instead of entity ID, every map becomes a floor, and rooms are mapped to areas using Home Assistant's own segment ↔ area mapping. Not wired into the UI yet.
- Add model profiles (`src/profiles.ts`, `docs/models.md`) for the Qrevo Curv 2 Flow, Saros 10R and S7/S7+. They decide SmartPlan, Mop only, mop routes and how the cleaning count is sent. Explicit config wins over the profile, and the profile wins over live-option detection.
- Support the S7/S7+ (issue #2, from PR #3): no `set_clean_repeat_times`, two-pass room jobs via `app_segment_clean`, mild/standard/intense water flow, and SmartPlan hidden.
- Add the `enable_smartplan` and `cleaning_count_command` config overrides.
- Offer the Deep+ route on the Qrevo Curv 2 Flow, whose app has Deep+ rather than Deep.
- Show the matched model profile in the editor and add a model-report issue form.
- Add a model catalog generated from python-roborock v7.13.0 (98 model ids, 15 with real-device feature data) and port its mop-route rules. Known models get the right cleaning count, SmartPlan and routes without a hand-written profile.
- During setup, read the robot's own feature flags from Home Assistant's Roborock diagnostics (admin only, flags only) for models the card doesn't know yet.
- Add a compatibility verdict (supported / limited / unsupported) to discovery, and show recognised and unsupported models in the editor. B01/A01 protocol robots and wet-dry vacuums are reported as unsupported.
- Audit native dock entities. None replaces a dock helper yet: the *Empty mode* select needs a Home Assistant fix due in 2026.11, and the dock switches are actions, not settings. The result is documented in `docs/configuration.md`.
- Add helper provisioning (`src/provisioning/helpers.ts`): deterministic `rvmc_` dock and assisted-carry helpers, created idempotently by an administrator, or as a `configuration.yaml` snippet. Not wired into the UI yet.
- Add script blueprints for Vac followed by Mop and the three assisted-carry scripts, linked from the card editor.
- Share the dock option lists and defaults between the dock panel, the dock commands and the helpers (`src/dock-settings.ts`).
- Add pre-start checks: an empty clean-water tank, a water shortage or a detached mop or water tank blocks jobs that use water. A full dirty-water tank, a dock error, low battery or overdue maintenance shows a warning with *Start anyway*. The executor enforces the blocking checks too.
- Add a maintenance view to the dock panel, with remaining time per part, a badge for overdue parts and resets that ask for confirmation. Discovery finds the consumable sensors and reset buttons.
- Add a *Setup needs attention* notice for config drift (missing areas or entities, renamed maps, lost calibration). Rooms whose area was deleted are disabled with a reason.
- Discover the dock water-tank and dock-error sensors.
- Fix the editor hiding a configured dock mop-drying switch (Home Assistant replaced the binary sensor with a switch).
- Add the setup assistant in the editor (checks, robot, floors, rooms, dock helpers, presets, review). It opens by itself for cards that can't work yet.
- "Add card" now starts from a discovered config for the first Roborock vacuum, including Home Assistant's room-to-area mapping and the robot's feature flags.
- Show a localized *Finish setting up* state with fix links instead of Home Assistant's error card when the config is unusable or the vacuum is gone.
- Add Re-detect: per-change fixes for new entities, rooms and maps, renamed map images or options, deleted areas and consumables, without touching working choices.
- Add presets as Home Assistant scripts (created by administrators, YAML for others).
- Add `config_version` and an in-memory migration pipeline for future format changes.
- Redesign the editor into collapsible sections (Basics, Floors and rooms, Dock, Presets, Advanced). Mark entities auto-detected or manual, offer detected entities for empty fields, and use Home Assistant's entity, area and icon pickers narrowed to the vacuum's devices.
- Choose preset suction, route and water flow from the robot's supported options instead of free text.
- Translate the editor, setup assistant, Re-detect and preset scripts into English, Dutch, Polish and Turkish, following the Home Assistant user language.
- Fix the native area picker in the editor not receiving `hass`.
- Ship Preact's React-compatible runtime instead of React DOM and fully minify the bundle: 754 → 374 KB (181 → 109 KB gzipped). Unit and e2e tests run on the shipped runtime.
- Add *Copy diagnostics* to the editor and the *Finish setting up* screen: a redacted report for bug and model reports.
- Add map loading and *Retry* states, and banners when the vacuum is offline or reports an error.
- Improve accessibility: sheets trap focus, close on Escape and return focus to the opener; the setup assistant moves focus to each step; animations respect *reduce motion*.
- Add troubleshooting, FAQ and translation guides, CONTRIBUTING, Code of Conduct, SECURITY, bug and feature templates, a pull-request template and Dependabot.
- Refresh screenshots and add an onboarding GIF (`scripts/capture-screenshots.mjs --gif`).
- Split the card component into header, controls, dock and assisted-carry hooks without behaviour changes.
- Add `scripts/capture-discovery-fixture.mjs`, which takes a redacted, read-only registry snapshot for tests and model reports.

## 0.8.0 — 2026-10-21

- Add an explicitly opt-in Mop-only mode for supported Roborock models without exposing it on the Qrevo Curv 2 Flow by default.
- Add per-mode mop-route allow-lists with UI normalization and executor preflight enforcement.
- Add Polish translations and localized mode, option, and time labels.

## 0.7.1 — 2026-10-12

- Add Turkish language support across the card UI, dock controls, configuration editor, and time formatting (thanks @koltuknil).
- Report the correct card version in the browser console.

## 0.7.0 — 2026-08-11

- Add free-drawn, movable, and resizable rectangular zone cleaning on calibrated Roborock maps.
- Apply validated Vacuum or Vac & Mop settings before calling Home Assistant's native `roborock.set_vacuum_zoned_cleaning` action.
- Keep SmartPlan, Vac followed by Mop, and assisted-carry workflows out of Zone mode.

## 0.6.6 — 2026-08-10

- Expose Vac followed by Mop on assisted isolated maps without a native Roborock routine by using the shared no-dock two-phase start script.

## 0.6.5 — 2026-08-10

- Support multiple isolated maps with assisted carry while retaining one durable, mutually exclusive workflow.
- Persist the exact floor, Roborock map option, mapped areas, whole-map intent, and optional native routine in each carry job.
- Restore the correct map tab after dashboard reloads and use whole-map cleaning for single-room isolated maps.
- Keep legacy upstairs payloads compatible with the existing `Map 1` flow.

## 0.6.2 — 2026-08-10

- Treat completed and failed assisted-carry workflows as terminal so floor switching is unlocked again.
- Re-synchronize the displayed floor with Home Assistant's selected-map entity when an assisted upstairs job ends.
- Add regression coverage for returning from a completed upstairs job to the downstairs dashboard map.

## 0.6.1 — 2026-08-04

- Start Vac & Mop jobs after Home Assistant accepts the Roborock cleaning-mode command, even when its delayed derived selector remains `unknown`.
- Preserve strict state confirmation for Vacuum mode and abort when Home Assistant rejects the cleaning-mode service call.
- Add regression coverage for the Qrevo Curv 2 Flow's delayed Vac & Mop selector state.

## 0.5.1 — 2026-08-03

- Run each floor's saved native Roborock routine for Vac followed by Mop jobs.
- Treat the routine as a whole-floor job and hide suction, water flow, cleaning count, and route controls that are owned by the Roborock app.
- Preserve the durable assisted-carry handoff while allowing the upstairs start script to launch the saved routine.
- Keep the older cancellable Home Assistant two-phase script as a compatibility fallback for cards without a configured routine.

## 0.4.0 — 2026-08-03

- Add a durable assisted-carry workflow for cleaning a floor without its dock.
- Persist the selected rooms and Vac & Mop settings in Home Assistant helpers so the workflow survives browser and iPhone reloads.
- Guide mop preparation, the upstairs carry, cleaning, the return carry, docking, emptying, mop washing, and verified auto-drying through one contextual card panel.
- Restrict assisted jobs to explicit Vac & Mop settings instead of dock-dependent SmartPlan or Vac followed by Mop modes.
- Add mobile-first progress, cancellation, recovery, and completion states plus visual-editor configuration for the workflow entities and assisted floor.

## 0.3.1 — 2026-08-03

- Use Home Assistant's content-driven `rows: auto` grid sizing so the card cannot overflow into the following section on narrow iPhone layouts.
- Correct the version reported by the card's browser console banner.

## 0.3.0 — 2026-08-03

- Add an app-style dock panel with Empty, Wash, Dry, and onboard-water-tank drain controls.
- Require explicit confirmation before every noisy dock start or drain action; stopping an active dock process remains immediate.
- Add mop-wash frequency, washing mode, wash-water temperature, auto-empty, empty mode, auto-drying, drying duration, and dock child-lock settings.
- Use the Qrevo's accepted native Roborock payloads for every dock setting, including separate dryer configuration and dryer-start commands.
- Support optional Home Assistant input helpers so dock settings persist across browser reloads and stay synchronized across dashboard clients.
- Add unit and browser coverage for all setting payloads, accepted-helper updates, rejected-setting behavior, and physical-action confirmation guards.

## 0.2.0 — 2026-08-03

- Match the Roborock app's four General modes: SmartPlan, Vac followed by Mop, Vac & Mop, and Vacuum.
- Add app-style contextual suction, six-step water flow, one/two-pass cleaning, and fast/standard/deep route controls.
- Filter internal values such as `custom`, `smart_mode`, `deep_plus`, and `off_raise_main_brush` from the job UI.
- Use Home Assistant 2026.8's high-level Cleaning mode select when available.
- Set SmartPlan as one atomic Roborock AI bundle instead of changing only the mop route.
- Add tested native one/two-pass cleaning and a cancellable Home Assistant two-phase script for reliable Vac followed by Mop jobs.
- Cancel any active two-phase orchestration before Stop or Dock so a later mop phase cannot start unexpectedly.

## 0.1.2 — 2026-08-03

- Add configurable dock mop-drying state and formatted remaining-time display beside the vacuum state.
- Surface dock-side mop washing from the detailed Roborock status sensor even while Home Assistant reports the vacuum as docked.
- Use Home Assistant's high-level Roborock Cleaning mode select for true Vacuum mode instead of the incompatible mop-intensity `off` workaround.
- Add an explicit, tested `set_clean_motor_mode` fallback for true Vacuum mode on Home Assistant 2026.7 and older.

## 0.1.1 — 2026-08-03

- Fix the production bundle failing to load in Home Assistant when the browser has no Node.js `process` global.
- Add a browser regression test that imports the shipped bundle directly.

## 0.1.0 — 2026-08-02

- Initial public release
- Multi-floor calibrated map rendering and room selection
- Whole-floor inclusion/exclusion rules
- Built-in and configurable job presets
- SmartPlan-safe native Roborock job execution
- English and Dutch UI
- Lovelace visual editor

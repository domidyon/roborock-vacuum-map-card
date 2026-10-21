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

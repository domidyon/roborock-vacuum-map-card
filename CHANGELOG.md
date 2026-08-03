# Changelog

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

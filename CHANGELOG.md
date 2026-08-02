# Changelog

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

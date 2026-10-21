# Contributing

Thanks for helping! This is a hobby project maintained in spare time, so please be
patient with reviews.

## Ways to help

- **Model reports:** tell us how the card works on your Roborock with the
  [model report form](https://github.com/domidyon/roborock-vacuum-map-card/issues/new?template=model_report.yml).
  Include *Copy diagnostics* from the card editor.
- **Bug reports:** use the [bug report form](https://github.com/domidyon/roborock-vacuum-map-card/issues/new?template=bug_report.yml)
  with diagnostics and steps to reproduce.
- **Translations:** see [docs/translating.md](docs/translating.md).
- **Code:** fixes and features as pull requests.

## Development

```bash
git clone https://github.com/domidyon/roborock-vacuum-map-card.git
cd roborock-vacuum-map-card
git switch beta
npm install
npm run dev        # fixture page with a simulated Home Assistant (?view=editor for the editor)
npm run verify     # lint, typecheck, unit tests, production build
npx playwright install chromium && npm run test:e2e
```

The card ships Preact's React-compatible runtime. Code is written against React's API,
and the build, the unit tests and the e2e fixture all alias `react` to `preact/compat`.

## Pull requests

- Target the **`beta`** branch.
- Include the rebuilt `dist/roborock-vacuum-map-card.js` (HACS serves it from the repository).
- Add or update tests. The job and dock executors are fully unit-tested; keep them that way.
- Existing configs must keep working: `src/legacy-config.test.ts` guards that.
- Add a line under `## Unreleased` in `CHANGELOG.md`.
- New user-facing text goes into both dictionaries' `en` entries; other languages may fall
  back to English until a translator updates them, but the keys must exist.

## Project layout

| Path | What lives there |
|---|---|
| `src/components/` | The card (`VacuumCard`, sheets, map) and editor (`CardEditor`, `editor/`, `onboarding/`) |
| `src/discovery/` | Finding the vacuum's devices, entities, maps, rooms and areas; Re-detect |
| `src/catalog/`, `src/profiles.ts` | Model catalog (from python-roborock), feature flags and hand-written model quirks |
| `src/executor.ts`, `src/dock-executor.ts` | Everything that sends commands to the robot |
| `src/preflight.ts`, `src/maintenance.ts`, `src/health.ts` | Pre-start checks, maintenance and config health |
| `blueprints/` | Script blueprints for the optional scripts |
| `scripts/` | Fixture capture, model catalog generation, screenshots |

By contributing you agree that your contributions are licensed under the [MIT License](LICENSE)
and that you follow the [Code of Conduct](CODE_OF_CONDUCT.md).

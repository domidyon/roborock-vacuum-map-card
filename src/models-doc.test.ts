import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { CATALOG_MODELS, CATALOG_SOURCE, compatibility, modelFacts, type CatalogModel } from './catalog';
import { MODEL_PROFILES } from './profiles';

// docs/models.md is generated from src/profiles.ts and src/catalog. Regenerate with:
//   UPDATE_MODELS_DOC=1 npx vitest run src/models-doc.test.ts
const DOC = resolve(__dirname, '../docs/models.md');
const STATUS = { tested: '✅ Tested', community: '🟢 Community', experimental: '🟡 Experimental' } as const;

const yesNo = (value?: boolean) => (value === undefined ? 'auto' : value ? 'yes' : 'no');
const routeList = (routes?: Partial<Record<string, string[]>>) => {
  if (!routes) return 'auto';
  const vacMop = routes.vacuum_and_mop?.join(', ');
  const mop = routes.mop?.join(', ');
  return vacMop === mop ? vacMop ?? 'auto' : [vacMop && `Vac & Mop: ${vacMop}`, mop && `Mop: ${mop}`].filter(Boolean).join('<br>');
};

function expectation(entry: CatalogModel): string {
  const verdict = compatibility({ model: entry.model });
  if (verdict.reasons.includes('not_a_robot_vacuum')) return '⛔ Not a robot vacuum';
  if (verdict.reasons.includes('protocol_unsupported')) return `⛔ Not supported (${entry.protocol} protocol)`;
  if (entry.features) return '✅ Expected to work (feature data)';
  if (entry.protocol === '1.0') return '🟢 Expected to work';
  return '❔ Not verified';
}

export function renderModelsDoc(): string {
  const profileRows = MODEL_PROFILES.map((profile) => {
    const facts = modelFacts(profile.models[0]);
    return [
      profile.label,
      profile.models.map((model) => `\`${model}\``).join(', '),
      STATUS[profile.status],
      yesNo(facts.smartplan),
      facts.mop_only === undefined ? 'opt-in' : yesNo(facts.mop_only),
      routeList(facts.mop_routes),
      facts.repeat === 'app_segment_clean' ? 'per segment' : facts.repeat ? 'setting' : 'auto',
      profile.notes ?? '',
    ].join(' | ');
  });
  const catalogRows = CATALOG_MODELS.map((entry) => [
    entry.names?.join(' / ') ?? '',
    `\`${entry.model}\``,
    entry.family ?? '',
    entry.protocol ?? '',
    expectation(entry),
  ].join(' | '));
  return [
    '# Supported models',
    '',
    '<!-- Generated from src/profiles.ts and src/catalog by src/models-doc.test.ts. Do not edit by hand. -->',
    '',
    'The card works with Roborock robot vacuums from the official Home Assistant integration.',
    'App behaviour that Home Assistant cannot show is decided in this order:',
    '',
    '1. Your card config (`enable_smartplan`, `cleaning_count_command`, `mop_routes`, `enable_mop_only`)',
    '2. A hand-written model profile, for app quirks only',
    "3. The robot's own feature flags, read once during setup by an admin",
    `4. Feature data for the model from ${CATALOG_SOURCE}`,
    '5. The options your Home Assistant entities offer',
    '',
    '## Model profiles',
    '',
    '| Model | Model id | Status | SmartPlan | Mop only | Mop routes | 2-pass rooms | Notes |',
    '|---|---|---|---|---|---|---|---|',
    ...profileRows.map((row) => `| ${row} |`),
    '',
    '## Known models',
    '',
    'Model ids, names, families and protocols from python-roborock. "Feature data" means',
    'python-roborock has a real-device feature dump, so the card knows the cleaning count,',
    'SmartPlan and routes without a profile.',
    '',
    '| Name | Model id | Family | Protocol | Expectation |',
    '|---|---|---|---|---|',
    ...catalogRows.map((row) => `| ${row} |`),
    '',
    'Is your model missing or wrong? Please open a',
    '[model report](https://github.com/domidyon/roborock-vacuum-map-card/issues/new?template=model_report.yml).',
    'You can find the model id under **Settings → Devices & services → Roborock → your vacuum**.',
    '',
  ].join('\n');
}

describe('docs/models.md', () => {
  it('matches the model profiles and catalog', () => {
    const expected = renderModelsDoc();
    if (process.env.UPDATE_MODELS_DOC) writeFileSync(DOC, expected);
    expect(existsSync(DOC) ? readFileSync(DOC, 'utf8') : '', 'Run: UPDATE_MODELS_DOC=1 npx vitest run src/models-doc.test.ts').toBe(expected);
  });
});

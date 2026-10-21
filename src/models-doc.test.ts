import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { MODEL_PROFILES, type ModelProfile } from './profiles';

// docs/models.md is generated from src/profiles.ts. Regenerate with:
//   UPDATE_MODELS_DOC=1 npx vitest run src/models-doc.test.ts
const DOC = resolve(__dirname, '../docs/models.md');
const STATUS = { tested: '✅ Tested', community: '🟢 Community', experimental: '🟡 Experimental' } as const;

const yesNo = (value?: boolean) => (value === undefined ? 'auto' : value ? 'yes' : 'no');
const routes = (profile: ModelProfile) =>
  profile.mop_routes
    ? Object.entries(profile.mop_routes).map(([mode, list]) => `${mode === 'mop' ? 'Mop' : 'Vac & Mop'}: ${list?.join(', ')}`).join('<br>')
    : 'auto';

export function renderModelsDoc(): string {
  const rows = MODEL_PROFILES.map((profile) => [
    profile.label,
    profile.models.map((model) => `\`${model}\``).join(', '),
    STATUS[profile.status],
    yesNo(profile.smartplan),
    profile.mop_only === undefined ? 'opt-in' : yesNo(profile.mop_only),
    routes(profile),
    profile.repeat === 'app_segment_clean' ? 'per segment' : profile.repeat ? 'setting' : 'auto',
    profile.notes ?? '',
  ].join(' | '));
  return [
    '# Supported models',
    '',
    '<!-- Generated from src/profiles.ts by src/models-doc.test.ts. Do not edit by hand. -->',
    '',
    'The card works with any vacuum from the official Roborock integration: options are read',
    'live from Home Assistant. A *model profile* adds what Home Assistant cannot tell, such as',
    'whether the Roborock app offers Mop only or SmartPlan. Settings in your card config always',
    'override the profile; "auto" means the card detects it from your entities.',
    '',
    '| Model | Model id | Status | SmartPlan | Mop only | Mop routes | 2-pass rooms | Notes |',
    '|---|---|---|---|---|---|---|---|',
    ...rows.map((row) => `| ${row} |`),
    '',
    'Is your model missing or wrong? Please open a',
    '[model report](https://github.com/domidyon/roborock-vacuum-map-card/issues/new?template=model_report.yml).',
    'You can find the model id under **Settings → Devices & services → Roborock → your vacuum**.',
    '',
    'Sources for each profile are listed in [`src/profiles.ts`](../src/profiles.ts).',
    '',
  ].join('\n');
}

describe('docs/models.md', () => {
  it('matches the model profiles', () => {
    const expected = renderModelsDoc();
    if (process.env.UPDATE_MODELS_DOC) writeFileSync(DOC, expected);
    expect(existsSync(DOC) ? readFileSync(DOC, 'utf8') : '', 'Run: UPDATE_MODELS_DOC=1 npx vitest run src/models-doc.test.ts').toBe(expected);
  });
});

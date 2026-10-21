import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { BLUEPRINTS } from './blueprints';

const DIR = resolve(__dirname, '../blueprints/script/roborock_vacuum_map_card');
const files = readdirSync(DIR).filter((file) => file.endsWith('.yaml')).sort();

/** Top-level keys of the `  input:` block (4-space indented). */
function declaredInputs(text: string): string[] {
  const block = text.split('\n  input:\n')[1]?.split(/\n(?=\S)/)[0] ?? '';
  return [...block.matchAll(/^ {4}([a-z_]+):$/gm)].map((match) => match[1]).sort();
}

describe('script blueprints', () => {
  it('ships the blueprints the editor links to', () => {
    expect(files).toEqual(Object.values(BLUEPRINTS).map((blueprint) => blueprint.file).sort());
  });

  it.each(files)('%s declares exactly the inputs it uses', (file) => {
    const text = readFileSync(resolve(DIR, file), 'utf8');
    const used = [...new Set([...text.matchAll(/!input (\w+)/g)].map((match) => match[1]))].sort();
    expect(text).toMatch(/^blueprint:\n/);
    expect(text).toContain('  domain: script\n');
    expect(text).toContain(`roborock_vacuum_map_card/${file}`);
    expect(declaredInputs(text)).toEqual(used);
  });

  it.each(files)('%s contains no personal values from the maintainer\'s setup', (file) => {
    const text = readFileSync(resolve(DIR, file), 'utf8');
    expect(text).not.toMatch(/qrevo|woonkamer|beneden|boven|bovenverdieping|user_id|short_test|requester|suus/i);
    // Entity ids must come from inputs, never be hard-coded (service names are fine).
    const withoutActions = text.replace(/action: [a-z_]+\.[a-z_]+/g, '');
    expect(withoutActions.match(/\b(?:vacuum|select|sensor|binary_sensor|switch|input_select|input_text|input_boolean|button|image)\.[a-z0-9_]+/g)).toBeNull();
  });
});

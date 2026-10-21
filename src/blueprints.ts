// Script blueprints shipped in blueprints/script/roborock_vacuum_map_card. The editor
// links to them through My Home Assistant's blueprint import.
// TODO(1.0): point at `main` once beta is promoted.
const BASE = 'https://github.com/domidyon/roborock-vacuum-map-card/blob/beta/blueprints/script/roborock_vacuum_map_card';

export const BLUEPRINTS = {
  vacuum_then_mop: { file: 'vacuum_then_mop.yaml', label: 'Vac followed by Mop' },
  assisted_carry_prepare: { file: 'assisted_carry_prepare.yaml', label: 'Assisted carry: prepare' },
  assisted_carry_start: { file: 'assisted_carry_start.yaml', label: 'Assisted carry: start' },
  assisted_carry_finish: { file: 'assisted_carry_finish.yaml', label: 'Assisted carry: finish' },
} as const;

export function blueprintImportUrl(file: string): string {
  return `https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=${encodeURIComponent(`${BASE}/${file}`)}`;
}

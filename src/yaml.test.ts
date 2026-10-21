import { describe, expect, it } from 'vitest';
import { toYaml } from './yaml';

describe('toYaml', () => {
  it('writes nested maps and lists in block style', () => {
    expect(toYaml({
      type: 'custom:roborock-vacuum-map-card',
      entity: 'vacuum.qrevo',
      floors: [{ id: 'beneden', rooms: [{ segment_id: 1, name: 'Keuken', include_in_floor_clean: true }] }],
      options: [],
      empty: {},
      skipped: undefined,
    })).toBe([
      'type: "custom:roborock-vacuum-map-card"',
      'entity: vacuum.qrevo',
      'floors:',
      '- id: beneden',
      '  rooms:',
      '  - segment_id: 1',
      '    name: Keuken',
      '    include_in_floor_clean: true',
      'options: []',
      'empty: {}',
      '',
    ].join('\n'));
  });

  it('quotes strings YAML would misread', () => {
    expect(toYaml({ a: 'on', b: '12', c: 'Map 1', d: '{{ x }}', e: 'mdi:sofa', f: '', g: 'Onder Bed', h: 'a: b' })).toBe(
      'a: "on"\nb: "12"\nc: Map 1\nd: "{{ x }}"\ne: "mdi:sofa"\nf: ""\ng: Onder Bed\nh: "a: b"\n',
    );
  });
});

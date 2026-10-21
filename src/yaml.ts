/**
 * Minimal YAML writer for JSON-compatible values (configs and scripts the card generates).
 * Strings are quoted whenever plain YAML could misread them; quoted strings use JSON
 * escaping, which is valid YAML.
 */
const PLAIN = /^[A-Za-z_][\w./\- ]*$/;
const RESERVED = /^(?:true|false|yes|no|on|off|null|~|y|n)$/i;

function scalar(value: unknown): string {
  if (value === null || value === undefined) return 'null';
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  const text = String(value);
  return PLAIN.test(text) && !RESERVED.test(text) && !text.endsWith(' ') && !text.includes(': ') ? text : JSON.stringify(text);
}

function isEmpty(value: unknown): boolean {
  return (Array.isArray(value) && value.length === 0) || (typeof value === 'object' && value !== null && !Array.isArray(value) && Object.keys(value).length === 0);
}

function lines(value: unknown, indent: string): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((item) => {
      if (typeof item === 'object' && item !== null && !isEmpty(item)) {
        const [first, ...rest] = lines(item, `${indent}  `);
        return [`${indent}- ${first.trimStart()}`, ...rest];
      }
      return [`${indent}- ${isEmpty(item) ? (Array.isArray(item) ? '[]' : '{}') : scalar(item)}`];
    });
  }
  if (typeof value === 'object' && value !== null) {
    return Object.entries(value).filter(([, item]) => item !== undefined).flatMap(([key, item]) => {
      const name = scalar(key);
      if (isEmpty(item)) return [`${indent}${name}: ${Array.isArray(item) ? '[]' : '{}'}`];
      if (typeof item === 'object' && item !== null) return [`${indent}${name}:`, ...lines(item, Array.isArray(item) ? indent : `${indent}  `)];
      return [`${indent}${name}: ${scalar(item)}`];
    });
  }
  return [`${indent}${scalar(value)}`];
}

export function toYaml(value: unknown): string {
  return `${lines(value, '').join('\n')}\n`;
}

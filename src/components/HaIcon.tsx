import { createElement } from 'react';

export function HaIcon({ icon, className }: { icon?: string; className?: string }) {
  if (!icon) return null;
  return createElement('ha-icon', { icon, class: className, 'aria-hidden': 'true' });
}

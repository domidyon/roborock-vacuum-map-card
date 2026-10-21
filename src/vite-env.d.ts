/// <reference types="vite/client" />

import type { DetailedHTMLProps, HTMLAttributes } from 'react';

declare global {
  /** Injected from package.json by vite.config.ts. */
  const __CARD_VERSION__: string;
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'ha-card': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      // Home Assistant pickers; properties are set through refs (see components/fields.tsx).
      'ha-area-picker': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      'ha-entity-picker': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      'ha-icon-picker': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

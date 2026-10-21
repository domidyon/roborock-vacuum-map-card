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
      'ha-area-picker': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        value?: string;
        'no-add'?: boolean;
      };
    }
  }
}

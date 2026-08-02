/// <reference types="vite/client" />

import type { DetailedHTMLProps, HTMLAttributes } from 'react';

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

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pkg from '../../package.json' with { type: 'json' };
import { PREACT_ALIASES } from '../../vite.config';

export default defineConfig({
  root: 'tests/fixture',
  plugins: [react()],
  resolve: { alias: PREACT_ALIASES },
  define: { __CARD_VERSION__: JSON.stringify(pkg.version) },
  server: { port: 4174, strictPort: true },
});

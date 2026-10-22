import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { CARD_DEFINES, PREACT_ALIASES } from '../../vite.config';

export default defineConfig({
  root: 'tests/fixture',
  plugins: [react()],
  resolve: { alias: PREACT_ALIASES },
  define: CARD_DEFINES,
  server: { port: 4174, strictPort: true },
});

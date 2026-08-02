import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'tests/fixture',
  plugins: [react()],
  server: { port: 4174, strictPort: true },
});

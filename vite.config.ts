import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/main.tsx',
      name: 'RoborockVacuumMapCard',
      fileName: () => 'roborock-vacuum-map-card.js',
      formats: ['es'],
    },
    rollupOptions: {
      output: { inlineDynamicImports: true },
    },
  },
  test: {
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
    coverage: { reporter: ['text', 'lcov'] },
  },
});

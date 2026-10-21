import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import pkg from './package.json' with { type: 'json' };

export default defineConfig(({ command }) => ({
  plugins: [react()],
  define: {
    __CARD_VERSION__: JSON.stringify(pkg.version),
    ...(command === 'build' ? { 'process.env.NODE_ENV': JSON.stringify('production') } : {}),
  },
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
}));

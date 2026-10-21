import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { transformWithEsbuild, type Plugin } from 'vite';
import pkg from './package.json' with { type: 'json' };

/**
 * Vite's library mode leaves whitespace in ES output so other bundlers can tree-shake
 * it. This bundle is loaded directly by Home Assistant, so minify it fully.
 */
function minifyBundle(): Plugin {
  return {
    name: 'minify-bundle',
    apply: 'build',
    async renderChunk(code, chunk) {
      const result = await transformWithEsbuild(code, chunk.fileName, { minify: true, format: 'esm', target: 'es2022', legalComments: 'none' });
      return { code: result.code, map: null };
    },
  };
}

/**
 * The card ships Preact's React-compatible runtime (~10 KB) instead of React DOM
 * (~180 KB). Tests and the e2e fixture use the same aliases, so they run on what ships.
 */
export const PREACT_ALIASES = [
  { find: /^react-dom\/test-utils$/, replacement: 'preact/test-utils' },
  { find: /^react-dom\/client$/, replacement: 'preact/compat/client' },
  { find: /^react\/jsx-runtime$/, replacement: 'preact/jsx-runtime' },
  { find: /^react\/jsx-dev-runtime$/, replacement: 'preact/jsx-dev-runtime' },
  { find: /^react-dom$/, replacement: 'preact/compat' },
  { find: /^react$/, replacement: 'preact/compat' },
];

export default defineConfig(({ command }) => ({
  plugins: [react()],
  resolve: { alias: PREACT_ALIASES },
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
      // Output plugins run after Vite's own esbuild pass, which would re-format the code.
      output: { inlineDynamicImports: true, plugins: [minifyBundle()] },
    },
  },
  test: {
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
    coverage: { reporter: ['text', 'lcov'] },
    // These packages have no `exports` map, so tests would load their CommonJS builds,
    // which require the real React; point them at their ESM builds.
    alias: [
      { find: /^@testing-library\/react$/, replacement: '@testing-library/react/dist/@testing-library/react.esm.js' },
      { find: /^lucide-react$/, replacement: 'lucide-react/dist/esm/lucide-react.js' },
      { find: /^react-zoom-pan-pinch$/, replacement: 'react-zoom-pan-pinch/dist/index.esm.js' },
    ],
    server: { deps: { inline: [/@testing-library\/react/, /lucide-react/, /react-zoom-pan-pinch/] } },
  },
}));

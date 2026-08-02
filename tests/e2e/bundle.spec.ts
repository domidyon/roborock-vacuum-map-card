import path from 'node:path';
import { expect, test } from '@playwright/test';

test('production bundle registers without a Node process global', async ({ page }) => {
  const pageErrors: string[] = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));

  await page.goto('/');
  await page.evaluate(() => Reflect.deleteProperty(globalThis, 'process'));
  await page.addScriptTag({
    path: path.resolve('dist/roborock-vacuum-map-card.js'),
    type: 'module',
  });

  await expect.poll(() => page.evaluate(() => Boolean(customElements.get('roborock-vacuum-map-card')))).toBe(true);
  expect(pageErrors).toEqual([]);
});

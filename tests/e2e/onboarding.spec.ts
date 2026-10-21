import { expect, test } from '@playwright/test';

test('the setup assistant turns a new card into a working config', async ({ page }) => {
  await page.goto('/?view=editor');
  await expect(page.getByRole('heading', { name: 'Before you start' })).toBeVisible();
  await page.getByRole('button', { name: 'Next' }).click();
  await expect(page.getByText('Qrevo Curv 2 Flow')).toBeVisible();
  await expect(page.getByText(/Supported · tested profile/)).toBeVisible();
  for (const heading of ['Floors', 'Rooms', 'Dock and helpers', 'Presets', 'Review and save']) {
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.getByRole('heading', { name: heading })).toBeVisible();
  }
  await expect(page.locator('.yaml-preview')).toContainText('map_entity: image.woonkamer_qrevo_curv_2_flow_beneden_custom');
  await page.getByRole('button', { name: 'Save card' }).click();
  const saved = await page.evaluate(() => window.__savedConfig);
  expect(saved?.entity).toBe('vacuum.qrevo_curv_2_flow');
  expect(saved?.floors.map((floor) => floor.map_select_option)).toEqual(['Beneden', 'Map 1', 'Badkamer', 'Onder Bed']);
  // Back in the editor, with Re-detect available.
  await expect(page.getByRole('button', { name: /Re-detect/ })).toBeVisible();
});

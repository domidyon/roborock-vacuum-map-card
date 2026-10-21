import { expect, test } from '@playwright/test';

test('an empty clean-water tank blocks mop jobs but not Vacuum only', async ({ page }) => {
  await page.goto('/?scenario=empty-tank');
  await page.getByRole('button', { name: 'Kitchen' }).click();
  await page.getByRole('button', { name: 'Configure job' }).click();
  const dialog = page.getByRole('dialog');
  await dialog.getByRole('tab', { name: 'Vac & Mop' }).click();
  await expect(dialog.getByRole('alert')).toContainText('The clean water tank is empty.');
  await expect(dialog.getByRole('button', { name: 'Start', exact: true })).toBeDisabled();
  await dialog.getByRole('tab', { name: 'Vacuum only' }).click();
  await expect(dialog.getByRole('alert')).toHaveCount(0);
  await dialog.getByRole('button', { name: 'Start', exact: true }).click();
  await expect.poll(() => page.evaluate(() => window.__serviceCalls.some(
    (call) => call.domain === 'vacuum' && call.service === 'clean_area',
  ))).toBe(true);
});

test('overdue maintenance shows a badge and the dock maintenance list', async ({ page }) => {
  await page.goto('/?scenario=maintenance');
  await expect(page.getByLabel('Maintenance due')).toHaveText('1');
  await page.getByRole('button', { name: /Dock station/ }).click();
  const dialog = page.getByRole('dialog', { name: 'Dock station' });
  await expect(dialog.locator('.maintenance-row.level-overdue')).toContainText('Sensors');
  await expect(dialog.locator('.maintenance-row.level-ok')).toContainText('Main brush');
});

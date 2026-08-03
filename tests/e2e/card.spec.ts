import { expect, test } from '@playwright/test';

test('selects multiple rooms and opens the job sheet', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Kitchen' }).click();
  await page.getByRole('button', { name: 'Hallway' }).click();
  await page.getByRole('button', { name: 'Configure job' }).click();
  await expect(page.getByRole('dialog')).toContainText('Kitchen · Hallway');
});

test('mirrors the Roborock General modes and contextual controls', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Kitchen' }).click();
  await page.getByRole('button', { name: 'Configure job' }).click();
  await expect(page.getByRole('tab', { name: 'AI SmartPlan' })).toBeVisible();
  await expect(page.getByRole('tab', { name: 'Vac followed by Mop' })).toBeVisible();
  await expect(page.getByRole('tab', { name: 'Vac & Mop' })).toBeVisible();
  await expect(page.getByRole('tab', { name: 'Vacuum only' })).toBeVisible();
  await expect(page.getByRole('slider', { name: 'Water flow' })).toHaveCount(0);
  await page.getByRole('tab', { name: 'Vac & Mop' }).click();
  await expect(page.getByRole('slider', { name: 'Water flow' })).toBeVisible();
  await expect(page.getByRole('dialog')).not.toContainText('off raise main brush');
  await expect(page.getByRole('dialog')).not.toContainText('deep plus');
});

test('Entire upstairs includes every current room', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('tab', { name: 'Upstairs' }).click();
  await page.getByRole('button', { name: 'Entire floor' }).click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toContainText('Office · Landing · Bedroom · Laundry');
  await expect(dialog.getByRole('tab', { name: 'AI SmartPlan' })).toBeVisible();
  await expect(dialog.getByRole('tab', { name: 'Vac followed by Mop' })).toBeVisible();
  await expect(dialog.getByRole('tab', { name: 'Vac & Mop' })).toBeVisible();
  await expect(dialog.getByRole('tab', { name: 'Vacuum only' })).toBeVisible();
});

test('the upstairs landing remains individually selectable', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('tab', { name: 'Upstairs' }).click();
  await page.getByRole('button', { name: 'Landing' }).click();
  await page.getByRole('button', { name: 'Prepare upstairs' }).click();
  await expect(page.getByRole('dialog')).toContainText('Landing');
});

test('mobile uses a bottom sheet and desktop uses a centered dialog', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Kitchen' }).click();
  await page.getByRole('button', { name: 'Configure job' }).click();
  const mobileBox = await page.getByRole('dialog').boundingBox();
  expect(mobileBox).not.toBeNull();
  expect(Math.abs((mobileBox!.y + mobileBox!.height) - 844)).toBeLessThan(2);

  await page.setViewportSize({ width: 1280, height: 900 });
  const desktopBox = await page.getByRole('dialog').boundingBox();
  expect(desktopBox).not.toBeNull();
  expect(desktopBox!.y).toBeGreaterThan(20);
  expect(desktopBox!.x).toBeGreaterThan(100);
});

test('renders against a dark Home Assistant theme', async ({ page }) => {
  await page.goto('/?theme=dark');
  const background = await page.locator('ha-card').evaluate((element) => getComputedStyle(element).backgroundColor);
  expect(background).toBe('rgb(27, 29, 34)');
});

test('shows prerequisite errors rather than guessed hitboxes', async ({ page }) => {
  await page.goto('/?scenario=missing-calibration');
  await expect(page.getByRole('alert')).toContainText('Roborock Custom Map calibration is missing');
  await expect(page.locator('.room-hitbox')).toHaveCount(0);
});

test('shows dock mop drying with its remaining time', async ({ page }) => {
  await page.goto('/?scenario=drying');
  await expect(page.locator('.state-line')).toContainText('docked · Drying mop · 3 h 54 min remaining');
});

test('opens dock controls, persists settings, and guards physical actions', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Dock station' }).click();
  const dialog = page.getByRole('dialog', { name: 'Dock station' });
  await expect(dialog).toContainText('Mop wash frequency');
  await expect(dialog).toContainText('Water temperature');
  await expect(dialog).toContainText('Auto-empty');
  await expect(dialog).toContainText('Auto-drying');
  await expect(dialog).toContainText('Drain onboard water tank');
  await page.getByRole('combobox', { name: 'Washing mode' }).selectOption('deep');
  const settingsCalls = await page.evaluate(() => window.__serviceCalls);
  expect(settingsCalls.some((call) => call.data?.command === 'set_wash_towel_mode')).toBe(true);

  page.once('dialog', (confirmation) => confirmation.dismiss());
  await page.getByRole('button', { name: /Empty/ }).click();
  const afterDismiss = await page.evaluate(() => window.__serviceCalls);
  expect(afterDismiss.some((call) => call.data?.command === 'app_start_collect_dust')).toBe(false);
});

test('retains the draft and never starts cleaning after a settings error', async ({ page }) => {
  await page.goto('/?scenario=service-error');
  await page.getByRole('button', { name: 'Kitchen' }).click();
  await page.getByRole('button', { name: 'Configure job' }).click();
  await page.getByRole('button', { name: 'Start', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('set_fan_speed');
  await expect(page.getByRole('dialog')).toBeVisible();
  const calls = await page.evaluate(() => window.__serviceCalls);
  expect(calls.some((call) => call.service === 'clean_area')).toBe(false);
});

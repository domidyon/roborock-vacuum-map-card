import { expect, test } from '@playwright/test';

test('selects multiple rooms and opens the job sheet', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Kitchen' }).click();
  await page.getByRole('button', { name: 'Hallway' }).click();
  await page.getByRole('button', { name: 'Configure job' }).click();
  await expect(page.getByRole('dialog')).toContainText('Kitchen · Hallway');
});

test('Entire upstairs excludes the bathroom', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('tab', { name: 'Upstairs' }).click();
  await page.getByRole('button', { name: 'Entire floor' }).click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toContainText('Office · Landing · Bedroom · Laundry');
  await expect(dialog).not.toContainText('Bathroom');
});

test('the upstairs bathroom remains individually selectable', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('tab', { name: 'Upstairs' }).click();
  await page.getByRole('button', { name: 'Bathroom' }).click();
  await page.getByRole('button', { name: 'Configure job' }).click();
  await expect(page.getByRole('dialog')).toContainText('Bathroom');
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

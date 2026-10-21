// Captures the README/docs screenshots and the onboarding GIF from the fixture page.
// Start the fixture first: npx vite --config tests/fixture/vite.config.ts --host 127.0.0.1
// The GIF needs ffmpeg on the PATH.
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readdirSync, rmSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { chromium } from '@playwright/test';

const BASE = 'http://127.0.0.1:4174';
const OUT = 'docs/screenshots';
const browser = await chromium.launch();

async function page(viewport, path = '') {
  const tab = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  await tab.goto(`${BASE}/${path}`);
  return tab;
}

const desktop = await page({ width: 1280, height: 900 });
await desktop.getByRole('button', { name: 'Kitchen' }).click();
await desktop.getByRole('button', { name: 'Hallway' }).click();
await desktop.getByRole('button', { name: 'Configure job' }).click();
await desktop.screenshot({ path: `${OUT}/demo-desktop.png`, fullPage: true });

const mobile = await page({ width: 390, height: 844 }, '?theme=dark');
await mobile.getByRole('button', { name: 'Kitchen' }).click();
await mobile.getByRole('button', { name: 'Living room' }).click();
await mobile.getByRole('button', { name: 'Configure job' }).click();
await mobile.screenshot({ path: `${OUT}/demo-mobile-dark.png`, fullPage: true });

const checks = await page({ width: 1280, height: 900 }, '?scenario=empty-tank');
await checks.getByRole('button', { name: 'Kitchen' }).click();
await checks.getByRole('button', { name: 'Configure job' }).click();
await checks.getByRole('dialog').getByRole('tab', { name: 'Vac & Mop' }).click();
await checks.screenshot({ path: `${OUT}/pre-start-checks.png`, fullPage: true });

const maintenance = await page({ width: 1280, height: 900 }, '?scenario=maintenance');
await maintenance.getByRole('button', { name: /Dock station/ }).click();
await maintenance.locator('.maintenance-group').scrollIntoViewIfNeeded();
await maintenance.screenshot({ path: `${OUT}/maintenance.png`, fullPage: true });

const wizard = await page({ width: 900, height: 900 }, '?view=editor');
await wizard.getByRole('button', { name: 'Next' }).click();
await wizard.getByText('Qrevo Curv 2 Flow').waitFor();
await wizard.screenshot({ path: `${OUT}/setup-assistant.png`, fullPage: true });

// Onboarding GIF: record the assistant from the first step to Save.
if (process.argv.includes('--gif')) {
  const videoDir = mkdtempSync(join(tmpdir(), 'rvmc-video-'));
  const context = await browser.newContext({ viewport: { width: 900, height: 760 }, recordVideo: { dir: videoDir, size: { width: 900, height: 760 } } });
  const tab = await context.newPage();
  await tab.goto(`${BASE}/?view=editor`);
  await tab.waitForTimeout(900);
  await tab.getByRole('button', { name: 'Next' }).click();
  await tab.getByText('Qrevo Curv 2 Flow').waitFor();
  for (const heading of ['Floors', 'Rooms', 'Dock and helpers', 'Presets', 'Review and save']) {
    await tab.waitForTimeout(1300);
    await tab.getByRole('button', { name: 'Next' }).click();
    await tab.getByRole('heading', { name: heading }).waitFor();
  }
  await tab.waitForTimeout(1500);
  await context.close();
  const video = join(videoDir, readdirSync(videoDir).find((file) => file.endsWith('.webm')));
  const gif = `${OUT}/setup-assistant.gif`;
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', video, '-vf',
    'fps=8,scale=720:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=96[p];[b][p]paletteuse=dither=bayer:bayer_scale=4', gif]);
  rmSync(videoDir, { recursive: true, force: true });
  const size = statSync(gif).size;
  if (size > 3 * 1024 * 1024) throw new Error(`${gif} is ${(size / 1048576).toFixed(1)} MB; keep it under 3 MB`);
  console.log(`${gif}: ${(size / 1048576).toFixed(2)} MB`);
}

await browser.close();

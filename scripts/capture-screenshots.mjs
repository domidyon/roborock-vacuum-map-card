import { chromium } from '@playwright/test';

const browser = await chromium.launch();
const desktop = await browser.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 });
await desktop.goto('http://127.0.0.1:4174');
await desktop.getByRole('button', { name: 'Kitchen' }).click();
await desktop.getByRole('button', { name: 'Hallway' }).click();
await desktop.getByRole('button', { name: 'Configure job' }).click();
await desktop.screenshot({ path: 'docs/screenshots/demo-desktop.png', fullPage: true });

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
await mobile.goto('http://127.0.0.1:4174?theme=dark');
await mobile.getByRole('tab', { name: 'Upstairs' }).click();
await mobile.getByRole('button', { name: 'Bathroom' }).click();
await mobile.getByRole('button', { name: 'Configure job' }).click();
await mobile.screenshot({ path: 'docs/screenshots/demo-mobile-dark.png', fullPage: true });

await browser.close();

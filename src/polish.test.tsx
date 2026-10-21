import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { DiagnosticsButton } from './components/DiagnosticsButton';
import { VacuumCard } from './components/VacuumCard';
import { buildDiagnostics, redact } from './diagnostics';
import { createDiscoveryHass } from './test/discovery-hass';
import { configFixture, createHass } from './test/fixtures';
import liveConfig from './test/fixtures/qrevo-live-card-config.json';

function loadMap() {
  const image = screen.getByRole('img');
  Object.defineProperty(image, 'naturalWidth', { configurable: true, value: 1200 });
  Object.defineProperty(image, 'naturalHeight', { configurable: true, value: 800 });
  fireEvent.load(image);
}

describe('map states', () => {
  it('shows a loading state until the map image loads', () => {
    render(<VacuumCard hass={createHass()} config={configFixture} />);
    expect(screen.getByText('Loading map…')).toBeInTheDocument();
    loadMap();
    expect(screen.queryByText('Loading map…')).not.toBeInTheDocument();
  });

  it('offers a retry when the map image fails to load', async () => {
    const hass = createHass();
    hass.states['image.downstairs'].attributes.entity_picture = '/api/image_proxy/image.downstairs?token=abc';
    render(<VacuumCard hass={hass} config={configFixture} />);
    fireEvent.error(screen.getByRole('img'));
    const alert = screen.getByRole('alert');
    expect(alert).toHaveTextContent('The map image could not be loaded.');
    await userEvent.click(within(alert).getByRole('button', { name: 'Retry' }));
    expect(screen.getByRole('img').getAttribute('src')).toContain('retry=1');
  });
});

describe('vacuum states', () => {
  it('says when the vacuum is offline or reports an error', () => {
    const hass = createHass();
    hass.states['vacuum.roborock'].state = 'unavailable';
    hass.states['sensor.error'].state = 'main_brush_jammed';
    render(<VacuumCard hass={hass} config={configFixture} />);
    expect(screen.getByText("The vacuum is offline. Home Assistant can't reach it right now.")).toBeInTheDocument();
    expect(screen.getByText('The vacuum reports an error: main brush jammed')).toBeInTheDocument();
  });
});

describe('sheet dialogs', () => {
  it('moves focus into the job sheet, closes on Escape and returns focus', async () => {
    render(<VacuumCard hass={createHass()} config={configFixture} />);
    loadMap();
    await userEvent.click(screen.getByRole('button', { name: 'Kitchen' }));
    const opener = screen.getByRole('button', { name: 'Configure job' });
    await userEvent.click(opener);
    const dialog = screen.getByRole('dialog');
    expect(dialog.contains(document.activeElement)).toBe(true);
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(document.activeElement).toBe(opener);
  });

  it('keeps Tab inside the dock sheet', async () => {
    render(<VacuumCard hass={createHass()} config={configFixture} />);
    await userEvent.click(screen.getByRole('button', { name: 'Dock station' }));
    const dialog = screen.getByRole('dialog', { name: 'Dock station' });
    for (let step = 0; step < 40; step += 1) {
      await userEvent.tab();
      expect(dialog.contains(document.activeElement)).toBe(true);
    }
  });
});

describe('diagnostics', () => {
  it('redacts credentials and signed URLs', () => {
    expect(redact({ access_token: 'abc', nested: { entity_picture: '/api/image?token=x' }, url: '/api/x?token=1', ok: 'fine' })).toEqual({
      access_token: '**REDACTED**', nested: { entity_picture: '**REDACTED**' }, url: '**REDACTED**', ok: 'fine',
    });
  });

  it('collects what a bug report needs', () => {
    const diagnostics = buildDiagnostics(createDiscoveryHass(), liveConfig);
    expect(diagnostics).toMatchObject({
      home_assistant: '2026.10.2',
      vacuum: 'vacuum.qrevo_curv_2_flow',
      model: 'roborock.vacuum.a245',
      compatibility: { verdict: 'supported' },
      config_errors: [],
    });
    expect((diagnostics.health as Array<{ code: string }>).map((issue) => issue.code)).toContain('area_missing');
    expect((diagnostics.entity_states as Record<string, string>).battery).toBe('100');
    expect(JSON.stringify(diagnostics)).not.toMatch(/access_token|entity_picture/);
  });

  it('copies to the clipboard, or shows the text when it cannot', async () => {
    const writeText = vi.fn(async () => undefined);
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } });
    const labels = { copy: 'Copy diagnostics', copied: 'Copied', manual: 'Copy below' };
    const { unmount } = render(<DiagnosticsButton hass={createHass()} config={configFixture} labels={labels} />);
    await userEvent.click(screen.getByRole('button', { name: 'Copy diagnostics' }));
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Copied'));
    expect(JSON.parse(String((writeText.mock.calls[0] as unknown[])[0])).vacuum).toBe('vacuum.roborock');
    unmount();
    writeText.mockRejectedValueOnce(new Error('denied'));
    render(<DiagnosticsButton hass={createHass()} config={configFixture} labels={labels} />);
    await userEvent.click(screen.getByRole('button', { name: 'Copy diagnostics' }));
    await waitFor(() => expect((screen.getByRole('textbox') as HTMLTextAreaElement).value).toContain('"vacuum": "vacuum.roborock"'));
  });
});

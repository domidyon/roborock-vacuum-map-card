import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { configFixture, createHass } from '../test/fixtures';
import { VacuumCard } from './VacuumCard';

function loadMap() {
  const image = screen.getByRole('img');
  Object.defineProperty(image, 'naturalWidth', { configurable: true, value: 1200 });
  Object.defineProperty(image, 'naturalHeight', { configurable: true, value: 800 });
  fireEvent.load(image);
}

describe('vacuum card flows', () => {
  it('selects multiple rooms and opens Configure job', async () => {
    render(<VacuumCard hass={createHass()} config={configFixture} />);
    loadMap();
    await userEvent.click(screen.getByRole('button', { name: 'Kitchen' }));
    await userEvent.click(screen.getByRole('button', { name: 'Hallway' }));
    await userEvent.click(screen.getByRole('button', { name: 'Configure job' }));
    expect(screen.getByRole('dialog')).toHaveTextContent('Kitchen · Hallway');
  });

  it('clears selection on floor change and excludes bathroom from Entire upstairs', async () => {
    render(<VacuumCard hass={createHass()} config={configFixture} />);
    loadMap();
    await userEvent.click(screen.getByRole('button', { name: 'Kitchen' }));
    await userEvent.click(screen.getByRole('tab', { name: 'Upstairs' }));
    expect(screen.getByText('Tap one or more rooms on the map')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Entire floor' }));
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveTextContent('Office · Landing · Bedroom · Laundry');
    expect(dialog).not.toHaveTextContent('Bathroom');
  });

  it('allows selecting the upstairs bathroom individually', async () => {
    render(<VacuumCard hass={createHass()} config={configFixture} />);
    await userEvent.click(screen.getByRole('tab', { name: 'Upstairs' }));
    loadMap();
    await userEvent.click(screen.getByRole('button', { name: 'Bathroom' }));
    await userEvent.click(screen.getByRole('button', { name: 'Configure job' }));
    expect(screen.getByRole('dialog')).toHaveTextContent('Bathroom');
  });

  it('prevents duplicate starts while the first submission is pending', async () => {
    const hass = createHass();
    let release!: () => void;
    const pending = new Promise<void>((resolve) => { release = resolve; });
    const calls: string[] = [];
    hass.callService = vi.fn(async (domain, service, data, target) => {
      calls.push(`${domain}.${service}`);
      if (domain === 'select') hass.states[String(target?.entity_id)].state = String(data?.option);
      if (service === 'set_fan_speed') await pending;
    });
    render(<VacuumCard hass={hass} config={configFixture} />);
    loadMap();
    await userEvent.click(screen.getByRole('button', { name: 'Kitchen' }));
    await userEvent.click(screen.getByRole('button', { name: 'Configure job' }));
    const start = screen.getByRole('button', { name: 'Start' });
    fireEvent.click(start);
    fireEvent.click(start);
    release();
    await waitFor(() => expect(calls.filter((call) => call === 'vacuum.clean_area')).toHaveLength(1));
  });

  it('shows mop drying and its formatted remaining time alongside docked', () => {
    const hass = createHass();
    hass.states['binary_sensor.mop_drying'].state = 'on';
    hass.states['sensor.mop_drying_remaining'].state = '3.9';
    render(<VacuumCard hass={hass} config={configFixture} />);
    const stateLine = screen.getByText('docked').closest('.state-line');
    expect(stateLine).toHaveTextContent('docked · Drying mop · 3 h 54 min remaining');
  });

  it('shows a dock-side mop wash as active detail instead of only docked', () => {
    const hass = createHass();
    hass.states['sensor.status'] = { entity_id: 'sensor.status', state: 'washing_the_mop', attributes: {} };
    render(<VacuumCard hass={hass} config={{ ...configFixture, entities: { ...configFixture.entities, status: 'sensor.status' } }} />);
    const stateLine = screen.getByText('docked').closest('.state-line');
    expect(stateLine).toHaveTextContent('docked · Washing mop');
  });
});

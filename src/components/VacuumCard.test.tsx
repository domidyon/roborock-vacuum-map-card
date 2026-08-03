import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
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

  it('shows the four app modes and only app-facing manual options', async () => {
    render(<VacuumCard hass={createHass()} config={configFixture} />);
    loadMap();
    await userEvent.click(screen.getByRole('button', { name: 'Kitchen' }));
    await userEvent.click(screen.getByRole('button', { name: 'Configure job' }));
    const dialog = screen.getByRole('dialog');
    expect(screen.getByRole('tab', { name: 'AI SmartPlan' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Vac followed by Mop' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Vac & Mop' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Vacuum only' })).toBeInTheDocument();
    expect(dialog).not.toHaveTextContent('smart mode');
    expect(dialog).not.toHaveTextContent('deep plus');
    expect(dialog).not.toHaveTextContent('custom');
    expect(dialog).not.toHaveTextContent('Off Raise Main Brush');
    await userEvent.click(screen.getByRole('tab', { name: 'Vac & Mop' }));
    expect(screen.getByRole('slider', { name: 'Water flow' })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('tab', { name: 'Vacuum only' }));
    expect(screen.queryByRole('slider', { name: 'Water flow' })).not.toBeInTheDocument();
  });

  it('clears selection on floor change and includes every current upstairs room', async () => {
    render(<VacuumCard hass={createHass()} config={configFixture} />);
    loadMap();
    await userEvent.click(screen.getByRole('button', { name: 'Kitchen' }));
    await userEvent.click(screen.getByRole('tab', { name: 'Upstairs' }));
    expect(screen.getByText('Tap one or more rooms on the map')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Entire floor' }));
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveTextContent('Office · Landing · Bedroom · Laundry');
  });

  it('allows selecting the upstairs landing individually', async () => {
    render(<VacuumCard hass={createHass()} config={configFixture} />);
    await userEvent.click(screen.getByRole('tab', { name: 'Upstairs' }));
    loadMap();
    await userEvent.click(screen.getByRole('button', { name: 'Landing' }));
    await userEvent.click(screen.getByRole('button', { name: 'Prepare upstairs' }));
    expect(screen.getByRole('dialog')).toHaveTextContent('Landing');
  });

  it('shows all four upstairs modes, persists Vac & Mop, and starts dock preparation', async () => {
    const hass = createHass();
    const calls: Array<{ domain: string; service: string; data?: Record<string, unknown>; target?: Record<string, unknown> }> = [];
    hass.callService = vi.fn(async (domain, service, data, target) => {
      calls.push({ domain, service, data, target });
      if (domain === 'input_text') hass.states[String(target?.entity_id)].state = String(data?.value ?? '');
      if (domain === 'input_select') hass.states[String(target?.entity_id)].state = String(data?.option);
    });
    render(<VacuumCard hass={hass} config={configFixture} />);
    await userEvent.click(screen.getByRole('tab', { name: 'Upstairs' }));
    loadMap();
    await userEvent.click(screen.getByRole('button', { name: 'Office' }));
    await userEvent.click(screen.getByRole('button', { name: 'Prepare upstairs' }));
    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByRole('tab', { name: 'AI SmartPlan' })).toBeInTheDocument();
    expect(within(dialog).getByRole('tab', { name: 'Vac followed by Mop' })).toBeInTheDocument();
    expect(within(dialog).getByRole('tab', { name: 'Vac & Mop' })).toBeInTheDocument();
    expect(within(dialog).getByRole('tab', { name: 'Vacuum only' })).toBeInTheDocument();
    await userEvent.click(within(dialog).getByRole('tab', { name: 'Vac & Mop' }));
    await userEvent.click(within(dialog).getByRole('button', { name: 'Prepare upstairs' }));
    await waitFor(() => expect(calls.at(-1)).toEqual({
      domain: 'script',
      service: 'turn_on',
      data: {},
      target: { entity_id: 'script.assisted_carry_prepare' },
    }));
    expect(calls[0]).toMatchObject({ domain: 'input_text', service: 'set_value', target: { entity_id: 'input_text.assisted_carry_job' } });
    expect(JSON.parse(String(calls[0].data?.value))).toMatchObject({ g: 'custom', t: 'vacuum_and_mop' });
    expect(calls[1]).toMatchObject({ domain: 'input_select', service: 'select_option', data: { option: 'preparing' } });
  });

  it('restores a carried job from helpers and starts it upstairs', async () => {
    const hass = createHass();
    hass.states['input_select.assisted_carry_stage'].state = 'carry_upstairs';
    hass.states['input_text.assisted_carry_job'].state = '{"s":[1,3],"f":"balanced","m":"standard","w":"medium","c":1}';
    const calls: Array<{ domain: string; service: string; data?: Record<string, unknown>; target?: Record<string, unknown> }> = [];
    hass.callService = vi.fn(async (domain, service, data, target) => { calls.push({ domain, service, data, target }); });
    render(<VacuumCard hass={hass} config={configFixture} />);
    await userEvent.click(await screen.findByRole('button', { name: 'Start upstairs' }));
    await waitFor(() => expect(calls).toContainEqual({
      domain: 'script',
      service: 'turn_on',
      data: { variables: { cleaning_area_id: ['office', 'bedroom'], strategy: 'custom', cleaning_type: 'vacuum_and_mop', fan_speed: 'balanced', mop_mode: 'standard', mop_intensity: 'medium', cleaning_count: 1 } },
      target: { entity_id: 'script.assisted_carry_start' },
    }));
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

  it('opens an app-style dock panel and saves a setting through the raw API', async () => {
    const hass = createHass();
    const calls: Array<{ domain: string; service: string; data?: Record<string, unknown> }> = [];
    hass.callService = vi.fn(async (domain, service, data, target) => {
      calls.push({ domain, service, data });
      if (domain === 'input_select') hass.states[String(target?.entity_id)].state = String(data?.option);
    });
    render(<VacuumCard hass={hass} config={configFixture} />);
    await userEvent.click(screen.getByRole('button', { name: 'Dock station' }));
    const dialog = screen.getByRole('dialog', { name: 'Dock station' });
    expect(dialog).toHaveTextContent('Empty');
    expect(dialog).toHaveTextContent('Wash');
    expect(dialog).toHaveTextContent('Dry');
    expect(screen.getByRole('switch', { name: 'Auto-empty' })).not.toBeChecked();
    expect(screen.getByRole('switch', { name: 'Auto-drying' })).toBeChecked();
    await userEvent.selectOptions(screen.getByRole('combobox', { name: 'Washing mode' }), 'deep');
    await waitFor(() => expect(calls).toEqual([
      { domain: 'vacuum', service: 'send_command', data: { command: 'set_wash_towel_mode', params: { wash_mode: 2 } } },
      { domain: 'input_select', service: 'select_option', data: { option: 'deep' } },
    ]));
  });

  it('requires confirmation before every noisy dock start action', async () => {
    const hass = createHass();
    hass.callService = vi.fn();
    vi.spyOn(window, 'confirm').mockReturnValue(false);
    render(<VacuumCard hass={hass} config={configFixture} />);
    await userEvent.click(screen.getByRole('button', { name: 'Dock station' }));
    await userEvent.click(screen.getByRole('button', { name: /Empty/ }));
    await userEvent.click(screen.getByRole('button', { name: /Wash/ }));
    await userEvent.click(screen.getByRole('button', { name: /Dry/ }));
    await userEvent.click(screen.getByRole('button', { name: /Drain onboard water tank/ }));
    expect(window.confirm).toHaveBeenCalledTimes(4);
    expect(hass.callService).not.toHaveBeenCalled();
    vi.restoreAllMocks();
  });

  it('cancels two-phase orchestration before stopping or docking', async () => {
    const hass = createHass();
    const calls: string[] = [];
    hass.callService = vi.fn(async (domain, service) => { calls.push(`${domain}.${service}`); });
    render(<VacuumCard hass={hass} config={configFixture} />);
    await userEvent.click(screen.getByRole('button', { name: 'Stop' }));
    await waitFor(() => expect(calls).toEqual(['script.turn_off', 'vacuum.stop']));
    calls.length = 0;
    await userEvent.click(screen.getByRole('button', { name: 'Dock' }));
    await waitFor(() => expect(calls).toEqual(['script.turn_off', 'vacuum.return_to_base']));
  });

  it('cancels the assisted no-dock sequence before a stop can reach phase two', async () => {
    const hass = createHass();
    hass.states['input_select.assisted_carry_stage'].state = 'cleaning_upstairs';
    hass.states['input_text.assisted_carry_job'].state = '{"s":[1,3],"g":"custom","t":"vacuum_then_mop","f":"balanced","m":"standard","w":"medium","c":1}';
    const calls: Array<{ domain: string; service: string; target?: Record<string, unknown> }> = [];
    hass.callService = vi.fn(async (domain, service, _data, target) => { calls.push({ domain, service, target }); });
    render(<VacuumCard hass={hass} config={configFixture} />);
    await userEvent.click(screen.getByRole('button', { name: 'Stop' }));
    await waitFor(() => expect(calls).toEqual([
      { domain: 'script', service: 'turn_off', target: { entity_id: 'script.roborock_vacuum_then_mop' } },
      { domain: 'script', service: 'turn_off', target: { entity_id: 'script.assisted_carry_start' } },
      { domain: 'vacuum', service: 'stop', target: { entity_id: 'vacuum.roborock' } },
      { domain: 'input_select', service: 'select_option', target: { entity_id: 'input_select.assisted_carry_stage' } },
    ]));
  });
});

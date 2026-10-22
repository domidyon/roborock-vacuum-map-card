import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { getStubConfig, validateConfig } from '../../config';
import { createDiscoveryHass as discoveryHass } from '../../test/discovery-hass';
import liveConfig from '../../test/fixtures/qrevo-live-card-config.json';
import type { HomeAssistant, RoborockVacuumMapCardConfig } from '../../types';
import { CardEditor } from '../CardEditor';

// The fixture's Home Assistant user is Dutch; these tests read the English editor.
const createDiscoveryHass = () => discoveryHass(undefined, { locale: { language: 'en' } });

async function next() {
  await userEvent.click(screen.getByRole('button', { name: 'Next' }));
}

function helperHass(): { hass: HomeAssistant; calls: string[] } {
  const hass = createDiscoveryHass();
  const calls: string[] = [];
  const fallback = hass.callWS!;
  hass.callWS = vi.fn(async (message: Record<string, unknown>) => {
    const type = String(message.type);
    if (type.endsWith('/create') || type.endsWith('/update')) {
      calls.push(type);
      return { id: message.name ?? message[`${type.split('/')[0]}_id`] } as never;
    }
    return fallback(message);
  }) as HomeAssistant['callWS'];
  hass.callService = vi.fn(async () => undefined);
  return { hass, calls };
}

describe('setup assistant', () => {
  it('opens for a new card and walks from discovery to a saved, valid config', async () => {
    const onChange = vi.fn();
    render(<CardEditor hass={createDiscoveryHass()} config={getStubConfig()} onChange={onChange} />);

    expect(screen.getByRole('heading', { name: 'Before you start' })).toBeInTheDocument();
    expect(screen.getByText('Roborock Custom Map, for calibrated maps with rooms').closest('li')).toHaveClass('ok');
    await next();

    expect(await screen.findByText('Qrevo Curv 2 Flow')).toBeInTheDocument();
    expect(screen.getByText(/Supported · tested profile/)).toBeInTheDocument();
    await next();

    // Four maps from the live fixture; drop "Onder Bed".
    const floors = screen.getAllByRole('checkbox', { checked: true }).filter((box) => box.closest('label')?.textContent?.includes('rooms'));
    expect(floors).toHaveLength(4);
    await userEvent.click(floors[3]);
    await next();

    expect(screen.getByRole('heading', { name: 'Rooms' })).toBeInTheDocument();
    expect(screen.getAllByDisplayValue('Keuken')).toHaveLength(1);
    await next();

    expect(screen.getByText(/7 helpers are missing/)).toBeInTheDocument();
    await next();
    await next();

    expect(screen.getByRole('heading', { name: 'Review and save' })).toBeInTheDocument();
    expect(screen.getByText(/entity: vacuum.qrevo_curv_2_flow/)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Save card' }));

    const saved = onChange.mock.calls.at(-1)?.[0] as RoborockVacuumMapCardConfig;
    expect(validateConfig(saved)).toEqual([]);
    expect(saved).toMatchObject({ entity: 'vacuum.qrevo_curv_2_flow', config_version: 1 });
    expect(saved.floors.map((floor) => floor.id)).toEqual(['beneden', 'map_1', 'badkamer']);
    expect(saved.consumables).toHaveLength(5);
  });

  it('creates the missing dock helpers and wires them into the config', async () => {
    const { hass, calls } = helperHass();
    const onChange = vi.fn();
    render(<CardEditor hass={hass} config={getStubConfig()} onChange={onChange} />);
    await next();
    await screen.findByText('Qrevo Curv 2 Flow');
    await next();
    await next();
    await next();
    await userEvent.click(screen.getByRole('button', { name: 'Create 7 missing helpers' }));
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Created 7 helpers.'));
    expect(calls.filter((type) => type.endsWith('/create'))).toHaveLength(7);
    await next();
    await next();
    await userEvent.click(screen.getByRole('button', { name: 'Save card' }));
    const saved = onChange.mock.calls.at(-1)?.[0] as RoborockVacuumMapCardConfig;
    expect(saved.entities?.dock_empty_mode).toBe('input_select.rvmc_qrevo_curv_2_flow_dock_empty_mode');
  });

  it('keeps hand-made name, presets and default when re-run for the same vacuum', async () => {
    const onChange = vi.fn();
    const current = { ...(liveConfig as RoborockVacuumMapCardConfig), name: 'Robbie', presets: [{ id: 'avond', name: 'Avond', strategy: 'custom' as const, cleaning_type: 'vacuum' as const, fan_speed: 'quiet' }], default_preset: 'avond' };
    render(<CardEditor hass={createDiscoveryHass()} config={current} onChange={onChange} />);
    await userEvent.click(screen.getByRole('button', { name: /Setup assistant/ }));
    await next();
    await screen.findByText('Qrevo Curv 2 Flow');
    for (let step = 0; step < 5; step += 1) await next();
    await userEvent.click(screen.getByRole('button', { name: 'Save card' }));
    expect(onChange.mock.calls.at(-1)?.[0]).toMatchObject({ name: 'Robbie', default_preset: 'avond', presets: [{ id: 'avond' }] });
  });

  it('stops at the checks when Roborock Custom Map is missing', () => {
    const hass = createDiscoveryHass();
    for (const [id, entry] of Object.entries(hass.entities!)) if (entry.platform === 'roborock_custom_map') delete hass.entities![id];
    render(<CardEditor hass={hass} config={getStubConfig()} onChange={() => undefined} />);
    const check = screen.getByText('Roborock Custom Map, for calibrated maps with rooms').closest('li')!;
    expect(check).toHaveClass('missing');
    expect(within(check).getByRole('link', { name: 'Fix' })).toHaveAttribute('href', expect.stringContaining('RoborockCustomMap'));
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled();
  });
});

describe('assisted carry in the setup assistant', () => {
  async function toReview(hass = createDiscoveryHass()) {
    for (const id of ['script.carry_prepare', 'script.carry_start', 'script.carry_finish', 'input_select.rvmc_qrevo_curv_2_flow_assisted_carry_stage', 'input_text.rvmc_qrevo_curv_2_flow_assisted_carry_job']) {
      hass.states[id] = { entity_id: id, state: 'off', attributes: id.startsWith('input_select') ? { options: ['idle', 'preparing', 'carry_upstairs', 'cleaning_upstairs', 'carry_downstairs', 'finishing', 'complete', 'error'] } : {} };
    }
    const onChange = vi.fn();
    render(<CardEditor hass={hass} config={getStubConfig()} onChange={onChange} />);
    await next();
    await screen.findByText('Qrevo Curv 2 Flow');
    await next();
    await userEvent.click(screen.getAllByLabelText('This floor has no dock (assisted carry)')[1]);
    expect(screen.getByText(/Needs three scripts/)).toBeInTheDocument();
    for (let step = 0; step < 4; step += 1) await next();
    return onChange;
  }

  it('explains missing scripts and lets the user pick them', async () => {
    const onChange = await toReview();
    expect(screen.getByRole('alert')).toHaveTextContent('Assisted carry needs its three scripts');
    expect(screen.getByRole('button', { name: 'Save card' })).toBeDisabled();
    await userEvent.click(screen.getByRole('button', { name: 'Pick the scripts' }));
    expect(screen.getByRole('heading', { name: 'Dock and helpers' })).toBeInTheDocument();
    await userEvent.selectOptions(screen.getByLabelText('Prepare script'), 'script.carry_prepare');
    await userEvent.selectOptions(screen.getByLabelText('Start script'), 'script.carry_start');
    await userEvent.selectOptions(screen.getByLabelText('Finish script'), 'script.carry_finish');
    await next();
    await next();
    await userEvent.click(screen.getByRole('button', { name: 'Save card' }));
    const saved = onChange.mock.calls.at(-1)?.[0] as RoborockVacuumMapCardConfig;
    expect(saved.entities).toMatchObject({ assisted_carry_prepare_script: 'script.carry_prepare', assisted_carry_stage: 'input_select.rvmc_qrevo_curv_2_flow_assisted_carry_stage' });
    expect(saved.floors[1].assisted_carry).toBe(true);
  });

  it('can turn assisted carry off to save now', async () => {
    const onChange = await toReview();
    await userEvent.click(screen.getByRole('button', { name: 'Turn off assisted carry for now' }));
    await userEvent.click(screen.getByRole('button', { name: 'Save card' }));
    expect((onChange.mock.calls.at(-1)?.[0] as RoborockVacuumMapCardConfig).floors.every((floor) => !floor.assisted_carry)).toBe(true);
  });
});

describe('re-detect panel', () => {
  it('lists changes for the live config and applies the selected ones', async () => {
    const onChange = vi.fn();
    render(<CardEditor hass={createDiscoveryHass()} config={liveConfig as RoborockVacuumMapCardConfig} onChange={onChange} />);
    await userEvent.click(screen.getByRole('button', { name: /Re-detect/ }));
    await userEvent.click(screen.getByRole('button', { name: 'Check now' }));
    const change = await screen.findByLabelText('Room Badkamer: area badkamer → bathroom');
    expect(change).toBeChecked();
    await userEvent.click(screen.getByLabelText('Add room Room to floor upstairs (no area yet)'));
    await userEvent.click(screen.getByRole('button', { name: 'Apply 7 changes' }));
    const applied = onChange.mock.calls.at(-1)?.[0] as RoborockVacuumMapCardConfig;
    expect(applied.floors.find((floor) => floor.id === 'bathroom')?.rooms[0].area_id).toBe('bathroom');
    expect(applied.floors.find((floor) => floor.id === 'upstairs')?.rooms).toHaveLength(4);
  });
});

describe('editor language', () => {
  it('follows the Home Assistant user language', async () => {
    render(<CardEditor hass={discoveryHass()} config={getStubConfig()} onChange={() => undefined} />);
    expect(screen.getByRole('heading', { name: 'Voordat je begint' })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Volgende' }));
    expect(await screen.findByText(/Ondersteund · profiel: getest/)).toBeInTheDocument();
  });
});

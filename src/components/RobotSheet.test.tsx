import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { configFixture, createHass } from '../test/fixtures';
import type { HomeAssistant, RoborockVacuumMapCardConfig } from '../types';
import { VacuumCard } from './VacuumCard';

const robotEntities = {
  robot_volume: 'number.robot_volume',
  do_not_disturb: 'switch.robot_dnd',
  do_not_disturb_start: 'time.robot_dnd_start',
  do_not_disturb_end: 'time.robot_dnd_end',
  off_peak_charging: 'switch.robot_off_peak',
  off_peak_start: 'time.robot_off_peak_start',
  off_peak_end: 'time.robot_off_peak_end',
  total_cleaning_time: 'sensor.robot_total_time',
  total_cleaning_area: 'sensor.robot_total_area',
  total_cleaning_count: 'sensor.robot_total_count',
  last_clean_start: 'sensor.robot_last_clean_start',
};

function robotHass(): HomeAssistant {
  const hass = createHass();
  const add = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => {
    hass.states[entity_id] = { entity_id, state, attributes } as HomeAssistant['states'][string];
  };
  add('number.robot_volume', '40', { min: 0, max: 100, step: 1, unit_of_measurement: '%' });
  add('switch.robot_dnd', 'on');
  add('time.robot_dnd_start', '22:00:00');
  add('time.robot_dnd_end', '08:00:00');
  add('switch.robot_off_peak', 'off');
  add('time.robot_off_peak_start', '00:00:00');
  add('time.robot_off_peak_end', '06:30:00');
  add('sensor.robot_total_time', '55.4875', { unit_of_measurement: 'h', device_class: 'duration' });
  add('sensor.robot_total_area', '2769.6', { unit_of_measurement: 'm²' });
  add('sensor.robot_total_count', '85');
  add('sensor.robot_last_clean_start', new Date(Date.now() - 2 * 3_600_000).toISOString(), { device_class: 'timestamp' });
  return hass;
}

function robotConfig(): RoborockVacuumMapCardConfig {
  return { ...configFixture, entities: { ...configFixture.entities, ...robotEntities } };
}

describe('robot panel', () => {
  it('is not offered when no robot setting entity is configured', () => {
    const config = { ...configFixture, entities: { ...configFixture.entities, do_not_disturb: undefined } };
    render(<VacuumCard hass={createHass()} config={config} />);
    expect(screen.queryByRole('button', { name: 'Robot' })).not.toBeInTheDocument();
  });

  it('shows volume, quiet hours, off-peak charging and cleaning totals', async () => {
    render(<VacuumCard hass={robotHass()} config={robotConfig()} />);
    await userEvent.click(screen.getByRole('button', { name: 'Robot' }));
    const dialog = screen.getByRole('dialog', { name: 'Robot settings' });
    expect(within(dialog).getByRole('slider', { name: 'Volume' })).toHaveValue('40');
    expect(dialog).toHaveTextContent('40 %');
    expect(within(dialog).getByRole('switch', { name: 'Do not disturb' })).toBeChecked();
    expect(within(dialog).getByRole('switch', { name: 'Off-peak charging' })).not.toBeChecked();
    expect(within(dialog).getAllByLabelText('From').map((input) => (input as HTMLInputElement).value)).toEqual(['22:00', '00:00']);
    expect(within(dialog).getAllByLabelText('Until').map((input) => (input as HTMLInputElement).value)).toEqual(['08:00', '06:30']);
    expect(dialog).toHaveTextContent('55.5 h');
    expect(dialog).toHaveTextContent('2769.6 m²');
    expect(dialog).toHaveTextContent('85');
    expect(dialog).toHaveTextContent('2 h ago');
  });

  it('writes each change to the robot through its own entity', async () => {
    const hass = robotHass();
    hass.callService = vi.fn(async () => undefined);
    render(<VacuumCard hass={hass} config={robotConfig()} />);
    await userEvent.click(screen.getByRole('button', { name: 'Robot' }));
    const dialog = screen.getByRole('dialog', { name: 'Robot settings' });

    await userEvent.click(within(dialog).getByRole('switch', { name: 'Off-peak charging' }));
    await waitFor(() => expect(hass.callService).toHaveBeenCalledWith('switch', 'turn_on', {}, { entity_id: 'switch.robot_off_peak' }));
    // One change at a time: wait for the panel to finish saving.
    await waitFor(() => expect(dialog.querySelector('.dock-pending')).toBeNull());

    const fromInput = within(dialog).getAllByLabelText('From')[0] as HTMLInputElement;
    fireEvent.change(fromInput, { target: { value: '23:15' } });
    await waitFor(() => expect(hass.callService).toHaveBeenCalledWith('time', 'set_value', { time: '23:15:00' }, { entity_id: 'time.robot_dnd_start' }));
    await waitFor(() => expect(dialog.querySelector('.dock-pending')).toBeNull());

    fireEvent.change(within(dialog).getByRole('slider', { name: 'Volume' }), { target: { value: '70' } });
    await waitFor(() => expect(hass.callService).toHaveBeenCalledWith('number', 'set_value', { value: 70 }, { entity_id: 'number.robot_volume' }));
  });

  it('hides the parts of the panel the robot does not have', async () => {
    const config = { ...configFixture, entities: { ...configFixture.entities, do_not_disturb: undefined, total_cleaning_count: 'sensor.robot_total_count' } };
    render(<VacuumCard hass={robotHass()} config={config} />);
    await userEvent.click(screen.getByRole('button', { name: 'Robot' }));
    const dialog = screen.getByRole('dialog', { name: 'Robot settings' });
    expect(within(dialog).queryByRole('slider')).not.toBeInTheDocument();
    expect(within(dialog).queryByRole('switch')).not.toBeInTheDocument();
    expect(dialog).toHaveTextContent('Cleanings');
  });
});

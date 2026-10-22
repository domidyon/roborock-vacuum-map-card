import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { VacuumCard } from './components/VacuumCard';
import { allowApi, allowService, allowWebSocket, sandboxHass, SandboxBlockedError } from './sandbox';
import { configFixture, createHass } from './test/fixtures';

describe('sandbox rules', () => {
  it('blocks everything that could move the robot or change a setup', () => {
    for (const [domain, service] of [
      ['vacuum', 'start'], ['vacuum', 'clean_area'], ['vacuum', 'send_command'], ['vacuum', 'return_to_base'], ['vacuum', 'stop'],
      ['vacuum', 'set_fan_speed'], ['select', 'select_option'], ['button', 'press'], ['script', 'turn_on'], ['script', 'turn_off'],
      ['switch', 'turn_on'], ['roborock', 'set_vacuum_zoned_cleaning'], ['homeassistant', 'restart'],
    ]) {
      expect(allowService(domain, service, {}, { entity_id: 'vacuum.qrevo_curv_2_flow' }), `${domain}.${service}`).toBe(false);
    }
    // Existing helpers of the installed card are off limits too.
    expect(allowService('input_select', 'select_option', { option: 'deep' }, { entity_id: 'input_select.qrevo_dock_washing_mode' })).toBe(false);
    expect(allowService('input_boolean', 'turn_on', {}, { entity_id: ['input_boolean.rvmc_x', 'input_boolean.qrevo_dock_auto_dry'] })).toBe(false);
    expect(allowService('input_select', 'select_option', {}, {})).toBe(false);
  });

  it('allows only writes to its own rvmc_ helpers', () => {
    expect(allowService('input_select', 'select_option', { option: 'smart' }, { entity_id: 'input_select.rvmc_qrevo_curv_2_flow_dock_empty_mode' })).toBe(true);
    expect(allowService('input_boolean', 'turn_on', {}, { entity_id: 'input_boolean.rvmc_qrevo_curv_2_flow_dock_auto_dry' })).toBe(true);
    expect(allowService('input_select', 'set_options', {}, { entity_id: 'input_select.rvmc_x' })).toBe(false);
  });

  it('lets reads through and blocks mutating WebSocket and REST calls', () => {
    for (const type of ['config/entity_registry/get', 'config/entity_registry/list_for_display', 'config/device_registry/list', 'get_states', 'lovelace/resources', 'search/related']) {
      expect(allowWebSocket({ type }), type).toBe(true);
    }
    for (const type of ['call_service', 'execute_script', 'config/entity_registry/update', 'lovelace/config/save', 'lovelace/resources/create', 'input_select/delete', 'script/config/save']) {
      expect(allowWebSocket({ type }), type).toBe(false);
    }
    expect(allowWebSocket({ type: 'input_select/create', name: 'rvmc_qrevo_dock_wash_mode' })).toBe(true);
    expect(allowWebSocket({ type: 'input_select/create', name: 'My helper' })).toBe(false);
    expect(allowWebSocket({ type: 'input_boolean/update', input_boolean_id: 'qrevo_dock_auto_dry', name: 'x' })).toBe(false);
    expect(allowApi('GET')).toBe(true);
    expect(allowApi('POST')).toBe(false);
  });

  it('refuses blocked calls before they reach Home Assistant', async () => {
    const real = createHass();
    real.callService = vi.fn(async () => undefined);
    real.callApi = vi.fn(async () => ({})) as never;
    const hass = sandboxHass(real);
    await expect(hass.callService('vacuum', 'start', {}, { entity_id: 'vacuum.roborock' })).rejects.toBeInstanceOf(SandboxBlockedError);
    await expect(hass.callApi!('POST', 'config/script/config/x', {})).rejects.toBeInstanceOf(SandboxBlockedError);
    expect(real.callService).not.toHaveBeenCalled();
    expect(real.callApi).not.toHaveBeenCalled();
    await hass.callService('input_boolean', 'turn_on', {}, { entity_id: 'input_boolean.rvmc_test' });
    expect(real.callService).toHaveBeenCalledTimes(1);
  });
});

describe('sandboxed card', () => {
  it('never reaches the vacuum, whatever the user presses', async () => {
    const real = createHass();
    real.callService = vi.fn(async () => undefined);
    const hass = sandboxHass(real);
    vi.spyOn(window, 'confirm').mockReturnValue(true);
    render(<VacuumCard hass={hass} config={configFixture} />);
    const image = screen.getByRole('img');
    Object.defineProperty(image, 'naturalWidth', { configurable: true, value: 1200 });
    Object.defineProperty(image, 'naturalHeight', { configurable: true, value: 800 });
    fireEvent.load(image);

    await userEvent.click(screen.getByRole('button', { name: 'Kitchen' }));
    await userEvent.click(screen.getByRole('button', { name: 'Configure job' }));
    await userEvent.click(within(screen.getByRole('dialog')).getByRole('button', { name: 'Start' }));
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Blocked in the sandbox test build'));
    await userEvent.click(within(screen.getByRole('dialog')).getByRole('button', { name: 'Cancel' }));

    for (const name of ['Stop', 'Dock']) await userEvent.click(screen.getByRole('button', { name }));
    await userEvent.click(screen.getByRole('button', { name: /Dock station/ }));
    const dock = screen.getByRole('dialog', { name: 'Dock station' });
    for (const action of ['Empty', 'Wash', 'Dry']) await userEvent.click(within(dock).getByRole('button', { name: new RegExp(`^${action}`) }));
    await userEvent.selectOptions(within(dock).getByRole('combobox', { name: 'Washing mode' }), 'deep');
    await userEvent.click(within(dock).getByRole('switch', { name: 'Dock child lock' }));

    expect(real.callService).not.toHaveBeenCalled();
  });
});

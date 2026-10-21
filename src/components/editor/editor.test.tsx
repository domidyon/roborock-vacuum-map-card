import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { EDITOR_DICTIONARIES } from '../../i18n/editor';
import { createDiscoveryHass } from '../../test/discovery-hass';
import { configFixture, createHass } from '../../test/fixtures';
import liveConfig from '../../test/fixtures/qrevo-live-card-config.json';
import type { RoborockVacuumMapCardConfig } from '../../types';
import { CardEditor } from '../CardEditor';

const english = () => createDiscoveryHass(undefined, { locale: { language: 'en' } });

describe('editor sections', () => {
  it('groups the editor into collapsible sections with Basics and Floors open', () => {
    const { container } = render(<CardEditor hass={createHass()} config={configFixture} onChange={() => undefined} />);
    const sections = [...container.querySelectorAll('details.editor-section')];
    expect(sections.map((section) => section.querySelector('summary')?.textContent)).toEqual(['Basics', 'Floors and rooms', 'Dock', 'Presets', 'Advanced: entities']);
    expect(sections.map((section) => (section as HTMLDetailsElement).open)).toEqual([true, true, false, false, false]);
  });

  it('marks auto-detected entities and offers detected ones for empty fields', async () => {
    const onChange = vi.fn();
    const config = structuredClone(liveConfig) as RoborockVacuumMapCardConfig;
    render(<CardEditor hass={english()} config={config} onChange={onChange} />);
    const mapField = screen.getByText('Selected map').closest('.entity-field') as HTMLElement;
    expect(within(mapField).getByText('auto-detected')).toBeInTheDocument();
    // dock_error is not in the live config yet; discovery found it.
    await userEvent.click(screen.getByRole('button', { name: 'Use sensor.woonkamer_qrevo_curv_2_flow_dock_dock_error' }));
    expect(onChange.mock.calls.at(-1)?.[0].entities.dock_error).toBe('sensor.woonkamer_qrevo_curv_2_flow_dock_dock_error');
  });

  it('narrows Roborock entity fields to the vacuum and its dock', () => {
    const hass = english();
    hass.states['sensor.outdoor_temperature'] = { entity_id: 'sensor.outdoor_temperature', state: '12', attributes: {} };
    render(<CardEditor hass={hass} config={structuredClone(liveConfig) as RoborockVacuumMapCardConfig} onChange={() => undefined} />);
    const battery = screen.getByText('Battery').closest('label')!.querySelector('select')!;
    const options = [...battery.options].map((option) => option.value).filter(Boolean);
    expect(options).toContain('sensor.qrevo_curv_2_flow_battery');
    expect(options).toContain('sensor.woonkamer_qrevo_curv_2_flow_dock_dock_error');
    expect(options).not.toContain('sensor.outdoor_temperature');
  });

  it('offers only app-facing values in preset dropdowns', () => {
    const config = { ...configFixture, presets: [{ id: 'evening', name: 'Evening', strategy: 'custom' as const, cleaning_type: 'vacuum_and_mop' as const, fan_speed: 'quiet', mop_mode: 'standard', mop_intensity: 'medium' }] };
    render(<CardEditor hass={createHass()} config={config} onChange={() => undefined} />);
    const card = screen.getByDisplayValue('evening').closest('.editor-card') as HTMLElement;
    const values = (label: string) => [...(within(card).getByLabelText(label) as HTMLSelectElement).options].map((option) => option.value).filter(Boolean);
    expect(values('Suction')).toEqual(['quiet', 'balanced', 'turbo', 'max', 'max_plus']);
    expect(values('Mop route')).toEqual(['fast', 'standard', 'deep', 'deep_plus']);
    expect(values('Water flow')).not.toContain('custom');
    fireEvent.change(within(card).getByLabelText('Cleaning type'), { target: { value: 'vacuum' } });
  });
});

describe('Home Assistant pickers', () => {
  it('uses ha-entity-picker when loaded and passes hass, domains and the device filter', async () => {
    const seen: Array<Record<string, unknown>> = [];
    class FakePicker extends HTMLElement {
      set hass(value: unknown) { seen.push({ hass: value }); }
    }
    customElements.define('ha-entity-picker', FakePicker);
    const onChange = vi.fn();
    const hass = english();
    const { container } = render(<CardEditor hass={hass} config={structuredClone(liveConfig) as RoborockVacuumMapCardConfig} onChange={onChange} />);
    const pickers = [...container.querySelectorAll('ha-entity-picker')] as Array<HTMLElement & Record<string, unknown>>;
    expect(pickers.length).toBeGreaterThan(10);
    const battery = pickers.find((picker) => picker.value === 'sensor.qrevo_curv_2_flow_battery')!;
    expect(battery.includeDomains).toEqual(['sensor']);
    const filter = battery.entityFilter as (state: { entity_id: string }) => boolean;
    expect(filter({ entity_id: 'sensor.qrevo_curv_2_flow_status' })).toBe(true);
    expect(filter({ entity_id: 'sensor.something_else' })).toBe(false);
    battery.dispatchEvent(new CustomEvent('value-changed', { detail: { value: 'sensor.qrevo_curv_2_flow_status' } }));
    expect(onChange.mock.calls.at(-1)?.[0].entities.battery).toBe('sensor.qrevo_curv_2_flow_status');
    expect(seen.length).toBeGreaterThan(0);
  });
});

describe('editor translations', () => {
  const placeholders = (text: string) => [...text.matchAll(/\{(\w+)\}/g)].map((match) => match[1]).sort();

  it('has every string, with the same placeholders, in every language', () => {
    const english = EDITOR_DICTIONARIES.en;
    for (const [language, dictionary] of Object.entries(EDITOR_DICTIONARIES)) {
      for (const [key, text] of Object.entries(english)) {
        const translated = dictionary[key as keyof typeof english];
        expect(translated, `${language}.${key}`).toBeTruthy();
        expect(placeholders(translated), `${language}.${key}`).toEqual(placeholders(text));
      }
    }
  });
});

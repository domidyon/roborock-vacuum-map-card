import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { configFixture, createHass, withModel } from '../test/fixtures';
import { CardEditor } from './CardEditor';

describe('visual editor', () => {
  it('round-trips unknown YAML fields while editing known fields', async () => {
    const onChange = vi.fn();
    const config = {
      ...configFixture,
      future_option: { keep: true },
      floors: [{ ...configFixture.floors[0], future_floor_option: 'keep' }, configFixture.floors[1]],
    };
    render(<CardEditor hass={createHass()} config={config} onChange={onChange} />);
    const name = screen.getAllByLabelText('Name')[0];
    await userEvent.clear(name);
    await userEvent.type(name, 'My Roborock');
    const updated = onChange.mock.calls.at(-1)?.[0];
    expect(updated.future_option).toEqual({ keep: true });
    expect(updated.floors[0].future_floor_option).toBe('keep');
  });
});

describe('editor model note', () => {
  it('names recognised, unsupported and profiled models', () => {
    const note = (model: string) => {
      const hass = withModel(createHass(), model);
      const { container, unmount } = render(<CardEditor hass={hass} config={configFixture} onChange={() => undefined} />);
      const text = container.querySelector('.editor-hint')?.textContent;
      unmount();
      return text;
    };
    expect(note('roborock.vacuum.a245')).toBe('Model profile: Qrevo Curv 2 Flow (tested).');
    expect(note('roborock.vacuum.a10')).toBe('Recognised model: S6 MaxV (feature data from python-roborock).');
    expect(note('roborock.vacuum.ss07')).toBe('Q10 is not supported by this card (B01 protocol).');
    expect(note('roborock.vacuum.zz1')).toContain('No profile for roborock.vacuum.zz1 yet');
  });
});

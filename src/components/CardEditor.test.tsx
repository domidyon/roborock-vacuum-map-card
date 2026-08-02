import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { configFixture, createHass } from '../test/fixtures';
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

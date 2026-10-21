import { act, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { validateConfig } from './config';
import { RoborockVacuumMapCard } from './main';
import { createDiscoveryHass } from './test/discovery-hass';
import { configFixture, createHass } from './test/fixtures';
import type { HomeAssistant, RoborockVacuumMapCardConfig } from './types';

function mount(config: unknown, hass: HomeAssistant): HTMLElement {
  const card = document.createElement('roborock-vacuum-map-card') as RoborockVacuumMapCard;
  document.body.append(card);
  act(() => {
    card.setConfig(config as RoborockVacuumMapCardConfig);
    card.hass = hass;
  });
  return card.shadowRoot!.querySelector('div') as HTMLElement;
}

describe('card element', () => {
  it('starts "Add card" from a discovered config for the first Roborock vacuum', async () => {
    const config = await RoborockVacuumMapCard.getStubConfig(createDiscoveryHass());
    expect(validateConfig(config)).toEqual([]);
    expect(config).toMatchObject({ entity: 'vacuum.qrevo_curv_2_flow', config_version: 1 });
    expect(config.floors).toHaveLength(4);
    // HA's room-to-area mapping was read through callWS.
    expect(config.floors[0].rooms[0].area_id).toBe('kitchen');
  });

  it('falls back to the plain stub without Roborock devices', async () => {
    expect((await RoborockVacuumMapCard.getStubConfig(createHass())).entity).toBe('vacuum.roborock');
    expect((await RoborockVacuumMapCard.getStubConfig()).entity).toBe('vacuum.roborock');
  });

  it('shows the setup state instead of an error card for an unusable config', () => {
    const root = mount({ type: 'custom:roborock-vacuum-map-card', entity: 'vacuum.roborock', floors: [] }, createHass());
    expect(within(root).getByText('Finish setting up the Roborock card')).toBeInTheDocument();
    expect(root).toHaveTextContent('floors');
  });

  it('shows the setup state when the configured vacuum is gone', () => {
    const root = mount({ ...configFixture, entity: 'vacuum.gone' }, createHass());
    expect(root).toHaveTextContent("The configured vacuum doesn't exist: vacuum.gone");
  });

  it('localizes the setup state', () => {
    const root = mount({ entity: 'vacuum.gone', language: 'nl', floors: [] }, createHass());
    expect(root).toHaveTextContent('Rond de installatie van de Roborock-kaart af');
  });

  it('renders the card for a working config', () => {
    const root = mount(configFixture, createHass());
    expect(root.querySelector('.setup-state')).toBeNull();
    expect(screen.queryByText('Finish setting up the Roborock card')).toBeNull();
  });
});

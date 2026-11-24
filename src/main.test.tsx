import { act, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
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

  it('falls back to a starter config instead of hanging when discovery fails', async () => {
    const hass = createDiscoveryHass();
    Object.defineProperty(hass, 'areas', { get() { throw new TypeError('broken registry'); } });
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    const config = await RoborockVacuumMapCard.getStubConfig(hass);
    expect(config.entity).toBe('vacuum.qrevo_curv_2_flow');
    expect(warn).toHaveBeenCalled();
    warn.mockRestore();
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

const POLL_INTERVAL = 5000;

function cleaningHass(overrides: Partial<HomeAssistant> = {}) {
  const hass = createHass(overrides);
  hass.states['vacuum.roborock'].state = 'cleaning';
  hass.states['image.downstairs'].attributes.entity_picture = '/api/image_proxy/image.downstairs?token=abc';
  hass.states['image.downstairs'].last_updated = '2026-11-09T17:10:53.053Z';
  return hass;
}

function mountCard(hass: HomeAssistant) {
  const card = document.createElement('roborock-vacuum-map-card') as RoborockVacuumMapCard;
  act(() => {
    card.setConfig(configFixture);
    card.hass = hass;
    document.body.append(card);
  });
  return card;
}

function imageSrc(card: RoborockVacuumMapCard) {
  return card.shadowRoot?.querySelector('img')?.getAttribute('src');
}

function advance(ms: number) {
  act(() => {
    vi.advanceTimersByTime(ms);
  });
}

describe('map polling lifecycle', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    document.body.replaceChildren();
    vi.useRealTimers();
  });

  it('stops requesting the map while the card is detached and resumes when reattached', () => {
    const card = mountCard(cleaningHass());
    expect(imageSrc(card)).toContain('&r=0');
    advance(POLL_INTERVAL);
    expect(imageSrc(card)).toContain('&r=1');

    act(() => card.remove());
    const srcWhenDetached = imageSrc(card);
    expect(srcWhenDetached).toContain('&r=1');
    advance(POLL_INTERVAL * 4);
    expect(imageSrc(card)).toBe(srcWhenDetached);

    act(() => {
      document.body.append(card);
    });
    expect(imageSrc(card)).toBe(srcWhenDetached);
    advance(POLL_INTERVAL);
    expect(imageSrc(card)).toContain('&r=2');
  });

  it('stops requesting the map while the Home Assistant connection is down', () => {
    const hass = cleaningHass({ connected: true });
    const card = mountCard(hass);
    advance(POLL_INTERVAL);
    expect(imageSrc(card)).toContain('&r=1');

    act(() => {
      card.hass = { ...hass, connected: false };
    });
    advance(POLL_INTERVAL * 4);
    expect(imageSrc(card)).toContain('&r=1');

    act(() => {
      card.hass = { ...hass, connected: true };
    });
    advance(POLL_INTERVAL);
    expect(imageSrc(card)).toContain('&r=2');
  });
});

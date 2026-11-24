import { act } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import './main';
import type { RoborockVacuumMapCard } from './main';
import { configFixture, createHass } from './test/fixtures';
import type { HomeAssistant } from './types';

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

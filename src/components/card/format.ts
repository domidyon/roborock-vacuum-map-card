import { t } from '../../i18n';
import type { FloorConfig, HomeAssistant, Language, RoborockVacuumMapCardConfig } from '../../types';

export function stateText(hass: HomeAssistant, entityId?: string): string | undefined {
  if (!entityId) return undefined;
  const entity = hass.states[entityId];
  if (!entity || ['unknown', 'unavailable'].includes(entity.state)) return undefined;
  const display = entity.attributes.device_class === 'duration' && !isNaN(Number(entity.state))
    ? String(Math.round(Number(entity.state)))
    : entity.state;
  return `${display}${entity.attributes.unit_of_measurement ? ` ${entity.attributes.unit_of_measurement}` : ''}`;
}

export function formatRemainingTime(hass: HomeAssistant, entityId: string | undefined, language: Language | undefined): string | undefined {
  if (!entityId) return undefined;
  const entity = hass.states[entityId];
  if (!entity || ['unknown', 'unavailable'].includes(entity.state)) return undefined;
  const value = Number(entity.state);
  if (!Number.isFinite(value) || value < 0) return undefined;
  const unit = String(entity.attributes.unit_of_measurement ?? '');
  const UNIT_TO_MINUTES: Record<string, number> = { s: 1 / 60, min: 1, h: 60, d: 1440 };
  const factor = UNIT_TO_MINUTES[unit];
  if (factor === undefined) return undefined;
  const minutes = value * factor;
  const roundedMinutes = Math.max(0, Math.round(minutes));
  const hours = Math.floor(roundedMinutes / 60);
  const remainingMinutes = roundedMinutes % 60;
  const parts = [
    hours > 0 ? `${hours} ${t(language, 'hourShort')}` : undefined,
    remainingMinutes > 0 || hours === 0 ? `${remainingMinutes} ${t(language, 'minuteShort')}` : undefined,
  ].filter(Boolean);
  return `${parts.join(' ')} ${t(language, 'remaining')}`;
}

export function detailedActivity(language: Language | undefined, state?: string): string | undefined {
  if (state === 'washing_the_mop') return t(language, 'washingMop');
  return undefined;
}

export function formatRelativeTime(isoString: string, language: Language | undefined): string | undefined {
  const date = new Date(isoString);
  if (isNaN(date.getTime())) return undefined;
  const diffMs = Date.now() - date.getTime();
  if (diffMs < 0) return undefined;
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return t(language, 'justNow');
  if (diffMins < 60) return `${diffMins} ${t(language, 'minuteShort')} ${t(language, 'ago')}`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours} ${t(language, 'hourShort')} ${t(language, 'ago')}`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays === 1) return t(language, 'yesterday');
  return `${diffDays} ${t(language, 'daysAgo')}`;
}

export function initialFloor(config: RoborockVacuumMapCardConfig, hass: HomeAssistant): FloorConfig {
  const current = config.entities?.map_select ? hass.states[config.entities.map_select]?.state : undefined;
  return config.floors.find((floor) => floor.map_select_option === current) ?? config.floors[0];
}

import { t, tf, type TranslationKey } from '../i18n';
import type { HealthIssue } from '../health';
import type { ConsumableStatus } from '../maintenance';
import type { PreflightCheck } from '../preflight';
import type { Language } from '../types';

export function checkText(language: Language | undefined, check: PreflightCheck): string {
  const text = t(language, `check_${check.code}` as TranslationKey);
  if (check.code === 'dock_error') return `${text} ${check.detail?.replaceAll('_', ' ')}`;
  if (check.code === 'low_battery') return `${text} ${check.detail}%`;
  if (check.code === 'maintenance_overdue') return `${text} ${check.detail}`;
  return text;
}

export function healthText(language: Language | undefined, issue: HealthIssue): string {
  switch (issue.code) {
    case 'area_missing': return tf(language, 'health_area_missing', { room: issue.room, area: issue.area_id });
    case 'entity_missing': return tf(language, 'health_entity_missing', { entity: issue.entity_id });
    case 'map_option_missing': return tf(language, 'health_map_option_missing', { option: issue.option });
    case 'map_uncalibrated': return tf(language, 'health_map_uncalibrated', { entity: issue.entity_id });
  }
}

export function remainingText(language: Language | undefined, status: ConsumableStatus): string {
  if (status.remaining === undefined) return t(language, 'maintenanceUnknown');
  if (status.unit === '%') return `${Math.max(0, Math.round(status.remaining))}%`;
  if (status.remaining <= 0) return `0 ${t(language, 'hourShort')}`;
  if (status.remaining < 1) return `${Math.round(status.remaining * 60)} ${t(language, 'minuteShort')}`;
  return `${Math.round(status.remaining)} ${t(language, 'hourShort')}`;
}

const LEVEL_KEYS = {
  ok: 'maintenanceOk',
  due: 'maintenanceDue',
  overdue: 'maintenanceOverdue',
  unknown: 'maintenanceUnknown',
} as const satisfies Record<ConsumableStatus['level'], TranslationKey>;

export function levelText(language: Language | undefined, status: ConsumableStatus): string {
  return t(language, LEVEL_KEYS[status.level]);
}

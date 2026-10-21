import { Battery, Clock3, History, MapPin, ScanLine, Timer, TriangleAlert } from 'lucide-react';
import { useMemo, useState } from 'react';
import { configHealth } from '../../health';
import { t } from '../../i18n';
import type { HomeAssistant, Language, RoborockVacuumMapCardConfig } from '../../types';
import { healthText } from '../notices';
import { detailedActivity, formatRelativeTime, stateText } from './format';

interface CardHeaderProps {
  hass: HomeAssistant;
  config: RoborockVacuumMapCardConfig;
  language?: Language;
  jobActive: boolean;
  detailedStatus?: string;
  mopDrying: boolean;
  dryingRemaining?: string;
}

/** Name, state line, status strip, offline/error banners and the setup-health notice. */
export function CardHeader({ hass, config, language, jobActive, detailedStatus, mopDrying, dryingRemaining }: CardHeaderProps) {
  const vacuum = hass.states[config.entity];
  const health = useMemo(() => configHealth(hass, config), [hass, config]);
  const healthKey = JSON.stringify(health);
  // Dismissal lasts until the set of issues changes.
  const [dismissedHealth, setDismissedHealth] = useState<string>();
  const errorState = config.entities?.error ? hass.states[config.entities.error]?.state : undefined;
  const vacuumError = errorState && !['none', 'ok', 'unknown', 'unavailable', ''].includes(errorState) ? errorState.replaceAll('_', ' ') : undefined;
  const lastCleanState = config.entities?.last_clean_end ? hass.states[config.entities.last_clean_end]?.state : undefined;
  const lastClean = !jobActive && lastCleanState && !['unknown', 'unavailable'].includes(lastCleanState)
    ? formatRelativeTime(lastCleanState, language)
    : undefined;

  const headerDetails = [
    detailedActivity(language, detailedStatus),
    mopDrying ? t(language, 'dryingMop') : undefined,
    dryingRemaining,
  ].filter((value): value is string => Boolean(value));
  const statusItems = [
    { icon: <Battery />, label: t(language, 'battery'), value: stateText(hass, config.entities?.battery) },
    { icon: <MapPin />, label: t(language, 'room'), value: stateText(hass, config.entities?.current_room) },
    { icon: <ScanLine />, label: t(language, 'area'), value: stateText(hass, config.entities?.cleaning_area) },
    { icon: <Clock3 />, label: t(language, 'duration'), value: stateText(hass, config.entities?.cleaning_time) },
    { icon: <Timer />, label: t(language, 'progress'), value: stateText(hass, config.entities?.cleaning_progress) },
    { icon: <History />, label: t(language, 'lastClean'), value: lastClean },
  ].filter((item) => item.value);

  return (
    <>
      <div className="card-header">
        <div>
          <h1>{config.name ?? vacuum?.attributes.friendly_name ?? 'Roborock'}</h1>
          <div className="state-line">
            <span className={`state-dot state-${vacuum?.state ?? 'unavailable'}`} />
            <span>{vacuum?.state?.replaceAll('_', ' ') ?? 'unavailable'}</span>
            {headerDetails.map((detail) => <span className="state-detail" key={detail}>{` · ${detail}`}</span>)}
          </div>
        </div>
        {statusItems.length > 0 && (
          <div className="status-strip">
            {statusItems.map((item) => (
              <div key={item.label} title={item.label}>{item.icon}<strong>{item.value}</strong></div>
            ))}
          </div>
        )}
      </div>

      {vacuum?.state === 'unavailable' && <div className="card-banner offline" role="status">{t(language, 'vacuumOffline')}</div>}
      {vacuumError && <div className="card-banner error" role="alert">{t(language, 'vacuumErrorBanner')} {vacuumError}</div>}
      {health.length > 0 && dismissedHealth !== healthKey && (
        <details className="health-notice">
          <summary><TriangleAlert />{t(language, 'setupAttention')} ({health.length})</summary>
          <ul>{health.map((issue) => <li key={JSON.stringify(issue)}>{healthText(language, issue)}</li>)}</ul>
          <button type="button" className="secondary" onClick={() => setDismissedHealth(healthKey)}>{t(language, 'dismiss')}</button>
        </details>
      )}
    </>
  );
}

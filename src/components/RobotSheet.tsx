import { Activity, BarChart3, BatteryCharging, ChevronLeft, MoonStar, Volume2 } from 'lucide-react';
import { useEffect, useRef, useState, type RefObject } from 'react';
import { t, type TranslationKey } from '../i18n';
import { formatRelativeTime, stateText } from './card/format';
import { useDialog } from './useDialog';
import type { RobotSwitchKey, RobotTimeKey } from '../robot-settings';
import type { HomeAssistant, Language, RoborockVacuumMapCardConfig } from '../types';

interface RobotSheetProps {
  hass: HomeAssistant;
  config: RoborockVacuumMapCardConfig;
  language?: Language;
  pending?: string;
  onClose: () => void;
  onSwitch: (key: RobotSwitchKey, enabled: boolean) => void;
  onTime: (key: RobotTimeKey, value: string) => void;
  onVolume: (value: number) => void;
}

function liveState(hass: HomeAssistant, entityId?: string): string | undefined {
  const state = entityId ? hass.states[entityId]?.state : undefined;
  return !state || ['unknown', 'unavailable'].includes(state) ? undefined : state;
}

/** `HH:MM:SS` from Home Assistant, shown and edited as `HH:MM`. */
function timeValue(hass: HomeAssistant, entityId?: string): string | undefined {
  const state = liveState(hass, entityId);
  return state && /^\d{1,2}:\d{2}/.test(state) ? state.slice(0, 5).padStart(5, '0') : undefined;
}

/**
 * The native `change` event: it fires once a time or slider value is committed. Preact's
 * compat `onChange` listens to `input`, which would send every keystroke or drag step.
 */
function useCommit(ref: RefObject<HTMLInputElement | null>, onCommit: (value: string) => void) {
  const latest = useRef(onCommit);
  useEffect(() => {
    latest.current = onCommit;
  });
  useEffect(() => {
    const input = ref.current;
    if (!input) return undefined;
    const listener = () => latest.current(input.value);
    input.addEventListener('change', listener);
    return () => input.removeEventListener('change', listener);
  }, [ref]);
}

function Toggle({ label, checked, disabled, onChange }: { label: string; checked: boolean; disabled: boolean; onChange: (checked: boolean) => void }) {
  return (
    <div className="dock-setting-row">
      <span>{label}</span>
      <button
        type="button"
        role="switch"
        aria-label={label}
        aria-checked={checked}
        className={`dock-toggle ${checked ? 'active' : ''}`}
        disabled={disabled}
        onClick={() => onChange(!checked)}
      >
        <span />
      </button>
    </div>
  );
}

function TimeRow({ label, value, disabled, onChange }: { label: string; value?: string; disabled: boolean; onChange: (value: string) => void }) {
  const ref = useRef<HTMLInputElement>(null);
  useCommit(ref, (next) => {
    if (/^\d{2}:\d{2}$/.test(next) && next !== value) onChange(next);
  });
  return (
    <label className="time-field">
      <span>{label}</span>
      <input
        ref={ref}
        type="time"
        aria-label={label}
        defaultValue={value ?? ''}
        key={value}
        disabled={disabled || value === undefined}
      />
    </label>
  );
}

function VolumeRow({ hass, entityId, label, disabled, onChange }: { hass: HomeAssistant; entityId: string; label: string; disabled: boolean; onChange: (value: number) => void }) {
  const entity = hass.states[entityId];
  const current = Number(liveState(hass, entityId));
  const min = Number(entity?.attributes.min ?? 0);
  const max = Number(entity?.attributes.max ?? 100);
  const step = Number(entity?.attributes.step ?? 1);
  // A dragged value is kept only until the robot reports a new volume.
  const [draft, setDraft] = useState<{ value: number; base: number }>();
  const shown = draft && draft.base === current ? draft.value : Number.isFinite(current) ? current : min;
  const unit = String(entity?.attributes.unit_of_measurement ?? '');
  const ref = useRef<HTMLInputElement>(null);
  useCommit(ref, (next) => {
    const number = Number(next);
    if (Number.isFinite(number) && number !== current) onChange(number);
  });
  return (
    <label className="dock-setting-row robot-volume-row">
      <span>{label}</span>
      <span className="robot-volume">
        <input
          ref={ref}
          type="range"
          aria-label={label}
          min={min}
          max={max}
          step={step}
          value={shown}
          disabled={disabled || !Number.isFinite(current)}
          onInput={(event) => setDraft({ value: Number((event.target as HTMLInputElement).value), base: current })}
        />
        <output>{Number.isFinite(current) ? `${shown}${unit ? ` ${unit}` : ''}` : '—'}</output>
      </span>
    </label>
  );
}

function StatRow({ label, value, problem }: { label: string; value?: string; problem?: boolean }) {
  if (!value) return null;
  return (
    <div className={`dock-setting-row robot-stat-row${problem ? ' is-problem' : ''}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

type HealthRow = { label: string; value?: string; problem?: boolean };

/** Binary sensors and error sensors shown as a live status list, worst first. */
function healthRows(hass: HomeAssistant, entities: NonNullable<RoborockVacuumMapCardConfig['entities']>, language: Language | undefined): HealthRow[] {
  const ok = t(language, 'healthOk');
  const binary = (entityId: string | undefined, label: TranslationKey, problemWhen: 'on' | 'off', problemText: TranslationKey, okText = ok): HealthRow => {
    const state = liveState(hass, entityId);
    if (state !== 'on' && state !== 'off') return { label: t(language, label) };
    const problem = state === problemWhen;
    return { label: t(language, label), value: problem ? t(language, problemText) : okText, problem };
  };
  const errorRow = (entityId: string | undefined, label: TranslationKey): HealthRow => {
    const state = liveState(hass, entityId);
    if (!state) return { label: t(language, label) };
    const fine = ['none', 'ok', 'no_error', '0'].includes(state.toLowerCase());
    return { label: t(language, label), value: fine ? ok : state.replaceAll('_', ' '), problem: !fine };
  };
  const attached = t(language, 'healthAttached');
  const rows = [
    errorRow(entities.error, 'healthRobotError'),
    errorRow(entities.dock_error, 'healthDockError'),
    binary(entities.mop_attached, 'healthMop', 'off', 'healthDetached', attached),
    binary(entities.water_box_attached, 'healthWaterTank', 'off', 'healthDetached', attached),
    binary(entities.water_shortage, 'healthWaterLevel', 'on', 'healthLow'),
    binary(entities.dock_clean_water_empty, 'healthCleanTank', 'on', 'healthEmpty'),
    binary(entities.dock_dirty_water_full, 'healthDirtyTank', 'on', 'healthFull'),
    binary(entities.dock_clean_fluid_empty, 'healthCleaningFluid', 'on', 'healthEmpty'),
  ].filter((row) => row.value);
  return [...rows.filter((row) => row.problem), ...rows.filter((row) => !row.problem)];
}

/** Robot-level settings (volume, do not disturb, off-peak charging) and cleaning totals. */
export function RobotSheet({ hass, config, language, pending, onClose, onSwitch, onTime, onVolume }: RobotSheetProps) {
  const dialogRef = useDialog<HTMLElement>(onClose);
  const disabled = Boolean(pending);
  const entities = config.entities ?? {};

  const switchOn = (key: RobotSwitchKey) => liveState(hass, entities[key]) === 'on';
  const lastStart = liveState(hass, entities.last_clean_start);
  const totalTime = (() => {
    const entityId = entities.total_cleaning_time;
    const value = Number(liveState(hass, entityId));
    if (!entityId || !Number.isFinite(value)) return undefined;
    const unit = String(hass.states[entityId]?.attributes.unit_of_measurement ?? '');
    const hours = unit === 's' ? value / 3600 : unit === 'min' ? value / 60 : unit === 'd' ? value * 24 : value;
    return `${Math.round(hours * 10) / 10} ${t(language, 'hourShort')}`;
  })();

  const hasQuiet = Boolean(entities.do_not_disturb || entities.do_not_disturb_start || entities.do_not_disturb_end);
  const hasOffPeak = Boolean(entities.off_peak_charging || entities.off_peak_start || entities.off_peak_end);
  const stats = [
    { label: t(language, 'totalCleaningTime'), value: totalTime },
    { label: t(language, 'totalCleaningArea'), value: stateText(hass, entities.total_cleaning_area) },
    { label: t(language, 'totalCleaningCount'), value: stateText(hass, entities.total_cleaning_count) },
    { label: t(language, 'lastCleanStart'), value: lastStart ? formatRelativeTime(lastStart, language) : undefined },
  ];

  const health = healthRows(hass, entities, language);

  return (
    <div className="sheet-layer" role="presentation">
      <button type="button" className="sheet-backdrop" aria-label={t(language, 'close')} onClick={onClose} />
      <section className="job-sheet dock-sheet robot-sheet" role="dialog" aria-modal="true" aria-labelledby="robot-sheet-title" ref={dialogRef} tabIndex={-1}>
        <div className="sheet-handle" />
        <header>
          <button type="button" className="sheet-back" aria-label={t(language, 'back')} onClick={onClose}><ChevronLeft /><span>{t(language, 'back')}</span></button>
          <div>
            <h2 id="robot-sheet-title">{t(language, 'robotSettings')}</h2>
            <p>{t(language, 'robotOverview')}</p>
          </div>
        </header>

        <div className="sheet-body dock-sheet-body">
          {entities.robot_volume && (
            <section className="dock-settings-group">
              <h3><Volume2 />{t(language, 'robotVolume')}</h3>
              <VolumeRow hass={hass} entityId={entities.robot_volume} label={t(language, 'robotVolume')} disabled={disabled} onChange={onVolume} />
            </section>
          )}

          {hasQuiet && (
            <section className="dock-settings-group">
              <h3><MoonStar />{t(language, 'doNotDisturb')}</h3>
              {entities.do_not_disturb && <Toggle label={t(language, 'doNotDisturb')} checked={switchOn('do_not_disturb')} disabled={disabled} onChange={(on) => onSwitch('do_not_disturb', on)} />}
              {(entities.do_not_disturb_start || entities.do_not_disturb_end) && (
                <div className="time-pair">
                  {entities.do_not_disturb_start && <TimeRow label={t(language, 'timeFrom')} value={timeValue(hass, entities.do_not_disturb_start)} disabled={disabled} onChange={(value) => onTime('do_not_disturb_start', value)} />}
                  {entities.do_not_disturb_end && <TimeRow label={t(language, 'timeUntil')} value={timeValue(hass, entities.do_not_disturb_end)} disabled={disabled} onChange={(value) => onTime('do_not_disturb_end', value)} />}
                </div>
              )}
            </section>
          )}

          {hasOffPeak && (
            <section className="dock-settings-group">
              <h3><BatteryCharging />{t(language, 'offPeakCharging')}</h3>
              {entities.off_peak_charging && <Toggle label={t(language, 'offPeakCharging')} checked={switchOn('off_peak_charging')} disabled={disabled} onChange={(on) => onSwitch('off_peak_charging', on)} />}
              {(entities.off_peak_start || entities.off_peak_end) && (
                <div className="time-pair">
                  {entities.off_peak_start && <TimeRow label={t(language, 'timeFrom')} value={timeValue(hass, entities.off_peak_start)} disabled={disabled} onChange={(value) => onTime('off_peak_start', value)} />}
                  {entities.off_peak_end && <TimeRow label={t(language, 'timeUntil')} value={timeValue(hass, entities.off_peak_end)} disabled={disabled} onChange={(value) => onTime('off_peak_end', value)} />}
                </div>
              )}
            </section>
          )}

          {stats.some((item) => item.value) && (
            <section className="dock-settings-group">
              <h3><BarChart3 />{t(language, 'statistics')}</h3>
              {stats.map((item) => <StatRow key={item.label} label={item.label} value={item.value} />)}
            </section>
          )}

          {health.length > 0 && (
            <section className="dock-settings-group">
              <h3><Activity />{t(language, 'robotHealth')}</h3>
              {health.map((row) => <StatRow key={row.label} label={row.label} value={row.value} problem={row.problem} />)}
            </section>
          )}

          {pending && <p className="dock-pending" role="status">{pending}</p>}
        </div>
      </section>
    </div>
  );
}

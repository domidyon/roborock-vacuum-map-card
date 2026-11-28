import { Pencil, Plus, Trash2 } from 'lucide-react';
import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import { AppIcon } from './AppIcon';
import { HaIcon } from './HaIcon';
import { t, tf, type TranslationKey } from '../i18n';
import {
  actionFor,
  appFieldRank,
  cardSchedules,
  initialValues,
  isSimpleSchedule,
  isWaterFlow,
  roomToggle,
  scheduleActions,
  scheduleSummary,
  schedulePayload,
  scriptFields,
  selectOptions,
  selectorType,
  weekdaySet,
  APP_ICON_VALUES,
  SLOW_OPTIONS,
  WATER_FLOW_ORDER,
  WATER_LEVEL,
  WEEKDAYS,
  type ScheduleActionConfig,
  type ScheduleDraft,
  type SchedulerItem,
  type ScriptField,
  type Weekday,
} from '../schedules';
import type { HomeAssistant, Language, RoborockVacuumMapCardConfig } from '../types';

interface ScheduleSectionProps {
  hass: HomeAssistant;
  config: RoborockVacuumMapCardConfig;
  language?: Language;
  onToast: (message: string) => void;
}

const DAY_KEYS: Record<Weekday, TranslationKey> = {
  mon: 'dayMon',
  tue: 'dayTue',
  wed: 'dayWed',
  thu: 'dayThu',
  fri: 'dayFri',
  sat: 'daySat',
  sun: 'daySun',
};

function daysText(language: Language | undefined, weekdays: string[]): string {
  if (weekdays.includes('daily')) return t(language, 'scheduleEveryDay');
  if (weekdays.length === 1 && weekdays[0] === 'workday') return t(language, 'scheduleWorkdays');
  if (weekdays.length === 1 && weekdays[0] === 'weekend') return t(language, 'scheduleWeekend');
  const days = weekdaySet(weekdays);
  if (days.size === WEEKDAYS.length) return t(language, 'scheduleEveryDay');
  return WEEKDAYS.filter((day) => days.has(day)).map((day) => t(language, DAY_KEYS[day])).join(', ');
}

function nextRun(language: Language | undefined, item: SchedulerItem): string | undefined {
  const index = item.next_entries?.[0] ?? 0;
  const timestamp = item.timestamps?.[index];
  const date = timestamp ? new Date(timestamp) : undefined;
  if (!date || isNaN(date.getTime()) || item.enabled === false) return undefined;
  const when = new Intl.DateTimeFormat(language ?? 'en', { weekday: 'short', hour: '2-digit', minute: '2-digit' }).format(date);
  return tf(language, 'scheduleNext', { when });
}

function errorText(error: unknown): string {
  return error instanceof Error ? error.message : typeof error === 'object' && error && 'message' in error ? String(error.message) : String(error);
}

const DEFAULT_ACTION_ICONS = ['mdi:robot-vacuum', 'mdi:water', 'mdi:broom', 'mdi:creation-outline'];

function roomIcon(config: RoborockVacuumMapCardConfig, name: string): string {
  const room = config.floors.flatMap((floor) => floor.rooms).find((candidate) => candidate.name.toLowerCase() === name.toLowerCase());
  return typeof room?.icon === 'string' && room.icon ? room.icon : 'mdi:floor-plan';
}

/** Rooms stay plain rows: a select per room, or room chips for an `area` selector. */
function RoomRows({ config, language, fields, values, onChange }: {
  config: RoborockVacuumMapCardConfig;
  language?: Language;
  fields: Array<[string, ScriptField]>;
  values: Record<string, unknown>;
  onChange: (key: string, value: unknown) => void;
}) {
  if (fields.length === 0) return null;
  return (
    <div className="schedule-rooms-list">
      <span className="schedule-section-title">{t(language, 'rooms')}</span>
      {fields.map(([key, field]) => {
        const name = field.name ?? key;
        if (selectorType(field) === 'area') {
          const selected = new Set(Array.isArray(values[key]) ? (values[key] as unknown[]).map(String) : typeof values[key] === 'string' && values[key] ? [values[key] as string] : []);
          const rooms = config.floors.flatMap((floor) => floor.rooms).filter((room) => room.area_id && !room.hidden);
          return (
            <div key={key} className="dock-setting-row schedule-area-row">
              <span>{name}</span>
              <div className="schedule-chips" role="group" aria-label={name}>
                {rooms.map((room) => {
                  const area = room.area_id as string;
                  const on = selected.has(area);
                  return (
                    <button
                      key={area}
                      type="button"
                      aria-pressed={on}
                      className={on ? 'active' : ''}
                      onClick={() => {
                        const next = new Set(selected);
                        if (on) next.delete(area);
                        else next.add(area);
                        onChange(key, [...next]);
                      }}
                    >
                      {room.name}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        }
        return (
          <label key={key} className="dock-setting-row">
            <span className="schedule-room-name"><HaIcon icon={roomIcon(config, name)} />{name}</span>
            <select aria-label={name} value={values[key] === undefined ? '' : String(values[key])} onChange={(event) => onChange(key, (event.target as HTMLSelectElement).value)}>
              {values[key] === undefined && <option value="">—</option>}
              {selectOptions(field).map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
          </label>
        );
      })}
    </div>
  );
}

/** A choice as in the Roborock app: name and current value, then a pill of icon buttons. */
function AppChoice({ label, field, icons, only, value, language, onChange }: {
  label: string;
  field: ScriptField;
  icons?: Record<string, string>;
  only?: string[];
  value: unknown;
  language?: Language;
  onChange: (value: unknown) => void;
}) {
  const all = selectOptions(field);
  const options = only ? only.map((value) => all.find((option) => option.value === value)).filter((option): option is { value: string; label: string } => Boolean(option)) : all;
  const current = all.find((option) => option.value === String(value));
  const slow = current ? SLOW_OPTIONS.includes(current.value) : false;
  const countLike = options.every((option) => /^\d+$/.test(option.value));
  return (
    <div className="app-choice">
      <div className="app-choice-head">
        <span>{label}</span>
        {current && <strong className={slow ? 'slow' : ''}>{current.label}</strong>}
      </div>
      <div className="app-segment" role="radiogroup" aria-label={label} style={{ '--segments': options.length } as CSSProperties}>
        {options.map((option) => {
          const active = option.value === String(value);
          const icon = countLike ? undefined : icons?.[option.value] ? <HaIcon icon={icons[option.value]} /> : APP_ICON_VALUES.includes(option.value) ? <AppIcon name={option.value} /> : undefined;
          return (
            <button
              type="button"
              role="radio"
              key={option.value}
              aria-checked={active}
              aria-label={option.label}
              title={option.label}
              className={`${active ? 'active' : ''}${active && SLOW_OPTIONS.includes(option.value) ? ' slow' : ''}`}
              onClick={() => onChange(option.value)}
            >
              {icon ?? <span>{countLike ? `×${option.value}` : option.label}</span>}
            </button>
          );
        })}
      </div>
      {slow && <small className="app-note">{t(language, 'scheduleSlow')}</small>}
    </div>
  );
}

function AppWater({ label, field, value, onChange }: { label: string; field: ScriptField; value: unknown; onChange: (value: unknown) => void }) {
  const options = selectOptions(field).sort((a, b) => WATER_FLOW_ORDER.indexOf(a.value) - WATER_FLOW_ORDER.indexOf(b.value));
  const index = Math.max(0, options.findIndex((option) => option.value === String(value)));
  const current = options[index];
  const level = current ? WATER_LEVEL[current.value] : undefined;
  return (
    <div className="app-choice">
      <div className="app-choice-head">
        <span>{label}</span>
        {current && <strong>{current.label}</strong>}
      </div>
      <label className="app-water" style={{ '--fill': `${options.length > 1 ? (index / (options.length - 1)) * 100 : 0}%` } as CSSProperties}>
        <span className="app-water-low"><AppIcon name="water_low" /></span>
        <input
          type="range"
          min="0"
          max={options.length - 1}
          step="1"
          value={index}
          aria-label={label}
          onInput={(event) => onChange(options[Number((event.target as HTMLInputElement).value)]?.value)}
        />
        <output>{level ?? index + 1}</output>
        <span className="app-water-high"><AppIcon name="water_high" /></span>
      </label>
    </div>
  );
}

function FieldInput({ name, field, icons, only, value, language, onChange }: {
  name: string;
  field: ScriptField;
  icons?: Record<string, string>;
  only?: string[];
  value: unknown;
  language?: Language;
  onChange: (value: unknown) => void;
}) {
  const label = field.name ?? name;
  const type = selectorType(field);
  if (type === 'select' && isWaterFlow(field)) return <AppWater label={label} field={field} value={value} onChange={onChange} />;
  if (type === 'select') return <AppChoice label={label} field={field} icons={icons} only={only} value={value} language={language} onChange={onChange} />;
  if (type === 'boolean') {
    const checked = value === true || value === 'true' || value === 'on';
    return (
      <div className="app-choice schedule-toggle-field">
        <span>{label}</span>
        <button type="button" role="switch" aria-label={label} aria-checked={checked} className={`dock-toggle ${checked ? 'active' : ''}`} onClick={() => onChange(!checked)}>
          <span />
        </button>
      </div>
    );
  }
  const number = field.selector?.number ?? undefined;
  return (
    <label className="app-choice">
      <div className="app-choice-head"><span>{label}</span></div>
      <input
        type={type === 'number' ? 'number' : type === 'time' ? 'time' : 'text'}
        aria-label={label}
        className="schedule-input"
        value={value === undefined ? '' : String(value)}
        min={number?.min as number | undefined}
        max={number?.max as number | undefined}
        step={number?.step as number | undefined}
        onInput={(event) => {
          const raw = (event.target as HTMLInputElement).value;
          onChange(type === 'number' && raw !== '' ? Number(raw) : raw);
        }}
      />
    </label>
  );
}

function ScheduleForm({
  hass,
  config,
  language,
  actions,
  existing,
  busy,
  onCancel,
  onSave,
}: {
  hass: HomeAssistant;
  config: RoborockVacuumMapCardConfig;
  language?: Language;
  actions: ScheduleActionConfig[];
  existing?: SchedulerItem;
  busy: boolean;
  onCancel: () => void;
  onSave: (draft: ScheduleDraft) => void;
}) {
  const [draft, setDraft] = useState<ScheduleDraft>(() => {
    const slotAction = existing?.timeslots[0]?.actions[0];
    const action = Math.max(0, actions.indexOf(actionFor(slotAction, actions) as ScheduleActionConfig));
    return {
      action,
      time: existing ? existing.timeslots[0].start.slice(0, 5) : '09:00',
      days: existing ? undefined : new Set(WEEKDAYS),
      values: initialValues(scriptFields(hass, actions[action]), slotAction?.service_data),
    };
  });
  const action = actions[draft.action];
  const fields = scriptFields(hass, action);
  const roomFields = fields.filter(([, field]) => roomToggle(field) || selectorType(field) === 'area');
  const otherFields = fields.filter((entry) => !roomFields.includes(entry)).sort((a, b) => appFieldRank(a[1]) - appFieldRank(b[1]));
  const days = draft.days ?? weekdaySet(existing?.weekdays ?? []);
  const missing = fields.some(([key, field]) => field.required && (draft.values[key] === undefined || draft.values[key] === ''));
  const valid = /^\d{2}:\d{2}$/.test(draft.time) && days.size > 0 && !missing;
  const setValue = (key: string, value: unknown) => setDraft((current) => ({ ...current, values: { ...current.values, [key]: value } }));

  return (
    <form
      className="schedule-form"
      onSubmit={(event) => {
        event.preventDefault();
        if (valid && !busy) onSave(draft);
      }}
    >
      <h4>{t(language, existing ? 'scheduleEdit' : 'scheduleNew')}</h4>
      {actions.length > 1 && (
        <div className="cleaning-mode-tabs" role="tablist" aria-label={t(language, 'scheduleJob')} style={{ '--mode-count': Math.min(actions.length, 4) } as CSSProperties}>
          {actions.map((candidate, index) => (
            <button
              type="button"
              role="tab"
              key={`${candidate.script}-${candidate.name}`}
              aria-selected={draft.action === index}
              className={draft.action === index ? 'active' : ''}
              onClick={() => {
                if (index === draft.action) return;
                const data = existing?.timeslots[0]?.actions[0]?.service === candidate.script ? existing.timeslots[0].actions[0].service_data : undefined;
                setDraft((current) => ({ ...current, action: index, values: initialValues(scriptFields(hass, candidate), { ...current.values, ...data }) }));
              }}
            >
              <HaIcon icon={candidate.icon ?? DEFAULT_ACTION_ICONS[index % DEFAULT_ACTION_ICONS.length]} />
              <span>{candidate.name}</span>
            </button>
          ))}
        </div>
      )}
      <section className="mode-settings">
        <label className="field app-field schedule-time">
          <span>{t(language, 'scheduleTime')}</span>
          <input
            type="time"
            aria-label={t(language, 'scheduleTime')}
            value={draft.time}
            onInput={(event) => {
              const time = (event.target as HTMLInputElement).value;
              setDraft((current) => ({ ...current, time }));
            }}
          />
        </label>
        <div className="field app-field">
          <span>{t(language, 'scheduleDays')}</span>
          <div className="option-strip schedule-days" role="group" aria-label={t(language, 'scheduleDays')}>
            {WEEKDAYS.map((day) => {
              const on = days.has(day);
              return (
                <button
                  key={day}
                  type="button"
                  aria-pressed={on}
                  className={on ? 'active' : ''}
                  onClick={() => {
                    const next = new Set(days);
                    if (on) next.delete(day);
                    else next.add(day);
                    setDraft((current) => ({ ...current, days: next }));
                  }}
                >
                  {t(language, DAY_KEYS[day])}
                </button>
              );
            })}
          </div>
        </div>
      </section>
      {otherFields.length > 0 ? (
        <section className="mode-settings app-settings">
          {otherFields.map(([key, field]) => (
            <FieldInput key={`${draft.action}-${key}`} name={key} field={field} icons={action.option_icons?.[key]} only={action.options?.[key]} value={draft.values[key]} language={language} onChange={(value) => setValue(key, value)} />
          ))}
        </section>
      ) : (
        <p className="schedule-no-options"><HaIcon icon={action.icon ?? 'mdi:creation-outline'} />{t(language, 'scheduleNoOptions')}</p>
      )}
      <RoomRows config={config} language={language} fields={roomFields} values={draft.values} onChange={setValue} />
      <div className="primary-actions schedule-form-actions">
        <button type="button" className="secondary" onClick={onCancel} disabled={busy}>{t(language, 'scheduleCancel')}</button>
        <button type="submit" className="primary" disabled={!valid || busy}>{t(language, 'scheduleSave')}</button>
      </div>
    </form>
  );
}

/**
 * Cleaning schedules from the Scheduler integration that run this card's jobs: listed with
 * an on/off switch, and created, edited and deleted here.
 */
export function ScheduleSection({ hass, config, language, onToast }: ScheduleSectionProps) {
  const hassRef = useRef(hass);
  useEffect(() => {
    hassRef.current = hass;
  });
  const [items, setItems] = useState<SchedulerItem[]>();
  const [editing, setEditing] = useState<{ item?: SchedulerItem }>();
  const [busy, setBusy] = useState(false);
  const actions = scheduleActions(config, hass);
  // Reload when any schedule switch changes (toggled, edited, added or removed elsewhere).
  const signature = Object.values(hass.states)
    .filter((entity) => entity.entity_id.startsWith('switch.schedule_'))
    .map((entity) => `${entity.entity_id}:${entity.state}:${String(entity.attributes.next_trigger ?? '')}:${JSON.stringify(entity.attributes.actions ?? '')}`)
    .join('|');

  const load = useCallback(async () => {
    try {
      setItems((await hassRef.current.callWS?.<SchedulerItem[]>({ type: 'scheduler' })) ?? []);
    } catch {
      setItems([]);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load, signature]);

  if (actions.length === 0) return null;
  const schedules = cardSchedules(items ?? [], actions).sort((a, b) => (a.timeslots[0]?.start ?? '').localeCompare(b.timeslots[0]?.start ?? ''));

  const mutate = async (call: () => Promise<unknown>, success: TranslationKey) => {
    if (busy) return false;
    setBusy(true);
    try {
      await call();
      onToast(t(language, success));
      await load();
      return true;
    } catch (error) {
      onToast(`scheduler: ${errorText(error)}`);
      return false;
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className={editing ? 'schedule-editor' : 'dock-settings-group schedule-group'}>
      {editing ? (
        <ScheduleForm
          hass={hass}
          config={config}
          language={language}
          actions={actions}
          existing={editing.item}
          busy={busy}
          onCancel={() => setEditing(undefined)}
          onSave={async (draft) => {
            const payload = schedulePayload(draft, actions[draft.action], editing.item);
            const saved = await mutate(() => hassRef.current.callService('scheduler', editing.item ? 'edit' : 'add', payload), 'scheduleSaved');
            if (saved) setEditing(undefined);
          }}
        />
      ) : (
        <>
          {items !== undefined && schedules.length === 0 && <p className="schedule-empty">{t(language, 'scheduleEmpty')}</p>}
          {schedules.map((item) => {
            const slot = item.timeslots[0];
            const action = actionFor(slot?.actions[0], actions);
            const title = item.name || action?.name || slot?.actions[0]?.service || item.entity_id;
            const enabled = hass.states[item.entity_id] ? hass.states[item.entity_id].state !== 'off' : item.enabled !== false;
            const next = nextRun(language, item);
            const editable = isSimpleSchedule(item) && Boolean(action);
            const summary = action ? scheduleSummary(scriptFields(hass, action), slot?.actions[0]?.service_data) : [];
            return (
              <div key={item.schedule_id} className="dock-setting-row schedule-row">
                <HaIcon className="schedule-icon" icon={action?.icon ?? DEFAULT_ACTION_ICONS[Math.max(0, actions.indexOf(action as ScheduleActionConfig)) % DEFAULT_ACTION_ICONS.length]} />
                <span className="schedule-text">
                  <strong>{title}</strong>
                  <small>{[slot?.start.slice(0, 5), daysText(language, item.weekdays), next].filter(Boolean).join(' · ')}</small>
                  {summary.length > 0 && <small className="schedule-summary">{summary.join(' · ')}</small>}
                  {!editable && <small>{t(language, 'scheduleOther')}</small>}
                </span>
                <span className="schedule-controls">
                  {editable && (
                    <button type="button" className="icon-button" aria-label={`${t(language, 'scheduleEdit')}: ${title}`} disabled={busy} onClick={() => setEditing({ item })}>
                      <Pencil />
                    </button>
                  )}
                  <button
                    type="button"
                    className="icon-button"
                    aria-label={`${t(language, 'scheduleDelete')}: ${title}`}
                    disabled={busy}
                    onClick={() => {
                      if (!window.confirm(t(language, 'scheduleConfirmDelete'))) return;
                      void mutate(() => hassRef.current.callService('scheduler', 'remove', { entity_id: item.entity_id }), 'scheduleDeleted');
                    }}
                  >
                    <Trash2 />
                  </button>
                  <button
                    type="button"
                    role="switch"
                    aria-label={title}
                    aria-checked={enabled}
                    className={`dock-toggle ${enabled ? 'active' : ''}`}
                    disabled={busy}
                    onClick={() => void mutate(() => hassRef.current.callService('switch', enabled ? 'turn_off' : 'turn_on', {}, { entity_id: item.entity_id }), 'scheduleSaved')}
                  >
                    <span />
                  </button>
                </span>
              </div>
            );
          })}
          <button type="button" className="schedule-add" disabled={busy} onClick={() => setEditing({})}>
            <Plus />
            {t(language, 'scheduleAdd')}
          </button>
        </>
      )}
    </section>
  );
}

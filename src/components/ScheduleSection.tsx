import { Pencil, Plus, Trash2 } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { t, tf, type TranslationKey } from '../i18n';
import {
  actionFor,
  cardSchedules,
  initialValues,
  isSimpleSchedule,
  scheduleActions,
  schedulePayload,
  scriptFields,
  selectOptions,
  selectorType,
  weekdaySet,
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

/** Room chips for an `area` selector: the card's rooms that have an area. */
function AreaField({ config, label, value, onChange }: { config: RoborockVacuumMapCardConfig; label: string; value: unknown; onChange: (value: string[]) => void }) {
  const selected = new Set(Array.isArray(value) ? value.map(String) : typeof value === 'string' && value ? [value] : []);
  const rooms = config.floors.flatMap((floor) => floor.rooms).filter((room) => room.area_id && !room.hidden);
  return (
    <div className="dock-setting-row schedule-field-stack">
      <span>{label}</span>
      <div className="schedule-chips" role="group" aria-label={label}>
        {rooms.map((room) => {
          const on = selected.has(room.area_id as string);
          return (
            <button
              key={room.area_id}
              type="button"
              aria-pressed={on}
              className={on ? 'active' : ''}
              onClick={() => {
                const next = new Set(selected);
                if (on) next.delete(room.area_id as string);
                else next.add(room.area_id as string);
                onChange([...next]);
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

function FieldInput({ config, name, field, value, onChange }: { config: RoborockVacuumMapCardConfig; name: string; field: ScriptField; value: unknown; onChange: (value: unknown) => void }) {
  const label = field.name ?? name;
  const type = selectorType(field);
  if (type === 'area') return <AreaField config={config} label={label} value={value} onChange={onChange} />;
  if (type === 'boolean') {
    const checked = value === true || value === 'true' || value === 'on';
    return (
      <div className="dock-setting-row">
        <span>{label}</span>
        <button type="button" role="switch" aria-label={label} aria-checked={checked} className={`dock-toggle ${checked ? 'active' : ''}`} onClick={() => onChange(!checked)}>
          <span />
        </button>
      </div>
    );
  }
  if (type === 'select') {
    const options = selectOptions(field);
    return (
      <label className="dock-setting-row">
        <span>{label}</span>
        <select aria-label={label} value={value === undefined ? '' : String(value)} onChange={(event) => onChange((event.target as HTMLSelectElement).value)}>
          {value === undefined && <option value="">—</option>}
          {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
      </label>
    );
  }
  const number = field.selector?.number ?? undefined;
  return (
    <label className="dock-setting-row">
      <span>{label}</span>
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
  const days = draft.days ?? weekdaySet(existing?.weekdays ?? []);
  const missing = fields.some(([key, field]) => field.required && (draft.values[key] === undefined || draft.values[key] === ''));
  const valid = /^\d{2}:\d{2}$/.test(draft.time) && days.size > 0 && !missing;

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
        <label className="dock-setting-row">
          <span>{t(language, 'scheduleJob')}</span>
          <select
            aria-label={t(language, 'scheduleJob')}
            value={String(draft.action)}
            onChange={(event) => {
              const index = Number((event.target as HTMLSelectElement).value);
              const data = existing?.timeslots[0]?.actions[0]?.service === actions[index].script ? existing.timeslots[0].actions[0].service_data : undefined;
              setDraft((current) => ({ ...current, action: index, values: initialValues(scriptFields(hass, actions[index]), data ?? current.values) }));
            }}
          >
            {actions.map((candidate, index) => <option key={`${candidate.script}-${candidate.name}`} value={String(index)}>{candidate.name}</option>)}
          </select>
        </label>
      )}
      <label className="dock-setting-row">
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
      <div className="dock-setting-row schedule-field-stack">
        <span>{t(language, 'scheduleDays')}</span>
        <div className="schedule-chips" role="group" aria-label={t(language, 'scheduleDays')}>
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
      {fields.map(([key, field]) => (
        <FieldInput
          key={`${draft.action}-${key}`}
          config={config}
          name={key}
          field={field}
          value={draft.values[key]}
          onChange={(value) => setDraft((current) => ({ ...current, values: { ...current.values, [key]: value } }))}
        />
      ))}
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
    <section className="dock-settings-group schedule-group">
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
            return (
              <div key={item.schedule_id} className="dock-setting-row schedule-row">
                <span className="schedule-text">
                  <strong>{title}</strong>
                  <small>{[slot?.start.slice(0, 5), daysText(language, item.weekdays), next].filter(Boolean).join(' · ')}</small>
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

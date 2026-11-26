import type { HomeAssistant, RoborockVacuumMapCardConfig } from './types';

/**
 * Cleaning schedules through the Scheduler integration (`scheduler` custom component).
 * The card does not run anything itself at the scheduled time: each schedule calls a
 * Home Assistant script, so it runs whether or not a dashboard is open.
 */

/** A kind of job the card can schedule: a script, optional fixed data, and which of the script's fields to ask for. */
export interface ScheduleActionConfig {
  name: string;
  script: string;
  data?: Record<string, unknown>;
  fields?: string[];
}

export interface ScriptField {
  name?: string;
  description?: string;
  required?: boolean;
  default?: unknown;
  selector?: Record<string, Record<string, unknown> | null | undefined>;
}

export interface SchedulerAction {
  service: string;
  entity_id?: string | null;
  service_data?: Record<string, unknown>;
}

export interface SchedulerTimeslot {
  start: string;
  stop?: string | null;
  actions: SchedulerAction[];
  [key: string]: unknown;
}

export interface SchedulerItem {
  schedule_id: string;
  entity_id: string;
  weekdays: string[];
  timeslots: SchedulerTimeslot[];
  repeat_type?: string;
  name?: string | null;
  enabled?: boolean;
  timestamps?: string[];
  next_entries?: number[];
  [key: string]: unknown;
}

export const WEEKDAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const;
export type Weekday = (typeof WEEKDAYS)[number];

export function hasScheduler(hass: HomeAssistant): boolean {
  return Boolean(hass.services?.scheduler?.add && hass.callWS);
}

/**
 * The jobs offered in the schedule editor: `schedule_actions` from the config, or else the
 * preset scripts the card's editor created (`script.rvmc_<vacuum>_<preset>`) that exist.
 */
export function scheduleActions(config: RoborockVacuumMapCardConfig, hass: HomeAssistant): ScheduleActionConfig[] {
  const configured = config.schedule_actions;
  if (Array.isArray(configured) && configured.length > 0) {
    return configured.filter((action): action is ScheduleActionConfig =>
      Boolean(action && typeof action === 'object' && typeof action.name === 'string' && typeof action.script === 'string' && action.script.startsWith('script.')),
    );
  }
  const vacuum = config.entity.split('.')[1];
  return (config.presets ?? [])
    .map((preset) => ({ name: preset.name, script: `script.rvmc_${vacuum}_${preset.id}` }))
    .filter((action) => Boolean(hass.states[action.script]));
}

/** The script's fields the editor asks for: fixed data and fields outside `fields` are left out. */
export function scriptFields(hass: HomeAssistant, action: ScheduleActionConfig): Array<[string, ScriptField]> {
  const objectId = action.script.split('.')[1];
  const fields = (hass.services?.script?.[objectId]?.fields ?? {}) as Record<string, ScriptField>;
  return Object.entries(fields).filter(([key]) => !(action.data && key in action.data) && (!action.fields || action.fields.includes(key)));
}

function sameValue(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b) || String(a) === String(b);
}

/** The configured job a scheduler action runs, if its script and fixed data match. */
export function actionFor(action: SchedulerAction | undefined, actions: ScheduleActionConfig[]): ScheduleActionConfig | undefined {
  if (!action) return undefined;
  const data = action.service_data ?? {};
  const matches = actions.filter((candidate) => candidate.script === action.service);
  return (
    matches.find((candidate) => Object.entries(candidate.data ?? {}).every(([key, value]) => sameValue(data[key], value)) && candidate.data) ??
    matches.find((candidate) => !candidate.data || Object.keys(candidate.data).length === 0) ??
    matches[0]
  );
}

/** Schedules that run one of this card's jobs. */
export function cardSchedules(items: SchedulerItem[], actions: ScheduleActionConfig[]): SchedulerItem[] {
  const scripts = new Set(actions.map((action) => action.script));
  return items.filter((item) => item.timeslots.some((slot) => slot.actions.some((action) => scripts.has(action.service))));
}

/** One time and one action: anything more stays with the Scheduler card. */
export function isSimpleSchedule(item: SchedulerItem): boolean {
  return item.timeslots.length === 1 && item.timeslots[0].actions.length === 1 && !item.timeslots[0].stop;
}

export function weekdaySet(weekdays: string[]): Set<Weekday> {
  const days = new Set<Weekday>();
  for (const day of weekdays) {
    if (day === 'daily') WEEKDAYS.forEach((value) => days.add(value));
    else if (day === 'workday') WEEKDAYS.slice(0, 5).forEach((value) => days.add(value));
    else if (day === 'weekend') ['sat', 'sun'].forEach((value) => days.add(value as Weekday));
    else if ((WEEKDAYS as readonly string[]).includes(day)) days.add(day as Weekday);
  }
  return days;
}

export function weekdayList(days: Set<Weekday>): string[] {
  return days.size === WEEKDAYS.length ? ['daily'] : WEEKDAYS.filter((day) => days.has(day));
}

export interface ScheduleDraft {
  action: number;
  time: string;
  /** Unset while the days of an existing schedule are untouched, so `workday` stays `workday`. */
  days?: Set<Weekday>;
  values: Record<string, unknown>;
}

/** Field values to start the editor with: the schedule's own data, then each field's default. */
export function initialValues(fields: Array<[string, ScriptField]>, data: Record<string, unknown> = {}): Record<string, unknown> {
  const values: Record<string, unknown> = {};
  for (const [key, field] of fields) {
    if (key in data) values[key] = data[key];
    else if (field.default !== undefined) values[key] = field.default;
  }
  return values;
}

/** Service data for `scheduler.add` or, with `existing`, `scheduler.edit`. Unknown keys of the existing schedule are kept. */
export function schedulePayload(draft: ScheduleDraft, action: ScheduleActionConfig, existing?: SchedulerItem): Record<string, unknown> {
  const slot = existing?.timeslots[0];
  const previous = slot?.actions[0]?.service === action.script ? slot.actions[0].service_data ?? {} : {};
  const values = Object.fromEntries(Object.entries(draft.values).filter(([, value]) => value !== undefined && value !== ''));
  const slotRest: Record<string, unknown> = { ...(slot ?? {}) };
  delete slotRest.start;
  delete slotRest.actions;
  const payload: Record<string, unknown> = {
    weekdays: draft.days ? weekdayList(draft.days) : existing?.weekdays ?? ['daily'],
    timeslots: [{ ...slotRest, start: `${draft.time}:00`, actions: [{ service: action.script, service_data: { ...previous, ...action.data, ...values } }] }],
    repeat_type: existing?.repeat_type ?? 'repeat',
  };
  if (existing) payload.entity_id = existing.entity_id;
  if (existing?.name) payload.name = existing.name;
  return payload;
}

/** Options of a select selector as `{value, label}`. */
export function selectOptions(field: ScriptField): Array<{ value: string; label: string }> {
  const options = (field.selector?.select?.options ?? []) as Array<string | { value: string; label?: string }>;
  return options.map((option) => (typeof option === 'string' ? { value: option, label: option } : { value: String(option.value), label: option.label ?? String(option.value) }));
}

export function selectorType(field: ScriptField): string {
  return Object.keys(field.selector ?? {})[0] ?? 'text';
}

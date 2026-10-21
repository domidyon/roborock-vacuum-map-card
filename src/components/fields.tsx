import { useEffect, useRef, useState } from 'react';
import type { HomeAssistant } from '../types';

type NativePicker = HTMLElement & Record<string, unknown>;

/** True once Home Assistant has defined the custom element (its pickers load lazily). */
function useNativeElement(tag: string): boolean {
  const [available, setAvailable] = useState(() => Boolean(customElements.get(tag)));
  useEffect(() => {
    if (!available) customElements.whenDefined(tag).then(() => setAvailable(true));
  }, [available, tag]);
  return available;
}

/** Sets properties on a native Home Assistant picker and forwards its `value-changed` event. */
function useNativeBinding(
  available: boolean,
  properties: Record<string, unknown>,
  onChange: (value?: string) => void,
) {
  const ref = useRef<NativePicker>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    Object.assign(element, properties);
    const changed = (event: Event) => onChange((event as CustomEvent<{ value?: string }>).detail.value || undefined);
    element.addEventListener('value-changed', changed);
    return () => element.removeEventListener('value-changed', changed);
  });
  return available ? ref : undefined;
}

function entityOptions(hass: HomeAssistant, domain: string | readonly string[], filter?: (entityId: string) => boolean): string[] {
  const domains = typeof domain === 'string' ? [domain] : domain;
  return Object.keys(hass.states).filter((id) => domains.includes(id.split('.')[0]) && (!filter || filter(id))).sort();
}

/** Plain select fallback; keeps a configured value visible even when it no longer matches. */
export function SelectEntity({
  hass,
  domain,
  value,
  optional,
  emptyLabel,
  filter,
  onChange,
}: {
  hass: HomeAssistant;
  domain: string | readonly string[];
  value?: string;
  optional?: boolean;
  emptyLabel?: string;
  filter?: (entityId: string) => boolean;
  onChange: (value?: string) => void;
}) {
  const options = entityOptions(hass, domain, filter);
  return (
    <select value={value ?? ''} onChange={(event) => onChange(event.target.value || undefined)}>
      <option value="">{emptyLabel ?? (optional ? 'Not configured' : `Select ${typeof domain === 'string' ? domain : domain.join(' / ')}`)}</option>
      {options.map((entityId) => <option key={entityId}>{entityId}</option>)}
      {value && !options.includes(value) && <option value={value}>{value}</option>}
    </select>
  );
}

/**
 * Home Assistant's entity picker (search, friendly names, icons) when it is loaded,
 * otherwise a plain select. `deviceIds` narrows the choice to the vacuum's own devices.
 */
export function EntityPicker({
  hass,
  domains,
  value,
  deviceIds,
  emptyLabel,
  onChange,
}: {
  hass: HomeAssistant;
  domains: readonly string[];
  value?: string;
  deviceIds?: ReadonlySet<string>;
  emptyLabel?: string;
  onChange: (value?: string) => void;
}) {
  const onDevice = deviceIds && deviceIds.size > 0 && hass.entities
    ? (entityId: string) => entityId === value || deviceIds.has(hass.entities?.[entityId]?.device_id ?? '')
    : undefined;
  const available = useNativeElement('ha-entity-picker');
  const ref = useNativeBinding(available, {
    hass,
    value: value ?? '',
    includeDomains: [...domains],
    entityFilter: onDevice ? (state: { entity_id: string }) => onDevice(state.entity_id) : undefined,
  }, onChange);
  if (ref) return <ha-entity-picker ref={ref} />;
  return <SelectEntity hass={hass} domain={domains} value={value} optional emptyLabel={emptyLabel} filter={onDevice} onChange={onChange} />;
}

export function IconPicker({ hass, value, placeholder, onChange }: {
  hass: HomeAssistant;
  value?: string;
  placeholder?: string;
  onChange: (value?: string) => void;
}) {
  const available = useNativeElement('ha-icon-picker');
  const ref = useNativeBinding(available, { hass, value: value ?? '', placeholder }, onChange);
  if (ref) return <ha-icon-picker ref={ref} />;
  return <input value={value ?? ''} placeholder={placeholder ?? 'mdi:floor-plan'} onChange={(event) => onChange(event.target.value || undefined)} />;
}

export function AreaPicker({
  hass,
  areas,
  value,
  emptyLabel = 'Unmapped',
  onChange,
}: {
  hass?: HomeAssistant;
  areas: Array<{ area_id: string; name: string }>;
  value?: string;
  emptyLabel?: string;
  onChange: (value?: string) => void;
}) {
  const available = useNativeElement('ha-area-picker');
  const ref = useNativeBinding(Boolean(hass) && available, { hass, value: value ?? '', noAdd: true }, onChange);
  if (ref) return <ha-area-picker ref={ref} />;
  return (
    <select value={value ?? ''} onChange={(event) => onChange(event.target.value || undefined)}>
      <option value="">{emptyLabel}</option>
      {areas.map((area) => <option key={area.area_id} value={area.area_id}>{area.name} ({area.area_id})</option>)}
      {value && !areas.some((area) => area.area_id === value) && <option value={value}>{value}</option>}
    </select>
  );
}

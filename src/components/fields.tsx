import { useEffect, useRef, useState } from 'react';
import type { HomeAssistant } from '../types';

function entityOptions(hass: HomeAssistant, domain: string | readonly string[]): string[] {
  const domains = typeof domain === 'string' ? [domain] : domain;
  return Object.keys(hass.states).filter((id) => domains.includes(id.split('.')[0])).sort();
}

export function SelectEntity({
  hass,
  domain,
  value,
  optional,
  onChange,
}: {
  hass: HomeAssistant;
  domain: string | readonly string[];
  value?: string;
  optional?: boolean;
  onChange: (value?: string) => void;
}) {
  const options = entityOptions(hass, domain);
  return (
    <select value={value ?? ''} onChange={(event) => onChange(event.target.value || undefined)}>
      <option value="">{optional ? 'Not configured' : `Select ${typeof domain === 'string' ? domain : domain.join(' / ')}`}</option>
      {options.map((entityId) => <option key={entityId}>{entityId}</option>)}
      {/* Keep a configured value visible even when it no longer matches the domain filter. */}
      {value && !options.includes(value) && <option value={value}>{value}</option>}
    </select>
  );
}

export function AreaPicker({
  areas,
  value,
  onChange,
}: {
  areas: Array<{ area_id: string; name: string }>;
  value?: string;
  onChange: (value?: string) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const [nativeAvailable, setNativeAvailable] = useState(() => Boolean(customElements.get('ha-area-picker')));

  useEffect(() => {
    if (!nativeAvailable) customElements.whenDefined('ha-area-picker').then(() => setNativeAvailable(true));
  }, [nativeAvailable]);

  useEffect(() => {
    const element = ref.current as (HTMLElement & { value?: string; noAdd?: boolean }) | null;
    if (!element) return;
    element.value = value;
    element.noAdd = true;
    const changed = (event: Event) => onChange((event as CustomEvent<{ value?: string }>).detail.value || undefined);
    element.addEventListener('value-changed', changed);
    return () => element.removeEventListener('value-changed', changed);
  }, [nativeAvailable, onChange, value]);

  if (nativeAvailable) return <ha-area-picker ref={ref} value={value ?? ''} no-add />;
  return (
    <select value={value ?? ''} onChange={(event) => onChange(event.target.value || undefined)}>
      <option value="">Unmapped</option>
      {areas.map((area) => <option key={area.area_id} value={area.area_id}>{area.name} ({area.area_id})</option>)}
      {value && !areas.some((area) => area.area_id === value) && <option value={value}>{value}</option>}
    </select>
  );
}

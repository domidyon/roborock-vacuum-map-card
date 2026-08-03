import { ArrowDown, ArrowUp, Plus, Trash2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { validateConfig } from '../config';
import { parseRooms } from '../map';
import type {
  FloorConfig,
  HomeAssistant,
  PresetConfig,
  RoborockVacuumMapCardConfig,
  RoomConfig,
} from '../types';

interface CardEditorProps {
  hass: HomeAssistant;
  config: RoborockVacuumMapCardConfig;
  onChange: (config: RoborockVacuumMapCardConfig) => void;
}

function move<T>(items: T[], from: number, to: number): T[] {
  const next = [...items];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

function entityOptions(hass: HomeAssistant, domain: string): string[] {
  return Object.keys(hass.states).filter((id) => id.startsWith(`${domain}.`)).sort();
}

function SelectEntity({
  hass,
  domain,
  value,
  optional,
  onChange,
}: {
  hass: HomeAssistant;
  domain: string;
  value?: string;
  optional?: boolean;
  onChange: (value?: string) => void;
}) {
  return (
    <select value={value ?? ''} onChange={(event) => onChange(event.target.value || undefined)}>
      <option value="">{optional ? 'Not configured' : `Select ${domain}`}</option>
      {entityOptions(hass, domain).map((entityId) => <option key={entityId}>{entityId}</option>)}
    </select>
  );
}

function AreaPicker({
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

export function CardEditor({ hass, config, onChange }: CardEditorProps) {
  const errors = validateConfig(config);
  const updateFloor = (index: number, floor: FloorConfig) => {
    const floors = [...config.floors];
    floors[index] = floor;
    onChange({ ...config, floors });
  };
  const mapOptions = config.entities?.map_select
    ? (hass.states[config.entities.map_select]?.attributes.options as string[] | undefined) ?? []
    : [];
  const areas = Object.values(hass.areas ?? {}).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="editor">
      <h2>Roborock Vacuum Map Card</h2>
      <p>Configure the Roborock entities, calibrated maps, room mappings and job presets.</p>
      {errors.length > 0 && <div className="editor-errors" role="alert">{errors.map((error) => <div key={error}>{error}</div>)}</div>}

      <section>
        <h3>Card</h3>
        <label>Name<input value={config.name ?? ''} placeholder="Use vacuum name" onChange={(event) => onChange({ ...config, name: event.target.value || undefined })} /></label>
        <label>Language<select value={config.language ?? 'en'} onChange={(event) => onChange({ ...config, language: event.target.value as 'en' | 'nl' })}><option value="en">English</option><option value="nl">Nederlands</option></select></label>
        <label>Vacuum<SelectEntity hass={hass} domain="vacuum" value={config.entity} onChange={(entity) => entity && onChange({ ...config, entity })} /></label>
      </section>

      <section>
        <h3>Entities</h3>
        {([
          ['map_select', 'select', 'Floor selector'],
          ['cleaning_mode', 'select', 'Cleaning mode'],
          ['vacuum_then_mop_script', 'script', 'Vac followed by Mop script'],
          ['mop_mode', 'select', 'Mop mode'],
          ['mop_intensity', 'select', 'Mop intensity'],
          ['dock_mop_drying', 'binary_sensor', 'Dock mop drying'],
          ['dock_mop_drying_remaining_time', 'sensor', 'Dock mop drying remaining time'],
          ['dock_child_lock', 'switch', 'Dock child lock'],
          ['dock_mop_wash_frequency', 'input_select', 'Dock mop wash frequency'],
          ['dock_wash_mode', 'input_select', 'Dock washing mode'],
          ['dock_wash_temperature', 'input_select', 'Dock wash temperature'],
          ['dock_auto_empty', 'input_boolean', 'Dock auto-empty'],
          ['dock_empty_mode', 'input_select', 'Dock empty mode'],
          ['dock_auto_dry', 'input_boolean', 'Dock auto-drying'],
          ['dock_dry_duration', 'input_select', 'Dock drying duration'],
          ['battery', 'sensor', 'Battery'],
          ['current_room', 'sensor', 'Current room'],
          ['cleaning_area', 'sensor', 'Cleaning area'],
          ['cleaning_time', 'sensor', 'Cleaning time'],
          ['cleaning_progress', 'sensor', 'Cleaning progress'],
          ['status', 'sensor', 'Status'],
          ['error', 'sensor', 'Error'],
        ] as const).map(([key, domain, label]) => (
          <label key={key}>{label}<SelectEntity hass={hass} domain={domain} optional value={config.entities?.[key]} onChange={(value) => onChange({ ...config, entities: { ...config.entities, [key]: value } })} /></label>
        ))}
        <label className="checkbox"><input type="checkbox" checked={config.vacuum_mode_fallback === 'set_clean_motor_mode'} onChange={(event) => onChange({ ...config, vacuum_mode_fallback: event.target.checked ? 'set_clean_motor_mode' : undefined })} /> Use atomic Vacuum-mode fallback (Home Assistant 2026.7 and older)</label>
      </section>

      <section>
        <div className="editor-heading"><h3>Floors</h3><button type="button" onClick={() => onChange({ ...config, floors: [...config.floors, { id: `floor_${config.floors.length + 1}`, name: `Floor ${config.floors.length + 1}`, map_entity: '', rooms: [] }] })}><Plus /> Add floor</button></div>
        {config.floors.map((floor, floorIndex) => (
          <article className="editor-card" key={`${floor.id}-${floorIndex}`}>
            <div className="editor-heading">
              <strong>{floor.name || `Floor ${floorIndex + 1}`}</strong>
              <div>
                <button type="button" aria-label="Move floor up" disabled={floorIndex === 0} onClick={() => onChange({ ...config, floors: move(config.floors, floorIndex, floorIndex - 1) })}><ArrowUp /></button>
                <button type="button" aria-label="Move floor down" disabled={floorIndex === config.floors.length - 1} onClick={() => onChange({ ...config, floors: move(config.floors, floorIndex, floorIndex + 1) })}><ArrowDown /></button>
                <button type="button" aria-label="Remove floor" disabled={config.floors.length === 1} onClick={() => onChange({ ...config, floors: config.floors.filter((_, index) => index !== floorIndex) })}><Trash2 /></button>
              </div>
            </div>
            <div className="editor-grid">
              <label>ID<input value={floor.id} onChange={(event) => updateFloor(floorIndex, { ...floor, id: event.target.value })} /></label>
              <label>Name<input value={floor.name} onChange={(event) => updateFloor(floorIndex, { ...floor, name: event.target.value })} /></label>
              <label>Custom map<SelectEntity hass={hass} domain="image" value={floor.map_entity} onChange={(map_entity) => {
                if (!map_entity) return;
                const discovered = parseRooms(hass.states[map_entity]);
                const existing = new Map(floor.rooms.map((room) => [room.segment_id, room]));
                const rooms: RoomConfig[] = discovered.map((room) => ({
                  ...existing.get(room.segment_id),
                  segment_id: room.segment_id,
                  name: existing.get(room.segment_id)?.name ?? room.source_name,
                  include_in_floor_clean: existing.get(room.segment_id)?.include_in_floor_clean ?? true,
                }));
                updateFloor(floorIndex, { ...floor, map_entity, rooms });
              }} /></label>
              <label>Selector option<select value={floor.map_select_option ?? ''} onChange={(event) => updateFloor(floorIndex, { ...floor, map_select_option: event.target.value || undefined })}><option value="">Not configured</option>{mapOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
            </div>

            <h4>Discovered rooms</h4>
            {floor.rooms.length === 0 ? <p>Select a calibrated custom-map image to discover rooms.</p> : (
              <div className="room-editor-list">
                {floor.rooms.map((room, roomIndex) => (
                  <div className="room-editor" key={room.segment_id}>
                    <strong>Segment {room.segment_id}</strong>
                    <label>Name<input value={room.name} onChange={(event) => {
                      const rooms = [...floor.rooms]; rooms[roomIndex] = { ...room, name: event.target.value }; updateFloor(floorIndex, { ...floor, rooms });
                    }} /></label>
                    <label>Area<AreaPicker areas={areas} value={room.area_id} onChange={(area_id) => {
                      const rooms = [...floor.rooms]; rooms[roomIndex] = { ...room, area_id }; updateFloor(floorIndex, { ...floor, rooms });
                    }} /></label>
                    <label>Icon<input value={room.icon ?? ''} placeholder="mdi:floor-plan" onChange={(event) => {
                      const rooms = [...floor.rooms]; rooms[roomIndex] = { ...room, icon: event.target.value || undefined }; updateFloor(floorIndex, { ...floor, rooms });
                    }} /></label>
                    <label className="checkbox"><input type="checkbox" checked={room.include_in_floor_clean !== false} onChange={(event) => {
                      const rooms = [...floor.rooms]; rooms[roomIndex] = { ...room, include_in_floor_clean: event.target.checked }; updateFloor(floorIndex, { ...floor, rooms });
                    }} /> Include in Entire floor</label>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </section>

      <section>
        <div className="editor-heading"><h3>Additional presets</h3><button type="button" onClick={() => {
          const next: PresetConfig = { id: `preset_${(config.presets?.length ?? 0) + 1}`, name: 'New preset', icon: 'mdi:tune', strategy: 'custom', cleaning_type: 'vacuum_and_mop', cleaning_count: 1 };
          onChange({ ...config, presets: [...(config.presets ?? []), next] });
        }}><Plus /> Add preset</button></div>
        {(config.presets ?? []).map((preset, presetIndex) => (
          <article className="editor-card" key={`${preset.id}-${presetIndex}`}>
            <div className="editor-heading"><strong>{preset.name}</strong><div>
              <button type="button" aria-label="Move preset up" disabled={presetIndex === 0} onClick={() => onChange({ ...config, presets: move(config.presets ?? [], presetIndex, presetIndex - 1) })}><ArrowUp /></button>
              <button type="button" aria-label="Move preset down" disabled={presetIndex === (config.presets?.length ?? 0) - 1} onClick={() => onChange({ ...config, presets: move(config.presets ?? [], presetIndex, presetIndex + 1) })}><ArrowDown /></button>
              <button type="button" aria-label="Remove preset" onClick={() => onChange({ ...config, presets: (config.presets ?? []).filter((_, index) => index !== presetIndex) })}><Trash2 /></button>
            </div></div>
            <div className="editor-grid">
              {(['id', 'name', 'icon', 'fan_speed', 'mop_mode', 'mop_intensity'] as const).map((key) => <label key={key}>{key.replaceAll('_', ' ')}<input value={preset[key] ?? ''} onChange={(event) => {
                const presets = [...(config.presets ?? [])]; presets[presetIndex] = { ...preset, [key]: event.target.value || undefined }; onChange({ ...config, presets });
              }} /></label>)}
              <label>Strategy<select value={preset.strategy} onChange={(event) => { const presets = [...(config.presets ?? [])]; presets[presetIndex] = { ...preset, strategy: event.target.value as PresetConfig['strategy'] }; onChange({ ...config, presets }); }}><option value="custom">Custom</option><option value="smartplan">SmartPlan</option></select></label>
              <label>Cleaning type<select value={preset.cleaning_type ?? 'vacuum_and_mop'} onChange={(event) => { const presets = [...(config.presets ?? [])]; presets[presetIndex] = { ...preset, cleaning_type: event.target.value as PresetConfig['cleaning_type'] }; onChange({ ...config, presets }); }}><option value="vacuum">Vacuum only</option><option value="vacuum_and_mop">Vacuum and mop</option><option value="vacuum_then_mop">Vacuum followed by mop</option></select></label>
              <label>Cleaning count<select value={preset.cleaning_count ?? 1} onChange={(event) => { const presets = [...(config.presets ?? [])]; presets[presetIndex] = { ...preset, cleaning_count: Number(event.target.value) as 1 | 2 }; onChange({ ...config, presets }); }}><option value="1">1</option><option value="2">2</option></select></label>
            </div>
          </article>
        ))}
        <label>Default preset<select value={config.default_preset ?? 'vacuum_only'} onChange={(event) => onChange({ ...config, default_preset: event.target.value })}><option value="smartplan">SmartPlan</option><option value="vacuum_then_mop">Vacuum followed by mop</option><option value="vacuum_and_mop">Vacuum and mop</option><option value="vacuum_only">Vacuum only</option>{(config.presets ?? []).map((preset) => <option key={preset.id} value={preset.id}>{preset.name}</option>)}</select></label>
      </section>
    </div>
  );
}

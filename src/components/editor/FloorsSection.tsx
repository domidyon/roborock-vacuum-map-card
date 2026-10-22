import { ArrowDown, ArrowUp, Plus, Trash2 } from 'lucide-react';
import { BLUEPRINTS, blueprintImportUrl } from '../../blueprints';
import { parseRooms } from '../../map';
import type { FloorConfig, RoborockEntityConfig, RoomConfig } from '../../types';
import { AreaPicker, EntityPicker, IconPicker } from '../fields';
import { EntityFields } from './EntityFields';
import { fieldsOf, move, type SectionProps } from './shared';

function RoomRow({ hass, t, room, onRoom }: Pick<SectionProps, 'hass' | 't'> & { room: RoomConfig; onRoom: (room: RoomConfig) => void }) {
  const areas = Object.values(hass.areas ?? {}).sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className={`room-editor ${room.area_id ? '' : 'unmapped'}`}>
      <strong>{t('segment', { n: room.segment_id })}</strong>
      <label>{t('name')}<input value={room.name} onChange={(event) => onRoom({ ...room, name: event.target.value })} /></label>
      <label>{t('area')}<AreaPicker hass={hass} areas={areas} value={room.area_id} emptyLabel={t('unmapped')} onChange={(area_id) => onRoom({ ...room, area_id })} /></label>
      <label>{t('icon')}<IconPicker hass={hass} value={room.icon} placeholder={hass.areas?.[room.area_id ?? '']?.icon ?? 'mdi:floor-plan'} onChange={(icon) => onRoom({ ...room, icon })} /></label>
      <label className="checkbox"><input type="checkbox" checked={!room.hidden} onChange={(event) => onRoom({ ...room, hidden: event.target.checked ? undefined : true })} /> {t('showOnCard')}</label>
      <label className="checkbox"><input type="checkbox" checked={room.include_in_floor_clean !== false} onChange={(event) => onRoom({ ...room, include_in_floor_clean: event.target.checked })} /> {t('includeFloor')}</label>
    </div>
  );
}

function FloorCard(props: SectionProps & { floor: FloorConfig; index: number }) {
  const { hass, config, t, onChange, floor, index } = props;
  const update = (next: FloorConfig) => onChange({ ...config, floors: config.floors.map((item, position) => (position === index ? next : item)) });
  const mapOptions = config.entities?.map_select ? (hass.states[config.entities.map_select]?.attributes.options as string[] | undefined) ?? [] : [];
  const selectMap = (map_entity?: string) => {
    if (!map_entity) return;
    // Keep names, areas and icons for segments that still exist on the new image.
    const existing = new Map(floor.rooms.map((room) => [room.segment_id, room]));
    const rooms: RoomConfig[] = parseRooms(hass.states[map_entity]).map((room) => ({
      ...existing.get(room.segment_id),
      segment_id: room.segment_id,
      name: existing.get(room.segment_id)?.name ?? room.source_name,
      include_in_floor_clean: existing.get(room.segment_id)?.include_in_floor_clean ?? true,
    }));
    update({ ...floor, map_entity, rooms });
  };

  return (
    <article className="editor-card">
      <div className="editor-heading">
        <strong>{floor.name || t('floorNumber', { n: index + 1 })}</strong>
        <div>
          <button type="button" aria-label={t('moveUp')} disabled={index === 0} onClick={() => onChange({ ...config, floors: move(config.floors, index, index - 1) })}><ArrowUp /></button>
          <button type="button" aria-label={t('moveDown')} disabled={index === config.floors.length - 1} onClick={() => onChange({ ...config, floors: move(config.floors, index, index + 1) })}><ArrowDown /></button>
          <button type="button" aria-label={t('remove')} disabled={config.floors.length === 1} onClick={() => onChange({ ...config, floors: config.floors.filter((_, position) => position !== index) })}><Trash2 /></button>
        </div>
      </div>
      <div className="editor-grid">
        <label>{t('id')}<input value={floor.id} onChange={(event) => update({ ...floor, id: event.target.value })} /></label>
        <label>{t('name')}<input value={floor.name} onChange={(event) => update({ ...floor, name: event.target.value })} /></label>
        <label>{t('customMap')}<EntityPicker hass={hass} domains={['image']} value={floor.map_entity || undefined} emptyLabel={t('notConfigured')} onChange={selectMap} /></label>
        <label>{t('mapOption')}
          <select value={floor.map_select_option ?? ''} onChange={(event) => update({ ...floor, map_select_option: event.target.value || undefined })}>
            <option value="">{t('notConfigured')}</option>
            {mapOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>{t('routine')}<EntityPicker hass={hass} domains={['button']} value={floor.vacuum_then_mop_routine} emptyLabel={t('noRoutine')} onChange={(vacuum_then_mop_routine) => update({ ...floor, vacuum_then_mop_routine })} /></label>
        <label className="checkbox"><input type="checkbox" checked={floor.assisted_carry === true} onChange={(event) => update({ ...floor, assisted_carry: event.target.checked })} /> {t('assistedCarry')}</label>
      </div>
      <h4>{t('rooms')}</h4>
      {floor.rooms.length === 0 ? <p>{t('noRooms')}</p> : (
        <div className="room-editor-list">
          {floor.rooms.map((room) => (
            <RoomRow key={room.segment_id} hass={hass} t={t} room={room} onRoom={(next) => update({ ...floor, rooms: floor.rooms.map((item) => (item.segment_id === room.segment_id ? next : item)) })} />
          ))}
        </div>
      )}
    </article>
  );
}

export function FloorsSection(props: SectionProps & { detected: Partial<RoborockEntityConfig>; deviceIds: ReadonlySet<string> }) {
  const { config, t, onChange } = props;
  const assisted = config.floors.some((floor) => floor.assisted_carry);
  const addFloor = () => onChange({
    ...config,
    floors: [...config.floors, { id: `floor_${config.floors.length + 1}`, name: t('floorNumber', { n: config.floors.length + 1 }), map_entity: '', rooms: [] }],
  });
  return (
    <>
      {config.floors.map((floor, index) => <FloorCard key={`${floor.id}-${index}`} {...props} floor={floor} index={index} />)}
      <button type="button" onClick={addFloor}><Plus /> {t('addFloor')}</button>
      {assisted && (
        <article className="editor-card">
          <strong>{t('assistedScripts')}</strong>
          <p className="editor-hint">
            {t('assistedScriptsHint')}{' '}
            {(['assisted_carry_prepare', 'assisted_carry_start', 'assisted_carry_finish'] as const).map((key, index) => (
              <span key={key}>{index > 0 && ' · '}<a href={blueprintImportUrl(BLUEPRINTS[key].file)} target="_blank" rel="noreferrer">{BLUEPRINTS[key].label}</a></span>
            ))}
          </p>
          <EntityFields {...props} fields={fieldsOf('assisted')} />
        </article>
      )}
    </>
  );
}

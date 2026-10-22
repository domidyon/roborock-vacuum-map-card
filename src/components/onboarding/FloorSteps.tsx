import type { FloorConfig, RoomConfig } from '../../types';
import { AreaPicker, IconPicker } from '../fields';
import type { WizardStepProps } from './SetupWizard';

function updateFloor(props: WizardStepProps, id: string, patch: Partial<FloorConfig>) {
  props.onDraft({ ...props.draft, floors: props.draft.floors.map((floor) => (floor.id === id ? { ...floor, ...patch } : floor)) });
}

/** Detected maps: which become floors, their names, routines and assisted carry. */
export function FloorsStep(props: WizardStepProps) {
  const { draft, result, t } = props;
  const detected = result.config.floors;
  const toggle = (floor: FloorConfig, include: boolean) => {
    const kept = draft.floors.filter((item) => item.id !== floor.id);
    const floors = include
      ? detected.flatMap((item) => (item.id === floor.id ? [floor] : kept.filter((keptFloor) => keptFloor.id === item.id)))
      : kept;
    props.onDraft({ ...draft, floors });
  };
  const missing = result.report.issues.flatMap((issue) => (issue.code === 'map_without_image' ? [issue.map_name] : []));

  return (
    <div className="wizard-step">
      <p>{props.t('floorsIntro')}</p>
      {detected.map((found) => {
        const floor = draft.floors.find((item) => item.id === found.id);
        const uncalibrated = result.report.issues.some((issue) => issue.code === 'map_not_calibrated' && issue.entity_id === found.map_entity);
        return (
          <article className="editor-card" key={found.id}>
            <label className="checkbox">
              <input type="checkbox" checked={Boolean(floor)} onChange={(event) => toggle(found, event.target.checked)} />
              <strong>{found.map_select_option ?? found.name}</strong> · {t('roomsCount', { n: found.rooms.length })}
              {uncalibrated && <span className="wizard-warning"> · {t('notCalibrated')}</span>}
            </label>
            {floor && (
              <div className="editor-grid">
                <label>{t('name')}<input value={floor.name} onChange={(event) => updateFloor(props, floor.id, { name: event.target.value })} /></label>
                <label>{t('routine')}
                  <select value={floor.vacuum_then_mop_routine ?? ''} onChange={(event) => updateFloor(props, floor.id, { vacuum_then_mop_routine: event.target.value || undefined })}>
                    <option value="">{t('noRoutine')}</option>
                    {result.report.routines.map((routine) => <option key={routine.entity_id} value={routine.entity_id}>{routine.name}</option>)}
                  </select>
                </label>
                <label className="checkbox">
                  <input type="checkbox" checked={floor.assisted_carry === true} onChange={(event) => updateFloor(props, floor.id, { assisted_carry: event.target.checked || undefined })} />
                  {t('assistedCarry')}
                </label>
                {floor.assisted_carry && <p className="editor-hint">{t('assistedHint')}</p>}
              </div>
            )}
          </article>
        );
      })}
      {missing.length > 0 && <p className="wizard-warning">{t('mapsWithoutImage', { maps: missing.join(', ') })}</p>}
    </div>
  );
}

/** Rooms per floor: names, Home Assistant areas, icons and Entire floor membership. */
export function RoomsStep(props: WizardStepProps) {
  const { hass, draft, t } = props;
  const areas = Object.values(hass.areas ?? {}).sort((a, b) => a.name.localeCompare(b.name));
  const updateRoom = (floor: FloorConfig, segment: number, patch: Partial<RoomConfig>) =>
    updateFloor(props, floor.id, { rooms: floor.rooms.map((room) => (room.segment_id === segment ? { ...room, ...patch } : room)) });

  return (
    <div className="wizard-step">
      <p>{t('roomsIntro')}</p>
      {draft.floors.map((floor) => (
        <article className="editor-card" key={floor.id}>
          <strong>{floor.name}</strong>
          <div className="room-editor-list">
            {floor.rooms.map((room) => (
              <div className={`room-editor ${room.area_id ? '' : 'unmapped'}`} key={room.segment_id}>
                <label>{t('name')}<input value={room.name} onChange={(event) => updateRoom(floor, room.segment_id, { name: event.target.value })} /></label>
                <label>{t('area')}<AreaPicker hass={hass} areas={areas} emptyLabel={t('unmapped')} value={room.area_id} onChange={(area_id) => updateRoom(floor, room.segment_id, { area_id, include_in_floor_clean: area_id ? room.include_in_floor_clean ?? true : false, hidden: area_id ? undefined : room.hidden })} /></label>
                <label>{t('icon')}<IconPicker hass={hass} value={room.icon} placeholder={hass.areas?.[room.area_id ?? '']?.icon ?? 'mdi:floor-plan'} onChange={(icon) => updateRoom(floor, room.segment_id, { icon })} /></label>
                <label className="checkbox">
                  <input type="checkbox" checked={!room.hidden} onChange={(event) => updateRoom(floor, room.segment_id, { hidden: event.target.checked ? undefined : true })} />
                  {t('showOnCard')}
                </label>
                <label className="checkbox">
                  <input type="checkbox" disabled={!room.area_id || room.hidden} checked={room.include_in_floor_clean !== false && Boolean(room.area_id) && !room.hidden} onChange={(event) => updateRoom(floor, room.segment_id, { include_in_floor_clean: event.target.checked })} />
                  {t('includeFloor')}
                </label>
                {room.hidden && !room.area_id && <p className="editor-hint">{t('roomHiddenHint')}</p>}
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

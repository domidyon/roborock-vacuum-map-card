import { Home, Pause, Play, SlidersHorizontal, Sparkles, Square } from 'lucide-react';
import { t } from '../../i18n';
import type { FloorConfig, Language, MapZone, RoborockCapabilities, SelectionMode } from '../../types';

/** Floor tabs and the Rooms/Zone selection switch. */
export function SelectionTabs({ language, floors, floor, selectionMode, assistedActive, busy, onFloor, onMode }: {
  language?: Language;
  floors: FloorConfig[];
  floor: FloorConfig;
  selectionMode: SelectionMode;
  assistedActive: boolean;
  busy: boolean;
  onFloor: (id: string) => void;
  onMode: (mode: SelectionMode) => void;
}) {
  return (
    <>
      {floors.length > 1 && (
        <div className="floor-tabs" role="tablist" aria-label={t(language, 'floor')}>
          {floors.map((item) => (
            <button
              type="button"
              role="tab"
              aria-selected={floor.id === item.id}
              className={floor.id === item.id ? 'active' : ''}
              disabled={assistedActive && floor.id !== item.id}
              key={item.id}
              onClick={() => onFloor(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
      {!floor.assisted_carry && (
        <div className="selection-mode-tabs" role="tablist" aria-label={t(language, 'selectionMode')}>
          {(['rooms', 'zone'] as const).map((mode) => (
            <button
              type="button"
              role="tab"
              key={mode}
              aria-selected={selectionMode === mode}
              className={selectionMode === mode ? 'active' : ''}
              disabled={busy}
              onClick={() => onMode(mode)}
            >
              {t(language, mode)}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

/** Current selection, Entire floor / Configure job, and the transport and dock buttons. */
export function ActionBar(props: {
  language?: Language;
  floor: FloorConfig;
  selectionMode: SelectionMode;
  selectedNames: string[];
  selectedCount: number;
  zone?: MapZone;
  assistedActive: boolean;
  busy: boolean;
  vacuumState?: string;
  capabilities: RoborockCapabilities;
  overdue: number;
  onEntireFloor: () => void;
  onConfigure: () => void;
  onTransport: (service: 'pause' | 'start' | 'stop' | 'return_to_base') => void;
  onDock: () => void;
}) {
  const { language, floor, selectionMode, zone, capabilities } = props;
  const zoneMode = selectionMode === 'zone';
  return (
    <>
      <div className="selection-row">
        <div>
          <strong>{zoneMode ? t(language, 'selectedZone') : t(language, 'selectedRooms')}</strong>
          <span>{zoneMode
            ? zone ? t(language, 'zoneReady') : t(language, 'noZoneSelected')
            : props.selectedNames.length ? props.selectedNames.join(' · ') : t(language, 'noRoomsSelected')}</span>
        </div>
        <span className="selection-count">{zoneMode ? Number(Boolean(zone)) : props.selectedCount}</span>
      </div>

      {!props.assistedActive && <div className="primary-actions">
        {!zoneMode && <button type="button" className="secondary" onClick={props.onEntireFloor} disabled={props.busy}>
          <Home /> {t(language, 'entireFloor')}
        </button>}
        <button
          type="button"
          className="primary"
          onClick={props.onConfigure}
          disabled={(zoneMode ? !zone : props.selectedCount === 0) || props.busy}
        >
          {floor.assisted_carry && <Sparkles />}{floor.assisted_carry ? t(language, 'prepareUpstairs') : t(language, 'configureJob')}
        </button>
      </div>}

      <div className="transport" aria-label="Vacuum controls">
        {props.vacuumState === 'paused' && capabilities.canStart && (
          <button type="button" onClick={() => props.onTransport('start')}><Play />{t(language, 'resume')}</button>
        )}
        {props.vacuumState === 'cleaning' && capabilities.canPause && (
          <button type="button" onClick={() => props.onTransport('pause')}><Pause />{t(language, 'pause')}</button>
        )}
        {capabilities.canStop && (
          <button type="button" onClick={() => props.onTransport('stop')}><Square />{t(language, 'stop')}</button>
        )}
        {capabilities.canDock && (
          <button type="button" onClick={() => props.onTransport('return_to_base')}><Home />{t(language, 'dock')}</button>
        )}
        <button type="button" onClick={props.onDock}>
          <SlidersHorizontal />{t(language, 'dockStation')}
          {props.overdue > 0 && <span className="maintenance-badge" title={t(language, 'maintenanceBadge')} aria-label={t(language, 'maintenanceBadge')}>{props.overdue}</span>}
        </button>
      </div>
    </>
  );
}

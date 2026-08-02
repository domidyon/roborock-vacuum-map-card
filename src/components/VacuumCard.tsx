import { useEffect, useMemo, useRef, useState } from 'react';
import { Battery, Clock3, Home, MapPin, Pause, Play, ScanLine, Square, Timer, X } from 'lucide-react';
import { detectCapabilities, isVacuumActive } from '../capabilities';
import { executeJob, JobExecutionError } from '../executor';
import { t } from '../i18n';
import { draftFromPreset, getAvailablePresets } from '../presets';
import type {
  FloorConfig,
  HomeAssistant,
  JobDraft,
  JobExecutionState,
  RoborockVacuumMapCardConfig,
} from '../types';
import { JobSheet } from './JobSheet';
import { MapView } from './MapView';

interface VacuumCardProps {
  hass: HomeAssistant;
  config: RoborockVacuumMapCardConfig;
}

function stateText(hass: HomeAssistant, entityId?: string): string | undefined {
  if (!entityId) return undefined;
  const entity = hass.states[entityId];
  if (!entity || ['unknown', 'unavailable'].includes(entity.state)) return undefined;
  return `${entity.state}${entity.attributes.unit_of_measurement ? ` ${entity.attributes.unit_of_measurement}` : ''}`;
}

function formatRemainingTime(hass: HomeAssistant, entityId: string | undefined, language: 'en' | 'nl' | undefined): string | undefined {
  if (!entityId) return undefined;
  const entity = hass.states[entityId];
  if (!entity || ['unknown', 'unavailable'].includes(entity.state)) return undefined;
  const value = Number(entity.state);
  if (!Number.isFinite(value) || value < 0) return undefined;
  const unit = String(entity.attributes.unit_of_measurement ?? '');
  const minutes = unit === 's'
    ? value / 60
    : unit === 'min'
      ? value
      : unit === 'd'
        ? value * 24 * 60
        : value * 60;
  const roundedMinutes = Math.max(0, Math.round(minutes));
  const hours = Math.floor(roundedMinutes / 60);
  const remainingMinutes = roundedMinutes % 60;
  const parts = [
    hours > 0 ? `${hours} ${language === 'nl' ? 'u' : 'h'}` : undefined,
    remainingMinutes > 0 || hours === 0 ? `${remainingMinutes} min` : undefined,
  ].filter(Boolean);
  return `${parts.join(' ')} ${t(language, 'remaining')}`;
}

function detailedActivity(language: 'en' | 'nl' | undefined, state?: string): string | undefined {
  if (state === 'washing_the_mop') return t(language, 'washingMop');
  return undefined;
}

function initialFloor(config: RoborockVacuumMapCardConfig, hass: HomeAssistant): FloorConfig {
  const current = config.entities?.map_select ? hass.states[config.entities.map_select]?.state : undefined;
  return config.floors.find((floor) => floor.map_select_option === current) ?? config.floors[0];
}

export function VacuumCard({ hass, config }: VacuumCardProps) {
  const hassRef = useRef(hass);
  const submittingRef = useRef(false);
  const language = config.language;
  const [floorId, setFloorId] = useState(() => initialFloor(config, hass).id);
  const floor = config.floors.find((item) => item.id === floorId) ?? config.floors[0];
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [sheetOpen, setSheetOpen] = useState(false);
  const [toast, setToast] = useState<string>();
  const [execution, setExecution] = useState<JobExecutionState>({ phase: 'idle' });
  const capabilities = useMemo(() => detectCapabilities(hass, config), [hass, config]);
  const presets = useMemo(() => getAvailablePresets(config, capabilities), [config, capabilities]);
  const defaultPreset = presets.find(({ preset, available }) => preset.id === config.default_preset && available)?.preset
    ?? presets.find(({ available }) => available)?.preset;
  const [draft, setDraft] = useState<JobDraft>(() =>
    draftFromPreset(defaultPreset ?? { id: 'custom', name: 'Custom', strategy: 'custom', cleaning_type: 'vacuum' }),
  );
  const vacuum = hass.states[config.entity];

  useEffect(() => {
    hassRef.current = hass;
  }, [hass]);

  const detailedStatus = config.entities?.status ? hass.states[config.entities.status]?.state : undefined;
  const jobActive = isVacuumActive(vacuum?.state) || detailedStatus === 'washing_the_mop';

  useEffect(() => {
    if (execution.phase === 'starting' && jobActive) {
      // The vacuum state is an external Home Assistant state machine.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setExecution((current) => ({ ...current, phase: 'active' }));
    } else if (execution.phase === 'active' && !jobActive) {
      setExecution({ phase: 'idle' });
      setSelected(new Set());
    }
  }, [execution.phase, jobActive]);

  const launched = new Set(execution.floor_id === floor.id ? execution.segment_ids ?? [] : []);
  const selectedRooms = floor.rooms.filter((room) => selected.has(room.segment_id));
  const selectedNames = selectedRooms.map((room) => room.name);
  const mopDrying = config.entities?.dock_mop_drying
    ? hass.states[config.entities.dock_mop_drying]?.state === 'on'
    : false;
  const headerDetails = [
    detailedActivity(language, detailedStatus),
    mopDrying ? t(language, 'dryingMop') : undefined,
    mopDrying ? formatRemainingTime(hass, config.entities?.dock_mop_drying_remaining_time, language) : undefined,
  ].filter((value): value is string => Boolean(value));
  const statusItems = [
    { icon: <Battery />, label: t(language, 'battery'), value: stateText(hass, config.entities?.battery) },
    { icon: <MapPin />, label: t(language, 'room'), value: stateText(hass, config.entities?.current_room) },
    { icon: <ScanLine />, label: t(language, 'area'), value: stateText(hass, config.entities?.cleaning_area) },
    { icon: <Clock3 />, label: t(language, 'duration'), value: stateText(hass, config.entities?.cleaning_time) },
    { icon: <Timer />, label: t(language, 'progress'), value: stateText(hass, config.entities?.cleaning_progress) },
  ].filter((item) => item.value);

  const switchFloor = (nextFloorId: string) => {
    setFloorId(nextFloorId);
    setSelected(new Set());
    setSheetOpen(false);
  };

  const selectEntireFloor = () => {
    const included = floor.rooms
      .filter((room) => room.include_in_floor_clean !== false && room.area_id)
      .map((room) => room.segment_id);
    setSelected(new Set(included));
    setSheetOpen(true);
  };

  const submit = async () => {
    if (submittingRef.current) return;
    submittingRef.current = true;
    setExecution({ phase: 'submitting', floor_id: floor.id, segment_ids: [...selected] });
    try {
      await executeJob({ getHass: () => hassRef.current, config, floor, rooms: selectedRooms, draft });
      setExecution({ phase: 'starting', floor_id: floor.id, segment_ids: [...selected] });
      setSheetOpen(false);
      setToast(t(language, 'launched'));
    } catch (error) {
      const message = error instanceof JobExecutionError ? `${error.operation}: ${error.message}` : String(error);
      setExecution({ phase: 'failed', floor_id: floor.id, segment_ids: [...selected], error: message });
      setToast(message);
    } finally {
      submittingRef.current = false;
    }
  };

  const transport = async (service: 'pause' | 'start' | 'stop' | 'return_to_base') => {
    try {
      await hassRef.current.callService('vacuum', service, {}, { entity_id: config.entity });
    } catch (error) {
      setToast(`${service}: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  return (
    <ha-card className="roborock-card">
      <div className="card-header">
        <div>
          <h1>{config.name ?? vacuum?.attributes.friendly_name ?? 'Roborock'}</h1>
          <div className="state-line">
            <span className={`state-dot state-${vacuum?.state ?? 'unavailable'}`} />
            <span>{vacuum?.state?.replaceAll('_', ' ') ?? 'unavailable'}</span>
            {headerDetails.map((detail) => <span className="state-detail" key={detail}>{` · ${detail}`}</span>)}
          </div>
        </div>
        {statusItems.length > 0 && (
          <div className="status-strip">
            {statusItems.map((item) => (
              <div key={item.label} title={item.label}>{item.icon}<strong>{item.value}</strong></div>
            ))}
          </div>
        )}
      </div>

      {config.floors.length > 1 && (
        <div className="floor-tabs" role="tablist" aria-label={t(language, 'floor')}>
          {config.floors.map((item) => (
            <button
              type="button"
              role="tab"
              aria-selected={floor.id === item.id}
              className={floor.id === item.id ? 'active' : ''}
              key={item.id}
              onClick={() => switchFloor(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}

      <MapView
        hass={hass}
        floor={floor}
        language={language}
        selected={selected}
        launched={launched}
        disabled={execution.phase === 'submitting' || execution.phase === 'starting' || execution.phase === 'active'}
        onToggle={(segmentId) =>
          setSelected((current) => {
            const next = new Set(current);
            if (next.has(segmentId)) next.delete(segmentId);
            else next.add(segmentId);
            return next;
          })
        }
      />

      <div className="selection-row">
        <div>
          <strong>{t(language, 'selectedRooms')}</strong>
          <span>{selectedNames.length ? selectedNames.join(' · ') : t(language, 'noRoomsSelected')}</span>
        </div>
        <span className="selection-count">{selected.size}</span>
      </div>

      <div className="primary-actions">
        <button type="button" className="secondary" onClick={selectEntireFloor} disabled={execution.phase === 'submitting'}>
          <Home /> {t(language, 'entireFloor')}
        </button>
        <button type="button" className="primary" onClick={() => setSheetOpen(true)} disabled={selected.size === 0 || execution.phase === 'submitting'}>
          {t(language, 'configureJob')}
        </button>
      </div>

      <div className="transport" aria-label="Vacuum controls">
        {vacuum?.state === 'paused' && capabilities.canStart && (
          <button type="button" onClick={() => transport('start')}><Play />{t(language, 'resume')}</button>
        )}
        {vacuum?.state === 'cleaning' && capabilities.canPause && (
          <button type="button" onClick={() => transport('pause')}><Pause />{t(language, 'pause')}</button>
        )}
        {capabilities.canStop && (
          <button type="button" onClick={() => transport('stop')}><Square />{t(language, 'stop')}</button>
        )}
        {capabilities.canDock && (
          <button type="button" onClick={() => transport('return_to_base')}><Home />{t(language, 'dock')}</button>
        )}
      </div>

      {sheetOpen && (
        <JobSheet
          language={language}
          draft={draft}
          capabilities={capabilities}
          presets={presets}
          selectedRoomNames={selectedNames}
          submitting={execution.phase === 'submitting'}
          onDraftChange={setDraft}
          onClose={() => execution.phase !== 'submitting' && setSheetOpen(false)}
          onStart={submit}
        />
      )}

      {toast && (
        <div className="toast" role="status">
          <span>{toast}</span>
          <button type="button" aria-label={t(language, 'close')} onClick={() => setToast(undefined)}><X /></button>
        </div>
      )}
    </ha-card>
  );
}

import { X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  assistedFloor,
  assistedStage,
  decodeAssistedJob,
  isAssistedCarryActive,
} from '../assisted-carry';
import { detectCapabilities, isVacuumActive } from '../capabilities';
import { executeJob, JobExecutionError, ZONE_CLEANING_TYPES } from '../executor';
import { t } from '../i18n';
import { maintenanceStatus, overdueCount } from '../maintenance';
import { mapZoneToVacuumZone, parseCalibrationPoints } from '../map';
import { preflightChecks } from '../preflight';
import { draftFromPreset, getAvailablePresets } from '../presets';
import type {
  HomeAssistant,
  JobDraft,
  JobExecutionState,
  MapZone,
  RoborockVacuumMapCardConfig,
  SelectionMode,
} from '../types';
import { AssistedCarryPanel } from './AssistedCarryPanel';
import { ActionBar, SelectionTabs } from './card/CardControls';
import { CardHeader } from './card/CardHeader';
import { formatRemainingTime, initialFloor } from './card/format';
import { assistedPreset, entireFloorSegments, runTransport, zonePreset, type TransportService } from './card/jobs';
import { useAssistedCarry } from './card/useAssistedCarry';
import { useDockControls } from './card/useDockControls';
import { DockSheet } from './DockSheet';
import { JobSheet } from './JobSheet';
import { MapView } from './MapView';

interface VacuumCardProps {
  hass: HomeAssistant;
  config: RoborockVacuumMapCardConfig;
}

export function VacuumCard({ hass, config }: VacuumCardProps) {
  const hassRef = useRef(hass);
  const submittingRef = useRef(false);
  const language = config.language;
  const [floorId, setFloorId] = useState(() => initialFloor(config, hass).id);
  const floor = config.floors.find((item) => item.id === floorId) ?? config.floors[0];
  const [selectionMode, setSelectionMode] = useState<SelectionMode>('rooms');
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [zone, setZone] = useState<MapZone>();
  const [sheetOpen, setSheetOpen] = useState(false);
  const [assistedConfiguring, setAssistedConfiguring] = useState(false);
  const [dockOpen, setDockOpen] = useState(false);
  const [toast, setToast] = useState<string>();
  const [execution, setExecution] = useState<JobExecutionState>({ phase: 'idle' });
  const capabilities = useMemo(() => detectCapabilities(hass, config), [hass, config]);
  const maintenance = useMemo(() => maintenanceStatus(hass, config), [hass, config]);
  const overdue = overdueCount(maintenance);
  const presets = useMemo(() => getAvailablePresets(config, capabilities, floor), [config, capabilities, floor]);
  const defaultPreset = presets.find(({ preset, available }) => preset.id === config.default_preset && available)?.preset
    ?? presets.find(({ available }) => available)?.preset;
  const [draft, setDraft] = useState<JobDraft>(() =>
    draftFromPreset(defaultPreset ?? { id: 'custom', name: 'Custom', strategy: 'custom', cleaning_type: 'vacuum' }),
  );
  const vacuum = hass.states[config.entity];
  const carryStage = assistedStage(hass, config);
  const carryJobState = config.entities?.assisted_carry_job
    ? hass.states[config.entities.assisted_carry_job]?.state
    : undefined;
  const carryJob = useMemo(() => decodeAssistedJob(carryJobState), [carryJobState]);
  const carryFloor = assistedFloor(config, carryJob);
  const assistedActive = isAssistedCarryActive(carryStage);
  const selectedMap = config.entities?.map_select
    ? hass.states[config.entities.map_select]?.state
    : undefined;

  useEffect(() => {
    hassRef.current = hass;
  }, [hass]);

  useEffect(() => {
    if (!assistedActive || !carryFloor || !carryJob) return;
    // The helpers are the durable workflow source of truth after a reload.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFloorId(carryFloor.id);
    setSelectionMode('rooms');
    setZone(undefined);
    setSelected(new Set(carryJob.segment_ids));
    setDraft({
      preset_id: 'assisted_carry',
      strategy: carryJob.strategy,
      cleaning_type: carryJob.cleaning_type,
      fan_speed: carryJob.fan_speed,
      mop_mode: carryJob.mop_mode,
      mop_intensity: carryJob.mop_intensity,
      cleaning_count: carryJob.cleaning_count,
    });
  }, [assistedActive, carryFloor, carryJob]);

  useEffect(() => {
    if (assistedActive || !selectedMap) return;
    const selectedFloor = config.floors.find((item) => item.map_select_option === selectedMap);
    if (!selectedFloor) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFloorId(selectedFloor.id);
    setSelected(new Set());
    setZone(undefined);
    if (selectedFloor.assisted_carry) setSelectionMode('rooms');
    setSheetOpen(false);
  }, [assistedActive, config.floors, selectedMap]);

  const detailedStatus = config.entities?.status ? hass.states[config.entities.status]?.state : undefined;
  const washing = ['washing_the_mop', 'washing_the_mop_2'].includes(detailedStatus ?? '');
  const emptying = [vacuum?.state, detailedStatus].includes('emptying_the_bin');
  const jobActive = isVacuumActive(vacuum?.state) || washing;
  const selectionBusy = assistedActive || ['submitting', 'starting', 'active'].includes(execution.phase);

  useEffect(() => {
    if (execution.phase === 'starting' && jobActive) {
      // The vacuum state is an external Home Assistant state machine.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setExecution((current) => ({ ...current, phase: 'active' }));
    } else if (execution.phase === 'active' && !jobActive) {
      setExecution({ phase: 'idle' });
      setSelected(new Set());
      setZone(undefined);
    }
  }, [execution.phase, jobActive]);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(undefined), 5000);
    return () => clearTimeout(id);
  }, [toast]);

  const launched = new Set(execution.floor_id === floor.id ? execution.segment_ids ?? [] : []);
  const selectedRooms = floor.rooms.filter((room) => selected.has(room.segment_id));
  const selectedNames = selectedRooms.map((room) => room.name);
  const mopDrying = config.entities?.dock_mop_drying
    ? hass.states[config.entities.dock_mop_drying]?.state === 'on'
    : false;
  const dryingRemaining = mopDrying
    ? formatRemainingTime(hass, config.entities?.dock_mop_drying_remaining_time, language)
    : undefined;
  const switchFloor = (nextFloorId: string) => {
    if (assistedActive) return;
    const nextFloor = config.floors.find((item) => item.id === nextFloorId);
    setFloorId(nextFloorId);
    setSelected(new Set());
    setZone(undefined);
    if (nextFloor?.assisted_carry) setSelectionMode('rooms');
    setSheetOpen(false);
  };

  const switchSelectionMode = (nextMode: SelectionMode) => {
    if (nextMode === 'zone' && floor.assisted_carry) return;
    setSelectionMode(nextMode);
    setSelected(new Set());
    setZone(undefined);
    setSheetOpen(false);
  };

  const openJobSheet = (assisted: boolean) => {
    if (assisted) {
      const preset = assistedPreset(presets, config.default_preset);
      if (!preset) {
        setToast(t(language, 'unsupported'));
        return;
      }
      setDraft(draftFromPreset(preset));
    }
    if (selectionMode === 'zone' && (draft.strategy !== 'custom' || !ZONE_CLEANING_TYPES.has(draft.cleaning_type))) {
      const preset = zonePreset(presets);
      if (!preset) {
        setToast(t(language, 'unsupported'));
        return;
      }
      setDraft(draftFromPreset(preset));
    }
    if (!assisted && draft.cleaning_type === 'vacuum_then_mop' && floor.vacuum_then_mop_routine) {
      const included = entireFloorSegments(hass, floor);
      setSelected(new Set(included));
    }
    setAssistedConfiguring(assisted);
    setSheetOpen(true);
  };

  const selectEntireFloor = () => {
    const included = entireFloorSegments(hass, floor);
    setSelected(new Set(included));
    openJobSheet(Boolean(floor.assisted_carry));
  };

  const changeDraft = (nextDraft: JobDraft) => {
    if (nextDraft.cleaning_type === 'vacuum_then_mop' && floor.vacuum_then_mop_routine) {
      const included = entireFloorSegments(hass, floor);
      setSelected(new Set(included));
    }
    setDraft(nextDraft);
  };

  const assisted = useAssistedCarry({
    hassRef,
    submittingRef,
    config,
    language,
    floor,
    selected,
    carryStage,
    carryFloor,
    carryJob,
    washing,
    emptying,
    setToast,
    clearSelection: () => setSelected(new Set()),
    closeSheet: () => setSheetOpen(false),
  });
  const dock = useDockControls(hassRef, config, language, setToast);

  const submit = async (submittedDraft: JobDraft = draft) => {
    if (assistedConfiguring) {
      await assisted.prepareUpstairs(submittedDraft);
      return;
    }
    if (submittingRef.current) return;
    submittingRef.current = true;
    const executionSelection = {
      floor_id: floor.id,
      segment_ids: selectionMode === 'rooms' ? [...selected] : undefined,
      selection_mode: selectionMode,
      zone: selectionMode === 'zone' ? zone : undefined,
    };
    setExecution({ phase: 'submitting', ...executionSelection });
    try {
      const vacuumZone = selectionMode === 'zone' && zone
        ? mapZoneToVacuumZone(zone, parseCalibrationPoints(hassRef.current.states[floor.map_entity]))
        : undefined;
      await executeJob({
        getHass: () => hassRef.current,
        config,
        floor,
        rooms: selectionMode === 'rooms' ? selectedRooms : [],
        draft: submittedDraft,
        zone: vacuumZone,
      });
      setExecution({ phase: 'starting', ...executionSelection });
      setSheetOpen(false);
      setToast(t(language, 'launched'));
    } catch (error) {
      const message = error instanceof JobExecutionError ? `${error.operation}: ${error.message}` : String(error);
      setExecution({ phase: 'failed', ...executionSelection, error: message });
      setToast(message);
    } finally {
      submittingRef.current = false;
    }
  };

  const transport = async (service: TransportService) => {
    try {
      await runTransport(hassRef.current, config, service, { active: assistedActive, stage: carryStage });
    } catch (error) {
      setToast(`${service}: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  return (
    <ha-card className="roborock-card">
      <CardHeader
        hass={hass}
        config={config}
        language={language}
        jobActive={jobActive}
        detailedStatus={detailedStatus}
        mopDrying={mopDrying}
        dryingRemaining={dryingRemaining}
      />
      <SelectionTabs
        language={language}
        floors={config.floors}
        floor={floor}
        selectionMode={selectionMode}
        assistedActive={assistedActive}
        busy={selectionBusy}
        onFloor={switchFloor}
        onMode={switchSelectionMode}
      />

      <MapView
        hass={hass}
        floor={floor}
        language={language}
        selected={selected}
        launched={launched}
        active={jobActive}
        disabled={selectionBusy}
        selectionMode={selectionMode}
        zone={zone}
        zoneLaunched={execution.floor_id === floor.id && execution.selection_mode === 'zone' && ['starting', 'active'].includes(execution.phase)}
        onToggle={(segmentId) =>
          setSelected((current) => {
            const next = new Set(current);
            if (next.has(segmentId)) next.delete(segmentId);
            else next.add(segmentId);
            return next;
          })
        }
        onZoneChange={setZone}
      />

      {floor.assisted_carry && (
        <AssistedCarryPanel
          language={language}
          stage={carryStage}
          roomNames={selectedNames}
          pending={assisted.assistedPending}
          onStart={assisted.startUpstairs}
          onFinish={assisted.finishUpstairs}
          onReset={assisted.resetUpstairs}
          onCancel={assisted.cancelUpstairs}
        />
      )}

      <ActionBar
        language={language}
        floor={floor}
        selectionMode={selectionMode}
        selectedNames={selectedNames}
        selectedCount={selected.size}
        zone={zone}
        assistedActive={assistedActive}
        busy={selectionBusy}
        vacuumState={vacuum?.state}
        capabilities={capabilities}
        overdue={overdue}
        onEntireFloor={selectEntireFloor}
        onConfigure={() => openJobSheet(Boolean(floor.assisted_carry))}
        onTransport={transport}
        onDock={() => setDockOpen(true)}
      />

      {sheetOpen && (
        <JobSheet
          language={language}
          draft={draft}
          capabilities={capabilities}
          presets={presets}
          selectedRoomNames={selectionMode === 'zone' ? [t(language, 'customZone')] : selectedNames}
          submitting={execution.phase === 'submitting' || assisted.assistedPending}
          assistedCarry={assistedConfiguring}
          zoneCleaning={selectionMode === 'zone'}
          mopRoutes={capabilities.mopRoutes}
          checks={assistedConfiguring ? undefined : preflightChecks(hass, config, draft)}
          onDraftChange={changeDraft}
          onClose={() => execution.phase !== 'submitting' && !assisted.assistedPending && setSheetOpen(false)}
          onStart={submit}
        />
      )}

      {dockOpen && (
        <DockSheet
          hass={hass}
          config={config}
          language={language}
          washing={washing}
          emptying={emptying}
          drying={mopDrying}
          dryingRemaining={dryingRemaining}
          pending={dock.dockPending}
          onClose={() => !dock.dockPending && setDockOpen(false)}
          onAction={dock.runDockAction}
          onSetting={dock.changeDockSetting}
          onChildLock={dock.changeChildLock}
          maintenance={maintenance}
          onResetConsumable={dock.resetConsumable}
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

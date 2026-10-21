import { useState, type RefObject } from 'react';
import {
  AssistedCarryError,
  createAssistedJob,
  finishAssistedCarry,
  prepareAssistedCarry,
  resetAssistedCarry,
  setAssistedStage,
  startAssistedCarry,
} from '../../assisted-carry';
import { executeDockAction } from '../../dock-executor';
import { t } from '../../i18n';
import type { AssistedCarryJob, AssistedCarryStage, FloorConfig, HomeAssistant, JobDraft, Language, RoborockVacuumMapCardConfig } from '../../types';

interface AssistedCarryOptions {
  hassRef: RefObject<HomeAssistant>;
  /** Shared with job submission so only one start runs at a time. */
  submittingRef: RefObject<boolean>;
  config: RoborockVacuumMapCardConfig;
  language: Language | undefined;
  floor: FloorConfig;
  selected: Set<number>;
  carryStage?: AssistedCarryStage;
  carryFloor?: FloorConfig;
  carryJob?: AssistedCarryJob;
  washing: boolean;
  emptying: boolean;
  setToast: (message: string) => void;
  clearSelection: () => void;
  closeSheet: () => void;
}

function assistantMessage(error: unknown): string {
  if (error instanceof AssistedCarryError) return `${error.operation}: ${error.message}`;
  return error instanceof Error ? error.message : String(error);
}

/** The assisted-carry workflow handlers; the HA helpers stay the source of truth. */
export function useAssistedCarry(options: AssistedCarryOptions) {
  const { hassRef, submittingRef, config, language, setToast } = options;
  const [assistedPending, setAssistedPending] = useState(false);

  // Runs one exclusive step; on failure the workflow is marked as errored.
  const step = async (action: () => Promise<void>) => {
    if (submittingRef.current) return;
    submittingRef.current = true;
    setAssistedPending(true);
    try {
      await action();
    } catch (error) {
      setToast(assistantMessage(error));
      try { await setAssistedStage(hassRef.current, config, 'error'); } catch { /* retain the original error */ }
    } finally {
      submittingRef.current = false;
      setAssistedPending(false);
    }
  };

  // Recovery actions; failures are reported without changing the stage.
  const recover = async (action: () => Promise<void>) => {
    if (assistedPending) return;
    setAssistedPending(true);
    try {
      await action();
      options.clearSelection();
    } catch (error) {
      setToast(assistantMessage(error));
    } finally {
      setAssistedPending(false);
    }
  };

  const prepareUpstairs = (draft: JobDraft) => step(async () => {
    const job = createAssistedJob(options.floor, [...options.selected], draft);
    await prepareAssistedCarry(hassRef.current, config, job);
    options.closeSheet();
    setToast(t(language, 'preparingUpstairs'));
  });

  const startUpstairs = async () => {
    const { carryFloor, carryJob } = options;
    if (!carryFloor || !carryJob) return;
    await step(() => startAssistedCarry(hassRef.current, config, carryFloor, carryJob));
  };

  const finishUpstairs = () => step(() => finishAssistedCarry(hassRef.current, config));

  const resetUpstairs = () => recover(() => resetAssistedCarry(hassRef.current, config));

  const cancelUpstairs = () => recover(async () => {
    const hass = hassRef.current;
    const scripts = [
      config.entities?.assisted_carry_prepare_script,
      config.entities?.assisted_carry_start_script,
      config.entities?.assisted_carry_finish_script,
    ].filter((entityId): entityId is string => Boolean(entityId && hass.states[entityId]));
    if (scripts.length > 0) await hass.callService('script', 'turn_off', {}, { entity_id: scripts });
    if (options.carryStage === 'cleaning_upstairs') await hass.callService('vacuum', 'stop', {}, { entity_id: config.entity });
    if (options.washing) await executeDockAction(hass, config, 'wash', true);
    if (options.emptying) await executeDockAction(hass, config, 'empty', true);
    await resetAssistedCarry(hass, config);
  });

  return { assistedPending, prepareUpstairs, startUpstairs, finishUpstairs, resetUpstairs, cancelUpstairs };
}

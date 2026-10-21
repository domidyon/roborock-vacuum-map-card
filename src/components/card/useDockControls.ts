import { useState, type RefObject } from 'react';
import { DockExecutionError, executeDockAction, executeDockSetting } from '../../dock-executor';
import { t } from '../../i18n';
import type { ConsumableStatus } from '../../maintenance';
import type { DockAction, DockSettingKey, HomeAssistant, Language, RoborockVacuumMapCardConfig } from '../../types';

/** Dock settings, actions, child lock and consumable resets, one at a time. */
export function useDockControls(
  hassRef: RefObject<HomeAssistant>,
  config: RoborockVacuumMapCardConfig,
  language: Language | undefined,
  setToast: (message: string) => void,
) {
  const [dockPending, setDockPending] = useState<string>();

  const changeDockSetting = async (setting: DockSettingKey, value: string | boolean) => {
    if (dockPending) return;
    setDockPending(t(language, 'settingSaved'));
    try {
      await executeDockSetting(hassRef.current, config, setting, value);
      setToast(t(language, 'settingSaved'));
    } catch (error) {
      const message = error instanceof DockExecutionError ? `${error.operation}: ${error.message}` : String(error);
      setToast(message);
    } finally {
      setDockPending(undefined);
    }
  };

  const resetConsumable = async (consumable: ConsumableStatus) => {
    if (dockPending || !consumable.reset_button) return;
    if (!window.confirm(t(language, 'confirmResetConsumable'))) return;
    setDockPending(t(language, 'dockActionSent'));
    try {
      await hassRef.current.callService('button', 'press', {}, { entity_id: consumable.reset_button });
      setToast(t(language, 'dockActionSent'));
    } catch (error) {
      setToast(`reset_${consumable.kind}: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setDockPending(undefined);
    }
  };

  const runDockAction = async (action: DockAction, active: boolean) => {
    if (dockPending) return;
    if (!active) {
      const prompt = action === 'empty'
        ? t(language, 'confirmEmpty')
        : action === 'wash'
          ? t(language, 'confirmWash')
          : action === 'dry'
            ? t(language, 'confirmDry')
            : t(language, 'confirmDrain');
      if (!window.confirm(prompt)) return;
    }
    setDockPending(t(language, 'dockActionSent'));
    try {
      await executeDockAction(hassRef.current, config, action, active);
      setToast(t(language, 'dockActionSent'));
    } catch (error) {
      const message = action === 'drain'
        ? t(language, 'drainRejected')
        : error instanceof DockExecutionError
          ? `${error.operation}: ${error.message}`
          : String(error);
      setToast(message);
    } finally {
      setDockPending(undefined);
    }
  };

  const changeChildLock = async (enabled: boolean) => {
    const entityId = config.entities?.dock_child_lock;
    if (!entityId || dockPending) return;
    setDockPending(t(language, 'settingSaved'));
    try {
      await hassRef.current.callService('switch', enabled ? 'turn_on' : 'turn_off', {}, { entity_id: entityId });
      setToast(t(language, 'settingSaved'));
    } catch (error) {
      setToast(`child_lock: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setDockPending(undefined);
    }
  };

  return { dockPending, changeDockSetting, resetConsumable, runDockAction, changeChildLock };
}

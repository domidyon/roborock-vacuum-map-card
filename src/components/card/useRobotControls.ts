import { useRef, useState, type RefObject } from 'react';
import { t } from '../../i18n';
import type { RobotSwitchKey, RobotTimeKey } from '../../robot-settings';
import type { HomeAssistant, Language, RoborockVacuumMapCardConfig } from '../../types';

/** Robot volume, do not disturb and off-peak charging, one change at a time. */
export function useRobotControls(
  hassRef: RefObject<HomeAssistant>,
  config: RoborockVacuumMapCardConfig,
  language: Language | undefined,
  setToast: (message: string) => void,
) {
  const [robotPending, setRobotPending] = useState<string>();
  // A ref, so a handler captured before the last change finished is not blocked by stale state.
  const busy = useRef(false);

  const run = async (operation: string, call: () => Promise<unknown>) => {
    if (busy.current) return;
    busy.current = true;
    setRobotPending(t(language, 'settingSaved'));
    try {
      await call();
      setToast(t(language, 'settingSaved'));
    } catch (error) {
      setToast(`${operation}: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      busy.current = false;
      setRobotPending(undefined);
    }
  };

  const changeRobotSwitch = (key: RobotSwitchKey, enabled: boolean) => {
    const entityId = config.entities?.[key];
    if (!entityId) return;
    return run(key, () => hassRef.current.callService('switch', enabled ? 'turn_on' : 'turn_off', {}, { entity_id: entityId }));
  };

  const changeRobotTime = (key: RobotTimeKey, value: string) => {
    const entityId = config.entities?.[key];
    if (!entityId || !/^\d{2}:\d{2}$/.test(value)) return;
    return run(key, () => hassRef.current.callService('time', 'set_value', { time: `${value}:00` }, { entity_id: entityId }));
  };

  const changeRobotVolume = (value: number) => {
    const entityId = config.entities?.robot_volume;
    if (!entityId || !Number.isFinite(value)) return;
    return run('robot_volume', () => hassRef.current.callService('number', 'set_value', { value }, { entity_id: entityId }));
  };

  return { robotPending, changeRobotSwitch, changeRobotTime, changeRobotVolume };
}

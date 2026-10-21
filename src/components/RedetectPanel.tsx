import { useState } from 'react';
import { loadDeviceFlags } from '../catalog/device-flags';
import { buildConfig, loadVacuumSegmentOptions } from '../discovery';
import { applyChanges, describeChange, diffConfig, type ConfigChange } from '../discovery/redetect';
import type { HomeAssistant, RoborockVacuumMapCardConfig } from '../types';
import type { Translate } from './editor/shared';

/** Runs discovery again and offers each fix or addition separately. */
export function RedetectPanel({ hass, config, t, onApply, onClose }: {
  hass: HomeAssistant;
  config: RoborockVacuumMapCardConfig;
  t: Translate;
  onApply: (config: RoborockVacuumMapCardConfig) => void;
  onClose: () => void;
}) {
  const [changes, setChanges] = useState<ConfigChange[]>();
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [running, setRunning] = useState(false);

  const run = async () => {
    setRunning(true);
    const [segmentOptions, flags] = await Promise.all([loadVacuumSegmentOptions(hass, config.entity), loadDeviceFlags(hass, config.entity)]);
    const found = diffConfig(hass, config, buildConfig(hass, config.entity, segmentOptions, flags));
    setChanges(found);
    setSelected(new Set(found.map((change) => change.id)));
    setRunning(false);
  };

  return (
    <section className="editor-card redetect-panel">
      <div className="editor-heading">
        <strong>{t('redetect')}</strong>
        <button type="button" className="secondary" onClick={onClose}>{t('close')}</button>
      </div>
      {!changes && (
        <>
          <p>{t('redetectIntro')}</p>
          <button type="button" className="primary" disabled={running} onClick={run}>{running ? t('checking') : t('checkNow')}</button>
        </>
      )}
      {changes?.length === 0 && <p role="status">{t('upToDate')}</p>}
      {changes && changes.length > 0 && (
        <>
          <ul className="redetect-changes">
            {changes.map((change) => (
              <li key={change.id}>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={selected.has(change.id)}
                    onChange={(event) => {
                      const next = new Set(selected);
                      if (event.target.checked) next.add(change.id); else next.delete(change.id);
                      setSelected(next);
                    }}
                  />
                  {describeChange(change, t)}
                </label>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="primary"
            disabled={selected.size === 0}
            onClick={() => onApply(applyChanges(config, changes.filter((change) => selected.has(change.id))))}
          >
            {t('applyChanges', { n: selected.size })}
          </button>
        </>
      )}
    </section>
  );
}

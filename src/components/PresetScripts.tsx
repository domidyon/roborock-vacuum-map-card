import { useState } from 'react';
import { detectCapabilities } from '../capabilities';
import { getAvailablePresets } from '../presets';
import { presetScript, saveScript } from '../presets-export';
import type { HomeAssistant, PresetConfig, RoborockVacuumMapCardConfig } from '../types';
import { toYaml } from '../yaml';
import type { Translate } from './editor/shared';

/** Turns presets into Home Assistant scripts for automations, schedules and voice assistants. */
export function PresetScripts({ hass, config, t }: { hass: HomeAssistant; config: RoborockVacuumMapCardConfig; t: Translate }) {
  const [status, setStatus] = useState<Record<string, string>>({});
  const [yaml, setYaml] = useState<{ id: string; text: string }>();
  const admin = hass.user?.is_admin !== false && Boolean(hass.callApi);
  const presets = getAvailablePresets(config, detectCapabilities(hass, config)).filter((item) => item.available);

  const create = async (preset: PresetConfig) => {
    try {
      const script = presetScript(hass, config, preset);
      if (hass.states[`script.${script.id}`] && !window.confirm(t('scriptExists', { entity: `script.${script.id}` }))) return;
      if (admin) {
        const entityId = await saveScript(hass, script);
        setStatus({ ...status, [preset.id]: t('scriptCreated', { entity: entityId }) });
      } else {
        setYaml({ id: preset.id, text: toYaml({ [script.id]: script.config }) });
      }
    } catch (error) {
      setStatus({ ...status, [preset.id]: error instanceof Error ? error.message : String(error) });
    }
  };

  return (
    <div className="preset-scripts">
      <h4>{t('scriptsTitle')}</h4>
      <p className="editor-hint">{t('scriptsHint')}</p>
      {presets.map(({ preset }) => (
        <div className="preset-script-row" key={preset.id}>
          <span>{preset.name}</span>
          <button type="button" className="secondary" onClick={() => create(preset)}>{admin ? t('createScript') : t('showYaml')}</button>
          {status[preset.id] && <small role="status">{status[preset.id]}</small>}
          {yaml?.id === preset.id && <pre className="yaml-preview">{yaml.text}</pre>}
        </div>
      ))}
    </div>
  );
}

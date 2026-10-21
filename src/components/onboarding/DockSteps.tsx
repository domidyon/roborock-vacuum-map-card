import { useMemo } from 'react';
import { BLUEPRINTS, blueprintImportUrl } from '../../blueprints';
import { dockAbilities } from '../../catalog';
import { detectCapabilities } from '../../capabilities';
import { editorLanguage } from '../../i18n/editor';
import { getAvailablePresets } from '../../presets';
import { helperSpecs } from '../../provisioning/helpers';
import type { PresetConfig } from '../../types';
import { HelperProvisioner } from '../editor/HelperProvisioner';
import type { WizardStepProps } from './SetupWizard';

/** Native dock controls, plus the helpers that remember dock settings, created on request. */
export function DockStep({ hass, draft, result, deviceFlags, t, onDraft }: WizardStepProps) {
  const vacuumName = String(hass.states[draft.entity]?.attributes.friendly_name ?? draft.name ?? 'Roborock');
  const assisted = draft.floors.some((floor) => floor.assisted_carry);
  const specs = useMemo(
    () => helperSpecs(draft.entity, vacuumName, { dock: dockAbilities(result.report.model, deviceFlags?.flags), assistedCarry: assisted }),
    [draft.entity, vacuumName, result.report.model, deviceFlags, assisted],
  );

  return (
    <div className="wizard-step">
      <p>{t('dockHelpersHint')}</p>
      <HelperProvisioner hass={hass} config={draft} language={editorLanguage(hass, draft.language)} t={t} onChange={onDraft} specs={specs} />
      {Object.keys(result.report.native_dock).length > 0 && <p className="editor-hint">{t('nativeDockFound')}</p>}
      {assisted && (
        <p className="editor-hint">
          {t('assistedScriptsHint')}{' '}
          {(['assisted_carry_prepare', 'assisted_carry_start', 'assisted_carry_finish'] as const).map((key, index) => (
            <span key={key}>{index > 0 && ' · '}<a href={blueprintImportUrl(BLUEPRINTS[key].file)} target="_blank" rel="noreferrer">{BLUEPRINTS[key].label}</a></span>
          ))}
        </p>
      )}
    </div>
  );
}

/** Default mode and an optional starter preset. */
export function PresetsStep({ hass, draft, t, onDraft }: WizardStepProps) {
  const capabilities = detectCapabilities(hass, draft);
  const available = getAvailablePresets(draft, capabilities).filter((item) => item.available);
  const evening: PresetConfig = { id: 'evening', name: t('eveningName'), icon: 'mdi:weather-night', strategy: 'custom', cleaning_type: 'vacuum', fan_speed: 'quiet', cleaning_count: 1 };
  const hasEvening = draft.presets?.some((preset) => preset.id === evening.id) ?? false;

  return (
    <div className="wizard-step">
      <label>{t('defaultPreset')}
        <select value={draft.default_preset ?? 'vacuum_only'} onChange={(event) => onDraft({ ...draft, default_preset: event.target.value })}>
          {available.map(({ preset }) => <option key={preset.id} value={preset.id}>{preset.name}</option>)}
        </select>
      </label>
      {capabilities.fanSpeeds.includes('quiet') && (
        <label className="checkbox">
          <input
            type="checkbox"
            checked={hasEvening}
            onChange={(event) => onDraft({
              ...draft,
              presets: event.target.checked ? [...(draft.presets ?? []), evening] : (draft.presets ?? []).filter((preset) => preset.id !== evening.id),
            })}
          />
          {t('eveningPreset')}
        </label>
      )}
      <p className="editor-hint">{t('presetsScriptsHint')}</p>
    </div>
  );
}

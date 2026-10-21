import { useEffect, useMemo, useState } from 'react';
import { BLUEPRINTS, blueprintImportUrl } from '../../blueprints';
import { dockAbilities } from '../../catalog';
import { detectCapabilities } from '../../capabilities';
import { getAvailablePresets } from '../../presets';
import { createHelpers, helperSpecs, helpersYaml, planHelpers } from '../../provisioning/helpers';
import type { PresetConfig } from '../../types';
import type { WizardStepProps } from './SetupWizard';

const EVENING_PRESET: PresetConfig = { id: 'evening', name: 'Evening', icon: 'mdi:weather-night', strategy: 'custom', cleaning_type: 'vacuum', fan_speed: 'quiet', cleaning_count: 1 };

/** Native dock controls, plus the helpers that remember dock settings, created on request. */
export function DockStep({ hass, draft, result, deviceFlags, onDraft }: WizardStepProps) {
  const vacuumName = String(hass.states[draft.entity]?.attributes.friendly_name ?? draft.name ?? 'Roborock');
  const assisted = draft.floors.some((floor) => floor.assisted_carry);
  const specs = useMemo(
    () => helperSpecs(draft.entity, vacuumName, { dock: dockAbilities(result.report.model, deviceFlags?.flags), assistedCarry: assisted }),
    [draft.entity, vacuumName, result.report.model, deviceFlags, assisted],
  );
  const plan = planHelpers(hass, draft, specs);
  const [status, setStatus] = useState<string>();
  const [busy, setBusy] = useState(false);
  const admin = hass.user?.is_admin !== false && Boolean(hass.callWS);
  const existingKey = JSON.stringify(plan.existing);

  // Wire helpers that already exist without asking.
  useEffect(() => {
    const missing = Object.entries(plan.existing).filter(([key]) => !draft.entities?.[key as keyof typeof plan.existing]);
    if (missing.length > 0) onDraft({ ...draft, entities: { ...draft.entities, ...Object.fromEntries(missing) } });
    // Runs when the set of existing helpers changes, not on every draft edit.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [existingKey]);

  const create = async () => {
    setBusy(true);
    try {
      const entities = await createHelpers(hass, plan);
      onDraft({ ...draft, entities: { ...draft.entities, ...entities } });
      setStatus(`Created ${plan.create.length} helpers.`);
    } catch (error) {
      setStatus(`Could not create helpers: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="wizard-step">
      <p>
        Home Assistant can't read most dock settings back from the robot, so the card remembers the last accepted
        setting in helpers. They are optional: without them, the dock panel starts from Roborock's defaults.
      </p>
      {plan.create.length === 0
        ? <p>All {specs.length} helpers are in place.</p>
        : (
          <>
            <p>{plan.create.length} helpers are missing: {plan.create.map((spec) => spec.name).join(', ')}.</p>
            {admin
              ? <button type="button" className="primary" disabled={busy} onClick={create}>Create {plan.create.length} helpers</button>
              : <><p>Ask an administrator to create them, or add this to <code>configuration.yaml</code>:</p><pre className="yaml-preview">{helpersYaml(plan.create)}</pre></>}
          </>
        )}
      {plan.mismatched.map((item) => <p key={item.key} className="wizard-warning">{item.entity_id} is missing the options {item.missing.join(', ')}.</p>)}
      {status && <p role="status">{status}</p>}
      {Object.keys(result.report.native_dock).length > 0 && (
        <p className="editor-hint">The dock's own Empty, Wash and Dry controls were found; the card's dock panel uses the same actions.</p>
      )}
      {assisted && (
        <p className="editor-hint">
          Assisted carry also needs three scripts. Create them from the blueprints:{' '}
          {(['assisted_carry_prepare', 'assisted_carry_start', 'assisted_carry_finish'] as const).map((key, index) => (
            <span key={key}>{index > 0 && ' · '}<a href={blueprintImportUrl(BLUEPRINTS[key].file)} target="_blank" rel="noreferrer">{BLUEPRINTS[key].label}</a></span>
          ))}
        </p>
      )}
    </div>
  );
}

/** Default mode and an optional starter preset. */
export function PresetsStep({ hass, draft, onDraft }: WizardStepProps) {
  const capabilities = detectCapabilities(hass, draft);
  const available = getAvailablePresets(draft, capabilities).filter((item) => item.available);
  const hasEvening = draft.presets?.some((preset) => preset.id === EVENING_PRESET.id) ?? false;
  const canEvening = capabilities.fanSpeeds.includes('quiet');

  return (
    <div className="wizard-step">
      <label>Mode selected when the job sheet opens
        <select value={draft.default_preset ?? 'vacuum_only'} onChange={(event) => onDraft({ ...draft, default_preset: event.target.value })}>
          {available.map(({ preset }) => <option key={preset.id} value={preset.id}>{preset.name}</option>)}
        </select>
      </label>
      {canEvening && (
        <label className="checkbox">
          <input
            type="checkbox"
            checked={hasEvening}
            onChange={(event) => onDraft({
              ...draft,
              presets: event.target.checked ? [...(draft.presets ?? []), EVENING_PRESET] : (draft.presets ?? []).filter((preset) => preset.id !== EVENING_PRESET.id),
            })}
          />
          Add an Evening preset (quiet vacuum)
        </label>
      )}
      <p className="editor-hint">Presets can be turned into Home Assistant scripts from the editor, for automations and voice assistants.</p>
    </div>
  );
}

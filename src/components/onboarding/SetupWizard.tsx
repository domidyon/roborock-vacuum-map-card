import { CircleCheck, CircleX } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { loadDeviceFlags, type DeviceFlags } from '../../catalog/device-flags';
import { validateConfig } from '../../config';
import { buildConfig, listRoborockVacuums, loadVacuumSegmentOptions, type DiscoveryResult } from '../../discovery';
import { canSetUp, prerequisites, type PrerequisiteId } from '../../onboarding/prerequisites';
import type { HomeAssistant, RoborockVacuumMapCardConfig } from '../../types';
import { toYaml } from '../../yaml';
import { DockStep, PresetsStep } from './DockSteps';
import { FloorsStep, RoomsStep } from './FloorSteps';
import { RobotStep } from './RobotStep';

export interface WizardStepProps {
  hass: HomeAssistant;
  draft: RoborockVacuumMapCardConfig;
  result: DiscoveryResult;
  deviceFlags?: DeviceFlags;
  onDraft: (draft: RoborockVacuumMapCardConfig) => void;
}

const STEPS = ['check', 'robot', 'floors', 'rooms', 'dock', 'presets', 'review'] as const;
type Step = typeof STEPS[number];
const TITLES: Record<Step, string> = {
  check: 'Before you start',
  robot: 'Your robot',
  floors: 'Floors',
  rooms: 'Rooms',
  dock: 'Dock and helpers',
  presets: 'Presets',
  review: 'Review and save',
};
const PREREQUISITES: Record<PrerequisiteId, string> = {
  home_assistant_version: 'Home Assistant 2026.8 or newer',
  roborock_integration: 'The Roborock integration with at least one vacuum',
  custom_map: 'Roborock Custom Map, for calibrated maps with rooms',
  administrator: 'An administrator account, to read room areas and create helpers',
};

/** Keeps what the user set up by hand when re-running the assistant for the same vacuum. */
function carryOver(detected: RoborockVacuumMapCardConfig, current: RoborockVacuumMapCardConfig): RoborockVacuumMapCardConfig {
  if (current.entity !== detected.entity) return detected;
  const kept = Object.fromEntries((['name', 'language', 'presets', 'default_preset'] as const).flatMap((key) => current[key] !== undefined ? [[key, current[key]]] : []));
  return { ...detected, ...kept };
}

export function SetupWizard({ hass, current, onFinish, onCancel }: {
  hass: HomeAssistant;
  current: RoborockVacuumMapCardConfig;
  onFinish: (config: RoborockVacuumMapCardConfig) => void;
  onCancel: () => void;
}) {
  const vacuums = useMemo(() => listRoborockVacuums(hass), [hass]);
  const checks = useMemo(() => prerequisites(hass), [hass]);
  const [step, setStep] = useState<Step>('check');
  const [vacuum, setVacuum] = useState(() => (vacuums.includes(current.entity) ? current.entity : vacuums[0]));
  const [discovery, setDiscovery] = useState<{ vacuum: string; result: DiscoveryResult; deviceFlags?: DeviceFlags }>();
  const [draft, setDraft] = useState<RoborockVacuumMapCardConfig>();
  const loading = Boolean(vacuum) && discovery?.vacuum !== vacuum;
  const result = discovery?.result;
  const deviceFlags = discovery?.deviceFlags;

  useEffect(() => {
    if (!vacuum) return;
    let active = true;
    void Promise.all([loadVacuumSegmentOptions(hass, vacuum), loadDeviceFlags(hass, vacuum)]).then(([segmentOptions, flags]) => {
      if (!active) return;
      const discovered = buildConfig(hass, vacuum, segmentOptions, flags);
      setDiscovery({ vacuum, result: discovered, deviceFlags: flags });
      setDraft(carryOver(discovered.config, current));
    });
    return () => { active = false; };
    // Discovery uses the hass snapshot from when the vacuum was chosen; state updates don't restart it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vacuum]);

  const index = STEPS.indexOf(step);
  const errors = draft ? validateConfig(draft) : [];
  const blocked = step === 'check' ? !canSetUp(checks) : !draft || !result || loading;
  const props = draft && result ? { hass, draft, result, deviceFlags, onDraft: setDraft } : undefined;

  return (
    <div className="setup-wizard">
      <header className="editor-heading">
        <div>
          <small>Setup assistant · step {index + 1} of {STEPS.length}</small>
          <h2>{TITLES[step]}</h2>
        </div>
        <button type="button" className="secondary" onClick={onCancel}>Close</button>
      </header>

      {step === 'check' && (
        <ul className="setup-checks">
          {checks.map((check) => (
            <li key={check.id} className={check.ok ? 'ok' : check.blocking ? 'missing' : 'optional'}>
              {check.ok ? <CircleCheck /> : <CircleX />}
              <span>{PREREQUISITES[check.id]}</span>
              {!check.ok && check.fix_url && <a href={check.fix_url} target="_blank" rel="noreferrer">Fix</a>}
            </li>
          ))}
        </ul>
      )}
      {step !== 'check' && loading && <p role="status">Looking at your Roborock devices…</p>}
      {step === 'robot' && props && <RobotStep {...props} vacuums={vacuums} vacuum={vacuum} onVacuum={setVacuum} />}
      {step === 'floors' && props && <FloorsStep {...props} />}
      {step === 'rooms' && props && <RoomsStep {...props} />}
      {step === 'dock' && props && <DockStep {...props} />}
      {step === 'presets' && props && <PresetsStep {...props} />}
      {step === 'review' && draft && (
        <>
          {errors.length > 0 && <div className="editor-errors" role="alert">{errors.map((error) => <div key={error}>{error}</div>)}</div>}
          <p>This is the card configuration the assistant will save. You can change everything later in the editor.</p>
          <pre className="yaml-preview">{toYaml(draft)}</pre>
        </>
      )}

      <footer className="wizard-nav">
        <button type="button" className="secondary" disabled={index === 0} onClick={() => setStep(STEPS[index - 1])}>Back</button>
        {step === 'review'
          ? <button type="button" className="primary" disabled={!draft || errors.length > 0} onClick={() => draft && onFinish(draft)}>Save card</button>
          : <button type="button" className="primary" disabled={blocked} onClick={() => setStep(STEPS[index + 1])}>Next</button>}
      </footer>
    </div>
  );
}

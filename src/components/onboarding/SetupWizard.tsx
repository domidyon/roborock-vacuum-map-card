import { CircleCheck, CircleX } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { loadDeviceFlags, type DeviceFlags } from '../../catalog/device-flags';
import { validateConfig } from '../../config';
import { buildConfig, listRoborockVacuums, loadVacuumSegmentOptions, type DiscoveryResult } from '../../discovery';
import { canSetUp, prerequisites } from '../../onboarding/prerequisites';
import type { EditorKey } from '../../i18n/editor';
import type { HomeAssistant, RoborockVacuumMapCardConfig } from '../../types';
import type { Translate } from '../editor/shared';
import { toYaml } from '../../yaml';
import { DockStep, PresetsStep } from './DockSteps';
import { FloorsStep, RoomsStep } from './FloorSteps';
import { RobotStep } from './RobotStep';

export interface WizardStepProps {
  hass: HomeAssistant;
  draft: RoborockVacuumMapCardConfig;
  result: DiscoveryResult;
  deviceFlags?: DeviceFlags;
  t: Translate;
  onDraft: (draft: RoborockVacuumMapCardConfig) => void;
}

const STEPS = ['check', 'robot', 'floors', 'rooms', 'dock', 'presets', 'review'] as const;
type Step = typeof STEPS[number];

/** Keeps what the user set up by hand when re-running the assistant for the same vacuum. */
function carryOver(detected: RoborockVacuumMapCardConfig, current: RoborockVacuumMapCardConfig): RoborockVacuumMapCardConfig {
  if (current.entity !== detected.entity) return detected;
  const kept = Object.fromEntries((['name', 'language', 'presets', 'default_preset'] as const).flatMap((key) => current[key] !== undefined ? [[key, current[key]]] : []));
  return { ...detected, ...kept };
}

export function SetupWizard({ hass, current, t, onFinish, onCancel }: {
  hass: HomeAssistant;
  current: RoborockVacuumMapCardConfig;
  t: Translate;
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
  // Move focus to the new step's heading so keyboard and screen-reader users follow along.
  const heading = useRef<HTMLHeadingElement>(null);
  const firstStep = useRef(true);
  useEffect(() => {
    if (firstStep.current) { firstStep.current = false; return; }
    heading.current?.focus();
  }, [step]);
  const errors = draft ? validateConfig(draft) : [];
  // Missing assisted-carry entities are fixable in the dock step; say so instead of showing raw paths.
  const assistedErrors = errors.filter((error) => error.startsWith('entities.assisted_carry'));
  const otherErrors = errors.filter((error) => !assistedErrors.includes(error));
  const blocked = step === 'check' ? !canSetUp(checks) : !draft || !result || loading;
  const props = draft && result ? { hass, draft, result, deviceFlags, t, onDraft: setDraft } : undefined;

  return (
    <div className="setup-wizard">
      <header className="editor-heading">
        <div>
          <small>{t('wizardStep', { n: index + 1, total: STEPS.length })}</small>
          <h2 ref={heading} tabIndex={-1}>{t(`step_${step}` as EditorKey)}</h2>
        </div>
        <button type="button" className="secondary" onClick={onCancel}>{t('close')}</button>
      </header>

      {step === 'check' && (
        <ul className="setup-checks">
          {checks.map((check) => (
            <li key={check.id} className={check.ok ? 'ok' : check.blocking ? 'missing' : 'optional'}>
              {check.ok ? <CircleCheck /> : <CircleX />}
              <span>{t(`prereq_${check.id}` as EditorKey)}</span>
              {!check.ok && check.fix_url && <a href={check.fix_url} target="_blank" rel="noreferrer">{t('fix')}</a>}
            </li>
          ))}
        </ul>
      )}
      {step !== 'check' && loading && <p role="status">{t('discovering')}</p>}
      {step === 'robot' && props && <RobotStep {...props} vacuums={vacuums} vacuum={vacuum} onVacuum={setVacuum} />}
      {step === 'floors' && props && <FloorsStep {...props} />}
      {step === 'rooms' && props && <RoomsStep {...props} />}
      {step === 'dock' && props && <DockStep {...props} />}
      {step === 'presets' && props && <PresetsStep {...props} />}
      {step === 'review' && draft && (
        <>
          {assistedErrors.length > 0 && draft && (
            <div className="editor-errors" role="alert">
              <p>{t('assistedNeedsScripts')}</p>
              <div className="wizard-fixes">
                <button type="button" className="secondary" onClick={() => setStep('dock')}>{t('pickScripts')}</button>
                <button
                  type="button"
                  className="secondary"
                  onClick={() => setDraft({ ...draft, floors: draft.floors.map((floor) => ({ ...floor, assisted_carry: undefined })) })}
                >
                  {t('disableAssisted')}
                </button>
              </div>
            </div>
          )}
          {otherErrors.length > 0 && <div className="editor-errors" role="alert">{otherErrors.map((error) => <div key={error}>{error}</div>)}</div>}
          <p>{t('reviewIntro')}</p>
          <pre className="yaml-preview">{toYaml(draft)}</pre>
        </>
      )}

      <footer className="wizard-nav">
        <button type="button" className="secondary" disabled={index === 0} onClick={() => setStep(STEPS[index - 1])}>{t('back')}</button>
        {step === 'review'
          ? <button type="button" className="primary" disabled={!draft || errors.length > 0} onClick={() => draft && onFinish(draft)}>{t('saveCard')}</button>
          : <button type="button" className="primary" disabled={blocked} onClick={() => setStep(STEPS[index + 1])}>{t('next')}</button>}
      </footer>
    </div>
  );
}

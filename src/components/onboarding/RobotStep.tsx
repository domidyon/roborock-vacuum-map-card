import { capabilitiesFromFlags, dockAbilities, modelName } from '../../catalog';
import { detectCapabilities } from '../../capabilities';
import type { WizardStepProps } from './SetupWizard';

const REASONS: Record<string, string> = {
  not_a_robot_vacuum: 'This device is not a robot vacuum.',
  protocol_unsupported: 'This model uses a Roborock protocol the card does not support.',
  home_assistant_too_old: 'Home Assistant 2026.8 or newer is needed.',
  custom_map_missing: 'No Roborock Custom Map images were found for this vacuum.',
  unknown_model: 'This model is new to the card. Options are detected from Home Assistant; please send a model report.',
};

const yesNo = (value?: boolean) => (value === undefined ? 'unknown' : value ? 'yes' : 'no');

export function RobotStep({ hass, draft, result, deviceFlags, onDraft, vacuums, vacuum, onVacuum }: WizardStepProps & {
  vacuums: string[];
  vacuum?: string;
  onVacuum: (vacuum: string) => void;
}) {
  const { compatibility, model, profile } = result.report;
  const capabilities = detectCapabilities(hass, draft);
  const dock = dockAbilities(model, deviceFlags?.flags);
  const native = deviceFlags ? capabilitiesFromFlags(deviceFlags.flags) : undefined;
  const routes = capabilities.mopRoutes?.vacuum_and_mop ?? capabilities.mopModes.filter((mode) => ['fast', 'standard', 'deep', 'deep_plus'].includes(mode));

  return (
    <div className="wizard-step">
      {vacuums.length > 1 && (
        <label>Vacuum
          <select value={vacuum} onChange={(event) => onVacuum(event.target.value)}>
            {vacuums.map((id) => <option key={id} value={id}>{String(hass.states[id]?.attributes.friendly_name ?? id)}</option>)}
          </select>
        </label>
      )}
      <article className={`wizard-verdict verdict-${compatibility.verdict}`}>
        <strong>{modelName(model) ?? model ?? draft.entity}</strong>
        <span>{compatibility.verdict === 'supported' ? 'Supported' : compatibility.verdict === 'limited' ? 'Supported with limits' : 'Not supported'}
          {profile && ` · ${profile.status} profile`}</span>
        {compatibility.reasons.map((reason) => <p key={reason}>{REASONS[reason] ?? reason}</p>)}
      </article>
      <dl className="wizard-facts">
        <dt>AI SmartPlan</dt><dd>{yesNo(capabilities.hasSmartPlan)}</dd>
        <dt>Mop routes</dt><dd>{routes.length > 0 ? routes.join(', ') : 'none'}</dd>
        <dt>Two passes</dt><dd>{capabilities.roomRepeatStrategy === 'app_segment_clean' ? 'per room segment' : 'cleaning-count setting'}</dd>
        <dt>Native Vac followed by Mop</dt><dd>{yesNo(native?.vac_then_mop)}</dd>
        <dt>Dock</dt><dd>{dock ? Object.entries(dock).filter(([, value]) => value).map(([key]) => key.replace('_', ' ')).join(', ') || 'basic' : 'unknown'}</dd>
        <dt>Facts read from the robot</dt><dd>{deviceFlags ? 'yes' : 'no (needs an administrator)'}</dd>
      </dl>
      <label className="checkbox">
        <input type="checkbox" checked={draft.enable_mop_only === true} onChange={(event) => onDraft({ ...draft, enable_mop_only: event.target.checked || undefined })} />
        Show Mop only (only if your Roborock app offers it)
      </label>
    </div>
  );
}

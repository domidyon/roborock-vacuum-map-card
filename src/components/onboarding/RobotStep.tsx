import { capabilitiesFromFlags, dockAbilities, modelName } from '../../catalog';
import { detectCapabilities } from '../../capabilities';
import { optionText } from '../../i18n';
import { editorLanguage, type EditorKey } from '../../i18n/editor';
import type { WizardStepProps } from './SetupWizard';

export function RobotStep({ hass, draft, result, deviceFlags, t, onDraft, vacuums, vacuum, onVacuum }: WizardStepProps & {
  vacuums: string[];
  vacuum?: string;
  onVacuum: (vacuum: string) => void;
}) {
  const { compatibility, model, profile } = result.report;
  const capabilities = detectCapabilities(hass, draft);
  const dock = dockAbilities(model, deviceFlags?.flags);
  const native = deviceFlags ? capabilitiesFromFlags(deviceFlags.flags) : undefined;
  const yesNo = (value?: boolean) => t(value === undefined ? 'unknown' : value ? 'yes' : 'no');
  const routes = capabilities.mopRoutes?.vacuum_and_mop ?? capabilities.mopModes.filter((mode) => ['fast', 'standard', 'deep', 'deep_plus'].includes(mode));

  return (
    <div className="wizard-step">
      {vacuums.length > 1 && (
        <label>{t('vacuum')}
          <select value={vacuum} onChange={(event) => onVacuum(event.target.value)}>
            {vacuums.map((id) => <option key={id} value={id}>{String(hass.states[id]?.attributes.friendly_name ?? id)}</option>)}
          </select>
        </label>
      )}
      <article className={`wizard-verdict verdict-${compatibility.verdict}`}>
        <strong>{modelName(model) ?? model ?? draft.entity}</strong>
        <span>{t(`verdict_${compatibility.verdict}` as EditorKey)}
          {profile && ` · ${t('profileStatus', { status: t(`status_${profile.status}` as EditorKey) })}`}</span>
        {compatibility.reasons.map((reason) => <p key={reason}>{t(`reason_${reason}` as EditorKey)}</p>)}
      </article>
      <dl className="wizard-facts">
        <dt>{t('fact_smartplan')}</dt><dd>{yesNo(capabilities.hasSmartPlan)}</dd>
        <dt>{t('fact_routes')}</dt><dd>{routes.length > 0 ? routes.map((route) => optionText(editorLanguage(hass, draft.language), route)).join(', ') : t('none')}</dd>
        <dt>{t('fact_passes')}</dt><dd>{t(capabilities.roomRepeatStrategy === 'app_segment_clean' ? 'fact_passes_segment' : 'fact_passes_setting')}</dd>
        <dt>{t('fact_native_routine')}</dt><dd>{yesNo(native?.vac_then_mop)}</dd>
        <dt>{t('fact_dock')}</dt><dd>{dock ? Object.entries(dock).filter(([, value]) => value).map(([key]) => key.replace('_', ' ')).join(', ') || t('basicDock') : t('unknown')}</dd>
        <dt>{t('fact_flags')}</dt><dd>{deviceFlags ? t('yes') : t('fact_flags_missing')}</dd>
      </dl>
      <label className="checkbox">
        <input type="checkbox" checked={draft.enable_mop_only === true} onChange={(event) => onDraft({ ...draft, enable_mop_only: event.target.checked || undefined })} />
        {t('mopOnly')}
      </label>
    </div>
  );
}

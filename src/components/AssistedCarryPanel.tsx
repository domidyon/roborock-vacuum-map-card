import { ArrowDownToLine, ArrowUpFromLine, Check, LoaderCircle, Play, RotateCcw, Sparkles } from 'lucide-react';
import { t } from '../i18n';
import type { TranslationKey } from '../i18n';
import type { AssistedCarryStage, Language } from '../types';

interface AssistedCarryPanelProps {
  language?: Language;
  stage: AssistedCarryStage;
  roomNames: string[];
  pending: boolean;
  onStart: () => void;
  onFinish: () => void;
  onReset: () => void;
  onCancel: () => void;
}

const STAGE_ICON = {
  preparing: <LoaderCircle className="spin" />,
  carry_upstairs: <ArrowUpFromLine />,
  cleaning_upstairs: <Sparkles />,
  carry_downstairs: <ArrowDownToLine />,
  finishing: <LoaderCircle className="spin" />,
  complete: <Check />,
  error: <RotateCcw />,
  idle: <Sparkles />,
} satisfies Record<AssistedCarryStage, React.ReactNode>;

const STAGE_COPY: Record<AssistedCarryStage, { title: TranslationKey; description: TranslationKey }> = {
  idle: { title: 'assistedCarryTitle', description: 'assistedCarryDescription' },
  preparing: { title: 'assisted_preparing_title', description: 'assisted_preparing_description' },
  carry_upstairs: { title: 'assisted_carry_upstairs_title', description: 'assisted_carry_upstairs_description' },
  cleaning_upstairs: { title: 'assisted_cleaning_upstairs_title', description: 'assisted_cleaning_upstairs_description' },
  carry_downstairs: { title: 'assisted_carry_downstairs_title', description: 'assisted_carry_downstairs_description' },
  finishing: { title: 'assisted_finishing_title', description: 'assisted_finishing_description' },
  complete: { title: 'assisted_complete_title', description: 'assisted_complete_description' },
  error: { title: 'assisted_error_title', description: 'assisted_error_description' },
};

export function AssistedCarryPanel({
  language,
  stage,
  roomNames,
  pending,
  onStart,
  onFinish,
  onReset,
  onCancel,
}: AssistedCarryPanelProps) {
  if (stage === 'idle') return null;
  const title = t(language, STAGE_COPY[stage].title);
  const description = t(language, STAGE_COPY[stage].description);
  const cancellable = !['complete', 'error'].includes(stage);

  return (
    <section className={`assisted-panel assisted-${stage}`} aria-live="polite">
      <div className="assisted-icon">{STAGE_ICON[stage]}</div>
      <div className="assisted-copy">
        <strong>{title}</strong>
        <p>{description}</p>
        {roomNames.length > 0 && <small>{roomNames.join(' · ')}</small>}
      </div>
      <div className="assisted-actions">
        {stage === 'carry_upstairs' && (
          <button type="button" className="primary" disabled={pending} onClick={onStart}><Play />{t(language, 'startUpstairs')}</button>
        )}
        {stage === 'carry_downstairs' && (
          <button type="button" className="primary" disabled={pending} onClick={onFinish}><ArrowDownToLine />{t(language, 'dockAndFinish')}</button>
        )}
        {['complete', 'error'].includes(stage) && (
          <button type="button" className="secondary" disabled={pending} onClick={onReset}><RotateCcw />{t(language, 'newUpstairsJob')}</button>
        )}
        {cancellable && (
          <button type="button" className="secondary" disabled={pending} onClick={onCancel}>{t(language, 'cancel')}</button>
        )}
      </div>
    </section>
  );
}

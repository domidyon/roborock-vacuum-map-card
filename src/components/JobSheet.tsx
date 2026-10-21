import { X } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { PreflightResult } from '../preflight';
import type { AvailablePreset } from '../presets';
import { checkText } from './notices';
import { draftFromPreset } from '../presets';
import { optionText, t, type TranslationKey } from '../i18n';
import type { CleaningCount, JobDraft, Language, MopRouteMode, RoborockCapabilities } from '../types';
import { HaIcon } from './HaIcon';

interface JobSheetProps {
  language?: Language;
  draft: JobDraft;
  capabilities: RoborockCapabilities;
  presets: AvailablePreset[];
  selectedRoomNames: string[];
  submitting: boolean;
  assistedCarry?: boolean;
  zoneCleaning?: boolean;
  mopRoutes?: Partial<Record<MopRouteMode, string[]>>;
  /** Pre-start checks for the current draft; blocking ones disable Start. */
  checks?: PreflightResult;
  onDraftChange: (draft: JobDraft) => void;
  onClose: () => void;
  onStart: (draft: JobDraft) => void;
}

const MODE_IDS = ['smartplan', 'vacuum_then_mop', 'vacuum_and_mop', 'vacuum_only', 'mop_only'] as const;
const ZONE_MODE_IDS = ['vacuum_only', 'vacuum_and_mop', 'mop_only'] as const;
const VACUUM_SUCTION = ['quiet', 'balanced', 'turbo', 'max', 'max_plus'];
const MOP_SUCTION = ['quiet', 'balanced', 'turbo', 'max'];
const APP_ROUTES = ['fast', 'standard', 'deep'];
// Water-slider models use slight…extreme; older models (S7) use mild/standard/intense.
const WATER_FLOW = ['mild', 'standard', 'intense', 'slight', 'low', 'medium', 'moderate', 'high', 'extreme'];
const WATER_LEVEL: Record<string, number> = { slight: 1, low: 5, medium: 15, moderate: 25, high: 28, extreme: 30 };

const MODE_LABEL_KEYS: Record<typeof MODE_IDS[number], TranslationKey> = {
  smartplan: 'smartPlan',
  vacuum_then_mop: 'vacuumThenMop',
  vacuum_and_mop: 'vacuumAndMop',
  vacuum_only: 'vacuumOnly',
  mop_only: 'mopOnly',
};

function ChoiceButtons<T extends string>({
  value,
  options,
  onChange,
  title,
  language,
}: {
  value?: T;
  options: T[];
  onChange: (value: T) => void;
  title: string;
  language?: Language;
}) {
  if (options.length === 0) return null;
  return (
    <div className="field app-field">
      <span>{title}</span>
      <div className="option-strip">
        {options.map((option) => (
          <button
            type="button"
            key={option}
            className={value === option ? 'active' : ''}
            onClick={() => onChange(option)}
          >
            {optionText(language, option)}
          </button>
        ))}
      </div>
    </div>
  );
}

function activeMode(draft: JobDraft, id: typeof MODE_IDS[number]): boolean {
  if (id === 'smartplan') return draft.strategy === 'smartplan';
  if (draft.strategy === 'smartplan') return false;
  if (id === 'vacuum_only') return draft.cleaning_type === 'vacuum';
  if (id === 'vacuum_and_mop') return draft.cleaning_type === 'vacuum_and_mop';
  if (id === 'mop_only') return draft.cleaning_type === 'mop';
  return draft.cleaning_type === 'vacuum_then_mop';
}

export function JobSheet({
  language,
  draft,
  capabilities,
  presets,
  selectedRoomNames,
  submitting,
  assistedCarry = false,
  zoneCleaning = false,
  mopRoutes,
  checks,
  onDraftChange,
  onClose,
  onStart,
}: JobSheetProps) {
  const modeIds = zoneCleaning ? ZONE_MODE_IDS : MODE_IDS;
  // SmartPlan is hidden, not greyed out, on models whose app does not offer it.
  const appModes = modeIds
    .map((id) => presets.find(({ preset }) => preset.id === id))
    .filter((mode): mode is AvailablePreset => Boolean(mode))
    .filter(({ preset, available }) => preset.id !== 'smartplan' || available);
  const savedPresets = presets.filter(({ preset }) =>
    !MODE_IDS.includes(preset.id as typeof MODE_IDS[number])
      && (!zoneCleaning || (
        preset.strategy === 'custom'
        && ['vacuum', 'mop', 'vacuum_and_mop'].includes(preset.cleaning_type ?? 'vacuum')
      )),
  );
  const fanAllowList = draft.cleaning_type === 'vacuum' ? VACUUM_SUCTION : MOP_SUCTION;
  const fanSpeeds = fanAllowList.filter((option) => capabilities.fanSpeeds.includes(option));
  const routeAllowList = (draft.cleaning_type === 'mop' ? mopRoutes?.mop : mopRoutes?.vacuum_and_mop) ?? APP_ROUTES;
  const routes = routeAllowList.filter((option) => capabilities.mopModes.includes(option));
  const selectedRoute = routes.includes(draft.mop_mode ?? '') ? draft.mop_mode : routes[0];
  const waterOptions = WATER_FLOW.filter((option) => capabilities.mopIntensities.includes(option));
  const waterIndex = Math.max(0, waterOptions.indexOf(draft.mop_intensity ?? 'medium'));
  const waterLevel = WATER_LEVEL[waterOptions[waterIndex]];
  const description = draft.strategy === 'smartplan'
    ? t(language, 'smartPlanDescription')
    : draft.cleaning_type === 'vacuum'
      ? t(language, 'vacuumDescription')
      : draft.cleaning_type === 'mop'
        ? t(language, 'mopOnlyDescription')
        : draft.cleaning_type === 'vacuum_then_mop'
          ? t(language, 'vacuumThenMopDescription')
          : t(language, 'vacuumAndMopDescription');

  return (
    <div className="sheet-layer" role="presentation">
      <button type="button" className="sheet-backdrop" aria-label={t(language, 'close')} onClick={onClose} />
      <section className="job-sheet" role="dialog" aria-modal="true" aria-labelledby="job-sheet-title">
        <div className="sheet-handle" />
        <header>
          <div>
            <h2 id="job-sheet-title">{assistedCarry ? t(language, 'assistedCarryTitle') : t(language, 'configureTitle')}</h2>
            <p>{selectedRoomNames.join(' · ')}</p>
          </div>
          <button type="button" className="icon-button" aria-label={t(language, 'close')} onClick={onClose}><X /></button>
        </header>

        <div className="sheet-body">
          <div
            className="cleaning-mode-tabs"
            role="tablist"
            aria-label={t(language, 'cleaningType')}
            style={{ '--mode-count': Math.min(appModes.length, 4) } as CSSProperties}
          >
            {appModes.map(({ preset, available, reason }) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeMode(draft, preset.id as typeof MODE_IDS[number])}
                key={preset.id}
                className={activeMode(draft, preset.id as typeof MODE_IDS[number]) ? 'active' : ''}
                disabled={!available || submitting}
                title={reason}
                onClick={() => onDraftChange(draftFromPreset(preset))}
              >
                <HaIcon icon={preset.icon} />
                <span>{t(language, MODE_LABEL_KEYS[preset.id as typeof MODE_IDS[number]])}</span>
              </button>
            ))}
          </div>

          <section className="mode-settings">
            <p className="mode-description">{description}</p>
            {draft.strategy !== 'smartplan' && draft.cleaning_type !== 'vacuum_then_mop' && (
              <>
                {draft.cleaning_type !== 'mop' && (
                  <ChoiceButtons
                    language={language}
                    title={t(language, 'suction')}
                    value={draft.fan_speed}
                    options={fanSpeeds}
                    onChange={(fan_speed) => onDraftChange({ ...draft, preset_id: 'custom_draft', fan_speed })}
                  />
                )}

                {draft.cleaning_type !== 'vacuum' && waterOptions.length > 0 && (
                  <label className="field app-field water-flow">
                    <span>{t(language, 'waterFlow')}</span>
                    <div className="range-heading">
                      <strong>{optionText(language, waterOptions[waterIndex])}</strong>
                      {waterLevel !== undefined && <output>{waterLevel}</output>}
                    </div>
                    <input
                      type="range"
                      min="0"
                      max={waterOptions.length - 1}
                      step="1"
                      value={waterIndex}
                      aria-label={t(language, 'waterFlow')}
                      onChange={(event) => onDraftChange({
                        ...draft,
                        preset_id: 'custom_draft',
                        mop_intensity: waterOptions[Number(event.target.value)],
                      })}
                    />
                  </label>
                )}

                <ChoiceButtons
                  language={language}
                  title={t(language, 'cleaningCount')}
                  value={String(draft.cleaning_count) as '1' | '2'}
                  options={['1', '2'] as Array<'1' | '2'>}
                  onChange={(cleaning_count) => onDraftChange({
                    ...draft,
                    preset_id: 'custom_draft',
                    cleaning_count: Number(cleaning_count) as CleaningCount,
                  })}
                />

                <ChoiceButtons
                  language={language}
                  title={t(language, 'mopRoute')}
                  value={selectedRoute}
                  options={routes}
                  onChange={(mop_mode) => onDraftChange({ ...draft, preset_id: 'custom_draft', mop_mode })}
                />
              </>
            )}
          </section>

          {!assistedCarry && savedPresets.length > 0 && (
            <div className="saved-profiles">
              <span>{t(language, 'savedProfiles')}</span>
              <div>
                {savedPresets.map(({ preset, available, reason }) => (
                  <button
                    type="button"
                    key={preset.id}
                    disabled={!available || submitting}
                    title={reason}
                    className={draft.preset_id === preset.id ? 'active' : ''}
                    onClick={() => onDraftChange(draftFromPreset(preset))}
                  >
                    <HaIcon icon={preset.icon} /> {preset.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {checks && (checks.blocking.length > 0 || checks.warnings.length > 0) && (
          <div className={`preflight ${checks.blocking.length > 0 ? 'blocking' : 'warning'}`} role="alert">
            <strong>{t(language, checks.blocking.length > 0 ? 'preflightBlocked' : 'preflightWarnings')}</strong>
            <ul>
              {[...checks.blocking, ...checks.warnings].map((check) => <li key={check.code}>{checkText(language, check)}</li>)}
            </ul>
          </div>
        )}

        <footer>
          <button type="button" className="secondary" disabled={submitting} onClick={onClose}>{t(language, 'cancel')}</button>
          <button
            type="button"
            className="primary"
            disabled={submitting || (checks?.blocking.length ?? 0) > 0}
            onClick={() => onStart(selectedRoute
              && draft.strategy === 'custom'
              && ['mop', 'vacuum_and_mop'].includes(draft.cleaning_type)
              ? { ...draft, mop_mode: selectedRoute }
              : draft)}
          >
            {submitting
              ? assistedCarry ? t(language, 'preparingUpstairs') : t(language, 'starting')
              : assistedCarry
                ? t(language, 'prepareUpstairs')
                : (checks?.warnings.length ?? 0) > 0 ? t(language, 'startAnyway') : t(language, 'start')}
          </button>
        </footer>
      </section>
    </div>
  );
}

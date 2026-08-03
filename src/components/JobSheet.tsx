import { X } from 'lucide-react';
import type { AvailablePreset } from '../presets';
import { draftFromPreset } from '../presets';
import { t } from '../i18n';
import type { CleaningCount, JobDraft, Language, RoborockCapabilities } from '../types';
import { HaIcon } from './HaIcon';

interface JobSheetProps {
  language?: Language;
  draft: JobDraft;
  capabilities: RoborockCapabilities;
  presets: AvailablePreset[];
  selectedRoomNames: string[];
  submitting: boolean;
  onDraftChange: (draft: JobDraft) => void;
  onClose: () => void;
  onStart: () => void;
}

const MODE_IDS = ['smartplan', 'vacuum_then_mop', 'vacuum_and_mop', 'vacuum_only'] as const;
const VACUUM_SUCTION = ['quiet', 'balanced', 'turbo', 'max', 'max_plus'];
const MOP_SUCTION = ['quiet', 'balanced', 'turbo', 'max'];
const APP_ROUTES = ['fast', 'standard', 'deep'];
const WATER_FLOW = ['slight', 'low', 'medium', 'moderate', 'high', 'extreme'];
const WATER_LEVEL: Record<string, number> = { slight: 1, low: 5, medium: 15, moderate: 25, high: 28, extreme: 30 };

function label(value: string): string {
  return value.replaceAll('_', ' ').replace(/\b\w/g, (character) => character.toUpperCase());
}

function ChoiceButtons<T extends string>({
  value,
  options,
  onChange,
  title,
}: {
  value?: T;
  options: T[];
  onChange: (value: T) => void;
  title: string;
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
            {label(option)}
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
  return draft.cleaning_type === 'vacuum_then_mop';
}

export function JobSheet({
  language,
  draft,
  capabilities,
  presets,
  selectedRoomNames,
  submitting,
  onDraftChange,
  onClose,
  onStart,
}: JobSheetProps) {
  const appModes = MODE_IDS.map((id) => presets.find(({ preset }) => preset.id === id)).filter(
    (mode): mode is AvailablePreset => Boolean(mode),
  );
  const savedPresets = presets.filter(({ preset }) => !MODE_IDS.includes(preset.id as typeof MODE_IDS[number]));
  const fanAllowList = draft.cleaning_type === 'vacuum' ? VACUUM_SUCTION : MOP_SUCTION;
  const fanSpeeds = fanAllowList.filter((option) => capabilities.fanSpeeds.includes(option));
  const routes = APP_ROUTES.filter((option) => capabilities.mopModes.includes(option));
  const waterOptions = WATER_FLOW.filter((option) => capabilities.mopIntensities.includes(option));
  const waterIndex = Math.max(0, waterOptions.indexOf(draft.mop_intensity ?? 'medium'));
  const description = draft.strategy === 'smartplan'
    ? t(language, 'smartPlanDescription')
    : draft.cleaning_type === 'vacuum'
      ? t(language, 'vacuumDescription')
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
            <h2 id="job-sheet-title">{t(language, 'configureTitle')}</h2>
            <p>{selectedRoomNames.join(' · ')}</p>
          </div>
          <button type="button" className="icon-button" aria-label={t(language, 'close')} onClick={onClose}><X /></button>
        </header>

        <div className="sheet-body">
          <div className="cleaning-mode-tabs" role="tablist" aria-label={t(language, 'cleaningType')}>
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
                <span>{preset.id === 'smartplan' ? 'AI SmartPlan' : preset.name}</span>
              </button>
            ))}
          </div>

          <section className="mode-settings">
            <p className="mode-description">{description}</p>
            {draft.strategy !== 'smartplan' && (
              <>
                <ChoiceButtons
                  title={t(language, 'suction')}
                  value={draft.fan_speed}
                  options={fanSpeeds}
                  onChange={(fan_speed) => onDraftChange({ ...draft, preset_id: 'custom_draft', fan_speed })}
                />

                {draft.cleaning_type !== 'vacuum' && waterOptions.length > 0 && (
                  <label className="field app-field water-flow">
                    <span>{t(language, 'waterFlow')}</span>
                    <div className="range-heading">
                      <strong>{label(waterOptions[waterIndex])}</strong>
                      <output>{WATER_LEVEL[waterOptions[waterIndex]]}</output>
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
                  title={t(language, 'cleaningCount')}
                  value={String(draft.cleaning_count) as '1' | '2'}
                  options={(draft.cleaning_type === 'vacuum_then_mop' ? ['1'] : ['1', '2']) as Array<'1' | '2'>}
                  onChange={(cleaning_count) => onDraftChange({
                    ...draft,
                    preset_id: 'custom_draft',
                    cleaning_count: Number(cleaning_count) as CleaningCount,
                  })}
                />

                <ChoiceButtons
                  title={t(language, 'mopRoute')}
                  value={draft.mop_mode}
                  options={routes}
                  onChange={(mop_mode) => onDraftChange({ ...draft, preset_id: 'custom_draft', mop_mode })}
                />
              </>
            )}
          </section>

          {savedPresets.length > 0 && (
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

        <footer>
          <button type="button" className="secondary" disabled={submitting} onClick={onClose}>{t(language, 'cancel')}</button>
          <button type="button" className="primary" disabled={submitting} onClick={onStart}>
            {submitting ? t(language, 'starting') : t(language, 'start')}
          </button>
        </footer>
      </section>
    </div>
  );
}

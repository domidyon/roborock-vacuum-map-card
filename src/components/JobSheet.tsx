import { X } from 'lucide-react';
import type { AvailablePreset } from '../presets';
import { draftFromPreset } from '../presets';
import { t } from '../i18n';
import type { JobDraft, Language, RoborockCapabilities } from '../types';
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

function Choice<T extends string>({
  value,
  options,
  onChange,
  label,
}: {
  value?: T;
  options: T[];
  onChange: (value: T) => void;
  label: string;
}) {
  if (options.length === 0) return null;
  return (
    <label className="field">
      <span>{label}</span>
      <select value={value ?? ''} onChange={(event) => onChange(event.target.value as T)}>
        {options.map((option) => <option key={option} value={option}>{option.replaceAll('_', ' ')}</option>)}
      </select>
    </label>
  );
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
  const vacuumOnlyAvailable = presets.find(({ preset }) => preset.id === 'vacuum_only')?.available ?? false;

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
          <h3>{t(language, 'presets')}</h3>
          <div className="preset-grid">
            {presets.map(({ preset, available, reason }) => (
              <button
                type="button"
                key={preset.id}
                className={draft.preset_id === preset.id ? 'active' : ''}
                disabled={!available || submitting}
                title={reason}
                onClick={() => onDraftChange(draftFromPreset(preset))}
              >
                <HaIcon icon={preset.icon} />
                <span>{preset.name}</span>
                {!available && <small>{reason ?? t(language, 'unsupported')}</small>}
              </button>
            ))}
          </div>

          {draft.strategy !== 'smartplan' && (
            <div className="job-fields">
              <div className="field">
                <span>{t(language, 'cleaningType')}</span>
                <div className="segmented">
                  {(['vacuum', 'vacuum_and_mop'] as const).map((type) => (
                    <button
                      type="button"
                      key={type}
                      className={draft.cleaning_type === type ? 'active' : ''}
                      disabled={submitting || (type === 'vacuum' && !vacuumOnlyAvailable)}
                      title={type === 'vacuum' && !vacuumOnlyAvailable ? t(language, 'unsupported') : undefined}
                      onClick={() =>
                        onDraftChange({
                          ...draft,
                          preset_id: 'custom_draft',
                          cleaning_type: type,
                          mop_mode: type === 'vacuum' && capabilities.mopModes.includes('standard') ? 'standard' : draft.mop_mode,
                        })
                      }
                    >
                      {t(language, type === 'vacuum' ? 'vacuumOnly' : 'vacuumAndMop')}
                    </button>
                  ))}
                </div>
              </div>
              <Choice
                label={t(language, 'suction')}
                value={draft.fan_speed}
                options={capabilities.fanSpeeds}
                onChange={(fan_speed) => onDraftChange({ ...draft, preset_id: 'custom_draft', fan_speed })}
              />
              {capabilities.hasMopMode && (
                <Choice
                  label={t(language, 'mopRoute')}
                  value={draft.mop_mode}
                  options={capabilities.mopModes}
                  onChange={(mop_mode) => onDraftChange({ ...draft, preset_id: 'custom_draft', mop_mode })}
                />
              )}
              {draft.cleaning_type !== 'vacuum' && capabilities.hasMopIntensity && (
                <Choice
                  label={t(language, 'mopIntensity')}
                  value={draft.mop_intensity}
                  options={capabilities.mopIntensities}
                  onChange={(mop_intensity) => onDraftChange({ ...draft, preset_id: 'custom_draft', mop_intensity })}
                />
              )}
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

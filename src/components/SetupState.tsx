import { CircleCheck, CircleX, TriangleAlert } from 'lucide-react';
import { t, type TranslationKey } from '../i18n';
import { prerequisites } from '../onboarding/prerequisites';
import type { HomeAssistant, Language } from '../types';

interface SetupStateProps {
  hass: HomeAssistant;
  language?: Language;
  /** Config validation messages, when the config itself is invalid. */
  errors?: string[];
  /** Configured vacuum that doesn't exist. */
  missingVacuum?: string;
}

/** Shown instead of the card until it can work: what is missing and how to fix it. */
export function SetupState({ hass, language, errors = [], missingVacuum }: SetupStateProps) {
  const checks = prerequisites(hass);
  return (
    <ha-card className="roborock-card setup-state">
      <div className="setup-state-body">
        <h1><TriangleAlert />{t(language, 'setupTitle')}</h1>
        <p>{t(language, 'setupIntro')}</p>
        <ul className="setup-checks">
          {checks.map((check) => (
            <li key={check.id} className={check.ok ? 'ok' : check.blocking ? 'missing' : 'optional'}>
              {check.ok ? <CircleCheck aria-label="OK" /> : <CircleX aria-label="Missing" />}
              <span>{t(language, `prereq_${check.id}` as TranslationKey)}</span>
              {!check.ok && check.fix_url && <a href={check.fix_url} target="_blank" rel="noreferrer">{t(language, 'setupFix')}</a>}
            </li>
          ))}
        </ul>
        {missingVacuum && <p className="setup-problem">{t(language, 'setupVacuumMissing')} <code>{missingVacuum}</code></p>}
        {errors.length > 0 && (
          <div className="setup-problem">
            <p>{t(language, 'setupConfigErrors')}</p>
            <ul>{errors.map((error) => <li key={error}><code>{error}</code></li>)}</ul>
          </div>
        )}
        <p className="setup-next">{t(language, 'setupOpenEditor')}</p>
      </div>
    </ha-card>
  );
}

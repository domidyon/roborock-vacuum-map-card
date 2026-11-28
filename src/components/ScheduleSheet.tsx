import { ChevronLeft } from 'lucide-react';
import { t } from '../i18n';
import type { HomeAssistant, Language, RoborockVacuumMapCardConfig } from '../types';
import { ScheduleSection } from './ScheduleSection';
import { useDialog } from './useDialog';

interface ScheduleSheetProps {
  hass: HomeAssistant;
  config: RoborockVacuumMapCardConfig;
  language?: Language;
  onClose: () => void;
  onToast: (message: string) => void;
}

/** Cleaning schedules (Scheduler integration) in their own sheet. */
export function ScheduleSheet({ hass, config, language, onClose, onToast }: ScheduleSheetProps) {
  const dialogRef = useDialog<HTMLElement>(onClose);
  return (
    <div className="sheet-layer" role="presentation">
      <button type="button" className="sheet-backdrop" aria-label={t(language, 'close')} onClick={onClose} />
      <section className="job-sheet dock-sheet schedule-sheet" role="dialog" aria-modal="true" aria-labelledby="schedule-sheet-title" ref={dialogRef} tabIndex={-1}>
        <div className="sheet-handle" />
        <header>
          <button type="button" className="sheet-back" aria-label={t(language, 'back')} onClick={onClose}><ChevronLeft /><span>{t(language, 'back')}</span></button>
          <div>
            <h2 id="schedule-sheet-title">{t(language, 'schedules')}</h2>
            <p>{t(language, 'schedulesOverview')}</p>
          </div>
        </header>
        <div className="sheet-body dock-sheet-body">
          <ScheduleSection hass={hass} config={config} language={language} onToast={onToast} />
        </div>
      </section>
    </div>
  );
}

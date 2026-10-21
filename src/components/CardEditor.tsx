import { RefreshCw, Wand2 } from 'lucide-react';
import { useMemo, useState, type ReactNode } from 'react';
import { validateConfig } from '../config';
import { buildConfig, resolveRoborockDevices } from '../discovery';
import { editorLanguage, et, type EditorKey } from '../i18n/editor';
import { needsSetup } from '../onboarding/prerequisites';
import type { HomeAssistant, RoborockVacuumMapCardConfig } from '../types';
import { AdvancedSection } from './editor/AdvancedSection';
import { BasicsSection } from './editor/BasicsSection';
import { DockSection } from './editor/DockSection';
import { FloorsSection } from './editor/FloorsSection';
import { PresetsSection } from './editor/PresetsSection';
import type { SectionProps } from './editor/shared';
import { SetupWizard } from './onboarding/SetupWizard';
import { RedetectPanel } from './RedetectPanel';

interface CardEditorProps {
  hass: HomeAssistant;
  config: RoborockVacuumMapCardConfig;
  onChange: (config: RoborockVacuumMapCardConfig) => void;
}

function Section({ title, open = false, children }: { title: string; open?: boolean; children: ReactNode }) {
  return (
    <details className="editor-section" open={open}>
      <summary><h3>{title}</h3></summary>
      <div className="editor-section-body">{children}</div>
    </details>
  );
}

export function CardEditor({ hass, config, onChange }: CardEditorProps) {
  const [wizardOpen, setWizardOpen] = useState(() => needsSetup(hass, config));
  const [redetectOpen, setRedetectOpen] = useState(false);
  const language = editorLanguage(hass, config.language);
  const t = (key: EditorKey, values?: Record<string, string | number>) => et(language, key, values);
  const errors = validateConfig(config);
  // Discovery for the auto-detected badges; registry data changes rarely, unlike states.
  const discovery = useMemo(
    () => (hass.entities && hass.states[config.entity] ? buildConfig(hass, config.entity).report : undefined),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hass.entities, hass.devices, config.entity],
  );
  const deviceIds = useMemo(() => {
    const devices = resolveRoborockDevices(hass, config.entity);
    return new Set([devices.robot?.id, devices.dock?.id, ...devices.companions.map((device) => device.id)].filter((id): id is string => Boolean(id)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hass.entities, hass.devices, config.entity]);

  if (wizardOpen) {
    return (
      <div className="editor">
        <SetupWizard hass={hass} current={config} t={t} onCancel={() => setWizardOpen(false)} onFinish={(next) => { onChange(next); setWizardOpen(false); }} />
      </div>
    );
  }

  const props: SectionProps = { hass, config, language, t, onChange };
  const detected = discovery?.entities ?? {};
  return (
    <div className="editor">
      <h2>{t('title')}</h2>
      <p>{t('intro')}</p>
      <div className="editor-toolbar">
        <button type="button" onClick={() => setWizardOpen(true)}><Wand2 /> {t('setupAssistant')}</button>
        <button type="button" disabled={!hass.states[config.entity]} onClick={() => setRedetectOpen(true)}><RefreshCw /> {t('redetect')}</button>
      </div>
      {redetectOpen && <RedetectPanel {...props} onApply={(next) => { onChange(next); setRedetectOpen(false); }} onClose={() => setRedetectOpen(false)} />}
      {errors.length > 0 && <div className="editor-errors" role="alert">{errors.map((error) => <div key={error}>{error}</div>)}</div>}

      <Section title={t('sectionBasics')} open><BasicsSection {...props} /></Section>
      <Section title={t('sectionFloors')} open><FloorsSection {...props} detected={detected} deviceIds={deviceIds} /></Section>
      <Section title={t('sectionDock')}><DockSection {...props} model={discovery?.model} detected={detected} deviceIds={deviceIds} /></Section>
      <Section title={t('sectionPresets')}><PresetsSection {...props} /></Section>
      <Section title={t('sectionAdvanced')}><AdvancedSection {...props} detected={detected} deviceIds={deviceIds} /></Section>
    </div>
  );
}

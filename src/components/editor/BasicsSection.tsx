import { detectCapabilities } from '../../capabilities';
import { compatibility, findCatalogModel } from '../../catalog';
import type { EditorKey } from '../../i18n/editor';
import type { Language } from '../../types';
import { EntityPicker } from '../fields';
import type { SectionProps } from './shared';

const MODEL_REPORT_URL = 'https://github.com/domidyon/roborock-vacuum-map-card/issues/new?template=model_report.yml';
const LANGUAGES: Array<[Language, string]> = [['en', 'English'], ['nl', 'Nederlands'], ['pl', 'Polski'], ['tr', 'Türkçe']];

function ModelNote({ hass, config, t }: SectionProps) {
  const { profile, model } = detectCapabilities(hass, config);
  if (profile) return <p className="editor-hint">{t('profileNote', { label: profile.label, status: t(`status_${profile.status}` as EditorKey) })}</p>;
  if (!model) return null;
  const { verdict, name, protocol } = compatibility({ model });
  const label = name ?? model;
  if (verdict === 'unsupported') return <p className="editor-hint">{protocol ? t('unsupportedProtocol', { name: label, protocol }) : t('unsupportedModel', { name: label })}</p>;
  if (findCatalogModel(model)?.features) return <p className="editor-hint">{t('recognisedModel', { name: label })}</p>;
  return <p className="editor-hint">{t('unknownModel', { name: label })} <a href={MODEL_REPORT_URL} target="_blank" rel="noreferrer">{t('reportModel')}</a></p>;
}

export function BasicsSection(props: SectionProps) {
  const { hass, config, t, onChange } = props;
  return (
    <>
      <label>{t('name')}<input value={config.name ?? ''} placeholder={t('namePlaceholder')} onChange={(event) => onChange({ ...config, name: event.target.value || undefined })} /></label>
      <label>{t('cardLanguage')}
        <select value={config.language ?? 'en'} onChange={(event) => onChange({ ...config, language: event.target.value as Language })}>
          {LANGUAGES.map(([code, label]) => <option key={code} value={code}>{label}</option>)}
        </select>
      </label>
      <label>{t('vacuum')}<EntityPicker hass={hass} domains={['vacuum']} value={config.entity} onChange={(entity) => entity && onChange({ ...config, entity })} /></label>
      <ModelNote {...props} />
      <label className="checkbox"><input type="checkbox" checked={config.enable_mop_only === true} onChange={(event) => onChange({ ...config, enable_mop_only: event.target.checked || undefined })} /> {t('mopOnly')}</label>
      {config.vacuum_mode_fallback && (
        <label className="checkbox">
          <input type="checkbox" checked={config.vacuum_mode_fallback === 'set_clean_motor_mode'} onChange={(event) => onChange({ ...config, vacuum_mode_fallback: event.target.checked ? 'set_clean_motor_mode' : undefined })} /> {t('vacuumModeFallback')}
        </label>
      )}
    </>
  );
}

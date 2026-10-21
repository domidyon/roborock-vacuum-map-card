import { ArrowDown, ArrowUp, Plus, Trash2 } from 'lucide-react';
import { detectCapabilities } from '../../capabilities';
import { optionText } from '../../i18n';
import { BUILT_IN_PRESETS, getAvailablePresets } from '../../presets';
import type { CleaningType, PresetConfig } from '../../types';
import { IconPicker } from '../fields';
import { PresetScripts } from '../PresetScripts';
import { move, type SectionProps } from './shared';

// Internal Roborock values that the app doesn't offer as choices.
const HIDDEN = new Set(['off', 'custom', 'smart_mode', 'off_raise_main_brush', 'custom_water_flow']);
const ROUTES = ['fast', 'standard', 'deep', 'deep_plus'];
const TYPES: CleaningType[] = ['vacuum', 'mop', 'vacuum_and_mop', 'vacuum_then_mop'];
const BUILT_IN_LABELS = {
  smartplan: 'strategySmartPlan',
  vacuum_only: 'type_vacuum',
  mop_only: 'type_mop',
  vacuum_and_mop: 'type_vacuum_and_mop',
  vacuum_then_mop: 'type_vacuum_then_mop',
} as const;

function OptionSelect({ label, value, options, language, notSet, onChange }: {
  label: string;
  value?: string;
  options: string[];
  language: SectionProps['language'];
  notSet: string;
  onChange: (value?: string) => void;
}) {
  return (
    <label>{label}
      <select value={value ?? ''} onChange={(event) => onChange(event.target.value || undefined)}>
        <option value="">{notSet}</option>
        {options.map((option) => <option key={option} value={option}>{optionText(language, option)}</option>)}
        {value && !options.includes(value) && <option value={value}>{value}</option>}
      </select>
    </label>
  );
}

function PresetCard({ hass, config, language, t, onChange, preset, index }: SectionProps & { preset: PresetConfig; index: number }) {
  const presets = config.presets ?? [];
  const capabilities = detectCapabilities(hass, config);
  const update = (patch: Partial<PresetConfig>) => onChange({ ...config, presets: presets.map((item, position) => (position === index ? { ...preset, ...patch } : item)) });
  const custom = preset.strategy === 'custom';
  const type = preset.cleaning_type ?? 'vacuum_and_mop';
  const water = custom && type !== 'vacuum' && type !== 'vacuum_then_mop';

  return (
    <article className="editor-card">
      <div className="editor-heading"><strong>{preset.name}</strong><div>
        <button type="button" aria-label={t('moveUp')} disabled={index === 0} onClick={() => onChange({ ...config, presets: move(presets, index, index - 1) })}><ArrowUp /></button>
        <button type="button" aria-label={t('moveDown')} disabled={index === presets.length - 1} onClick={() => onChange({ ...config, presets: move(presets, index, index + 1) })}><ArrowDown /></button>
        <button type="button" aria-label={t('remove')} onClick={() => onChange({ ...config, presets: presets.filter((_, position) => position !== index) })}><Trash2 /></button>
      </div></div>
      <div className="editor-grid">
        <label>{t('id')}<input value={preset.id} onChange={(event) => update({ id: event.target.value })} /></label>
        <label>{t('name')}<input value={preset.name} onChange={(event) => update({ name: event.target.value })} /></label>
        <label>{t('icon')}<IconPicker hass={hass} value={preset.icon} onChange={(icon) => update({ icon })} /></label>
        <label>{t('strategy')}
          <select value={preset.strategy} onChange={(event) => update({ strategy: event.target.value as PresetConfig['strategy'] })}>
            <option value="custom">{t('strategyCustom')}</option>
            <option value="smartplan">{t('strategySmartPlan')}</option>
          </select>
        </label>
        {custom && (
          <label>{t('cleaningType')}
            <select value={type} onChange={(event) => update({ cleaning_type: event.target.value as CleaningType })}>
              {TYPES.map((item) => <option key={item} value={item}>{t(`type_${item}`)}</option>)}
            </select>
          </label>
        )}
        {custom && type !== 'mop' && type !== 'vacuum_then_mop' && (
          <OptionSelect label={t('suction')} value={preset.fan_speed} options={capabilities.fanSpeeds.filter((item) => !HIDDEN.has(item))} language={language} notSet={t('notSet')} onChange={(fan_speed) => update({ fan_speed })} />
        )}
        {water && (
          <>
            <OptionSelect label={t('route')} value={preset.mop_mode} options={ROUTES.filter((item) => capabilities.mopModes.includes(item))} language={language} notSet={t('notSet')} onChange={(mop_mode) => update({ mop_mode })} />
            <OptionSelect label={t('water')} value={preset.mop_intensity} options={capabilities.mopIntensities.filter((item) => !HIDDEN.has(item))} language={language} notSet={t('notSet')} onChange={(mop_intensity) => update({ mop_intensity })} />
          </>
        )}
        {custom && type !== 'vacuum_then_mop' && (
          <label>{t('count')}
            <select value={preset.cleaning_count ?? 1} onChange={(event) => update({ cleaning_count: Number(event.target.value) as 1 | 2 })}>
              <option value="1">1</option><option value="2">2</option>
            </select>
          </label>
        )}
      </div>
    </article>
  );
}

export function PresetsSection(props: SectionProps) {
  const { hass, config, t, onChange } = props;
  const presets = config.presets ?? [];
  const builtIns = getAvailablePresets({ ...config, presets: [] }, detectCapabilities(hass, config));
  const addPreset = () => onChange({
    ...config,
    presets: [...presets, { id: `preset_${presets.length + 1}`, name: t('newPreset'), icon: 'mdi:tune', strategy: 'custom', cleaning_type: 'vacuum_and_mop', cleaning_count: 1 }],
  });
  return (
    <>
      <label>{t('defaultPreset')}
        <select value={config.default_preset ?? 'vacuum_only'} onChange={(event) => onChange({ ...config, default_preset: event.target.value })}>
          {BUILT_IN_PRESETS.map((preset) => {
            const available = builtIns.find((item) => item.preset.id === preset.id)?.available ?? false;
            const label = BUILT_IN_LABELS[preset.id as keyof typeof BUILT_IN_LABELS];
            return <option key={preset.id} value={preset.id} disabled={!available}>{label ? t(label) : preset.name}</option>;
          })}
          {presets.map((preset) => <option key={preset.id} value={preset.id}>{preset.name}</option>)}
        </select>
      </label>
      {presets.map((preset, index) => <PresetCard key={`${preset.id}-${index}`} {...props} preset={preset} index={index} />)}
      <button type="button" onClick={addPreset}><Plus /> {t('addPreset')}</button>
      <PresetScripts {...props} />
    </>
  );
}

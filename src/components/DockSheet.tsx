import { Droplets, Lock, Trash2, Waves, Wind, X } from 'lucide-react';
import type { ReactNode } from 'react';
import { t } from '../i18n';
import type {
  DockAction,
  DockSettingKey,
  HomeAssistant,
  Language,
  RoborockVacuumMapCardConfig,
} from '../types';

interface DockSheetProps {
  hass: HomeAssistant;
  config: RoborockVacuumMapCardConfig;
  language?: Language;
  washing: boolean;
  emptying: boolean;
  drying: boolean;
  dryingRemaining?: string;
  pending?: string;
  onClose: () => void;
  onAction: (action: DockAction, active: boolean) => void;
  onSetting: (setting: DockSettingKey, value: string | boolean) => void;
  onChildLock: (enabled: boolean) => void;
}

const OPTIONS: Record<Exclude<DockSettingKey, 'auto_empty' | 'auto_dry'>, string[]> = {
  mop_wash_frequency: ['smart', '10_min', '15_min', '20_min', '25_min', '30_min'],
  wash_mode: ['smart', 'light', 'balanced', 'deep'],
  wash_temperature: ['normal', 'warm', 'hot'],
  empty_mode: ['smart', 'light', 'balanced', 'max'],
  dry_duration: ['2h', '3h', '4h'],
};

const FALLBACKS: Record<DockSettingKey, string | boolean> = {
  mop_wash_frequency: 'smart',
  wash_mode: 'smart',
  wash_temperature: 'hot',
  auto_empty: false,
  empty_mode: 'smart',
  auto_dry: true,
  dry_duration: '3h',
};

const ENTITY_KEYS: Record<DockSettingKey, keyof NonNullable<RoborockVacuumMapCardConfig['entities']>> = {
  mop_wash_frequency: 'dock_mop_wash_frequency',
  wash_mode: 'dock_wash_mode',
  wash_temperature: 'dock_wash_temperature',
  auto_empty: 'dock_auto_empty',
  empty_mode: 'dock_empty_mode',
  auto_dry: 'dock_auto_dry',
  dry_duration: 'dock_dry_duration',
};

function currentSetting(
  hass: HomeAssistant,
  config: RoborockVacuumMapCardConfig,
  setting: DockSettingKey,
): string | boolean {
  const entityId = config.entities?.[ENTITY_KEYS[setting]];
  const state = entityId ? hass.states[entityId]?.state : undefined;
  if (!state || ['unknown', 'unavailable'].includes(state)) return FALLBACKS[setting];
  if (setting === 'auto_empty' || setting === 'auto_dry') return state === 'on';
  return state;
}

function optionLabel(language: Language | undefined, value: string): string {
  const labels: Record<string, [string, string]> = {
    smart: ['Smart', 'Slim'],
    light: ['Light', 'Licht'],
    balanced: ['Balanced', 'Gebalanceerd'],
    deep: ['Deep', 'Diep'],
    max: ['Max', 'Max'],
    normal: ['Normal', 'Normaal'],
    warm: ['Warm', 'Warm'],
    hot: ['High temperature', 'Hoge temperatuur'],
    '2h': ['2 hours', '2 uur'],
    '3h': ['3 hours · Standard', '3 uur · Standaard'],
    '4h': ['4 hours', '4 uur'],
  };
  if (value.endsWith('_min')) return `${value.replace('_min', '')} min`;
  return labels[value]?.[language === 'nl' ? 1 : 0] ?? value;
}

function SettingSelect({
  label,
  setting,
  value,
  language,
  disabled,
  onChange,
}: {
  label: string;
  setting: Exclude<DockSettingKey, 'auto_empty' | 'auto_dry'>;
  value: string;
  language?: Language;
  disabled: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <label className="dock-setting-row">
      <span>{label}</span>
      <select aria-label={label} value={value} disabled={disabled} onChange={(event) => onChange(event.target.value)}>
        {OPTIONS[setting].map((option) => <option key={option} value={option}>{optionLabel(language, option)}</option>)}
      </select>
    </label>
  );
}

function SettingToggle({
  label,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  checked: boolean;
  disabled: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div className="dock-setting-row">
      <span>{label}</span>
      <button
        type="button"
        role="switch"
        aria-label={label}
        aria-checked={checked}
        className={`dock-toggle ${checked ? 'active' : ''}`}
        disabled={disabled}
        onClick={() => onChange(!checked)}
      >
        <span />
      </button>
    </div>
  );
}

export function DockSheet({
  hass,
  config,
  language,
  washing,
  emptying,
  drying,
  dryingRemaining,
  pending,
  onClose,
  onAction,
  onSetting,
  onChildLock,
}: DockSheetProps) {
  const disabled = Boolean(pending);
  const childLockEntity = config.entities?.dock_child_lock;
  const childLock = childLockEntity ? hass.states[childLockEntity]?.state === 'on' : false;
  const mopWashFrequency = String(currentSetting(hass, config, 'mop_wash_frequency'));
  const washMode = String(currentSetting(hass, config, 'wash_mode'));
  const washTemperature = String(currentSetting(hass, config, 'wash_temperature'));
  const autoEmpty = Boolean(currentSetting(hass, config, 'auto_empty'));
  const emptyMode = String(currentSetting(hass, config, 'empty_mode'));
  const autoDry = Boolean(currentSetting(hass, config, 'auto_dry'));
  const dryDuration = String(currentSetting(hass, config, 'dry_duration'));

  const actions: Array<{ action: DockAction; label: string; active: boolean; icon: ReactNode; detail?: string }> = [
    { action: 'empty', label: t(language, 'empty'), active: emptying, icon: <Trash2 />, detail: optionLabel(language, emptyMode) },
    { action: 'wash', label: t(language, 'wash'), active: washing, icon: <Waves />, detail: `${optionLabel(language, washMode)} · ${optionLabel(language, washTemperature)}` },
    { action: 'dry', label: t(language, 'dry'), active: drying, icon: <Wind />, detail: drying ? dryingRemaining : optionLabel(language, dryDuration) },
  ];

  return (
    <div className="sheet-layer" role="presentation">
      <button type="button" className="sheet-backdrop" aria-label={t(language, 'close')} onClick={onClose} />
      <section className="job-sheet dock-sheet" role="dialog" aria-modal="true" aria-labelledby="dock-sheet-title">
        <div className="sheet-handle" />
        <header>
          <div>
            <h2 id="dock-sheet-title">{t(language, 'dockStation')}</h2>
            <p>{t(language, 'dockOverview')}</p>
          </div>
          <button type="button" className="icon-button" aria-label={t(language, 'close')} onClick={onClose}><X /></button>
        </header>

        <div className="sheet-body dock-sheet-body">
          <div className="dock-actions">
            {actions.map((item) => (
              <button
                type="button"
                key={item.action}
                className={item.active ? 'active' : ''}
                disabled={disabled}
                onClick={() => onAction(item.action, item.active)}
              >
                <span className="dock-action-icon">{item.icon}</span>
                <strong>{item.active ? t(language, 'stop') : item.label}</strong>
                <small>{item.active ? t(language, 'active') : item.detail}</small>
              </button>
            ))}
          </div>

          <section className="dock-settings-group">
            <h3><Waves />{t(language, 'dockSettings')}</h3>
            <SettingSelect label={t(language, 'mopWashFrequency')} setting="mop_wash_frequency" value={mopWashFrequency} language={language} disabled={disabled} onChange={(value) => onSetting('mop_wash_frequency', value)} />
            <SettingSelect label={t(language, 'washingMode')} setting="wash_mode" value={washMode} language={language} disabled={disabled} onChange={(value) => onSetting('wash_mode', value)} />
            <SettingSelect label={t(language, 'washTemperature')} setting="wash_temperature" value={washTemperature} language={language} disabled={disabled} onChange={(value) => onSetting('wash_temperature', value)} />
          </section>

          <section className="dock-settings-group">
            <h3><Trash2 />{t(language, 'dustbin')}</h3>
            <SettingToggle label={t(language, 'autoEmpty')} checked={autoEmpty} disabled={disabled} onChange={(value) => onSetting('auto_empty', value)} />
            <SettingSelect label={t(language, 'emptyMode')} setting="empty_mode" value={emptyMode} language={language} disabled={disabled} onChange={(value) => onSetting('empty_mode', value)} />
          </section>

          <section className="dock-settings-group">
            <h3><Wind />{t(language, 'drying')}</h3>
            <SettingToggle label={t(language, 'autoDry')} checked={autoDry} disabled={disabled} onChange={(value) => onSetting('auto_dry', value)} />
            <SettingSelect label={t(language, 'dryDuration')} setting="dry_duration" value={dryDuration} language={language} disabled={disabled} onChange={(value) => onSetting('dry_duration', value)} />
          </section>

          <section className="dock-settings-group">
            <h3><Lock />{t(language, 'safetyMaintenance')}</h3>
            {childLockEntity && <SettingToggle label={t(language, 'childLock')} checked={childLock} disabled={disabled} onChange={onChildLock} />}
            <button type="button" className="drain-button" disabled={disabled} onClick={() => onAction('drain', false)}>
              <Droplets />
              <span><strong>{t(language, 'drainWaterTank')}</strong><small>{t(language, 'drainWarning')}</small></span>
            </button>
          </section>

          {pending && <p className="dock-pending" role="status">{pending}</p>}
        </div>
      </section>
    </div>
  );
}

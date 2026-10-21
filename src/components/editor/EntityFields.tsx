import type { EditorKey } from '../../i18n/editor';
import type { RoborockEntityConfig } from '../../types';
import { EntityPicker } from '../fields';
import type { EntityField, SectionProps } from './shared';

/**
 * Entity pickers for a list of fields. Each is marked auto-detected when it matches
 * discovery, manual when it differs, and offers the detected entity when it is empty.
 */
export function EntityFields({ hass, config, t, onChange, fields, detected, deviceIds }: SectionProps & {
  fields: EntityField[];
  detected: Partial<RoborockEntityConfig>;
  deviceIds: ReadonlySet<string>;
}) {
  const set = (key: keyof RoborockEntityConfig, value?: string) => onChange({ ...config, entities: { ...config.entities, [key]: value } });
  return (
    <div className="entity-fields">
      {fields.map((item) => {
        const value = config.entities?.[item.key];
        const found = detected[item.key];
        const badge = value && found ? (value === found ? t('autoDetected') : t('manual')) : undefined;
        return (
          <div className="entity-field" key={item.key}>
            <label>
              <span>{t(`entity_${item.key}` as EditorKey)}{badge && <small className={`entity-badge ${value === found ? 'auto' : 'manual'}`}>{badge}</small>}</span>
              <EntityPicker
                hass={hass}
                domains={item.domains}
                value={value}
                deviceIds={item.device ? deviceIds : undefined}
                emptyLabel={t('notConfigured')}
                onChange={(next) => set(item.key, next)}
              />
            </label>
            {!value && found && hass.states[found] && (
              <button type="button" className="link-button" onClick={() => set(item.key, found)}>{t('useDetected', { entity: found })}</button>
            )}
          </div>
        );
      })}
    </div>
  );
}

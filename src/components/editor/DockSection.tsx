import { dockAbilities } from '../../catalog';
import { helperSpecs } from '../../provisioning/helpers';
import type { RoborockEntityConfig } from '../../types';
import { t as cardText, type TranslationKey } from '../../i18n';
import { EntityFields } from './EntityFields';
import { HelperProvisioner } from './HelperProvisioner';
import { fieldsOf, type SectionProps } from './shared';

export function DockSection(props: SectionProps & { model?: string; detected: Partial<RoborockEntityConfig>; deviceIds: ReadonlySet<string> }) {
  const { hass, config, language, t, model } = props;
  const vacuumName = String(hass.states[config.entity]?.attributes.friendly_name ?? config.name ?? 'Roborock');
  const specs = helperSpecs(config.entity, vacuumName, { dock: dockAbilities(model) });
  return (
    <>
      <h4>{t('dockHelpers')}</h4>
      <p className="editor-hint">{t('dockHelpersHint')}</p>
      <EntityFields {...props} fields={fieldsOf('helpers')} />
      <HelperProvisioner {...props} specs={specs} />
      <h4>{t('maintenanceParts')}</h4>
      {config.consumables?.length
        ? <ul className="consumable-list">{config.consumables.map((item) => <li key={item.kind}>{cardText(language, `consumable_${item.kind}` as TranslationKey)} · <code>{item.sensor}</code></li>)}</ul>
        : <p className="editor-hint">{t('noConsumables')}</p>}
    </>
  );
}

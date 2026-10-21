import { BLUEPRINTS, blueprintImportUrl } from '../../blueprints';
import type { RoborockEntityConfig } from '../../types';
import { EntityFields } from './EntityFields';
import { fieldsOf, type EntityGroup, type SectionProps } from './shared';

const GROUPS: EntityGroup[] = ['robot', 'status', 'dock', 'legacy'];

/** Every Roborock entity the card uses; normally filled in by discovery. */
export function AdvancedSection(props: SectionProps & { detected: Partial<RoborockEntityConfig>; deviceIds: ReadonlySet<string> }) {
  const { t } = props;
  return (
    <>
      <p className="editor-hint">{t('advancedIntro')}</p>
      {GROUPS.map((group) => (
        <fieldset className="entity-group" key={group}>
          <legend>{t(`group_${group}` as 'group_robot')}</legend>
          <EntityFields {...props} fields={fieldsOf(group)} />
          {group === 'legacy' && (
            <p className="editor-hint">{t('blueprintsHint')} <a href={blueprintImportUrl(BLUEPRINTS.vacuum_then_mop.file)} target="_blank" rel="noreferrer">{BLUEPRINTS.vacuum_then_mop.label}</a></p>
          )}
        </fieldset>
      ))}
    </>
  );
}

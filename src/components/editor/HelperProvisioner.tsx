import { useEffect, useState } from 'react';
import { createHelpers, helpersYaml, planHelpers, type HelperSpec } from '../../provisioning/helpers';
import type { SectionProps } from './shared';

/**
 * Wires existing helpers into the config and creates the missing ones (administrators)
 * or shows configuration.yaml for others.
 */
export function HelperProvisioner({ hass, config, t, onChange, specs }: SectionProps & { specs: HelperSpec[] }) {
  const plan = planHelpers(hass, config, specs);
  const [status, setStatus] = useState<string>();
  const [busy, setBusy] = useState(false);
  const admin = hass.user?.is_admin !== false && Boolean(hass.callWS);
  const existingKey = JSON.stringify(plan.existing);

  useEffect(() => {
    const missing = Object.entries(plan.existing).filter(([key]) => !config.entities?.[key as keyof typeof plan.existing]);
    if (missing.length > 0) onChange({ ...config, entities: { ...config.entities, ...Object.fromEntries(missing) } });
    // Runs when the set of existing helpers changes, not on every config edit.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [existingKey]);

  const create = async () => {
    setBusy(true);
    try {
      const entities = await createHelpers(hass, plan);
      onChange({ ...config, entities: { ...config.entities, ...entities } });
      setStatus(t('helpersCreated', { n: plan.create.length }));
    } catch (error) {
      setStatus(t('helpersFailed', { error: error instanceof Error ? error.message : String(error) }));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="helper-provisioner">
      {plan.create.length === 0
        ? <p>{t('helpersInPlace', { n: specs.length })}</p>
        : (
          <>
            <p>{t('helpersMissing', { n: plan.create.length, names: plan.create.map((spec) => spec.name).join(', ') })}</p>
            {admin
              ? <button type="button" className="primary" disabled={busy} onClick={create}>{t('createHelpers', { n: plan.create.length })}</button>
              : <><p>{t('helpersYaml')}</p><pre className="yaml-preview">{helpersYaml(plan.create)}</pre></>}
          </>
        )}
      {plan.mismatched.map((item) => <p key={item.key} className="wizard-warning">{t('helperMismatch', { entity: item.entity_id, options: item.missing.join(', ') })}</p>)}
      {status && <p role="status">{status}</p>}
    </div>
  );
}

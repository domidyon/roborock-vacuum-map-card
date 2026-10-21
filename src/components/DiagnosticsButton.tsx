import { ClipboardCopy } from 'lucide-react';
import { useState } from 'react';
import { buildDiagnostics, copyDiagnostics } from '../diagnostics';
import type { HomeAssistant } from '../types';

/** Copies redacted diagnostics for a bug or model report; shows them when copying fails. */
export function DiagnosticsButton({ hass, config, labels }: {
  hass: HomeAssistant;
  config: unknown;
  labels: { copy: string; copied: string; manual: string };
}) {
  const [result, setResult] = useState<{ copied: boolean; text: string }>();
  const copy = async () => {
    const text = JSON.stringify(buildDiagnostics(hass, config), null, 2);
    setResult({ copied: await copyDiagnostics(text), text });
  };
  return (
    <div className="diagnostics">
      <button type="button" className="secondary" onClick={copy}><ClipboardCopy /> {labels.copy}</button>
      {result?.copied && <p role="status">{labels.copied}</p>}
      {result && !result.copied && (
        <>
          <p role="status">{labels.manual}</p>
          <textarea className="yaml-preview" readOnly rows={8} value={result.text} onFocus={(event) => event.currentTarget.select()} />
        </>
      )}
    </div>
  );
}

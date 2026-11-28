import type { ReactNode } from 'react';

/**
 * Line icons drawn after the Roborock app's job settings (suction levels, mop routes,
 * water flow), so a schedule reads like the app. Stroke icons on a 24×24 grid.
 */
const point = (radius: number, degrees: number) => {
  const radians = (degrees * Math.PI) / 180;
  return `${(12 + radius * Math.cos(radians)).toFixed(2)} ${(12 + radius * Math.sin(radians)).toFixed(2)}`;
};

/** Pinwheel blades: each curves from the hub out to the rim. */
function blades(count: number): ReactNode {
  return Array.from({ length: count }, (_, index) => {
    const start = -90 + (360 / count) * index;
    return <path key={index} d={`M${point(2, start)}A5.6 5.6 0 0 1 ${point(7.6, start + 115)}`} />;
  });
}

/** Rim arcs with a hook towards the hub, like the app's stronger suction levels. */
function rim(count: number): ReactNode {
  const span = 360 / count;
  return (
    <>
      {Array.from({ length: count }, (_, index) => {
        const start = -90 + span * index;
        const end = start + span - 34;
        return <path key={index} d={`M${point(7.6, start)}A7.6 7.6 0 0 1 ${point(7.6, end)}L${point(4.4, end + 14)}`} />;
      })}
    </>
  );
}

const ICONS: Record<string, ReactNode> = {
  quiet: <path d="M19.5 14.6A7.8 7.8 0 1 1 9.4 4.5a6.2 6.2 0 0 0 10.1 10.1Z" />,
  balanced: blades(3),
  turbo: rim(3),
  max: rim(4),
  max_plus: <path d="M4.5 6.5h15M6.5 10h11M8.5 13.5h7M10 17h4M11.2 20.2h1.6" />,
  fast: <path d="M7 5.5v9.5a2.5 2.5 0 0 0 5 0V9a2.5 2.5 0 0 1 5 0v9.5" />,
  standard: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <path d="M8.5 7.5v7a1.75 1.75 0 0 0 3.5 0v-5a1.75 1.75 0 0 1 3.5 0v7" />
    </>
  ),
  deep: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <path d="M7.5 7.5v7.5a1.25 1.25 0 0 0 2.5 0V9a1.25 1.25 0 0 1 2.5 0v6a1.25 1.25 0 0 0 2.5 0V9a1.25 1.25 0 0 1 2.5 0v7.5" />
    </>
  ),
  water_low: (
    <>
      <path d="M12 4s-5 5.6-5 9.3a5 5 0 0 0 10 0C17 9.6 12 4 12 4Z" />
      <path d="M7.4 14.5h9.2" />
    </>
  ),
  water_high: (
    <>
      <path d="M12 4s-5 5.6-5 9.3a5 5 0 0 0 10 0C17 9.6 12 4 12 4Z" />
      <path d="M8.2 11h7.6" />
    </>
  ),
  smart_mode: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" rx="3" />
      <path d="M7.5 15.5 9.6 8.5l2.1 7M8.3 13.2h2.6M15 8.5v7" />
    </>
  ),
};
ICONS.deep_plus = ICONS.deep;

export function AppIcon({ name }: { name: string }) {
  const icon = ICONS[name];
  if (!icon) return null;
  return (
    <svg className="app-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icon}
    </svg>
  );
}

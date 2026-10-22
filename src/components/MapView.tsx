import { useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { Eraser, Lock, LockOpen, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';
import { TransformComponent, TransformWrapper, useControls } from 'react-zoom-pan-pinch';
import { clampMapZone, createRoomPath, configuredRoomMap, normalizeMapZone, parseCalibrationPoints, parseRooms, roomCenter } from '../map';
import { areaMissing } from '../health';
import { t } from '../i18n';
import type { FloorConfig, HomeAssistant, Language, MapZone, SelectionMode } from '../types';
import { HaIcon } from './HaIcon';

const MIN_ZONE_SIZE = 24;
type ZoneHandle = 'nw' | 'ne' | 'se' | 'sw';
type ZoneDrag = {
  pointerId: number;
  kind: 'create' | 'move' | 'resize';
  origin: { x: number; y: number };
  initial?: MapZone;
  handle?: ZoneHandle;
};

interface MapViewProps {
  hass: HomeAssistant;
  floor: FloorConfig;
  language?: Language;
  selected: Set<number>;
  launched: Set<number>;
  active?: boolean;
  disabled?: boolean;
  selectionMode: SelectionMode;
  zone?: MapZone;
  zoneLaunched?: boolean;
  onToggle: (segmentId: number) => void;
  onZoneChange: (zone?: MapZone) => void;
}

function Controls({ locked, zoneMode, hasZone, disabled, clearZoneLabel, onToggleLock, onClearZone }: {
  locked: boolean;
  zoneMode: boolean;
  hasZone: boolean;
  disabled?: boolean;
  clearZoneLabel?: string;
  onToggleLock: () => void;
  onClearZone: () => void;
}) {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <div className="map-controls">
      <button type="button" aria-label="Zoom in" onClick={() => zoomIn()} disabled={locked || zoneMode}><ZoomIn /></button>
      <button type="button" aria-label="Zoom out" onClick={() => zoomOut()} disabled={locked || zoneMode}><ZoomOut /></button>
      <button type="button" aria-label="Reset zoom" onClick={() => resetTransform()}><RotateCcw /></button>
      {zoneMode ? (
        <button type="button" aria-label={clearZoneLabel} onClick={onClearZone} disabled={!hasZone || disabled}><Eraser /></button>
      ) : (
        <button type="button" aria-label={locked ? 'Unlock map' : 'Lock map'} onClick={onToggleLock}>
          {locked ? <Lock /> : <LockOpen />}
        </button>
      )}
    </div>
  );
}

function defaultZoneAt(point: { x: number; y: number }, width: number, height: number): MapZone {
  const size = Math.min(Math.min(width, height), Math.max(MIN_ZONE_SIZE, Math.min(width, height) * 0.22));
  return clampMapZone({
    x1: point.x - size / 2,
    y1: point.y - size / 2,
    x2: point.x + size / 2,
    y2: point.y + size / 2,
  }, width, height);
}

export function MapView({
  hass,
  floor,
  language,
  selected,
  launched,
  active,
  disabled,
  selectionMode,
  zone,
  zoneLaunched,
  onToggle,
  onZoneChange,
}: MapViewProps) {
  const [locked, setLocked] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
  const [refreshTick, setRefreshTick] = useState(0);
  // The image URL that failed to load, and how often the user retried.
  const [failedUrl, setFailedUrl] = useState<string>();
  const [retries, setRetries] = useState(0);
  const shellRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<ZoneDrag | undefined>(undefined);
  const zoneRef = useRef(zone);
  const entity = hass.states[floor.map_entity];
  const rooms = useMemo(() => parseRooms(entity), [entity]);
  const calibration = useMemo(() => parseCalibrationPoints(entity), [entity]);
  const configured = useMemo(() => configuredRoomMap(floor), [floor]);
  const imagePath = typeof entity?.attributes.entity_picture === 'string' ? entity.attributes.entity_picture : undefined;
  const normalizedZone = zone ? normalizeMapZone(zone) : undefined;

  useEffect(() => {
    zoneRef.current = zone;
  }, [zone]);

  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setRefreshTick((n) => n + 1), 5000);
    return () => { clearInterval(id); setRefreshTick(0); };
  }, [active]);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;
    const observer = new ResizeObserver(([entry]) => {
      setContainerDimensions({ width: entry.contentRect.width, height: entry.contentRect.height });
    });
    observer.observe(shell);
    return () => observer.disconnect();
  }, []);

  let error: string | undefined;
  if (!entity || entity.state === 'unavailable') error = t(language, 'mapMissing');
  else if (!imagePath) error = t(language, 'imageMissing');
  else if (calibration.length < 3) error = t(language, 'calibrationMissing');
  else if (selectionMode === 'rooms' && rooms.length === 0) error = t(language, 'roomsMissing');

  if (error) {
    return <div className="map-error" role="alert">{error}</div>;
  }
  const imageUrl = (() => {
    const base = hass.hassUrl(imagePath!);
    if (base.startsWith('data:')) return base;
    const sep = base.includes('?') ? '&' : '?';
    const version = entity?.last_updated ?? entity?.state ?? '';
    return `${base}${sep}v=${encodeURIComponent(version)}${active ? `&r=${refreshTick}` : ''}${retries ? `&retry=${retries}` : ''}`;
  })();
  if (failedUrl === imageUrl) {
    return (
      <div className="map-error" role="alert">
        {t(language, 'mapLoadFailed')}
        <button type="button" className="secondary" onClick={() => { setRetries(retries + 1); setFailedUrl(undefined); }}>{t(language, 'retry')}</button>
      </div>
    );
  }

  return (
    <div className={`map-shell ${selectionMode === 'zone' ? 'zone-mode' : ''}`} ref={shellRef}>
      <TransformWrapper
        initialScale={1}
        minScale={0.75}
        maxScale={4}
        centerOnInit
        wheel={{ disabled: locked || selectionMode === 'zone', step: 0.08 }}
        pinch={{ disabled: locked || selectionMode === 'zone' }}
        panning={{ disabled: locked || selectionMode === 'zone', excluded: ['room-hitbox'] }}
        doubleClick={{ disabled: true }}
      >
        <Controls
          locked={locked}
          zoneMode={selectionMode === 'zone'}
          hasZone={Boolean(zone)}
          disabled={disabled}
          clearZoneLabel={t(language, 'clearZone')}
          onToggleLock={() => setLocked((value) => !value)}
          onClearZone={() => onZoneChange(undefined)}
        />
        <TransformComponent wrapperClass="map-transform" contentClass="map-content">
          <div
            className="map-image-wrap"
            style={(() => {
              if (!dimensions.width || !dimensions.height || !containerDimensions.width || !containerDimensions.height) return undefined;
              const scale = Math.min(containerDimensions.width / dimensions.width, containerDimensions.height / dimensions.height);
              return { width: dimensions.width * scale, height: dimensions.height * scale };
            })()}
          >
            <img
              src={imageUrl}
              alt={`${floor.name} vacuum map`}
              draggable={false}
              onLoad={(event) => setDimensions({ width: event.currentTarget.naturalWidth, height: event.currentTarget.naturalHeight })}
              onError={() => setFailedUrl(imageUrl)}
            />
            {!dimensions.width && <div className="map-loading" role="status">{t(language, 'mapLoading')}</div>}
            {dimensions.width > 0 && dimensions.height > 0 && <svg
              className={`room-overlay ${selectionMode === 'zone' ? 'drawing-zone' : ''}`}
              viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
              preserveAspectRatio="xMidYMid meet"
              aria-label={selectionMode === 'zone' ? `${floor.name} zone map` : `${floor.name} rooms`}
              onPointerDown={(event: ReactPointerEvent<SVGSVGElement>) => {
                if (selectionMode !== 'zone' || disabled) return;
                const rect = event.currentTarget.getBoundingClientRect();
                if (!rect.width || !rect.height) return;
                const point = {
                  x: Math.min(dimensions.width, Math.max(0, ((event.clientX - rect.left) / rect.width) * dimensions.width)),
                  y: Math.min(dimensions.height, Math.max(0, ((event.clientY - rect.top) / rect.height) * dimensions.height)),
                };
                const target = event.target as SVGElement;
                const handle = target.dataset.zoneHandle as ZoneHandle | undefined;
                const kind = handle ? 'resize' : target.dataset.zoneMove === 'true' && zone ? 'move' : 'create';
                dragRef.current = { pointerId: event.pointerId, kind, origin: point, initial: zone, handle };
                event.currentTarget.setPointerCapture?.(event.pointerId);
                if (kind === 'create') {
                  const next = { x1: point.x, y1: point.y, x2: point.x, y2: point.y };
                  zoneRef.current = next;
                  onZoneChange(next);
                }
                event.preventDefault();
              }}
              onPointerMove={(event: ReactPointerEvent<SVGSVGElement>) => {
                const drag = dragRef.current;
                if (!drag || drag.pointerId !== event.pointerId || disabled) return;
                const rect = event.currentTarget.getBoundingClientRect();
                if (!rect.width || !rect.height) return;
                const point = {
                  x: Math.min(dimensions.width, Math.max(0, ((event.clientX - rect.left) / rect.width) * dimensions.width)),
                  y: Math.min(dimensions.height, Math.max(0, ((event.clientY - rect.top) / rect.height) * dimensions.height)),
                };
                let next: MapZone;
                if (drag.kind === 'create') {
                  next = normalizeMapZone({ x1: drag.origin.x, y1: drag.origin.y, x2: point.x, y2: point.y });
                } else if (drag.kind === 'move' && drag.initial) {
                  const dx = point.x - drag.origin.x;
                  const dy = point.y - drag.origin.y;
                  next = clampMapZone({
                    x1: drag.initial.x1 + dx,
                    y1: drag.initial.y1 + dy,
                    x2: drag.initial.x2 + dx,
                    y2: drag.initial.y2 + dy,
                  }, dimensions.width, dimensions.height);
                } else if (drag.initial && drag.handle) {
                  next = { ...drag.initial };
                  if (drag.handle.includes('w')) next.x1 = point.x;
                  if (drag.handle.includes('e')) next.x2 = point.x;
                  if (drag.handle.includes('n')) next.y1 = point.y;
                  if (drag.handle.includes('s')) next.y2 = point.y;
                  next = clampMapZone(next, dimensions.width, dimensions.height);
                } else return;
                zoneRef.current = next;
                onZoneChange(next);
                event.preventDefault();
              }}
              onPointerUp={(event: ReactPointerEvent<SVGSVGElement>) => {
                const drag = dragRef.current;
                if (!drag || drag.pointerId !== event.pointerId) return;
                const current = zoneRef.current && normalizeMapZone(zoneRef.current);
                if (drag.kind === 'create' && current && (
                  current.x2 - current.x1 < MIN_ZONE_SIZE || current.y2 - current.y1 < MIN_ZONE_SIZE
                )) {
                  const next = defaultZoneAt(drag.origin, dimensions.width, dimensions.height);
                  zoneRef.current = next;
                  onZoneChange(next);
                }
                dragRef.current = undefined;
                event.currentTarget.releasePointerCapture?.(event.pointerId);
                event.preventDefault();
              }}
              onPointerCancel={(event: ReactPointerEvent<SVGSVGElement>) => {
                dragRef.current = undefined;
                event.currentTarget.releasePointerCapture?.(event.pointerId);
              }}
            >
              {rooms.filter((room) => !configured.get(room.segment_id)?.hidden).map((room) => {
                const config = configured.get(room.segment_id);
                const missingArea = config ? areaMissing(hass, config) : false;
                const mapped = Boolean(config?.area_id) && !missingArea;
                const reason = missingArea ? t(language, 'roomAreaMissing') : t(language, 'roomUnmapped');
                const isSelected = selected.has(room.segment_id);
                const isLaunched = launched.has(room.segment_id);
                const center = roomCenter(room, calibration);
                const label = config?.name || room.source_name;
                const roomDisabled = disabled || selectionMode === 'zone' || !mapped;
                return (
                  <g key={room.segment_id} className={`room ${isSelected ? 'selected' : ''} ${isLaunched ? 'launched' : ''} ${!mapped ? 'unmapped' : ''}`}>
                    <path
                      className="room-hitbox"
                      d={createRoomPath(room, calibration)}
                      role="button"
                      tabIndex={roomDisabled ? -1 : 0}
                      aria-label={`${label}${!mapped ? ` — ${reason}` : ''}`}
                      aria-pressed={isSelected}
                      aria-disabled={roomDisabled}
                      onClick={() => !roomDisabled && onToggle(room.segment_id)}
                      onKeyDown={(event) => {
                        if (!roomDisabled && (event.key === 'Enter' || event.key === ' ')) {
                          event.preventDefault();
                          onToggle(room.segment_id);
                        }
                      }}
                    >
                      <title>{!mapped ? `${label}: ${reason}` : label}</title>
                    </path>
                    <g className="room-label" transform={`translate(${center.x} ${center.y})`} pointerEvents="none">
                      <circle r="23" />
                      <foreignObject x="-11" y="-11" width="22" height="22">
                        <HaIcon icon={config?.icon || 'mdi:floor-plan'} />
                      </foreignObject>
                      <text y="39" textAnchor="middle">{label}</text>
                    </g>
                  </g>
                );
              })}
              {selectionMode === 'zone' && normalizedZone && (
                <g className={`zone-selection ${zoneLaunched ? 'launched' : ''}`}>
                  <rect
                    className="zone-rectangle"
                    data-zone-move="true"
                    x={normalizedZone.x1}
                    y={normalizedZone.y1}
                    width={normalizedZone.x2 - normalizedZone.x1}
                    height={normalizedZone.y2 - normalizedZone.y1}
                    role="img"
                    aria-label={t(language, 'selectedZone')}
                  />
                  {([
                    ['nw', normalizedZone.x1, normalizedZone.y1],
                    ['ne', normalizedZone.x2, normalizedZone.y1],
                    ['se', normalizedZone.x2, normalizedZone.y2],
                    ['sw', normalizedZone.x1, normalizedZone.y2],
                  ] as Array<[ZoneHandle, number, number]>).map(([handle, cx, cy]) => (
                    <circle
                      className="zone-handle"
                      data-zone-handle={handle}
                      key={handle}
                      cx={cx}
                      cy={cy}
                      r="12"
                      aria-label={`${t(language, 'resizeZone')} ${handle}`}
                    />
                  ))}
                </g>
              )}
            </svg>}
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

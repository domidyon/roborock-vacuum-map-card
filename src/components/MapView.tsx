import { useEffect, useMemo, useRef, useState } from 'react';
import { Lock, LockOpen, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';
import { TransformComponent, TransformWrapper, useControls } from 'react-zoom-pan-pinch';
import { createRoomPath, configuredRoomMap, parseCalibrationPoints, parseRooms, roomCenter } from '../map';
import { t } from '../i18n';
import type { FloorConfig, HomeAssistant, Language } from '../types';
import { HaIcon } from './HaIcon';

interface MapViewProps {
  hass: HomeAssistant;
  floor: FloorConfig;
  language?: Language;
  selected: Set<number>;
  launched: Set<number>;
  active?: boolean;
  disabled?: boolean;
  onToggle: (segmentId: number) => void;
}

function Controls({ locked, onToggleLock }: { locked: boolean; onToggleLock: () => void }) {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <div className="map-controls">
      <button type="button" aria-label="Zoom in" onClick={() => zoomIn()} disabled={locked}><ZoomIn /></button>
      <button type="button" aria-label="Zoom out" onClick={() => zoomOut()} disabled={locked}><ZoomOut /></button>
      <button type="button" aria-label="Reset zoom" onClick={() => resetTransform()}><RotateCcw /></button>
      <button type="button" aria-label={locked ? 'Unlock map' : 'Lock map'} onClick={onToggleLock}>
        {locked ? <Lock /> : <LockOpen />}
      </button>
    </div>
  );
}

export function MapView({ hass, floor, language, selected, launched, active, disabled, onToggle }: MapViewProps) {
  const [locked, setLocked] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
  const [refreshTick, setRefreshTick] = useState(0);
  const shellRef = useRef<HTMLDivElement>(null);
  const entity = hass.states[floor.map_entity];
  const rooms = useMemo(() => parseRooms(entity), [entity]);
  const calibration = useMemo(() => parseCalibrationPoints(entity), [entity]);
  const configured = useMemo(() => configuredRoomMap(floor), [floor]);
  const imagePath = typeof entity?.attributes.entity_picture === 'string' ? entity.attributes.entity_picture : undefined;

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
  else if (rooms.length === 0) error = t(language, 'roomsMissing');

  if (error) {
    return <div className="map-error" role="alert">{error}</div>;
  }

  return (
    <div className="map-shell" ref={shellRef}>
      <TransformWrapper
        initialScale={1}
        minScale={0.75}
        maxScale={4}
        centerOnInit
        wheel={{ disabled: locked, step: 0.08 }}
        pinch={{ disabled: locked }}
        panning={{ disabled: locked, excluded: ['room-hitbox'] }}
        doubleClick={{ disabled: true }}
      >
        <Controls locked={locked} onToggleLock={() => setLocked((value) => !value)} />
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
              src={(() => {
                const base = hass.hassUrl(imagePath!);
                const sep = base.includes('?') ? '&' : '?';
                const version = entity?.last_updated ?? entity?.state ?? '';
                return `${base}${sep}v=${encodeURIComponent(version)}${active ? `&r=${refreshTick}` : ''}`;
              })()}
              alt={`${floor.name} vacuum map`}
              draggable={false}
              onLoad={(event) => setDimensions({ width: event.currentTarget.naturalWidth, height: event.currentTarget.naturalHeight })}
            />
            {dimensions.width > 0 && dimensions.height > 0 && <svg
              className="room-overlay"
              viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
              preserveAspectRatio="xMidYMid meet"
              aria-label={`${floor.name} rooms`}
            >
              {rooms.map((room) => {
                const config = configured.get(room.segment_id);
                const mapped = Boolean(config?.area_id);
                const isSelected = selected.has(room.segment_id);
                const isLaunched = launched.has(room.segment_id);
                const center = roomCenter(room, calibration);
                const label = config?.name || room.source_name;
                const roomDisabled = disabled || !mapped;
                return (
                  <g key={room.segment_id} className={`room ${isSelected ? 'selected' : ''} ${isLaunched ? 'launched' : ''} ${!mapped ? 'unmapped' : ''}`}>
                    <path
                      className="room-hitbox"
                      d={createRoomPath(room, calibration)}
                      role="button"
                      tabIndex={roomDisabled ? -1 : 0}
                      aria-label={`${label}${!mapped ? ` — ${t(language, 'roomUnmapped')}` : ''}`}
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
                      <title>{!mapped ? `${label}: ${t(language, 'roomUnmapped')}` : label}</title>
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
            </svg>}
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

import type { CalibrationPoint, DiscoveredRoom, FloorConfig, HassEntity } from './types';

function finite(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

export function parseCalibrationPoints(entity?: HassEntity): CalibrationPoint[] {
  const raw = entity?.attributes.calibration_points;
  if (!Array.isArray(raw)) return [];
  return raw.flatMap((item) => {
    const point = item as Partial<CalibrationPoint>;
    if (
      !finite(point.vacuum?.x) ||
      !finite(point.vacuum?.y) ||
      !finite(point.map?.x) ||
      !finite(point.map?.y)
    ) {
      return [];
    }
    return [point as CalibrationPoint];
  });
}

export function parseRooms(entity?: HassEntity): DiscoveredRoom[] {
  const raw = entity?.attributes.rooms;
  if (!raw) return [];
  const entries: Array<[string, unknown]> = Array.isArray(raw)
    ? raw.map((room, index) => [String(index), room])
    : typeof raw === 'object'
      ? Object.entries(raw as Record<string, unknown>)
      : [];

  return entries.flatMap(([key, value]) => {
    if (!value || typeof value !== 'object') return [];
    const room = value as Record<string, unknown>;
    const rawId = room.number ?? room.room_id ?? room.segment_id ?? key;
    const segmentId = Number(rawId);
    const x0 = Number(room.x0);
    const y0 = Number(room.y0);
    const x1 = Number(room.x1);
    const y1 = Number(room.y1);
    if (![segmentId, x0, y0, x1, y1].every(Number.isFinite)) return [];
    return [
      {
        segment_id: segmentId,
        source_name: typeof room.name === 'string' ? room.name : `Room ${segmentId}`,
        x0,
        y0,
        x1,
        y1,
      },
    ];
  });
}

export function vacuumToMap(
  vacuumX: number,
  vacuumY: number,
  calibration: CalibrationPoint[],
): { x: number; y: number } {
  if (calibration.length < 3) throw new Error('At least three calibration points are required');
  const [p1, p2, p3] = calibration;
  const vx1 = p2.vacuum.x - p1.vacuum.x;
  const vy1 = p2.vacuum.y - p1.vacuum.y;
  const vx2 = p3.vacuum.x - p1.vacuum.x;
  const vy2 = p3.vacuum.y - p1.vacuum.y;
  const determinant = vx1 * vy2 - vy1 * vx2;
  if (determinant === 0) throw new Error('Calibration points are degenerate');

  const dx = vacuumX - p1.vacuum.x;
  const dy = vacuumY - p1.vacuum.y;
  const a = (dx * vy2 - dy * vx2) / determinant;
  const b = (vx1 * dy - vy1 * dx) / determinant;

  return {
    x: p1.map.x + a * (p2.map.x - p1.map.x) + b * (p3.map.x - p1.map.x),
    y: p1.map.y + a * (p2.map.y - p1.map.y) + b * (p3.map.y - p1.map.y),
  };
}

export function createRoomPath(room: DiscoveredRoom, calibration: CalibrationPoint[]): string {
  const points = [
    vacuumToMap(room.x0, room.y0, calibration),
    vacuumToMap(room.x1, room.y0, calibration),
    vacuumToMap(room.x1, room.y1, calibration),
    vacuumToMap(room.x0, room.y1, calibration),
  ];
  return `${points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ')} Z`;
}

export function roomCenter(room: DiscoveredRoom, calibration: CalibrationPoint[]): { x: number; y: number } {
  return vacuumToMap((room.x0 + room.x1) / 2, (room.y0 + room.y1) / 2, calibration);
}

export function configuredRoomMap(floor: FloorConfig): Map<number, FloorConfig['rooms'][number]> {
  return new Map(floor.rooms.map((room) => [room.segment_id, room]));
}

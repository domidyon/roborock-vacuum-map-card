import type { HomeAssistant, RoborockVacuumMapCardConfig } from '../types';

export const mapImage = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#d9e0e8"/>
  <path d="M120 120h390v260H120zM515 120h240v260H515zM120 385h635v295H120z" fill="#eef2f6" stroke="#7d8793" stroke-width="8"/>
</svg>`)}`;

const downstairsRooms = {
  '1': { x0: 25900, y0: 21500, x1: 28550, y1: 22850, number: 1, name: 'Kitchen' },
  '2': { x0: 22250, y0: 21200, x1: 25850, y1: 23050, number: 2, name: 'Hallway' },
  '4': { x0: 22350, y0: 23100, x1: 28450, y1: 26550, number: 4, name: 'Living room' },
};

const upstairsRooms = {
  '1': { x0: 24200, y0: 22400, x1: 27550, y1: 25050, room_id: 1, name: 'Office' },
  '2': { x0: 27900, y0: 22450, x1: 29650, y1: 24000, room_id: 2, name: 'Bathroom' },
  '3': { x0: 27600, y0: 24050, x1: 29650, y1: 26100, room_id: 3, name: 'Landing' },
  '4': { x0: 24200, y0: 25100, x1: 27650, y1: 28600, room_id: 4, name: 'Bedroom' },
  '5': { x0: 27850, y0: 26150, x1: 29100, y1: 28600, room_id: 5, name: 'Laundry' },
};

export const configFixture: RoborockVacuumMapCardConfig = {
  type: 'custom:roborock-vacuum-map-card',
  entity: 'vacuum.roborock',
  name: 'Qrevo Curv 2 Flow',
  language: 'en',
  entities: {
    map_select: 'select.map',
    cleaning_mode: 'select.cleaning_mode',
    mop_mode: 'select.mop_mode',
    mop_intensity: 'select.mop_intensity',
    dock_mop_drying: 'binary_sensor.mop_drying',
    dock_mop_drying_remaining_time: 'sensor.mop_drying_remaining',
    battery: 'sensor.battery',
    current_room: 'sensor.current_room',
    cleaning_area: 'sensor.area',
    cleaning_time: 'sensor.time',
    cleaning_progress: 'sensor.progress',
    error: 'sensor.error',
  },
  floors: [
    {
      id: 'downstairs',
      name: 'Downstairs',
      map_entity: 'image.downstairs',
      map_select_option: 'Downstairs',
      rooms: [
        { segment_id: 1, area_id: 'kitchen', name: 'Kitchen', icon: 'mdi:countertop', include_in_floor_clean: true },
        { segment_id: 2, area_id: 'hallway', name: 'Hallway', icon: 'mdi:coat-rack', include_in_floor_clean: true },
        { segment_id: 4, area_id: 'living_room', name: 'Living room', icon: 'mdi:sofa', include_in_floor_clean: true },
      ],
    },
    {
      id: 'upstairs',
      name: 'Upstairs',
      map_entity: 'image.upstairs',
      map_select_option: 'Upstairs',
      rooms: [
        { segment_id: 1, area_id: 'office', name: 'Office', icon: 'mdi:desk', include_in_floor_clean: true },
        { segment_id: 2, area_id: 'bathroom', name: 'Bathroom', icon: 'mdi:shower', include_in_floor_clean: false },
        { segment_id: 3, area_id: 'overloop', name: 'Landing', icon: 'mdi:stairs', include_in_floor_clean: true },
        { segment_id: 4, area_id: 'bedroom', name: 'Bedroom', icon: 'mdi:bed', include_in_floor_clean: true },
        { segment_id: 5, area_id: 'waskamer', name: 'Laundry', icon: 'mdi:washing-machine', include_in_floor_clean: true },
      ],
    },
  ],
  default_preset: 'vacuum_only',
};

export function createHass(overrides: Partial<HomeAssistant> = {}): HomeAssistant {
  const callService = async (domain: string, service: string, data?: Record<string, unknown>, target?: Record<string, unknown>) => {
    if (domain === 'select' && service === 'select_option') {
      const id = String(target?.entity_id);
      hass.states[id].state = String(data?.option);
    }
  };
  const calibration = [
    { vacuum: { x: 25500, y: 25500 }, map: { x: 600, y: 300 } },
    { vacuum: { x: 35500, y: 25500 }, map: { x: 1400, y: 300 } },
    { vacuum: { x: 25500, y: 35500 }, map: { x: 600, y: -500 } },
  ];
  const hass: HomeAssistant = {
    states: {
      'vacuum.roborock': { entity_id: 'vacuum.roborock', state: 'docked', attributes: { friendly_name: 'Roborock', fan_speed_list: ['quiet', 'balanced', 'turbo'], fan_speed: 'balanced', supported_features: 30524 } },
      'select.map': { entity_id: 'select.map', state: 'Downstairs', attributes: { options: ['Downstairs', 'Upstairs'] } },
      'select.cleaning_mode': { entity_id: 'select.cleaning_mode', state: 'vac_and_mop', attributes: { options: ['vacuum', 'vac_and_mop', 'mop'] } },
      'select.mop_mode': { entity_id: 'select.mop_mode', state: 'custom', attributes: { options: ['standard', 'deep', 'deep_plus', 'fast', 'smart_mode', 'custom'] } },
      'select.mop_intensity': { entity_id: 'select.mop_intensity', state: 'off', attributes: { options: ['off', 'medium', 'high'] } },
      'binary_sensor.mop_drying': { entity_id: 'binary_sensor.mop_drying', state: 'off', attributes: {} },
      'sensor.mop_drying_remaining': { entity_id: 'sensor.mop_drying_remaining', state: '0', attributes: { unit_of_measurement: 'h' } },
      'sensor.battery': { entity_id: 'sensor.battery', state: '100', attributes: { unit_of_measurement: '%' } },
      'sensor.current_room': { entity_id: 'sensor.current_room', state: 'Living room', attributes: {} },
      'sensor.area': { entity_id: 'sensor.area', state: '40.9', attributes: { unit_of_measurement: 'm²' } },
      'sensor.time': { entity_id: 'sensor.time', state: '45', attributes: { unit_of_measurement: 'min' } },
      'sensor.progress': { entity_id: 'sensor.progress', state: '0', attributes: { unit_of_measurement: '%' } },
      'sensor.error': { entity_id: 'sensor.error', state: 'none', attributes: {} },
      'image.downstairs': { entity_id: 'image.downstairs', state: 'now', attributes: { entity_picture: mapImage, rooms: downstairsRooms, calibration_points: calibration } },
      'image.upstairs': { entity_id: 'image.upstairs', state: 'now', attributes: { entity_picture: mapImage, rooms: upstairsRooms, calibration_points: calibration } },
    },
    areas: {
      kitchen: { area_id: 'kitchen', name: 'Kitchen' }, hallway: { area_id: 'hallway', name: 'Hallway' },
      living_room: { area_id: 'living_room', name: 'Living room' }, office: { area_id: 'office', name: 'Office' },
      bathroom: { area_id: 'bathroom', name: 'Bathroom' }, overloop: { area_id: 'overloop', name: 'Landing' },
      bedroom: { area_id: 'bedroom', name: 'Bedroom' }, waskamer: { area_id: 'waskamer', name: 'Laundry' },
    },
    callService,
    hassUrl: (path) => path,
    ...overrides,
  };
  return hass;
}

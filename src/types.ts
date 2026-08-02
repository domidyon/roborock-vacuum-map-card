export type Language = 'en' | 'nl';
export type CleaningStrategy = 'custom' | 'smartplan';
export type CleaningType = 'vacuum' | 'vacuum_and_mop';

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown> & {
    friendly_name?: string;
    entity_picture?: string;
    options?: string[];
    fan_speed_list?: string[];
    fan_speed?: string;
    supported_features?: number;
    unit_of_measurement?: string;
    rooms?: unknown;
    calibration_points?: unknown;
  };
  last_changed?: string;
  last_updated?: string;
}

export interface HassArea {
  area_id: string;
  name: string;
  icon?: string | null;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  areas?: Record<string, HassArea>;
  locale?: { language?: string };
  callService: (
    domain: string,
    service: string,
    serviceData?: Record<string, unknown>,
    target?: Record<string, unknown>,
  ) => Promise<unknown>;
  hassUrl: (path: string) => string;
}

export interface RoborockEntityConfig {
  map_select?: string;
  mop_mode?: string;
  mop_intensity?: string;
  battery?: string;
  current_room?: string;
  cleaning_area?: string;
  cleaning_time?: string;
  cleaning_progress?: string;
  status?: string;
  error?: string;
}

export interface RoomConfig {
  segment_id: number;
  area_id?: string;
  name: string;
  icon?: string;
  include_in_floor_clean?: boolean;
  [key: string]: unknown;
}

export interface FloorConfig {
  id: string;
  name: string;
  map_entity: string;
  map_select_option?: string;
  rooms: RoomConfig[];
  [key: string]: unknown;
}

export interface PresetConfig {
  id: string;
  name: string;
  icon?: string;
  strategy: CleaningStrategy;
  cleaning_type?: CleaningType;
  fan_speed?: string;
  mop_mode?: string;
  mop_intensity?: string;
  [key: string]: unknown;
}

export interface RoborockVacuumMapCardConfig {
  type?: 'custom:roborock-vacuum-map-card';
  entity: string;
  name?: string;
  language?: Language;
  entities?: RoborockEntityConfig;
  floors: FloorConfig[];
  presets?: PresetConfig[];
  default_preset?: string;
  [key: string]: unknown;
}

export interface JobDraft {
  preset_id: string;
  strategy: CleaningStrategy;
  cleaning_type: CleaningType;
  fan_speed?: string;
  mop_mode?: string;
  mop_intensity?: string;
}

export interface RoborockCapabilities {
  fanSpeeds: string[];
  mapOptions: string[];
  mopModes: string[];
  mopIntensities: string[];
  canStart: boolean;
  canPause: boolean;
  canStop: boolean;
  canDock: boolean;
  hasMapSelect: boolean;
  hasMopMode: boolean;
  hasMopIntensity: boolean;
}

export type JobExecutionPhase = 'idle' | 'submitting' | 'starting' | 'active' | 'failed';

export interface JobExecutionState {
  phase: JobExecutionPhase;
  floor_id?: string;
  segment_ids?: number[];
  error?: string;
}

export interface CalibrationPoint {
  vacuum: { x: number; y: number };
  map: { x: number; y: number };
}

export interface DiscoveredRoom {
  segment_id: number;
  source_name: string;
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

declare global {
  interface Window {
    customCards?: Array<{
      type: string;
      name: string;
      description: string;
      preview?: boolean;
      documentationURL?: string;
    }>;
  }
}

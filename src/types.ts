export type Language = 'en' | 'nl' | 'pl' | 'tr';
export type CleaningStrategy = 'custom' | 'smartplan';
export type CleaningType = 'vacuum' | 'mop' | 'vacuum_and_mop' | 'vacuum_then_mop';
export type MopRouteMode = 'vacuum_and_mop' | 'mop';
export type RepeatStrategy = 'set_clean_repeat_times' | 'app_segment_clean';
export type CleaningCount = 1 | 2;
export type SelectionMode = 'rooms' | 'zone';
export type DockSettingKey =
  | 'mop_wash_frequency'
  | 'wash_mode'
  | 'wash_temperature'
  | 'auto_empty'
  | 'empty_mode'
  | 'auto_dry'
  | 'dry_duration';
export type DockAction = 'empty' | 'wash' | 'dry' | 'drain';
export type AssistedCarryStage =
  | 'idle'
  | 'preparing'
  | 'carry_upstairs'
  | 'cleaning_upstairs'
  | 'carry_downstairs'
  | 'finishing'
  | 'complete'
  | 'error';

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

/** Entry of the frontend's `hass.entities` (entity registry display data). */
export interface HassEntityRegistryDisplayEntry {
  entity_id: string;
  name?: string;
  device_id?: string;
  area_id?: string;
  platform?: string;
  translation_key?: string;
  entity_category?: 'config' | 'diagnostic';
  hidden?: boolean;
}

/** Entry of the frontend's `hass.devices` (device registry). */
export interface HassDevice {
  id: string;
  name?: string | null;
  name_by_user?: string | null;
  model?: string | null;
  model_id?: string | null;
  manufacturer?: string | null;
  sw_version?: string | null;
  via_device_id?: string | null;
  area_id?: string | null;
  identifiers?: Array<[string, string]>;
  config_entries?: string[];
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  areas?: Record<string, HassArea>;
  entities?: Record<string, HassEntityRegistryDisplayEntry>;
  devices?: Record<string, HassDevice>;
  config?: { version: string };
  user?: { is_admin: boolean };
  callWS?: <T>(message: Record<string, unknown>) => Promise<T>;
  callApi?: <T>(method: 'GET' | 'POST' | 'PUT' | 'DELETE', path: string, parameters?: Record<string, unknown>) => Promise<T>;
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
  cleaning_mode?: string;
  vacuum_then_mop_script?: string;
  mop_mode?: string;
  mop_intensity?: string;
  dock_mop_drying?: string;
  dock_mop_drying_remaining_time?: string;
  dock_child_lock?: string;
  dock_mop_wash_frequency?: string;
  dock_wash_mode?: string;
  dock_wash_temperature?: string;
  dock_auto_empty?: string;
  dock_empty_mode?: string;
  dock_auto_dry?: string;
  dock_dry_duration?: string;
  assisted_carry_stage?: string;
  assisted_carry_job?: string;
  assisted_carry_prepare_script?: string;
  assisted_carry_start_script?: string;
  assisted_carry_finish_script?: string;
  water_shortage?: string;
  mop_attached?: string;
  water_box_attached?: string;
  do_not_disturb?: string;
  battery?: string;
  current_room?: string;
  cleaning_area?: string;
  cleaning_time?: string;
  cleaning_progress?: string;
  status?: string;
  error?: string;
  last_clean_end?: string;
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
  vacuum_then_mop_routine?: string;
  rooms: RoomConfig[];
  assisted_carry?: boolean;
  [key: string]: unknown;
}

export interface AssistedCarryJob {
  segment_ids: number[];
  floor_id?: string;
  map_select_option?: string;
  area_ids?: string[];
  whole_floor?: boolean;
  vacuum_then_mop_routine?: string;
  strategy: CleaningStrategy;
  cleaning_type: CleaningType;
  fan_speed?: string;
  mop_mode?: string;
  mop_intensity?: string;
  cleaning_count: CleaningCount;
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
  cleaning_count?: CleaningCount;
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
  vacuum_mode_fallback?: 'set_clean_motor_mode';
  enable_mop_only?: boolean;
  mop_routes?: Partial<Record<MopRouteMode, string[]>>;
  /** Overrides the model profile: whether the app offers AI SmartPlan. */
  enable_smartplan?: boolean;
  /** Overrides the model profile: how room jobs apply the cleaning count. */
  cleaning_count_command?: RepeatStrategy;
  [key: string]: unknown;
}

export interface JobDraft {
  preset_id: string;
  strategy: CleaningStrategy;
  cleaning_type: CleaningType;
  fan_speed?: string;
  mop_mode?: string;
  mop_intensity?: string;
  cleaning_count: CleaningCount;
}

export interface RoborockCapabilities {
  fanSpeeds: string[];
  mapOptions: string[];
  cleaningModes: string[];
  mopModes: string[];
  mopIntensities: string[];
  canStart: boolean;
  canPause: boolean;
  canStop: boolean;
  canDock: boolean;
  hasMapSelect: boolean;
  hasCleaningMode: boolean;
  hasMopMode: boolean;
  hasMopIntensity: boolean;
  hasSmartPlan: boolean;
  roomRepeatStrategy: RepeatStrategy;
  /** Effective per-mode route allow-list: config, then model profile. */
  mopRoutes?: Partial<Record<MopRouteMode, string[]>>;
  /** Matched model profile, if any. */
  profile?: { label: string; status: 'tested' | 'community' | 'experimental' };
  model?: string;
}

export type JobExecutionPhase = 'idle' | 'submitting' | 'starting' | 'active' | 'failed';

export interface JobExecutionState {
  phase: JobExecutionPhase;
  floor_id?: string;
  segment_ids?: number[];
  selection_mode?: SelectionMode;
  zone?: MapZone;
  error?: string;
}

export interface CalibrationPoint {
  vacuum: { x: number; y: number };
  map: { x: number; y: number };
}

export interface MapZone {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface VacuumZone {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
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

import { z } from 'zod';
import { CARD_TYPE } from './build-flags';
import type { RoborockVacuumMapCardConfig } from './types';

const entityId = z.string().regex(/^[a-z0-9_]+\.[a-z0-9_]+$/, 'Must be a Home Assistant entity ID');
const optionalEntityId = entityId.optional();

const roomSchema = z
  .object({
    segment_id: z.number().int().nonnegative(),
    area_id: z.string().min(1).optional(),
    name: z.string().min(1),
    icon: z.string().optional(),
    include_in_floor_clean: z.boolean().optional().default(true),
    hidden: z.boolean().optional(),
  })
  .passthrough();

const floorSchema = z
  .object({
    id: z.string().min(1),
    name: z.string().min(1),
    map_entity: entityId,
    map_select_option: z.string().min(1).optional(),
    vacuum_then_mop_routine: entityId.refine((value) => value.startsWith('button.'), 'Routine must be a button entity').optional(),
    assisted_carry: z.boolean().optional().default(false),
    rooms: z.array(roomSchema).min(1),
  })
  .passthrough();

const presetSchema = z
  .object({
    id: z.string().min(1),
    name: z.string().min(1),
    icon: z.string().optional(),
    strategy: z.enum(['custom', 'smartplan']),
    cleaning_type: z.enum(['vacuum', 'mop', 'vacuum_and_mop', 'vacuum_then_mop']).optional(),
    fan_speed: z.string().optional(),
    mop_mode: z.string().optional(),
    mop_intensity: z.string().optional(),
    cleaning_count: z.union([z.literal(1), z.literal(2)]).optional(),
  })
  .passthrough();

export const cardConfigSchema = z
  .object({
    type: z.enum(['custom:roborock-vacuum-map-card', 'custom:roborock-vacuum-map-card-beta']).optional(),
    config_version: z.number().int().positive().optional(),
    entity: entityId.refine((value) => value.startsWith('vacuum.'), 'Entity must be a vacuum'),
    name: z.string().optional(),
    language: z.enum(['en', 'nl', 'pl', 'tr']).optional().default('en'),
    entities: z
      .object({
        map_select: optionalEntityId,
        cleaning_mode: optionalEntityId,
        vacuum_then_mop_script: optionalEntityId,
        mop_mode: optionalEntityId,
        mop_intensity: optionalEntityId,
        dock_mop_drying: optionalEntityId,
        dock_mop_drying_remaining_time: optionalEntityId,
        dock_child_lock: optionalEntityId,
        dock_mop_wash_frequency: optionalEntityId,
        dock_wash_mode: optionalEntityId,
        dock_wash_temperature: optionalEntityId,
        dock_auto_empty: optionalEntityId,
        dock_empty_mode: optionalEntityId,
        dock_auto_dry: optionalEntityId,
        dock_dry_duration: optionalEntityId,
        assisted_carry_stage: optionalEntityId,
        assisted_carry_job: optionalEntityId,
        assisted_carry_prepare_script: optionalEntityId,
        assisted_carry_start_script: optionalEntityId,
        assisted_carry_finish_script: optionalEntityId,
        water_shortage: optionalEntityId,
        mop_attached: optionalEntityId,
        water_box_attached: optionalEntityId,
        do_not_disturb: optionalEntityId,
        battery: optionalEntityId,
        current_room: optionalEntityId,
        cleaning_area: optionalEntityId,
        cleaning_time: optionalEntityId,
        cleaning_progress: optionalEntityId,
        status: optionalEntityId,
        error: optionalEntityId,
        last_clean_end: optionalEntityId,
        dock_clean_water_empty: optionalEntityId,
        dock_dirty_water_full: optionalEntityId,
        dock_error: optionalEntityId,
        dock_clean_fluid_empty: optionalEntityId,
        dock_detergent_empty: optionalEntityId,
      })
      .passthrough()
      .optional()
      .default({}),
    floors: z.array(floorSchema).min(1),
    presets: z.array(presetSchema).optional().default([]),
    default_preset: z.string().optional().default('vacuum_only'),
    vacuum_mode_fallback: z.literal('set_clean_motor_mode').optional(),
    enable_mop_only: z.boolean().optional().default(false),
    mop_routes: z
      .object({
        vacuum_and_mop: z.array(z.string().min(1)).min(1).optional(),
        mop: z.array(z.string().min(1)).min(1).optional(),
      })
      .optional(),
    consumables: z
      .array(
        z.object({
          kind: z.enum(['main_brush', 'side_brush', 'filter', 'sensors', 'strainer', 'mop', 'roller', 'cleaning_brush']),
          sensor: entityId,
          reset_button: entityId.refine((value) => value.startsWith('button.'), 'Reset must be a button entity').optional(),
        }),
      )
      .optional(),
    enable_smartplan: z.boolean().optional(),
    cleaning_count_command: z.enum(['set_clean_repeat_times', 'app_segment_clean']).optional(),
  })
  .passthrough()
  .superRefine((config, ctx) => {
    if (config.floors.length > 1 && !config.entities.map_select) {
      ctx.addIssue({ code: 'custom', path: ['entities', 'map_select'], message: 'Multiple floors require a map-select entity' });
    }
    const assistedFloors = config.floors.filter((floor) => floor.assisted_carry);
    if (assistedFloors.length > 0) {
      const required = [
        'assisted_carry_stage',
        'assisted_carry_job',
        'assisted_carry_prepare_script',
        'assisted_carry_start_script',
        'assisted_carry_finish_script',
      ] as const;
      for (const key of required) {
        if (!config.entities[key]) {
          ctx.addIssue({ code: 'custom', path: ['entities', key], message: 'Assisted carry requires this entity' });
        }
      }
    }
    const floorIds = new Set<string>();
    for (const [floorIndex, floor] of config.floors.entries()) {
      if (floorIds.has(floor.id)) {
        ctx.addIssue({ code: 'custom', path: ['floors', floorIndex, 'id'], message: 'Floor IDs must be unique' });
      }
      floorIds.add(floor.id);
      const segments = new Set<number>();
      for (const [roomIndex, room] of floor.rooms.entries()) {
        if (segments.has(room.segment_id)) {
          ctx.addIssue({
            code: 'custom',
            path: ['floors', floorIndex, 'rooms', roomIndex, 'segment_id'],
            message: 'Segment IDs must be unique within a floor',
          });
        }
        segments.add(room.segment_id);
      }
    }
    const presetIds = new Set(['vacuum_only', 'mop_only', 'vacuum_and_mop', 'vacuum_then_mop', 'smartplan']);
    for (const [index, preset] of config.presets.entries()) {
      if (presetIds.has(preset.id)) {
        ctx.addIssue({ code: 'custom', path: ['presets', index, 'id'], message: 'Preset IDs must be unique' });
      }
      presetIds.add(preset.id);
    }
    if (config.default_preset && !presetIds.has(config.default_preset)) {
      ctx.addIssue({ code: 'custom', path: ['default_preset'], message: 'Default preset does not exist' });
    }
  });

/** Version of the config format written by the setup assistant and Re-detect. */
export const CONFIG_VERSION = 1;

/** Upgrades a config from version `from` to `from + 1`. */
export type ConfigMigration = (config: Record<string, unknown>) => Record<string, unknown>;

/**
 * Migrations by source version; index 0 upgrades version 1 to 2. Configs without
 * `config_version` (every 0.x config) are version 1. Add a migration whenever a release
 * changes the meaning of existing keys, and bump CONFIG_VERSION.
 */
export const MIGRATIONS: ConfigMigration[] = [];

export function migrateConfig(
  input: unknown,
  migrations: ConfigMigration[] = MIGRATIONS,
): { config: Record<string, unknown>; migrated: boolean } {
  if (!input || typeof input !== 'object') return { config: input as Record<string, unknown>, migrated: false };
  let config = input as Record<string, unknown>;
  const start = typeof config.config_version === 'number' ? config.config_version : 1;
  // Invalid versions are left for the schema to reject.
  for (let version = start; Number.isInteger(version) && version >= 1 && version - 1 < migrations.length; version += 1) {
    config = { ...migrations[version - 1](structuredClone(config)), config_version: version + 1 };
  }
  return { config, migrated: config !== input };
}

/** Parses a config in memory, migrating older formats first. Never writes the config back. */
export function normalizeConfig(input: unknown): RoborockVacuumMapCardConfig {
  return cardConfigSchema.parse(migrateConfig(input).config) as RoborockVacuumMapCardConfig;
}

export function validateConfig(input: unknown): string[] {
  const result = cardConfigSchema.safeParse(migrateConfig(input).config);
  if (result.success) return [];
  return result.error.issues.map((issue) => `${issue.path.join('.') || 'config'}: ${issue.message}`);
}

export function getStubConfig(): RoborockVacuumMapCardConfig {
  return {
    type: CARD_TYPE as RoborockVacuumMapCardConfig['type'],
    entity: 'vacuum.roborock',
    language: 'en',
    entities: {},
    floors: [
      {
        id: 'floor',
        name: 'Floor',
        map_entity: 'image.roborock_custom_map',
        rooms: [{ segment_id: 1, name: 'Room', include_in_floor_clean: true }],
      },
    ],
    default_preset: 'vacuum_only',
  };
}

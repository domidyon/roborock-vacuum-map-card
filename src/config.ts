import { z } from 'zod';
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
    cleaning_type: z.enum(['vacuum', 'vacuum_and_mop', 'vacuum_then_mop']).optional(),
    fan_speed: z.string().optional(),
    mop_mode: z.string().optional(),
    mop_intensity: z.string().optional(),
    cleaning_count: z.union([z.literal(1), z.literal(2)]).optional(),
  })
  .passthrough();

export const cardConfigSchema = z
  .object({
    type: z.literal('custom:roborock-vacuum-map-card').optional(),
    entity: entityId.refine((value) => value.startsWith('vacuum.'), 'Entity must be a vacuum'),
    name: z.string().optional(),
    language: z.enum(['en', 'nl']).optional().default('en'),
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
      })
      .passthrough()
      .optional()
      .default({}),
    floors: z.array(floorSchema).min(1),
    presets: z.array(presetSchema).optional().default([]),
    default_preset: z.string().optional().default('vacuum_only'),
    vacuum_mode_fallback: z.literal('set_clean_motor_mode').optional(),
  })
  .passthrough()
  .superRefine((config, ctx) => {
    if (config.floors.length > 1 && !config.entities.map_select) {
      ctx.addIssue({ code: 'custom', path: ['entities', 'map_select'], message: 'Multiple floors require a map-select entity' });
    }
    const assistedFloors = config.floors.filter((floor) => floor.assisted_carry);
    if (assistedFloors.length > 1) {
      ctx.addIssue({ code: 'custom', path: ['floors'], message: 'Only one floor can use assisted carry' });
    }
    if (assistedFloors.length === 1) {
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
    const presetIds = new Set(['vacuum_only', 'vacuum_and_mop', 'vacuum_then_mop', 'smartplan']);
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

export function normalizeConfig(input: unknown): RoborockVacuumMapCardConfig {
  return cardConfigSchema.parse(input) as RoborockVacuumMapCardConfig;
}

export function validateConfig(input: unknown): string[] {
  const result = cardConfigSchema.safeParse(input);
  if (result.success) return [];
  return result.error.issues.map((issue) => `${issue.path.join('.') || 'config'}: ${issue.message}`);
}

export function getStubConfig(): RoborockVacuumMapCardConfig {
  return {
    type: 'custom:roborock-vacuum-map-card',
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

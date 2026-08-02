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
    rooms: z.array(roomSchema).min(1),
  })
  .passthrough();

const presetSchema = z
  .object({
    id: z.string().min(1),
    name: z.string().min(1),
    icon: z.string().optional(),
    strategy: z.enum(['custom', 'smartplan']),
    cleaning_type: z.enum(['vacuum', 'vacuum_and_mop']).optional(),
    fan_speed: z.string().optional(),
    mop_mode: z.string().optional(),
    mop_intensity: z.string().optional(),
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
        mop_mode: optionalEntityId,
        mop_intensity: optionalEntityId,
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
  })
  .passthrough()
  .superRefine((config, ctx) => {
    if (config.floors.length > 1 && !config.entities.map_select) {
      ctx.addIssue({ code: 'custom', path: ['entities', 'map_select'], message: 'Multiple floors require a map-select entity' });
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
    const presetIds = new Set(['vacuum_only', 'vacuum_and_mop', 'smartplan']);
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

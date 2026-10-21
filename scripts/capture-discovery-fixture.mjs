#!/usr/bin/env node
// Captures a redacted, read-only snapshot of every Roborock device in a Home Assistant
// instance, shaped like the frontend `hass` object, for discovery unit tests and model
// reports. Only read commands are sent.
//
// Usage: HA_URL=http://homeassistant.local:8123 HA_TOKEN=... \
//   node scripts/capture-discovery-fixture.mjs src/test/fixtures/my-model.json

import { writeFileSync } from 'node:fs';

const [output] = process.argv.slice(2);
const { HA_URL, HA_TOKEN } = process.env;
if (!output || !HA_URL || !HA_TOKEN) {
  console.error('Usage: HA_URL=... HA_TOKEN=... node scripts/capture-discovery-fixture.mjs <output.json>');
  process.exit(1);
}

const PLATFORMS = new Set(['roborock', 'roborock_custom_map']);
const DROPPED_ATTRIBUTES = new Set(['access_token', 'entity_picture']);

function connect(url, token) {
  const socket = new WebSocket(`${url.replace(/\/$/, '').replace(/^http/, 'ws')}/api/websocket`);
  const pending = new Map();
  let nextId = 1;
  let authed;
  const ready = new Promise((resolve, reject) => { authed = { resolve, reject }; });
  socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    if (message.type === 'auth_required') socket.send(JSON.stringify({ type: 'auth', access_token: token }));
    else if (message.type === 'auth_ok') authed.resolve();
    else if (message.type === 'auth_invalid') authed.reject(new Error('Home Assistant rejected the token'));
    else if (message.type === 'result') {
      const request = pending.get(message.id);
      pending.delete(message.id);
      if (message.success) request.resolve(message.result);
      else request.reject(new Error(`${request.type}: ${message.error?.message}`));
    }
  });
  socket.addEventListener('error', () => authed.reject(new Error(`Cannot connect to ${url}`)));
  return {
    ready,
    call(payload) {
      const id = nextId++;
      socket.send(JSON.stringify({ id, ...payload }));
      return new Promise((resolve, reject) => pending.set(id, { resolve, reject, type: payload.type }));
    },
    close: () => socket.close(),
  };
}

const ha = connect(HA_URL, HA_TOKEN);
await ha.ready;
const [config, entityRegistry, deviceRegistry, areaRegistry, states] = await Promise.all([
  ha.call({ type: 'get_config' }),
  ha.call({ type: 'config/entity_registry/list' }),
  ha.call({ type: 'config/device_registry/list' }),
  ha.call({ type: 'config/area_registry/list' }),
  ha.call({ type: 'get_states' }),
]);

const entries = entityRegistry.filter((entry) => PLATFORMS.has(entry.platform) && !entry.disabled_by);
const deviceIds = new Set(entries.map((entry) => entry.device_id).filter(Boolean));
const vacuums = entries.filter((entry) => entry.entity_id.startsWith('vacuum.'));
const vacuumOptions = {};
for (const vacuum of vacuums) {
  const full = await ha.call({ type: 'config/entity_registry/get', entity_id: vacuum.entity_id });
  if (full.options?.vacuum) vacuumOptions[vacuum.entity_id] = { vacuum: full.options.vacuum };
}
ha.close();

// Device unique ids (Roborock DUIDs) and serials identify hardware; replace them consistently.
const aliases = new Map();
const alias = (value) => {
  if (!aliases.has(value)) aliases.set(value, `duid${aliases.size + 1}`);
  return aliases.get(value);
};
const devices = Object.fromEntries(deviceRegistry
  .filter((device) => deviceIds.has(device.id))
  .map((device) => [device.id, {
    id: device.id,
    name: device.name,
    name_by_user: device.name_by_user,
    model: device.model,
    model_id: device.model_id,
    manufacturer: device.manufacturer,
    sw_version: device.sw_version,
    via_device_id: device.via_device_id,
    area_id: device.area_id,
    identifiers: device.identifiers.map(([domain, id]) => {
      const dock = id.endsWith('_dock');
      return [domain, `${alias(dock ? id.slice(0, -5) : id)}${dock ? '_dock' : ''}`];
    }),
  }]));

const entities = Object.fromEntries(entries.map((entry) => [entry.entity_id, {
  entity_id: entry.entity_id,
  name: entry.name ?? entry.original_name ?? undefined,
  device_id: entry.device_id ?? undefined,
  area_id: entry.area_id ?? undefined,
  platform: entry.platform,
  translation_key: entry.translation_key ?? undefined,
  entity_category: entry.entity_category ?? undefined,
  hidden: Boolean(entry.hidden_by),
}]));

const stateMap = Object.fromEntries(states
  .filter((state) => entities[state.entity_id])
  .map((state) => [state.entity_id, {
    entity_id: state.entity_id,
    state: state.state,
    attributes: Object.fromEntries(Object.entries(state.attributes).filter(([key]) => !DROPPED_ATTRIBUTES.has(key))),
  }]));

// Only areas a vacuum maps segments to; the rest of the home layout stays private.
const mappedAreas = new Set(Object.values(vacuumOptions).flatMap((options) => Object.keys(options.vacuum.area_mapping ?? {})));
const areas = Object.fromEntries(areaRegistry
  .filter((area) => mappedAreas.has(area.area_id))
  .map((area) => [area.area_id, { area_id: area.area_id, name: area.name, icon: area.icon }]));

let json = JSON.stringify({ config: { version: config.version }, devices, entities, states: stateMap, areas, vacuumOptions }, null, 2);
for (const [original, replacement] of aliases) json = json.replaceAll(original, replacement).replaceAll(original.toLowerCase(), replacement);
writeFileSync(output, `${json}\n`);
console.log(`Wrote ${Object.keys(devices).length} devices, ${Object.keys(entities).length} entities to ${output}`);

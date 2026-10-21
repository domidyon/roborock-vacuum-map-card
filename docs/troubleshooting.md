# Troubleshooting

Start with **Copy diagnostics** (in the card editor's toolbar, or on the *Finish setting
up* screen). It copies a redacted report of versions, model, discovery and config health
that answers most questions. Paste it into a
[bug report](https://github.com/domidyon/roborock-vacuum-map-card/issues/new?template=bug_report.yml).

## Setup

| Symptom | What to do |
|---|---|
| **The card shows *Finish setting up the Roborock card*** | Follow the checklist on the card: Home Assistant 2026.8+, the Roborock integration and Roborock Custom Map. Then edit the card and run the **Setup assistant**. |
| **Card not found after install** | Hard-refresh the browser and check that the resource is loaded as a JavaScript module (Settings → Dashboards → ⋮ → Resources). |
| **No floors, or *Calibration/rooms missing*** | The floor needs a `…_custom` image from Roborock Custom Map. Reload Roborock Custom Map after the Roborock integration has loaded. |
| **A map has no image in the assistant** | Roborock Custom Map only creates images for maps it has seen. Switch to that map once in the Roborock app, then reload Roborock Custom Map. |
| **Room names look wrong for other floors** | Roborock Custom Map labels inactive maps with the active map's names. The assistant uses Home Assistant's segment list instead. Re-detect after mapping rooms to areas. |
| **Rooms have no area** | In Home Assistant, open the Roborock vacuum entity's settings and map each segment to an area. Then run **Re-detect**. |
| **The assistant can't read room areas or robot facts** | Both need an administrator account. Without one, the assistant matches areas by name and detects options from the entities. |

## Using the card

| Symptom | What to do |
|---|---|
| **A room is greyed out** | It has no area, or its area was deleted. The *Setup needs attention* notice says which. Pick an area in the editor or run **Re-detect**. |
| **Start is disabled with *Can't start yet*** | A pre-start check failed: clean water tank empty, water shortage, or mop or water tank not attached. Fix it, or choose *Vacuum only*. |
| ***Start anyway* instead of Start** | A warning (dirty water full, dock error, low battery, maintenance due). The job can still run. |
| **A mode is greyed out** | The robot doesn't offer it (see [supported models](models.md)), or an option it needs is missing from your entities. |
| **Mop only is missing** | Mop only is opt-in: enable it in the editor (*Basics*) only if your Roborock app offers it. |
| **Vac followed by Mop is unavailable** | Choose the floor's Roborock routine in the editor (*Floors and rooms*), or create the fallback script from its blueprint. |
| **Floor switch times out** | The floor's *Map selector option* must match an option of the Selected map entity exactly. **Re-detect** fixes renamed maps. |
| **Cleaning does not start** | The message names the step that failed. The card never improvises or rolls back device settings; check that step's entity in Home Assistant. |
| **Two passes fail on an older model** | Models without a cleaning-count setting (such as the S7) need the per-segment repeat. The model profile or catalog sets this; you can force it with `cleaning_count_command: app_segment_clean`. |
| ***The map image could not be loaded*** | Usually a temporary Home Assistant or network problem. Use **Retry**. If it persists, check the custom map image entity in Home Assistant. |

## Dock and maintenance

| Symptom | What to do |
|---|---|
| **Dock settings show defaults after a reload** | Create the dock helpers (editor → *Dock* → *Create missing helpers*). They remember the last setting the dock accepted. |
| **Maintenance shows no parts** | Run **Re-detect** to add the consumable sensors. |
| **No Reset button for a part** | Home Assistant disables the Roborock reset buttons by default. Enable them on the Roborock device page. |
| **Draining the dock is unavailable** | The Python Roborock library currently rewrites that command's payload. Use the Roborock app. |

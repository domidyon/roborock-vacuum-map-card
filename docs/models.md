# Supported models

<!-- Generated from src/profiles.ts by src/models-doc.test.ts. Do not edit by hand. -->

The card works with any vacuum from the official Roborock integration: options are read
live from Home Assistant. A *model profile* adds what Home Assistant cannot tell, such as
whether the Roborock app offers Mop only or SmartPlan. Settings in your card config always
override the profile; "auto" means the card detects it from your entities.

| Model | Model id | Status | SmartPlan | Mop only | Mop routes | 2-pass rooms | Notes |
|---|---|---|---|---|---|---|---|
| Qrevo Curv 2 Flow | `roborock.vacuum.a245` | ✅ Tested | yes | no | Vac & Mop: fast, standard, deep_plus | setting |  |
| Saros 10R | `roborock.vacuum.a144` | 🟢 Community | yes | yes | Vac & Mop: fast, standard<br>Mop: fast, standard, deep, deep_plus | setting |  |
| S7 / S7+ | `roborock.vacuum.a15` | 🟡 Experimental | no | opt-in | auto | per segment | No cleaning-count setting, so two-pass room jobs use the per-segment repeat. Awaiting hardware confirmation (issue #2). |

Is your model missing or wrong? Please open a
[model report](https://github.com/domidyon/roborock-vacuum-map-card/issues/new?template=model_report.yml).
You can find the model id under **Settings → Devices & services → Roborock → your vacuum**.

Sources for each profile are listed in [`src/profiles.ts`](../src/profiles.ts).

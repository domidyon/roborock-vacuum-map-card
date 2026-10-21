# Supported models

<!-- Generated from src/profiles.ts and src/catalog by src/models-doc.test.ts. Do not edit by hand. -->

The card works with Roborock robot vacuums from the official Home Assistant integration.
App behaviour that Home Assistant cannot show is decided in this order:

1. Your card config (`enable_smartplan`, `cleaning_count_command`, `mop_routes`, `enable_mop_only`)
2. A hand-written model profile, for app quirks only
3. The robot's own feature flags, read once during setup by an admin
4. Feature data for the model from python-roborock v7.13.0 (Apache-2.0)
5. The options your Home Assistant entities offer

## Model profiles

| Model | Model id | Status | SmartPlan | Mop only | Mop routes | 2-pass rooms | Notes |
|---|---|---|---|---|---|---|---|
| Qrevo Curv 2 Flow | `roborock.vacuum.a245` | ✅ Tested | yes | no | Vac & Mop: fast, standard, deep_plus | setting |  |
| Saros 10R | `roborock.vacuum.a144` | 🟢 Community | yes | yes | Vac & Mop: fast, standard<br>Mop: fast, standard, deep, deep_plus | setting |  |
| S7 / S7+ | `roborock.vacuum.a15` | 🟡 Experimental | no | opt-in | standard, deep, deep_plus | per segment | No cleaning-count setting, so two-pass room jobs use the per-segment repeat. Awaiting hardware confirmation (issue #2). |

## Known models

Model ids, names, families and protocols from python-roborock. "Feature data" means
python-roborock has a real-device feature dump, so the card knows the cleaning count,
SmartPlan and routes without a profile.

| Name | Model id | Family | Protocol | Expectation |
|---|---|---|---|---|
| E4 | `roborock.vacuum.a01` |  |  | ❔ Not verified |
|  | `roborock.vacuum.a05` | RubySLite |  | ❔ Not verified |
| S6 Pure | `roborock.vacuum.a08` | RubySC |  | ❔ Not verified |
|  | `roborock.vacuum.a09` | TanosV |  | ❔ Not verified |
| S6 MaxV | `roborock.vacuum.a10` | TanosV | 1.0 | ✅ Expected to work (feature data) |
|  | `roborock.vacuum.a100` | PearlS |  | ❔ Not verified |
| Qrevo Pro | `roborock.vacuum.a101` | PearlS |  | ❔ Not verified |
|  | `roborock.vacuum.a103` | PearlC |  | ❔ Not verified |
| Qrevo S | `roborock.vacuum.a104` | PearlC |  | ❔ Not verified |
| T7 | `roborock.vacuum.a11` | TanosE |  | ❔ Not verified |
|  | `roborock.vacuum.a116` | PearlPlusS |  | ❔ Not verified |
| Qrevo Master | `roborock.vacuum.a117` | PearlPlusS | 1.0 | ✅ Expected to work (feature data) |
|  | `roborock.vacuum.a122` | PearlSLite |  | ❔ Not verified |
|  | `roborock.vacuum.a123` | PearlSLite | 1.0 | ✅ Expected to work (feature data) |
|  | `roborock.vacuum.a124` | UltronSE |  | ❔ Not verified |
| Q5 Max+ | `roborock.vacuum.a125` | UltronSE | 1.0 | ✅ Expected to work (feature data) |
|  | `roborock.vacuum.a134` | Vivian |  | ❔ Not verified |
| Qrevo Curv | `roborock.vacuum.a135` | Vivian |  | ❔ Not verified |
|  | `roborock.vacuum.a136` | PearlPlusS |  | ❔ Not verified |
|  | `roborock.vacuum.a139` | UltronSE |  | ❔ Not verified |
| T7S | `roborock.vacuum.a14` | TanosS |  | ❔ Not verified |
|  | `roborock.vacuum.a140` | UltronSE |  | ❔ Not verified |
|  | `roborock.vacuum.a143` | CoralPro |  | ❔ Not verified |
| Saros 10R | `roborock.vacuum.a144` | CoralPro | 1.0 | ✅ Expected to work (feature data) |
|  | `roborock.vacuum.a146` | Verdelite |  | ❔ Not verified |
| Saros 10 | `roborock.vacuum.a147` | Verdelite | 1.0 | ✅ Expected to work (feature data) |
| S7 | `roborock.vacuum.a15` | TanosS | 1.0 | ✅ Expected to work (feature data) |
|  | `roborock.vacuum.a155` | Vivian |  | ❔ Not verified |
|  | `roborock.vacuum.a156` | Vivian |  | ❔ Not verified |
|  | `roborock.vacuum.a158` | VivianC |  | ❔ Not verified |
|  | `roborock.vacuum.a159` | VivianC |  | ❔ Not verified |
|  | `roborock.vacuum.a167` | PearlE |  | ❔ Not verified |
|  | `roborock.vacuum.a168` | PearlE |  | ❔ Not verified |
|  | `roborock.vacuum.a169` | PearlELite |  | ❔ Not verified |
|  | `roborock.vacuum.a170` | PearlELite |  | ❔ Not verified |
| Qrevo Edge Series | `roborock.vacuum.a187` |  | 1.0 | ✅ Expected to work (feature data) |
| S4 Max | `roborock.vacuum.a19` | RubySE |  | ❔ Not verified |
|  | `roborock.vacuum.a20` | Coral |  | ❔ Not verified |
|  | `roborock.vacuum.a21` | Coral |  | ❔ Not verified |
| T7S+ | `roborock.vacuum.a23` | TanosSPlus |  | ❔ Not verified |
|  | `roborock.vacuum.a24` | TanosSPlus |  | ❔ Not verified |
| G10S Pro | `roborock.vacuum.a26` | TopazSV |  | ❔ Not verified |
| S7 MaxV | `roborock.vacuum.a27` | TopazSV | 1.0 | 🟢 Expected to work |
| Saros 20 | `roborock.vacuum.a288` |  | 1.0 | ✅ Expected to work (feature data) |
| G10 | `roborock.vacuum.a29` | TopazS |  | ❔ Not verified |
|  | `roborock.vacuum.a30` | TopazS |  | ❔ Not verified |
| P30 Pro | `roborock.vacuum.a306` |  | 1.0 | ✅ Expected to work (feature data) |
|  | `roborock.vacuum.a33` | TanosSE |  | ❔ Not verified |
| Q5 | `roborock.vacuum.a34` | TanosSE |  | ❔ Not verified |
|  | `roborock.vacuum.a37` | TanosSLite |  | ❔ Not verified |
| Q7 Max | `roborock.vacuum.a38` | TanosSLite |  | ❔ Not verified |
|  | `roborock.vacuum.a39` | TanosSC |  | ❔ Not verified |
| Q7 / Q7+ | `roborock.vacuum.a40` | TanosSC |  | ❔ Not verified |
| G10S | `roborock.vacuum.a46` | TopazSPlus |  | ❔ Not verified |
|  | `roborock.vacuum.a47` | TopazSPlus |  | ❔ Not verified |
|  | `roborock.vacuum.a50` | Ultron |  | ❔ Not verified |
| S8 | `roborock.vacuum.a51` | Ultron |  | ❔ Not verified |
|  | `roborock.vacuum.a52` | TanosSMax |  | ❔ Not verified |
| S7 Pro Ultra | `roborock.vacuum.a62` | TopazSPower |  | ❔ Not verified |
|  | `roborock.vacuum.a64` | TopazSC |  | ❔ Not verified |
| S7 MaxV Ultra | `roborock.vacuum.a65` | TopazSC |  | ❔ Not verified |
|  | `roborock.vacuum.a66` | TopazSPlus |  | ❔ Not verified |
|  | `roborock.vacuum.a68` | UltronSPlus |  | ❔ Not verified |
|  | `roborock.vacuum.a69` | UltronSPlus |  | ❔ Not verified |
| S8 Pro Ultra | `roborock.vacuum.a70` | UltronSPlus |  | ❔ Not verified |
| Q5 Pro | `roborock.vacuum.a72` | UltronE |  | ❔ Not verified |
| Q8 Max | `roborock.vacuum.a73` | UltronLite |  | ❔ Not verified |
|  | `roborock.vacuum.a74` | Pearl |  | ❔ Not verified |
| P10 | `roborock.vacuum.a75` | Pearl | 1.0 | ✅ Expected to work (feature data) |
|  | `roborock.vacuum.a76` | TopazS |  | ❔ Not verified |
|  | `roborock.vacuum.a84` | UltronE |  | ❔ Not verified |
|  | `roborock.vacuum.a85` | UltronLite |  | ❔ Not verified |
|  | `roborock.vacuum.a86` | PearlPlus |  | ❔ Not verified |
| Qrevo MaxV | `roborock.vacuum.a87` | PearlPlus | 1.0 | ✅ Expected to work (feature data) |
|  | `roborock.vacuum.a94` | UltronSC |  | ❔ Not verified |
|  | `roborock.vacuum.a95` | UltronSC |  | ❔ Not verified |
|  | `roborock.vacuum.a96` | UltronSV |  | ❔ Not verified |
| S8 MaxV Ultra | `roborock.vacuum.a97` | UltronSV |  | ❔ Not verified |
| C1 | `roborock.vacuum.c1` |  |  | ❔ Not verified |
| E2 | `roborock.vacuum.e2` |  |  | ❔ Not verified |
| 1S | `roborock.vacuum.m1s` |  |  | ❔ Not verified |
|  | `roborock.vacuum.p5` | RubySC |  | ❔ Not verified |
|  | `roborock.vacuum.p6` | RubySLite |  | ❔ Not verified |
| S4 | `roborock.vacuum.s4` | RubyPlus |  | ❔ Not verified |
| S5 | `roborock.vacuum.s5` |  |  | ❔ Not verified |
| S5 Max | `roborock.vacuum.s5e` | RubySLite | 1.0 | ✅ Expected to work (feature data) |
| S6 | `roborock.vacuum.s6` | Tanos |  | ❔ Not verified |
| Q7 Series | `roborock.vacuum.sc01` |  | B01 | ⛔ Not supported (B01 protocol) |
| Q7 Series | `roborock.vacuum.sc05` |  | B01 | ⛔ Not supported (B01 protocol) |
| Q10 | `roborock.vacuum.ss07` |  | B01 | ⛔ Not supported (B01 protocol) |
|  | `roborock.vacuum.t4` | RubyPlus |  | ❔ Not verified |
| T6 | `roborock.vacuum.t6` | Tanos |  | ❔ Not verified |
|  | `roborock.vacuum.t7` | TanosE |  | ❔ Not verified |
|  | `roborock.vacuum.t7p` | TanosV |  | ❔ Not verified |
| Dyad Air | `roborock.wetdryvac.a107` |  |  | ⛔ Not a robot vacuum |
| Dyad Pro | `roborock.wetdryvac.a56` |  |  | ⛔ Not a robot vacuum |
| Dyad Pro Combo | `roborock.wetdryvac.a83` |  |  | ⛔ Not a robot vacuum |
| Zeo One | `roborock.wm.a102` |  | A01 | ⛔ Not a robot vacuum |

Is your model missing or wrong? Please open a
[model report](https://github.com/domidyon/roborock-vacuum-map-card/issues/new?template=model_report.yml).
You can find the model id under **Settings → Devices & services → Roborock → your vacuum**.

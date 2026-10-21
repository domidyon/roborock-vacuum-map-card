# FAQ

**Does this card need the cloud or a custom integration?**
No. It uses Home Assistant's official Roborock integration and Roborock Custom Map for
calibrated maps. It doesn't talk to Roborock directly.

**Which robots work?**
Robot vacuums supported by the official Roborock integration that use Roborock's V1
protocol. The Q7/Q10 families (B01 protocol) and wet-dry vacuums aren't supported. See
[supported models](models.md).

**Why is a mode or route missing that my app has?**
Home Assistant doesn't always say what the app offers, so the card relies on model
profiles and the robot's own feature flags. If something is wrong for your model,
please send a
[model report](https://github.com/domidyon/roborock-vacuum-map-card/issues/new?template=model_report.yml).

**Why does the card need helpers for dock settings?**
Home Assistant can't read most dock settings back from the robot, so the card remembers
the last setting the dock accepted. The helpers are optional; the setup assistant can
create them.

**Can I run presets from automations or voice assistants?**
Yes. Turn a preset into a Home Assistant script in the editor (*Presets → Presets as
scripts*).

**Can I clean a floor that has no dock?**
Yes, with assisted carry: the card guides you through carrying the robot up and back,
and three scripts (from blueprints) do the dock work.

**Is my data sent anywhere?**
No. *Copy diagnostics* only copies a redacted report to your clipboard. Setup reads Home
Assistant's Roborock diagnostics in your browser and keeps only the robot's feature
flags.

**Who maintains this?**
One person, for their own home, mostly with AI coding assistants. Others are welcome to
use it, report issues and contribute. See the [README](../README.md).

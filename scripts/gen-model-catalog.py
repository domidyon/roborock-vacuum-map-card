#!/usr/bin/env python3
"""Generate src/catalog/models.generated.json from a pinned python-roborock checkout.

python-roborock (Apache-2.0, https://github.com/Python-roborock/python-roborock) knows
Roborock model ids, product families, protocol versions and real-device feature dumps.
This script runs its own DeviceFeatures logic over that data, so the card's catalog
matches what Home Assistant's Roborock integration derives.

Usage (maintainers only; the card never runs this):
    git clone --depth 1 --branch v7.13.0 https://github.com/Python-roborock/python-roborock /tmp/python-roborock
    python3 -m venv /tmp/venv && /tmp/venv/bin/pip install /tmp/python-roborock pyyaml
    /tmp/venv/bin/python scripts/gen-model-catalog.py /tmp/python-roborock
"""

import json
import re
import subprocess
import sys
from dataclasses import asdict
from pathlib import Path

import yaml
from roborock.data.code_mappings import SHORT_MODEL_TO_ENUM, RoborockProductNickname
from roborock.device_features import DeviceFeatures

# Only flags the card reads (src/catalog/flags.ts); keeps the bundle small.
FLAGS = [
    "is_clean_count_setting_supported",
    "is_smart_clean_mode_set_supported",
    "is_clean_route_setting_supported",
    "is_none_pure_clean_mop_with_max_plus",
    "is_clean_efficiency_supported",
    "is_careful_slow_mop_supported",
    "is_corner_clean_mode_supported",
    "is_clean_route_deep_slow_plus_supported",
    "is_clean_route_fast_mode_supported",
    "is_clean_then_mop_mode_supported",
    "is_supported_drying",
    "is_hot_wash_towel_supported",
    "is_collect_dust_mode_supported",
    "is_dust_collection_setting_supported",
    "is_back_charge_auto_wash_supported",
    "is_wash_then_charge_cmd_supported",
    "is_multi_floor_supported",
    "is_water_slide_mode_supported",
    "is_mop_shake_module_supported",
]

OUTPUT = Path(__file__).resolve().parent.parent / "src/catalog/models.generated.json"


def display_name(constant: str) -> str:
    words = []
    for token in constant.removeprefix("ROBOROCK_").split("_"):
        if token in {"PLUS", "SPLUS"}:
            words[-1:] = [f"{words[-1] if words else ''}{'S' if token == 'SPLUS' else ''}+"]
        elif token.endswith("PLUS") and len(token) > 4:
            words.append(f"{token[:-4]}+")
        elif token == "MAXV":
            words.append("MaxV")
        elif re.fullmatch(r"[A-Z]?\d+[A-Z]*", token):
            words.append(token)
        else:
            words.append(token.capitalize())
    return " ".join(words)


def load_names(source: Path) -> dict[str, list[str]]:
    names: dict[str, list[str]] = {}
    for line in (source / "roborock/const.py").read_text().splitlines():
        match = re.match(r'^(ROBOROCK_[A-Z0-9_]+) = "(roborock\.[a-z]+\.[a-z0-9]+)"', line)
        if match:
            names.setdefault(match.group(2), []).append(display_name(match.group(1)))
    return names


def load_devices(source: Path) -> dict[str, dict]:
    """Real-device feature dumps, mirroring python-roborock's `update_docs` command."""
    devices: dict[str, dict] = {}
    testdata = source / "tests/testdata"
    products = {}
    for path in testdata.glob("home_data_product_*.json"):
        data = json.loads(path.read_text())
        products[data.get("id")] = data
    for path in testdata.glob("home_data_device_*.json"):
        device = json.loads(path.read_text())
        product = products.get(device["productId"])
        if product:
            devices[product["model"]] = {
                "name": product.get("name"),
                "protocol_version": device["pv"],
                "new_feature_info": int(device.get("featureSet", "0")),
                "new_feature_info_str": device.get("newFeatureSet", "0"),
                "feature_info": [],
            }
    devices.update(yaml.safe_load((source / "device_info.yaml").read_text()) or {})
    return devices


def features_for(model: str, data: dict) -> dict[str, bool] | None:
    if not data.get("new_feature_info") and not data.get("new_feature_info_str"):
        return None
    family = SHORT_MODEL_TO_ENUM.get(model.split(".")[-1])
    features = DeviceFeatures.from_feature_flags(
        new_feature_info=int(data.get("new_feature_info") or 0),
        new_feature_info_str=str(data.get("new_feature_info_str") or ""),
        feature_info=data.get("feature_info") or [],
        product_nickname=family,
    )
    values = asdict(features)
    return {flag: bool(values[flag]) for flag in FLAGS}


def main() -> None:
    source = Path(sys.argv[1]).resolve()
    revision = subprocess.run(["git", "-C", str(source), "describe", "--tags", "--always"], capture_output=True, text=True).stdout.strip()
    names = load_names(source)
    devices = load_devices(source)
    families = {short: product.value.nickname for product in RoborockProductNickname for short in product.value.short_models}

    models = sorted(set(names) | set(devices) | {f"roborock.vacuum.{short}" for short in families})
    catalog = []
    for model in models:
        data = devices.get(model, {})
        entry = {"model": model}
        product_name = data.get("name") or (data.get("product") or {}).get("name")
        if model in names:
            entry["names"] = names[model]
        elif product_name and "REDACTED" not in product_name:
            entry["names"] = [product_name.removeprefix("Roborock ")]
        if model.split(".")[-1] in families and model.startswith("roborock.vacuum."):
            entry["family"] = families[model.split(".")[-1]]
        if data.get("protocol_version"):
            entry["protocol"] = str(data["protocol_version"])
        features = features_for(model, data)
        if features is not None:
            # Supported flags only; any flag in FLAGS that is absent is unsupported.
            entry["features"] = [flag for flag in FLAGS if features[flag]]
        catalog.append(entry)

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    lines = ",\n".join(f"  {json.dumps(entry)}" for entry in catalog)
    OUTPUT.write_text(
        "{\n"
        f'"source": {json.dumps(f"python-roborock {revision} (Apache-2.0)")},\n'
        f'"flags": {json.dumps(FLAGS)},\n'
        f'"models": [\n{lines}\n]\n'
        "}\n"
    )
    print(f"Wrote {len(catalog)} models ({sum('features' in m for m in catalog)} with features) to {OUTPUT}")


if __name__ == "__main__":
    main()

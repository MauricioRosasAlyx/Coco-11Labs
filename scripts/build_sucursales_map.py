from __future__ import annotations

import argparse
import json
import unicodedata
from pathlib import Path
from typing import Any


def normalize_key(value: str) -> str:
    normalized = unicodedata.normalize("NFD", value.strip().lower())
    return "".join(char for char in normalized if unicodedata.category(char) != "Mn")


def build_canonical_key(store_code: str | None, store_label: str) -> str:
    return f"code:{store_code}" if store_code else f"label:{normalize_key(store_label)}"


def select_canonical_label(aliases: list[str]) -> str:
    return sorted(aliases, key=lambda value: (-len(value), value))[0]


def read_json(path: Path) -> dict[str, Any]:
    return json.loads(path.read_text(encoding="utf-8"))


def build_map(aperturas_path: Path, cierres_path: Path) -> dict[str, Any]:
    aperturas = read_json(aperturas_path)
    cierres = read_json(cierres_path)
    entries: dict[str, dict[str, Any]] = {}

    for record in aperturas["records"]:
        key = build_canonical_key(record.get("storeCode"), record["storeLabel"])
        entry = entries.setdefault(
            key,
            {
                "canonicalKey": key,
                "storeCode": record.get("storeCode"),
                "aperturaAliases": set(),
                "cierreAliases": set(),
            },
        )
        entry["aperturaAliases"].add(record["storeLabel"])

    for record in cierres["records"]:
        key = build_canonical_key(record.get("storeCode"), record["storeLabel"])
        entry = entries.setdefault(
            key,
            {
                "canonicalKey": key,
                "storeCode": record.get("storeCode"),
                "aperturaAliases": set(),
                "cierreAliases": set(),
            },
        )
        entry["cierreAliases"].add(record["storeLabel"])

    mapped_entries = []

    for entry in entries.values():
        apertura_aliases = sorted(entry["aperturaAliases"])
        cierre_aliases = sorted(entry["cierreAliases"])
        all_aliases = sorted(set(apertura_aliases + cierre_aliases))
        mapped_entries.append(
            {
                "canonicalKey": entry["canonicalKey"],
                "storeCode": entry["storeCode"],
                "canonicalLabel": select_canonical_label(all_aliases),
                "aperturaAliases": apertura_aliases,
                "cierreAliases": cierre_aliases,
                "allAliases": all_aliases,
                "hasAperturas": bool(apertura_aliases),
                "hasCierres": bool(cierre_aliases),
            }
        )

    mapped_entries.sort(key=lambda item: item["canonicalLabel"])

    return {
        "meta": {
            "generatedAt": aperturas["meta"]["generatedAt"],
            "sourceAperturas": str(aperturas_path.resolve()),
            "sourceCierres": str(cierres_path.resolve()),
            "totalEntries": len(mapped_entries),
            "withAperturasAndCierres": sum(
                1
                for entry in mapped_entries
                if entry["hasAperturas"] and entry["hasCierres"]
            ),
            "onlyAperturas": sum(
                1
                for entry in mapped_entries
                if entry["hasAperturas"] and not entry["hasCierres"]
            ),
            "onlyCierres": sum(
                1
                for entry in mapped_entries
                if entry["hasCierres"] and not entry["hasAperturas"]
            ),
        },
        "entries": mapped_entries,
    }


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Build a canonical sucursales mapping from aperturas and cierres."
    )
    parser.add_argument("aperturas", help="Path to aperturas knowledge base JSON.")
    parser.add_argument("cierres", help="Path to cierres knowledge base JSON.")
    parser.add_argument("output", help="Path to output mapping JSON.")
    args = parser.parse_args()

    payload = build_map(Path(args.aperturas), Path(args.cierres))
    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(
        json.dumps(
            {
                "status": "ok",
                "output": str(output_path.resolve()),
                "entries": payload["meta"]["totalEntries"],
            }
        )
    )


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
Replace professions.trackers in content/addon-content.sample.json from upstream
Midnight Profession Tracker (MPT) MidnightProfTracker.lua — ProfData + BookData.

Source (default): raw main branch on GitHub.
Override: set env MPT_LUA_URL to a local file path or alternate URL.

Does not modify weekly/help/version keys; updates generatedAt.
Then run: python scripts/build-addon-generated-data.py
"""

from __future__ import annotations

import json
import os
import re
import sys
import urllib.request
from datetime import datetime, timezone
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent
SAMPLE_PATH = REPO_ROOT / "content" / "addon-content.sample.json"
DEFAULT_MPT_URL = (
    "https://raw.githubusercontent.com/Huijting/MidnightProfessionTracker/"
    "main/MidnightProfTracker.lua"
)

# UI map IDs from MPT data (display only; waypoint keeps #map in /way).
MAP_ZONE_L10N: dict[int, dict[str, str]] = {
    2393: {"en": "Silvermoon City", "nl": "Silvermoon City"},
    2395: {"en": "Eversong Woods", "nl": "Eversong Woods"},
    2437: {"en": "Zul'Aman", "nl": "Zul'Aman"},
    2413: {"en": "Harandar", "nl": "Harandar"},
    2444: {"en": "Voidstorm", "nl": "Voidstorm"},
    2405: {"en": "Voidstorm", "nl": "Voidstorm"},
    2536: {"en": "Rootlands", "nl": "Rootlands"},
}


def fetch_lua(url: str) -> str:
    if url.startswith("http://") or url.startswith("https://"):
        req = urllib.request.Request(url, headers={"User-Agent": "midnight_guide-sync-mpt/1"})
        with urllib.request.urlopen(req, timeout=60) as resp:
            return resp.read().decode("utf-8")
    path = Path(url)
    return path.read_text(encoding="utf-8")


def extract_braced_block(lua: str, table: str, key: str) -> str | None:
    needle = f'{table}["{key}"] = {{'
    start = lua.find(needle)
    if start < 0:
        return None
    i = start + len(needle) - 1
    depth = 0
    for j in range(i, len(lua)):
        c = lua[j]
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return lua[i + 1 : j]
    return None


def slugify(name: str) -> str:
    s = name.lower().replace("'", "").replace(":", " ")
    buf: list[str] = []
    prev_hyphen = False
    for ch in s:
        if ch.isalnum():
            buf.append(ch)
            prev_hyphen = False
        elif ch in " -_/":
            if not prev_hyphen and buf and buf[-1] != "-":
                buf.append("-")
                prev_hyphen = True
    slug = "".join(buf).strip("-")
    while "--" in slug:
        slug = slug.replace("--", "-")
    return slug[:96] or "entry"


def zone_l10n(map_id: int) -> dict[str, str]:
    return dict(MAP_ZONE_L10N.get(map_id, {"en": f"Map {map_id}", "nl": f"Map {map_id}"}))


def parse_treasures(inner: str | None) -> list[dict]:
    if not inner:
        return []
    out: list[dict] = []
    line_re = re.compile(
        r'^\s*\{name="([^"]*)",\s*id=(\d+),\s*itemId=(\d+),\s*map=(\d+),\s*x=([\d.]+),\s*y=([\d.]+)\}\s*,?\s*$'
    )
    for line in inner.splitlines():
        m = line_re.match(line)
        if not m:
            continue
        name, qid, item_id, map_id, x, y = m.groups()
        mid = int(map_id)
        way = f"/way #{mid} {x}, {y} {name}"
        z = zone_l10n(mid)
        out.append(
            {
                "id": slugify(name),
                "questId": int(qid),
                "itemId": int(item_id),
                "name": {"en": name, "nl": name},
                "zone": z,
                "waypoint": {"zone": z["en"], "way": way},
            }
        )
    return out


def parse_book_entries(inner: str | None) -> list[dict]:
    if not inner:
        return []
    entries: list[dict] = []
    i = 0
    while True:
        j = inner.find('{name="', i)
        if j < 0:
            break
        depth = 0
        k = j
        while k < len(inner):
            if inner[k] == "{":
                depth += 1
            elif inner[k] == "}":
                depth -= 1
                if depth == 0:
                    chunk = inner[j : k + 1]
                    m = re.search(r'name="([^"]+)"', chunk)
                    m_ids = re.search(r"itemId=(\d+),\s*id=(\d+)", chunk)
                    m_pin = re.search(
                        r'vendor="([^"]*)",\s*map=(\d+),\s*vx=([\d.]+),\s*vy=([\d.]+)', chunk
                    )
                    if m and m_ids and m_pin:
                        name = m.group(1)
                        item_id, qid = int(m_ids.group(1)), int(m_ids.group(2))
                        vendor, mid, vx, vy = (
                            m_pin.group(1),
                            int(m_pin.group(2)),
                            m_pin.group(3),
                            m_pin.group(4),
                        )
                        way = f"/way #{mid} {vx}, {vy} {vendor} — {name}"
                        z = zone_l10n(mid)
                        entries.append(
                            {
                                "id": slugify(name),
                                "questId": qid,
                                "itemId": item_id,
                                "name": {"en": name, "nl": name},
                                "zone": z,
                                "waypoint": {"zone": z["en"], "way": way},
                            }
                        )
                    i = k + 1
                    break
            k += 1
        else:
            i = j + 1
    return entries


def profession_keys(lua: str) -> list[str]:
    keys = sorted(set(re.findall(r'ProfData\["([^"]+)"\]', lua)))
    book_keys = set(re.findall(r'BookData\["([^"]+)"\]', lua))
    return sorted(set(keys) | book_keys)


def build_trackers(lua: str) -> list[dict]:
    trackers: list[dict] = []
    for prof in profession_keys(lua):
        pkey = prof.lower()
        treasures = parse_treasures(extract_braced_block(lua, "ProfData", prof))
        books = parse_book_entries(extract_braced_block(lua, "BookData", prof))
        trackers.append(
            {
                "id": f"mpt-{pkey}",
                "professionKey": pkey,
                "title": {"en": f"Midnight {prof}", "nl": f"Midnight {prof}"},
                "treasures": treasures,
                "books": books,
            }
        )
    return trackers


def main() -> int:
    url = os.environ.get("MPT_LUA_URL", DEFAULT_MPT_URL)
    print(f"Fetching MPT Lua from: {url}")
    lua = fetch_lua(url)
    trackers = build_trackers(lua)
    if not trackers:
        print("No trackers parsed; aborting.", file=sys.stderr)
        return 1

    data = json.loads(SAMPLE_PATH.read_text(encoding="utf-8"))
    data["professions"] = {"trackers": trackers}
    data["generatedAt"] = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    SAMPLE_PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Updated {SAMPLE_PATH.relative_to(REPO_ROOT)} with {len(trackers)} profession trackers (MPT).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

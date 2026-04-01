#!/usr/bin/env python3
"""
Wowhead EU "Today in WoW" scraper — v4.0.0

- Targets https://www.wowhead.com/eu first (Wowhead may return 404 for this path; then falls back to /).
- Uses browser-like headers (urllib) to reduce 403s; omits br encoding so responses stay gzip/deflate.
- Parses inline JSON in <script id="data.wow.todayInWow"> (primary) with BeautifulSoup + regex fallback.
- EU data: only nodes with regionId/regionID/region == EU (same idea as scripts/fetch-bountiful-delves.js).
- Bountiful Delves: mn-bountiful-delves line names (display strings) + bountiful_delve_ids (mapped like fetch-bountiful-delves.js).
- Prey: widgets whose id/name indicates Prey; lines whose text includes Nightmare or word-boundary Hard.
- Optional Playwright: WOWHEAD_USE_PLAYWRIGHT=1 when JSON is missing from static HTML.

Output: data/live_reset_data.json
"""

from __future__ import annotations

import gzip
import html
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

try:
    from bs4 import BeautifulSoup
except ImportError:
    BeautifulSoup = None  # type: ignore[misc, assignment]

__version__ = "4.0.0"

# Primary EU entry (Wowhead has returned 404 for /eu; we still try it, then fall back).
WOWHEAD_EU_URL = "https://www.wowhead.com/eu"
WOWHEAD_HOME_URL = "https://www.wowhead.com/"

TIW_SCRIPT_ID = "data.wow.todayInWow"
TIW_SCRIPT_RE = re.compile(
    r'id="data\.wow\.todayInWow">([\s\S]*?)</script>', re.IGNORECASE
)

BROWSER_HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
    ),
    "Accept": (
        "text/html,application/xhtml+xml,application/xml;q=0.9,"
        "image/avif,image/webp,image/apng,*/*;q=0.8"
    ),
    "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,de;q=0.7",
    # Omit "br" so servers send gzip/deflate (stdlib decodes gzip reliably).
    "Accept-Encoding": "gzip, deflate",
    "Connection": "keep-alive",
    "Upgrade-Insecure-Requests": "1",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "none",
    "Sec-Fetch-User": "?1",
    "Cache-Control": "max-age=0",
    "DNT": "1",
}

PREY_WIDGET_ID_FRAGMENTS = ("prey", "prey-hunt", "prey_hunt")
PREY_WIDGET_IDS = frozenset(
    {
        "mn-daily-prey",
        "mn-prey-hunts",
        "mn-active-prey",
        "mn-midnight-prey",
    }
)

# Must match scripts/fetch-bountiful-delves.js DELVE_MAP (Zone:Delve -> app id).
DELVE_MAP = {
    "Silvermoon City:Collegiate Calamity": "collegiate_calamity",
    "Silvermoon City:The Darkway": "the_darkway",
    "Voidstorm:Sunkiller Sanctum": "sunkiller_sanctum",
    "Voidstorm:Shadowguard Point": "shadowguard_point",
    "Voidstorm:Torment's Rise": "torments_rise",
    "Harandar:The Grudge Pit": "grudge_pit",
    "Harandar:The Gulf of Memory": "gulf_of_memory",
    "Zul'Aman:Twilight Crypts": "twilight_crypts",
    "Zul'Aman:Atal'Aman": "atalaman",
    "Zul'Aman Region:Atal'Aman": "atalaman",
    "Eversong Woods:The Shadow Enclave": "shadow_enclave",
    "Isle of Quel'Danas:Parhelion Plaza": "parhelion_plaza",
    "Isle of Quel'Danas, Sunwell Ramparts:Parhelion Plaza": "parhelion_plaza",
}

_REPO_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_OUT = _REPO_ROOT / "data" / "live_reset_data.json"


def normalize_display(s: str) -> str:
    t = html.unescape(str(s).strip())
    t = t.replace("\u2019", "'").replace("&#39;", "'")
    return t


def _region_key(node: dict) -> str:
    rid = node.get("regionId") or node.get("regionID") or node.get("region")
    return str(rid or "").upper()


def is_eu_tiw_root(node: object) -> bool:
    return isinstance(node, dict) and _region_key(node) == "EU"


def fetch_url_raw(url: str, timeout: float = 60.0, retries: int = 4) -> tuple[str, str]:
    """Return (final_url_effective, html_text). Raises last error if all retries fail."""
    last_err: Exception | None = None
    req = urllib.request.Request(url, headers=dict(BROWSER_HEADERS))
    for attempt in range(retries):
        try:
            with urllib.request.urlopen(req, timeout=timeout) as resp:
                raw = resp.read()
                final = getattr(resp, "geturl", lambda: url)() or url
        except urllib.error.HTTPError as e:
            last_err = e
            if e.code in (403, 429, 502, 503, 504) and attempt + 1 < retries:
                time.sleep(1.5 * (attempt + 1))
                continue
            raise
        except urllib.error.URLError as e:
            last_err = e
            if attempt + 1 < retries:
                time.sleep(1.5 * (attempt + 1))
                continue
            raise
        else:
            if raw[:2] == b"\x1f\x8b":
                raw = gzip.decompress(raw)
            text = raw.decode("utf-8", errors="replace")
            return final, text
    assert last_err is not None
    raise last_err


def is_wowhead_not_found_page(html: str) -> bool:
    return "Page Not Found - Wowhead" in html or 'property="og:url" content="https://www.wowhead.com/404"' in html


def fetch_wowhead_html() -> tuple[str, str]:
    """
    Try EU URL first, then homepage. Returns (url_used, html).
    """
    errors: list[str] = []
    for url in (WOWHEAD_EU_URL, WOWHEAD_HOME_URL):
        try:
            _, html = fetch_url_raw(url)
            if url == WOWHEAD_EU_URL and is_wowhead_not_found_page(html):
                errors.append(f"{url}: Wowhead 404 page body")
                print(
                    "Note: /eu is not a valid Wowhead homepage - using / ; EU data still from TIW JSON (regionId EU).",
                    file=sys.stderr,
                )
                continue
            return url, html
        except urllib.error.HTTPError as e:
            if e.code == 404 and url == WOWHEAD_EU_URL:
                print(
                    "Note: /eu HTTP 404 - using homepage; EU data from TIW JSON (regionId EU).",
                    file=sys.stderr,
                )
                errors.append(f"{url}: HTTP {e.code}")
                continue
            errors.append(f"{url}: {e}")
            continue
        except Exception as e:
            errors.append(f"{url}: {e}")
            continue
    raise RuntimeError("Could not fetch Wowhead: " + "; ".join(errors))


def extract_tiw_json_array(html: str) -> list | None:
    if BeautifulSoup:
        soup = BeautifulSoup(html, "html.parser")
        tag = soup.find("script", id=TIW_SCRIPT_ID)
        if tag:
            raw = tag.string or tag.get_text() or ""
            raw = raw.strip()
            if raw:
                try:
                    data = json.loads(raw)
                    return data if isinstance(data, list) else None
                except json.JSONDecodeError:
                    pass
    m = TIW_SCRIPT_RE.search(html)
    if not m:
        return None
    try:
        data = json.loads(m.group(1).strip())
    except json.JSONDecodeError:
        return None
    return data if isinstance(data, list) else None


def fetch_via_playwright(url: str) -> str:
    from playwright.sync_api import sync_playwright

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        try:
            ctx = browser.new_context(
                user_agent=BROWSER_HEADERS["User-Agent"],
                locale="en-GB",
            )
            page = ctx.new_page()
            page.set_extra_http_headers(
                {
                    "Accept-Language": BROWSER_HEADERS["Accept-Language"],
                    "Accept": BROWSER_HEADERS["Accept"],
                }
            )
            page.goto(url, wait_until="domcontentloaded", timeout=90000)
            try:
                page.wait_for_selector("#tiw-region-EU", timeout=25000)
            except Exception:
                pass
            return page.content()
        finally:
            browser.close()


def maybe_playwright_html(primary_url: str, html: str) -> str:
    use = os.environ.get("WOWHEAD_USE_PLAYWRIGHT", "").strip().lower() in (
        "1",
        "true",
        "yes",
    )
    auto = os.environ.get("WOWHEAD_AUTO_PLAYWRIGHT", "").strip().lower() in (
        "1",
        "true",
        "yes",
    )
    has_json = extract_tiw_json_array(html) is not None
    if not use and not (auto and not has_json):
        return html
    try:
        # Prefer homepage for TIW; /eu may be invalid.
        pw_url = WOWHEAD_HOME_URL if primary_url == WOWHEAD_EU_URL else primary_url
        return fetch_via_playwright(pw_url)
    except ImportError:
        print(
            "Playwright requested but not installed; pip install playwright && playwright install chromium",
            file=sys.stderr,
        )
        return html
    except Exception as e:
        print("Playwright fetch failed:", e, file=sys.stderr)
        return html


def find_widget_recursive(root: object, widget_id: str) -> dict | None:
    if isinstance(root, dict):
        if root.get("id") == widget_id:
            return root
        for v in root.values():
            f = find_widget_recursive(v, widget_id)
            if f is not None:
                return f
    elif isinstance(root, list):
        for x in root:
            f = find_widget_recursive(x, widget_id)
            if f is not None:
                return f
    return None


def eu_tiw_roots(tiw: list) -> list[dict]:
    return [x for x in tiw if is_eu_tiw_root(x)]


def bountiful_names_from_eu(tiw: list) -> list[str]:
    names: list[str] = []
    for eu_root in eu_tiw_roots(tiw):
        w = find_widget_recursive(eu_root, "mn-bountiful-delves")
        if not w:
            continue
        content = w.get("content") or {}
        lines = content.get("lines") or []
        for line in lines:
            if isinstance(line, dict):
                n = line.get("name")
                if isinstance(n, str) and n.strip():
                    names.append(normalize_display(n))
        if names:
            return names
    return names


def _is_prey_widget(node: dict) -> bool:
    wid = str(node.get("id", "")).lower()
    wname = str(node.get("name", "")).lower()
    if wid in PREY_WIDGET_IDS:
        return True
    if "prey" in wname:
        return True
    if wid.startswith("mn-") and any(f in wid for f in PREY_WIDGET_ID_FRAGMENTS):
        return True
    return False


def _line_has_hard_or_nightmare(line: dict) -> bool:
    parts: list[str] = []
    for key in (
        "name",
        "mode",
        "difficulty",
        "subtitle",
        "iconLabel",
        "label",
        "ending",
        "side",
    ):
        v = line.get(key)
        if isinstance(v, str):
            parts.append(v)
    blob = " ".join(parts).lower()
    if "nightmare" in blob:
        return True
    return bool(re.search(r"\bhard\b", blob))


def _collect_prey_widgets(node: object, out: list[dict]) -> None:
    if isinstance(node, dict):
        if _is_prey_widget(node) and isinstance(node.get("content"), dict):
            out.append(node)
        for v in node.values():
            _collect_prey_widgets(v, out)
    elif isinstance(node, list):
        for x in node:
            _collect_prey_widgets(x, out)


def prey_hard_nightmare_names_from_eu(tiw: list) -> list[str]:
    seen: set[str] = set()
    ordered: list[str] = []
    for eu_root in eu_tiw_roots(tiw):
        widgets: list[dict] = []
        _collect_prey_widgets(eu_root, widgets)
        for w in widgets:
            lines = (w.get("content") or {}).get("lines") or []
            for line in lines:
                if not isinstance(line, dict):
                    continue
                if not _line_has_hard_or_nightmare(line):
                    continue
                n = line.get("name")
                if not isinstance(n, str) or not n.strip():
                    continue
                nn = normalize_display(n)
                if nn not in seen:
                    seen.add(nn)
                    ordered.append(nn)
    return ordered


def bountiful_delve_ids_from_names(names: list[str]) -> list[str]:
    """Map Wowhead Zone:Delve strings to midnight_guide delve ids (stable order, de-duped)."""
    out: list[str] = []
    seen: set[str] = set()
    for raw in names:
        s = normalize_display(raw)
        ci = s.find(":")
        if ci == -1:
            continue
        zone = s[:ci].strip()
        delve = s[ci + 1 :].strip()
        key = f"{zone}:{delve}"
        iid = DELVE_MAP.get(key)
        if iid and iid not in seen:
            seen.add(iid)
            out.append(iid)
    return out


def build_payload(
    bountiful_delves: list[str],
    daily_prey: list[str],
    bountiful_delve_ids: list[str],
) -> dict:
    now = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S")
    return {
        "bountiful_delves": bountiful_delves,
        "bountiful_delve_ids": bountiful_delve_ids,
        "daily_prey": daily_prey,
        "last_updated": now,
    }


def main() -> int:
    out_path = Path(
        os.environ.get("WOWHEAD_LIVE_RESET_OUT", str(DEFAULT_OUT))
    ).resolve()

    url_used, html = fetch_wowhead_html()
    html = maybe_playwright_html(url_used, html)

    tiw = extract_tiw_json_array(html)
    bountiful: list[str] = []
    prey: list[str] = []

    if tiw is not None:
        bountiful = bountiful_names_from_eu(tiw)
        prey = prey_hard_nightmare_names_from_eu(tiw)

    delve_ids = bountiful_delve_ids_from_names(bountiful)
    payload = build_payload(bountiful, prey, delve_ids)

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(json.dumps(payload, ensure_ascii=False))
    print(
        "Wrote",
        out_path,
        f"(tiw_json={tiw is not None}, url={url_used}, v{__version__})",
        file=sys.stderr,
    )
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except Exception as ex:
        print("error:", ex, file=sys.stderr)
        sys.exit(1)

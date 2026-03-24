"""Regenerate data/dungeons/s1/* from monolithic season1.js (restore file from git first)."""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "data" / "dungeons" / "season1.js"
OUT = ROOT / "data" / "dungeons" / "s1"

chunks = [
    (8, 75, "windrunner_spire.js", "WINDRUNNER_SPIRE"),
    (80, 142, "magisters_terrace.js", "MAGISTERS_TERRACE"),
    (147, 208, "maisara_caverns.js", "MAISARA_CAVERNS"),
    (213, 269, "nexus_point_xenas.js", "NEXUS_POINT_XENAS"),
    (274, 327, "algethar_academy.js", "ALGETHAR_ACADEMY"),
    (332, 380, "pit_of_saron.js", "PIT_OF_SARON"),
    (385, 438, "seat_of_the_triumvirate.js", "SEAT_OF_THE_TRIUMVIRATE"),
    (443, 496, "skyreach.js", "SKYREACH"),
    (501, 553, "murder_row.js", "MURDER_ROW"),
    (558, 608, "the_blinding_vale.js", "THE_BLINDING_VALE"),
    (613, 657, "den_of_nalorakk.js", "DEN_OF_NALORAKK"),
    (662, 706, "voidscar_arena.js", "VOIDSCAR_ARENA"),
]

def main():
    if not SRC.is_file():
        raise SystemExit(
            f"Missing {SRC} — restore from git (e.g. git checkout HEAD~1 -- data/dungeons/season1.js) to re-run."
        )
    lines = SRC.read_text(encoding="utf-8").splitlines(keepends=True)
    OUT.mkdir(parents=True, exist_ok=True)

    for a, b, fname, cname in chunks:
        body = "".join(lines[a - 1 : b]).rstrip()
        text = f"// WoW Midnight — Season 1 dungeon data\nconst {cname} = {body}\n"
        (OUT / fname).write_text(text, encoding="utf-8")

    shared = "".join(lines[709:])
    (OUT / "season1_shared.js").write_text(
        "// WoW Midnight — floor maps, screenshots, spec tips, glossary\n" + shared,
        encoding="utf-8",
    )

    names = [c[3] for c in chunks]
    bundle = (
        "// WoW Midnight — Season 1 dungeon array (after individual dungeon files)\n"
        "const DUNGEONS = [\n  "
        + ",\n  ".join(names)
        + "\n];\n"
    )
    (OUT / "dungeons_bundle.js").write_text(bundle, encoding="utf-8")


if __name__ == "__main__":
    main()

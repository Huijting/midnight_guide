# ⚔ WoW: Midnight Guide — Season 1

> **Gebouwd door Claudy & Inchy** — drietalige dungeon & professiegids voor World of Warcraft: Midnight

🌐 **[Bekijk de gids](https://huijting.github.io/midnight_guide/)**

---

## 📦 Inhoud

### ⚔ Dungeons (Season 1)
8 Mythic+ dungeons + 4 normale dungeons — volledig uitgewerkt met bossgids, spec-tips en routekaarten.

| Type | Aantal | Dungeons |
|------|--------|---------|
| M+ Season 1 | 8 | Windrunner Spire, Magisters' Terrace, Maisara Caverns, Nexus-Point Xenas, Algeth'ar Academy, Pit of Saron, Seat of the Triumvirate, Skyreach |
| Normaal | 4 | Murder Row, The Blinding Vale, Den of Nalorakk, Voidscar Arena |

### 🔨 Professies (Season 1)
Gids voor alle 13 professies met trainer-locatie, specialisaties, items en crafting orders.

| Tier | Professies |
|------|-----------|
| S | Alchemy |
| A | Enchanting, Inscription, Jewelcrafting, Tailoring, Mining, Herbalism, Skinning, Leatherworking, Blacksmithing |
| B | Engineering, Cooking |
| C | Fishing |

---

## 🗂 Repo-structuur

```
midnight_guide/
├── index.html                  ← App shell (102KB) — dungeons + professies
├── sw.js                       ← Service worker — cachet alles offline
├── manifest.json               ← PWA manifest
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── data/
    ├── dungeons/
    │   └── season1.js          ← Alle dungeon data (150KB)
    └── professions/
        ├── alchemy.js
        ├── blacksmithing.js
        ├── cooking.js
        ├── enchanting.js
        ├── engineering.js
        ├── fishing.js
        ├── herbalism.js
        ├── inscription.js
        ├── jewelcrafting.js
        ├── leatherworking.js
        ├── mining.js
        ├── skinning.js
        └── tailoring.js
```

---

## ⚙️ Features

- 🌍 **Drietalig** — Nederlands / English / Dansk
- 📱 **PWA** — installeerbaar op telefoon/tablet, werkt offline
- 🔍 **Spec-tips** — rolspecifieke tips per baas (40+ specs)
- 🗺 **Routekaarten** — vloerplannen + route screenshots
- 💬 **Keystone.guru** — directe link naar M+ routes
- 🔨 **Professiegids** — tier-ratings, trainer-locaties, specs, crafting orders

---

## 📋 Versiegeschiedenis

| Versie | Datum | Wijzigingen |
|--------|-------|-------------|
| v5.0 | 2026-03-11 | Professies toegevoegd, modulaire data-structuur |
| v4.3 | 2026-03-10 | Spec-tips, floor switcher, routekaarten |
| v4.0 | 2026-02-xx | Season 1 dungeons compleet |
| v3.x | 2026-01-xx | M+ basics, drietalig |
| v1.0 | 2025-xx-xx | Eerste versie |

---

*Laatste update: v5.0 — 2026-03-11*

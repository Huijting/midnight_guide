# 🌙 WoW Midnight Companion Guide

Fan-made PWA voor **World of Warcraft: Midnight**.  
Trilingual: 🇳🇱 Nederlands · 🇬🇧 English · 🇩🇰 Dansk  
Live: **[huijting.github.io/midnight_guide](https://huijting.github.io/midnight_guide/)**

---

## 📦 Versiegeschiedenis

### v7.1 — 2026-03-13
**Alle 39 specs volledig uitgeschreven**
- Alle overige spec-stubs vervangen door volledige implementaties met echte spec-specifieke content
- Nieuw volledig uitgeschreven specs (elk trilingual, alle 8 sub-tabs):
  - `restoration_shaman` — Chain Heal/Riptide synergie, Stagger-vrij healen, Wind Rush Totem
  - `brewmaster_monk` — Stagger mechanic uitgelegd, Purify prioriteit, Celestial Brew proactief
  - `mistweaver_monk` — Vivify/Renewing Mist synergie, Revival bewaren, Fistweaving
  - `windwalker_monk` — Storm Earth and Fire burst kern, Fists of Fury timing, Transcendence
  - `devastation_evoker` — Empower opladen uitgelegd, Hover mobiliteit, Dragonrage burst
  - `preservation_evoker` — Echo dubbele heals, Rewind tijdmachine, Stasis mechanic
  - `augmentation_evoker` — Ebon Might support rol, meters uitleg, Blistering Scales
- Syntax fix in `holy_priest.js` (apostrof in stats tip)
- **Totaal: 39 specs, allemaal volledig — 0 stubs**

### v7.0 — 2026-03-13
**Home Tab & Landing Page**
- Nieuwe `mode-home` als standaard startscherm
- Geanimeerde gouden maan met glowpulse (`@keyframes moonpulse`)
- Sterrenhemel via CSS (twee lagen, paarse + gouden sterren)
- 4 navigatiekaarten: Dungeons (blauw), Weekly (groen), Professions (oranje), Specs (goud)
- Volledig trilingual via `updateLandingStrings()`
- Versienummer zichtbaar in footer
- Dev-banner popup (eenmalig tonen, localStorage)
- `VERSION = "v7.0"`, `VERSION_DATE = "2026-03-13"`
- Service Worker cache: `midnight-guide-v8`
- Alle 39 spec-bestanden opgenomen in SW PRECACHE lijst
- README bijgewerkt met volledige versiehistorie

### v6.0 — 2026-03-10
**Specs Tab voltooid**
- Alle 39 specs geïmplementeerd (merendeel als stub, aangevuld in latere versies)
- Class-grid layout: klassen als blokken, specs als rijen
- Spec detail view met 8 sub-tabs per spec
- Sub-tabs: ⚡ Cheat Sheet · 🔄 Rotatie · 📊 Stats · 💀 Cooldowns · 💡 Tips · 🖱️ Macro's · 🎯 Resource · 🧪 Consumables
- Trilingual via `SPEC_TAB_UI` strings object
- Alle spec JS-bestanden in `data/specs/`

### v5.4 — 2026-03-08
**KP tabs & footer**
- KP Boom tab (🌳) met interactieve boom
- KP Bronnen tab (🗺️)
- Footer met `VERSION` / `VERSION_DATE` constants
- Feedback-knop (visueel, nog niet functioneel)

### v5.0 — 2026-03-06
**Professions tab**
- Volledig uitgewerkte Professions tab
- Detail view met sub-tabs: Trainer · Specs · Items · Orders · KP · KP Bronnen
- 13 professies geïmplementeerd
- `showProf(id)` functie

### v4.3 — 2026-03-04
**Weekly tab verbeteringen**
- Moeilijkheidsgraden (🟢🟡🔴) op weekly items
- "⚡ Wat doe ik eerst?" button
- Verbeterde layout en filtering

### v3.0 — 2026-03-01
**Drietaligheid geïmplementeerd**
- Volledig NL/EN/DA via `lang` global variable
- Alle UI strings in `UI` object
- Taalknoppen in header

### v2.0 — 2026-02-25
**Dungeon Guide uitgebreid**
- Season 2 dungeons toegevoegd (`type:"mplus_s2"`)
- Boss detail views met mechanics
- Keystone.guru knop (externe link, iframe geblokkeerd)

### v1.0 — 2026-02-20
**Eerste release**
- Basis PWA structuur
- Season 1 dungeons
- Manifest + Service Worker
- NL/EN/DA taalstructuur opgezet

---

## 👤 Credits

Gemaakt door **Rob (Inchy)** & **Claude (Claudy)**  
WoW: Midnight — fan project, niet officieel

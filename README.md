# 🌙 WoW: Midnight Companion Guide

Een trilinguïstische (NL/EN/DA) Progressive Web App voor World of Warcraft: Midnight.

**Live:** [huijting.github.io/midnight_guide/](https://huijting.github.io/midnight_guide/)

---

## 📋 Inhoud

### 🌙 Home (nieuw in v7.0)
Landingspagina met navigatiekaarten, glanzende maan, sterrenveld en directe links naar alle secties.

### 🗡️ Dungeons
Alle Season 1 & 2 M+ dungeons met boss-tactieken, route-tips en M+-specifieke adviezen.

### 📅 Wekelijks
Overzicht van wekelijkse activiteiten: World Bosses, Timewalking, M+ affixen, Delves en meer.

### ⚗️ Professies
Alle 13 professies met trainer-info, KP gids en crafting orders overzicht.

### 🎯 Specs (volledig!)
**Alle 13 klassen, alle specs** — elk met 8 tabbladen:
- ⚡ Cheat Sheet · 🔄 Rotatie · 📊 Stats · 💀 Cooldowns
- 💡 Tips · 🖱️ Macro's · 🎯 Resource · 🧪 Consumables

---

## ✅ Beschikbare specs (38 totaal)

### 🧙 Caster DPS
| Klasse | Specs |
|---|---|
| Mage | Arcane, Fire, Frost |
| Warlock | Affliction, Demonology, Destruction |
| Priest | Shadow |
| Shaman | Elemental |
| Evoker | Devastation, Augmentation |

### 🏹 Ranged / Melee DPS
| Klasse | Specs |
|---|---|
| Hunter | Beast Mastery, Marksmanship, Survival* |
| Death Knight | Frost, Unholy |
| Demon Hunter | Havoc |
| Druid | Balance, Feral |
| Monk | Windwalker |
| Paladin | Retribution |
| Rogue | Assassination, Outlaw, Subtlety |
| Shaman | Enhancement |
| Warrior | Arms, Fury |

*Survival = melee

### 🛡️ Tanks
| Klasse | Spec |
|---|---|
| Death Knight | Blood |
| Demon Hunter | Vengeance |
| Druid | Guardian |
| Monk | Brewmaster |
| Paladin | Protection |
| Warrior | Protection |

### 💚 Healers
| Klasse | Specs |
|---|---|
| Druid | Restoration |
| Evoker | Preservation |
| Monk | Mistweaver |
| Paladin | Holy |
| Priest | Discipline, Holy |
| Shaman | Restoration |

---

## 📱 PWA Features
- Installeerbaar op mobiel (iOS/Android) en desktop
- Offline beschikbaar na eerste bezoek
- QR-code in de app

## 🌍 Talen
Nederlands · English · Dansk

## 🔧 Technisch
- Vanilla JS, geen framework
- Service Worker voor caching
- Spec data in losse `.js` bestanden (`data/specs/`)
- Versie via `VERSION` constante in `index.html`

---

## 📜 Versiegeschiedenis

### v7.3 — 2026-03-13
- 🔍 **Zoekfunctie** — zoek snel door dungeons, specs en professies via de 🔍 knop in de header
- Resultaten gegroepeerd per categorie, volledig meertalig (NL/EN/DA)
- Toetsenbordnavigatie: ↑↓ navigeren, Enter openen, Escape sluiten

### v7.2 — 2026-03-13
- 📋 **/way coördinaten klikbaar** — kopieer trainer- en KP-locaties direct naar klembord
- 🗺️ **KP Bronnen** — 88 schatkistlocaties voor alle 11 professies toegevoegd
- 🔧 TomTom zone-ID fix: alle coördinaten gebruiken nu `#2393` i.p.v. "Silvermoon City"
- Trainer namen en coördinaten gecorrigeerd op basis van method.gg

### v7.0 — 2026-03-13
- 🌙 **Landingspagina** — nieuwe 🌙 Home-tab als startscherm
- Animerende maan, sterrenveld, 4 navigatiekaarten per sectie
- Meertalige tip-strip en credits
- App start nu op Home i.p.v. direct in Dungeons
- Versienummer en datum bijgewerkt in footer

### v6.3 — 2026-03-12
- 🧪 **Consumables tab** toegevoegd aan alle 38 specs
- Alle 13 klassen volledig afgerond
- Dev banner popup (eenmalig, mobile-aware, meertalig)
- `data/help.js` bijgewerkt met alle 13 klassen

### v6.2 — 2026-03-10
- Resterende specs in batch: Arcane/Fire Mage, Blood/Unholy DK, Protection Warrior, Vengeance DH, Discipline/Holy Priest, Enhancement/Restoration Shaman, alle 3 Evokers

### v6.1 — 2026-03-08
- Survival Hunter, Windwalker/Brewmaster/Mistweaver Monk toegevoegd
- Resource tab bug gefixed (`dataKey` voor resource_info)
- Alle 3 Rogues toegevoegd

### v6.0 — 2026-03-05
- 🎯 **Specs tab** — Method-style class grid geïntroduceerd
- Eerste specs: Hunters, Paladins, Frost Mage, Frost DK, Warriors, Havoc DH
- Shadow Priest, Elemental Shaman, alle Druids, alle Warlocks

### v5.4 — 2026-02-28
- KP Bronnen tab (🗺️) + KP Boom (🌳) verbeterd
- Footer versie via VERSION/VERSION_DATE

### v5.0 — 2026-02-20
- 🔨 **Professies tab** — alle 13 professies met KP gids, crafting orders, trainer locaties

### v4.3 — 2026-02-10
- PWA icons + favicon, installeerbaar op iOS/Android/desktop
- Service Worker cache

### v4.0 — 2026-02-01
- 📅 **Wekelijks tab** — checklist met moeilijkheidsgraad badges + "Wat doe ik eerst?"

### v3.0 — 2026-01-20
- QR-code modal, About modal, Handleiding (help.js)
- Trilinguïstische UI volledig (NL/EN/DA)

### v2.0 — 2026-01-10
- Taal-switcher NL/EN/DA, light/dark theme, M+ route tab

### v1.0 — 2026-01-01
- 🗡️ Dungeons tab — Season 1 dungeons, boss tactieken, M+ tips, PWA basis

---

*Gemaakt door Rob (Inchy) & Claude (Claudy) — v7.3 · 2026-03-13*

# MPT UI Parity Checklist (Reference Target)

Referentie: huidige `Midnight Profession Tracker` popup zoals in-game getest.

Doel: onze overkoepelende addon moet deze kernervaring minimaal even goed benaderen voordat we de bestaande losse MPT-flow vervangen.

Statuslegenda:
- [ ] Niet gestart
- [~] Bezig
- [x] Klaar

## 1) Popup frame + visuele stijl

- [ ] Header-balk met duidelijke titel en sluitknop rechtsboven.
- [ ] Compact, donkere achtergrond met goede contrastkleuren.
- [ ] Inhoudsgebied met vaste scrollbare lijstweergave.

## 2) Tab-ervaring

- [ ] Tabs aanwezig zoals referentie:
  - My Treasures
  - All Treasures
  - My Books
  - All Books
- [ ] Tab-wissel voelt direct en zonder flikkeren.

## 3) Dataweergave

- [ ] Per profession sectie met duidelijke progress (`x/y`).
- [ ] “All treasures collected” gedrag waar relevant.
- [ ] Books-sectie met progress en totalen.

## 4) Logica

- [ ] Gevonden items verdwijnen uit missing-lijsten.
- [ ] Niet-gevonden items verschijnen correct in de juiste tab.
- [ ] Taal/labels consistent (NL/EN planmatig).

## 5) Compatibiliteit tijdens migratie

- [ ] Geen slash-command conflict met losse originele MPT addon.
- [ ] Tijdelijke co-existentie blijft stabiel tijdens testfase.

## Eerstvolgende concrete taak

- [~] Bouw parity UI v1: tab-layout en basis sectie-rendering in onze addon (zonder slash-overname).

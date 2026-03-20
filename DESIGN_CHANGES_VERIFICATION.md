# Design Changes Verification Checklist

**To see changes:** Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R) to clear cache. The CSS now has `?v=2` to force reload.

## How to verify each of the 10 points:

### 1. Color Theme (Void/Midnight) ✓
- **Expected:** Pure black background (#050508), deep purple panels (#0d0d12), silver/grey text (#e8e8ec, #9ca3af)
- **Check:** Open DevTools → Elements → inspect `body` → computed `background-color` should be `rgb(5, 5, 8)`
- **Location:** `style.css` lines 2-41 (`:root` variables)

### 2. Layout (Clean) ✓
- **Expected:** More whitespace, no cluttered backgrounds, no ornamental borders
- **Check:** Landing cards and section labels should have padding (24px, 32px margins)
- **Location:** `style.css` — `.section-label`, `.dungeon-grid`, `.content-wrap`

### 3. Typography ✓
- **Expected:** Inter font, high contrast light text
- **Check:** Inspect any text → `font-family` should be `Inter`
- **Location:** `index.html` line 17 (Google Fonts), `style.css` line 44

### 4. Navigation ✓
- **Expected:** Sticky header with direct links: Dungeons, Classes, Raids, Weekly
- **Check:** Top of page — you should see logo "🌙 Midnight", then nav links, then search bar
- **Location:** `index.html` lines 36-74

### 5. Mobile-First ✓
- **Expected:** On <768px width: hamburger menu (☰), search bar full-width, nav collapses
- **Check:** Resize browser to <768px or use DevTools device mode → hamburger appears
- **Location:** `style.css` lines 75-83, `index.html` line 38

### 6. WoW Icons ✓
- **Expected:** `wowIcon()` function available for spell/item icons
- **Check:** In browser console: `typeof wowIcon` → should be `"function"`
- **Usage:** `wowIcon('spell', 195181)` or `wowIcon('item', 212278)`
- **Location:** `js/ui.js` — `wowIcon()` function

### 7. Tooltips ✓
- **Expected:** Wowhead links show tooltips on hover
- **Check:** Go to Specs → any spec → Rotation tab → hover links like "Bloodlust"
- **Location:** `index.html` lines 20-21 (whTooltips, power.js)

### 8. Search Bar ✓
- **Expected:** Prominent search bar in header (between nav and lang buttons)
- **Check:** Click the search bar → overlay opens with search input
- **Location:** `index.html` lines 48-51

### 9. TL;DR Block ✓
- **Expected:** At top of dungeon detail pages
- **Check:** Open any dungeon (e.g. Dungeons → Windrunner Spire) → TL;DR box above the title
- **Location:** `index.html` lines 216-219, `js/app.js` renderDetail()

### 10. Performance ✓
- **Expected:** Images lazy-load
- **Check:** DevTools → Network → reload → images load as you scroll
- **Location:** `index.html` line 80 (landing logo), `js/app.js` lines 870, 884

---

## Troubleshooting

- **"I still see old design"** → Hard refresh (Ctrl+Shift+R), or clear browser cache
- **"Header looks broken"** → Check browser width; on mobile the hamburger toggles the nav
- **"Running from file://"** → Some features need a local server. Run: `npx serve` or `python -m http.server 3000`

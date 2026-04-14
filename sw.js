// ============================================================
// Service Worker — WoW Midnight Guide
// Cache versie verhogen = oude cache automatisch gewist
// ============================================================

// PWA cache bust — bump CACHE_VERSION when shipping new offline assets (match js/constants.js APP_VERSION).
const CACHE_VERSION = '1.0.22';
const CACHE_NAME = `midnight-v${CACHE_VERSION}`;

const PRECACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/sw.js',
  // Icons
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  // Handleiding
  '/data/help.js',
  '/data/addons.js',
  '/data/platynator-inchy-export.js',
  '/assets/addons/platy-prio-list.jpg',
  '/assets/addons/mpt-alchemy-preview.png',
  '/assets/addons/mpt-herbalism-preview.png',
  '/assets/addons/mpt-install-zip-example.png',
  '/data/affixes.js',
  '/data/bountiful-today.json',
  '/data/prey-today.json',
  '/data/live_reset_data.json',
  '/data/dungeons.json',
  '/data/delves.js',
  '/data/portals.js',
  '/data/activities/prey.json',
  '/data/activities/delves.json',
  '/data/raids.json',
  '/images/raids/rift-of-aln-bg.svg',
  '/images/raids/voidspire-bg.svg',
  '/images/raids/march-queldanas-bg.svg',
  '/data/preyData.js',
  '/data/preyTargets.js',
  '/data/prey-day-ensure.js',
  '/images/dungeons/windrunner-spire-bg.svg',
  '/images/dungeons/magisters-terrace-bg.svg',
  '/images/dungeons/maisara-caverns-bg.svg',
  '/images/dungeons/nexus-point-xenas-bg.svg',
  '/images/dungeons/algethar-academy-bg.svg',
  '/images/dungeons/pit-of-saron-bg.svg',
  '/images/dungeons/seat-of-the-triumvirate-bg.svg',
  '/images/dungeons/skyreach-bg.svg',
  '/images/dungeons/murder-row-bg.svg',
  '/images/dungeons/blinding-vale-bg.svg',
  '/images/dungeons/den-of-nalorakk-bg.svg',
  '/images/dungeons/voidscar-arena-bg.svg',
  // Dungeons — Season 1 (split)
  '/data/dungeons/s1/windrunner_spire.js',
  '/data/dungeons/s1/magisters_terrace.js',
  '/data/dungeons/s1/maisara_caverns.js',
  '/data/dungeons/s1/nexus_point_xenas.js',
  '/data/dungeons/s1/algethar_academy.js',
  '/data/dungeons/s1/pit_of_saron.js',
  '/data/dungeons/s1/seat_of_the_triumvirate.js',
  '/data/dungeons/s1/skyreach.js',
  '/data/dungeons/s1/murder_row.js',
  '/data/dungeons/s1/the_blinding_vale.js',
  '/data/dungeons/s1/den_of_nalorakk.js',
  '/data/dungeons/s1/voidscar_arena.js',
  '/data/dungeons/s1/dungeons_bundle.js',
  '/data/dungeons/s1/season1_shared.js',
  // Professies
  '/data/professions/alchemy.js',
  '/data/professions/blacksmithing.js',
  '/data/professions/cooking.js',
  '/data/professions/enchanting.js',
  '/data/professions/engineering.js',
  '/data/professions/fishing.js',
  '/data/professions/herbalism.js',
  '/data/professions/inscription.js',
  '/data/professions/jewelcrafting.js',
  '/data/professions/kp_data.js',
  '/data/professions/kp_sources.js',
  '/data/professions/leatherworking.js',
  '/data/professions/mining.js',
  '/data/professions/skinning.js',
  '/data/professions/tailoring.js',
  // Specs — alle 38
  '/data/specs/affliction_warlock.js',
  '/data/specs/arcane_mage.js',
  '/data/specs/arms_warrior.js',
  '/data/specs/assassination_rogue.js',
  '/data/specs/augmentation_evoker.js',
  '/data/specs/balance_druid.js',
  '/data/specs/blood_dk.js',
  '/data/specs/bm_hunter.js',
  '/data/specs/brewmaster_monk.js',
  '/data/specs/demonology_warlock.js',
  '/data/specs/destruction_warlock.js',
  '/data/specs/devastation_evoker.js',
  '/data/specs/discipline_priest.js',
  '/data/specs/elemental_shaman.js',
  '/data/specs/enhancement_shaman.js',
  '/data/specs/feral_druid.js',
  '/data/specs/fire_mage.js',
  '/data/specs/frost_dk.js',
  '/data/specs/frost_mage.js',
  '/data/specs/fury_warrior.js',
  '/data/specs/guardian_druid.js',
  '/data/specs/havoc_dh.js',
    '/data/specs/devourer_dh.js',
  '/data/specs/holy_paladin.js',
  '/data/specs/holy_priest.js',
  '/data/specs/mistweaver_monk.js',
  '/data/specs/mm_hunter.js',
  '/data/specs/outlaw_rogue.js',
  '/data/specs/preservation_evoker.js',
  '/data/specs/protection_paladin.js',
  '/data/specs/protection_warrior.js',
  '/data/specs/restoration_druid.js',
  '/data/specs/restoration_shaman.js',
  '/data/specs/ret_paladin.js',
  '/data/specs/shadow_priest.js',
  '/data/specs/subtlety_rogue.js',
  '/data/specs/survival_hunter.js',
  '/data/specs/unholy_dk.js',
  '/data/specs/vengeance_dh.js',
  '/data/specs/windwalker_monk.js',
  '/data/specs/universal_bis_attach.js',
  '/data/midnight_bis_item_ids.js',
];

/**
 * Precache één voor één: één ontbrekend bestand breekt de hele install niet af.
 */
async function precacheResilient(cache, urls) {
  for (const url of urls) {
    try {
      await cache.add(url);
    } catch (err) {
      console.warn('[SW] Precache mislukt (overslaan):', url, err);
    }
  }
}

// Install: cache bestanden resilient (geen addAll-all-or-nothing)
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => precacheResilient(cache, PRECACHE))
  );
});

// Activate: verwijder ALLE oude caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Oude cache verwijderd:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first, netwerk als fallback
// bountiful-today.json / prey-today.json altijd van netwerk (dagelijks vernieuwd)
self.addEventListener('fetch', event => {
  if (
    event.request.url.includes('bountiful-today.json') ||
    event.request.url.includes('prey-today.json') ||
    event.request.url.includes('live_reset_data.json')
  ) {
    event.respondWith(fetch(event.request));
    return;
  }
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const toCache = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, toCache));
        return response;
      });
    })
  );
});

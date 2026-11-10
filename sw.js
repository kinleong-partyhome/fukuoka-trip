/* Offline support for the trip site.
   - Pages: try the network first (so itinerary edits show up), fall back to the saved copy after 3.5s or when offline.
   - Own assets: serve the saved copy immediately, refresh it in the background.
   - Photos and fonts from other sites: keep whatever has been seen once.
   Bump VERSION if you ever need to force every phone to drop its saved copy. */
const VERSION = 'kyushu-2026-v7';
const CORE = ['./', 'index.html', 'food-map.html', 'manifest.webmanifest',
  'assets/hero-mifuneyama-1920.webp', 'assets/badge-320.webp',
  'assets/otake-home-fixed.jpg', 'assets/icon-192.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION)
    .then(c => Promise.all(CORE.map(u => c.add(u).catch(() => {}))))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

const save = (req, res) => {
  if (res && (res.ok || res.type === 'opaque')) {
    const copy = res.clone();
    caches.open(VERSION).then(c => c.put(req, copy)).catch(() => {});
  }
  return res;
};

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const own = url.origin === self.location.origin;

  if (own && (req.mode === 'navigate' || url.pathname.endsWith('.html'))) {
    e.respondWith(new Promise(resolve => {
      let settled = false;
      const fromCache = () => caches.match(req, { ignoreSearch: true })
        .then(r => r || caches.match('index.html'));
      const timer = setTimeout(() => fromCache().then(r => { if (r && !settled) { settled = true; resolve(r); } }), 3500);
      fetch(req).then(res => {
        clearTimeout(timer); save(req, res);
        if (!settled) { settled = true; resolve(res); }
      }).catch(() => {
        clearTimeout(timer);
        if (!settled) fromCache().then(r => { settled = true; resolve(r || Response.error()); });
      });
    }));
    return;
  }

  if (own) {
    e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => {
      const fresh = fetch(req).then(res => save(req, res)).catch(() => hit);
      return hit || fresh;
    }));
    return;
  }

  const keep = req.destination === 'image' || req.destination === 'font' ||
    /(^|\.)fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (keep) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => save(req, res))));
  }
});

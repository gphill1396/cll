// The offline shell. The page itself is network-first: a visitor with a
// connection always gets the current build, and only an offline one gets the
// cached copy. The build's hashed files are cached on install (the deploy
// writes their names into ASSETS) and served cache-first, so the cached page
// can always find its own scripts. Before this, the page was cache-first and
// its scripts were not precached: after a deploy replaced the hashed files,
// the stale page asked for scripts that no longer existed and sat blank,
// with nothing running to pick up the new build.
const CACHE = "cll-shell-f7af928b";
const ASSETS = ["./assets/CHANGELOG-tNh8jhdH.js","./assets/CompRules-LModZD4m.js","./assets/DataTab-BwpzOHRD.js","./assets/DeckChronicle-Dl1KjaZ_.js","./assets/GameTab-CGWO7-eh.js","./assets/GlossaryPanel-DE_nlYy-.js","./assets/GuidedTour-ilc7BUCZ.js","./assets/HistoryTab-CEp5PrKK.js","./assets/HomeStoragePlan-CtA3EElG.js","./assets/LimitedGames-CS6QwffY.js","./assets/ListsView-S1WBah7J.js","./assets/LoadoutTab-gd1k9S8H.js","./assets/ManageTab-BOomCa8V.js","./assets/PlaygroupTab-S-lvwBBp.js","./assets/RecordTabs-D_WtjFKW.js","./assets/ReleaseNotes-DJnirBfZ.js","./assets/RosterTab-DU9ma8mF.js","./assets/SettingsTab-bWXJtxqM.js","./assets/StatsTab-CAmftAO5.js","./assets/TabletopView-DCQRGKHr.js","./assets/TodoTab-BI8taqP2.js","./assets/TournamentPanel-qmprieW8.js","./assets/UserGuide-wYGaq88O.js","./assets/app-DJXb1p5C.js","./assets/components-BFApISJ7.js","./assets/deckChecks-JE0L1CMD.js","./assets/index-CcltRRon.js","./assets/kit-D9QOeuwp.js","./assets/progress-CLaw9SW_.js","./assets/storage-CCO4F2_i.js","./assets/sync-D-CKrxez.js"];
const SHELL = ["./", "./index.html", "./manifest.webmanifest"].concat(ASSETS);
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
const isPage = (req) => req.mode === "navigate" || /\/(index\.html)?$/.test(new URL(req.url).pathname);
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || !req.url.startsWith(self.location.origin)) return;
  // the build's version stamp is how Check for updates sees a new build: never cached
  if (/\/version\.json$/.test(new URL(req.url).pathname)) return;
  if (isPage(req)) {
    e.respondWith(fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put("./index.html", copy)); }
      return res;
    }).catch(() => caches.match("./index.html")));
    return;
  }
  e.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match("./index.html")))
  );
});

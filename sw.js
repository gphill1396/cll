// The offline shell. The page itself is network-first: a visitor with a
// connection always gets the current build, and only an offline one gets the
// cached copy. The build's hashed files are cached on install (the deploy
// writes their names into ASSETS) and served cache-first, so the cached page
// can always find its own scripts. Before this, the page was cache-first and
// its scripts were not precached: after a deploy replaced the hashed files,
// the stale page asked for scripts that no longer existed and sat blank,
// with nothing running to pick up the new build.
const CACHE = "cll-shell-b2c54b49";
const ASSETS = ["./assets/CHANGELOG-CqFAThq9.js","./assets/CompRules-BGsFD6Bs.js","./assets/DataTab-Bgc6og1B.js","./assets/DeckChronicle-B_MWVJI4.js","./assets/GameTab-DbDev3Ve.js","./assets/GlossaryPanel-YrmHLCof.js","./assets/GuidedTour-DnLCRif8.js","./assets/HistoryTab-5ecRd5yK.js","./assets/HomeStoragePlan-bcPKWgTW.js","./assets/LimitedGames-DerACaXq.js","./assets/ListsView-BgCGo-F5.js","./assets/LoadoutTab-CkRQnaTh.js","./assets/ManageTab-BsaZEGT8.js","./assets/PlaygroupTab-ZpvC3FjO.js","./assets/RecordTabs-D63ykV2U.js","./assets/ReleaseNotes-CsGthvbp.js","./assets/RosterTab-BzMuBaZU.js","./assets/SettingsTab-D7wYHvEJ.js","./assets/StatsTab-DMgP_cu7.js","./assets/TabletopView-UMNDOL83.js","./assets/TodoTab-LZYzqPVK.js","./assets/TournamentPanel-Bp98FeJn.js","./assets/UserGuide-CNVaO7lu.js","./assets/app-DxagnGBH.js","./assets/components-DX25gHeA.js","./assets/deckChecks-DLj2CFhw.js","./assets/index-CVciwWZt.js","./assets/kit-BLQsgBiE.js","./assets/progress-BN6IT_F5.js","./assets/storage-C5ETnP9E.js","./assets/sync-D3emrr31.js"];
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

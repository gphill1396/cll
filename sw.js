// The offline shell. The page itself is network-first: a visitor with a
// connection always gets the current build, and only an offline one gets the
// cached copy. The build's hashed files are cached on install (the deploy
// writes their names into ASSETS) and served cache-first, so the cached page
// can always find its own scripts. Before this, the page was cache-first and
// its scripts were not precached: after a deploy replaced the hashed files,
// the stale page asked for scripts that no longer existed and sat blank,
// with nothing running to pick up the new build.
const CACHE = "cll-shell-2648586c";
const ASSETS = ["./assets/CHANGELOG-DtH__9EY.js","./assets/CompRules-DZ_mXeX_.js","./assets/DataTab-DlGL_1oZ.js","./assets/DeckChronicle-BsMWb1Iq.js","./assets/GameTab-D9Vs6bNC.js","./assets/GlossaryPanel-cwbskDrS.js","./assets/GuidedTour-DL670kge.js","./assets/HistoryTab-QAnB040n.js","./assets/HomeStoragePlan-BfdZrLzN.js","./assets/LimitedGames-Dt2n1hhc.js","./assets/ListsView-mOI8kplu.js","./assets/LoadoutTab-BuSzTxtm.js","./assets/ManageTab-D8NwqiD0.js","./assets/PlaygroupTab-DLb99r0D.js","./assets/RecordTabs-Y9R0mr8P.js","./assets/ReleaseNotes-DiWT2fM6.js","./assets/RosterTab-ByGfNydS.js","./assets/SettingsTab-BYWrYL0s.js","./assets/StatsTab-CeZtUyBJ.js","./assets/TabletopView-Ww73cCHI.js","./assets/TodoTab-BE19yFoN.js","./assets/TournamentPanel-Dv6uHkCh.js","./assets/UserGuide-BplMhvgO.js","./assets/app-CXq9Ok7f.js","./assets/components-CSmterf6.js","./assets/deckChecks-Bdm645zK.js","./assets/index-CQvgB2ts.js","./assets/kit-DWOct_wD.js","./assets/progress-B5apEc0b.js","./assets/storage-DI7U6hRM.js","./assets/sync-BNQX0j90.js"];
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

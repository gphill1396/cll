// The offline shell. The page itself is network-first: a visitor with a
// connection always gets the current build, and only an offline one gets the
// cached copy. The build's hashed files are cached on install (the deploy
// writes their names into ASSETS) and served cache-first, so the cached page
// can always find its own scripts. Before this, the page was cache-first and
// its scripts were not precached: after a deploy replaced the hashed files,
// the stale page asked for scripts that no longer existed and sat blank,
// with nothing running to pick up the new build.
const CACHE = "cll-shell-35a82134";
const ASSETS = ["./assets/CHANGELOG-ByQSl__O.js","./assets/CompRules-CD5Jsrx2.js","./assets/DataTab-D7YEypiW.js","./assets/DeckChronicle-DywoazUy.js","./assets/GameTab-BK_KCKG4.js","./assets/GlossaryPanel-DQm6XwXT.js","./assets/GuidedTour-Cr2pjztE.js","./assets/HistoryTab-DOuBnFyb.js","./assets/HomeStoragePlan-BlZyIodh.js","./assets/ListsView-DaJmF7mc.js","./assets/LoadoutTab-DgNo0HWs.js","./assets/ManageTab-BgWShYXm.js","./assets/PlaygroupTab-BQMhSxLB.js","./assets/ReleaseNotes-DsyQQGI4.js","./assets/RosterTab-CA5h0B7M.js","./assets/SettingsTab-CJRfQiBq.js","./assets/StatsTab-B5qs6pRO.js","./assets/TabletopView-DVzB4xLS.js","./assets/TodoTab-Bgg3jlMG.js","./assets/TournamentPanel-DouTO7ej.js","./assets/UserGuide-B9mWuVDK.js","./assets/app-SGCQtJ3U.js","./assets/components-DOKbwBR4.js","./assets/deckChecks-D6Qd3gdT.js","./assets/gameFilters-DJFgioNd.js","./assets/index-DqPmej6J.js","./assets/kit-BOeAltcu.js","./assets/progress--O_-Zf2z.js","./assets/storage-H9k-EUW_.js","./assets/sync-U8D3En9l.js"];
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

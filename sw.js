// The offline shell. The page itself is network-first: a visitor with a
// connection always gets the current build, and only an offline one gets the
// cached copy. The build's hashed files are cached on install (the deploy
// writes their names into ASSETS) and served cache-first, so the cached page
// can always find its own scripts. Before this, the page was cache-first and
// its scripts were not precached: after a deploy replaced the hashed files,
// the stale page asked for scripts that no longer existed and sat blank,
// with nothing running to pick up the new build.
const CACHE = "cll-shell-d1dafc49";
const ASSETS = ["./assets/CHANGELOG-BkgI516G.js","./assets/CompRules-D1hpa0zJ.js","./assets/DataTab-BdU2UHnN.js","./assets/DeckChronicle-B4vILIW8.js","./assets/GameTab-Do3Wsw7b.js","./assets/GlossaryPanel-CCJSqvby.js","./assets/GuidedTour-CTxgksMe.js","./assets/HistoryTab-BgCrwUyE.js","./assets/HomeStoragePlan-DSfXPbPG.js","./assets/ListsView-BEiCAcVz.js","./assets/LoadoutTab-BH9A9DI9.js","./assets/ManageTab-ulmpxsvX.js","./assets/PlaygroupTab-Daza_4-J.js","./assets/ReleaseNotes-CsoGwHZS.js","./assets/RosterTab-C2nINT5w.js","./assets/SettingsTab-BFOh0V6r.js","./assets/StatsTab-ChPAGnEA.js","./assets/TabletopView-Cz9RHmPB.js","./assets/TournamentPanel-BahvTx0e.js","./assets/UserGuide-B4mrFwsK.js","./assets/index-DtuXmcn0.js","./assets/shared-48vtcsrT.js"];
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

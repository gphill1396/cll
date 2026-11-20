// The offline shell. The page itself is network-first: a visitor with a
// connection always gets the current build, and only an offline one gets the
// cached copy. The build's hashed files are cached on install (the deploy
// writes their names into ASSETS) and served cache-first, so the cached page
// can always find its own scripts. Before this, the page was cache-first and
// its scripts were not precached: after a deploy replaced the hashed files,
// the stale page asked for scripts that no longer existed and sat blank,
// with nothing running to pick up the new build.
const CACHE = "cll-shell-9ef597a4";
const ASSETS = ["./assets/CHANGELOG-DHH-fbEm.js","./assets/CompRules-DvezlO1O.js","./assets/DataTab-Bo0jG4Ep.js","./assets/DeckChronicle-DJjncohP.js","./assets/DiagBox-BDuWyNJP.js","./assets/GameTab-BqsL35Et.js","./assets/GlossaryPanel-BqJ0nchG.js","./assets/GuidedTour-D-SjZjpn.js","./assets/HistoryTab-D-emQH4V.js","./assets/HomeStoragePlan-BzShDkHB.js","./assets/LimitedGames-9Oea7GJR.js","./assets/ListsView-w0yLIhIh.js","./assets/LoadoutTab-JMzlSMjU.js","./assets/ManageTab-DZXQRWar.js","./assets/MoxIdeas-DlPcm_8U.js","./assets/PlaygroupTab-Dg6Zp5S4.js","./assets/RecordTabs-BsAURrdL.js","./assets/ReleaseNotes-D0MwjUyv.js","./assets/RosterTab-DzDm_dQ2.js","./assets/SettingsTab-DsS5kjkp.js","./assets/SignedCards-CbM3hZOi.js","./assets/StatsTab-BXAy0Spp.js","./assets/TabletopView-Bv5sTzFs.js","./assets/TodoTab-CKnuXytS.js","./assets/TournamentPanel-Be0B0Z9X.js","./assets/UserGuide-Cn2oL4vf.js","./assets/app-BJVvWlgJ.js","./assets/components-KA_FPQ9V.js","./assets/deckChecks-RvCm5Sku.js","./assets/index-DNijKc17.js","./assets/kit-1GT9ZrJn.js","./assets/progress-DPA4aU_z.js","./assets/storage-DcOUoB9R.js","./assets/sync-rZHpX7CR.js"];
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

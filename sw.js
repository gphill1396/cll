// The offline shell. The page itself is network-first: a visitor with a
// connection always gets the current build, and only an offline one gets the
// cached copy. The build's hashed files are cached on install (the deploy
// writes their names into ASSETS) and served cache-first, so the cached page
// can always find its own scripts. Before this, the page was cache-first and
// its scripts were not precached: after a deploy replaced the hashed files,
// the stale page asked for scripts that no longer existed and sat blank,
// with nothing running to pick up the new build.
const CACHE = "cll-shell-a7232038";
const ASSETS = ["./assets/CHANGELOG-B5EIEjyy.js","./assets/CompRules-qVlTlIYJ.js","./assets/DataTab-Dv0qAt3u.js","./assets/DeckChronicle-D8eq1fva.js","./assets/GameTab-Exj81XFk.js","./assets/GlossaryPanel-BDTVxc6q.js","./assets/GuidedTour-C68iOb9_.js","./assets/HistoryTab-K_lgTOf7.js","./assets/HomeStoragePlan-BD5fjhBt.js","./assets/LimitedGames-Ds8tKvXU.js","./assets/ListsView-C83S__2t.js","./assets/LoadoutTab-hdxEEx7F.js","./assets/ManageTab-DoaXOfrs.js","./assets/PlaygroupTab-xl6Qgqfd.js","./assets/RecordTabs-B0xVP6TZ.js","./assets/ReleaseNotes-D-VKr6IT.js","./assets/RosterTab-atuFPOiU.js","./assets/SettingsTab-CVJWSwBk.js","./assets/StatsTab-5TIIGRI0.js","./assets/TabletopView-Ce1T4HBh.js","./assets/TodoTab-CWhFl-jB.js","./assets/TournamentPanel-_tmYi0sC.js","./assets/UserGuide-BoVjI0IA.js","./assets/app-BT_O6Q3E.js","./assets/components-DdK5FMKj.js","./assets/deckChecks-BWhJzCrO.js","./assets/index-CKSkzFgD.js","./assets/kit-Ckaf9me9.js","./assets/progress-BXEcbDpN.js","./assets/storage-BnplEs01.js","./assets/sync-7jM2wW2y.js"];
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

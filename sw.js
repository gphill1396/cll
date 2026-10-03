// The offline shell. The page itself is network-first: a visitor with a
// connection always gets the current build, and only an offline one gets the
// cached copy. The build's hashed files are cached on install (the deploy
// writes their names into ASSETS) and served cache-first, so the cached page
// can always find its own scripts. Before this, the page was cache-first and
// its scripts were not precached: after a deploy replaced the hashed files,
// the stale page asked for scripts that no longer existed and sat blank,
// with nothing running to pick up the new build.
const CACHE = "cll-shell-5309a65d";
const ASSETS = ["./assets/index-DRvSCEyV.js"];
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

const c = [
  "/_app/immutable/assets/_layout-482ee7ac.css",
  "/_app/immutable/chunks/singletons-27fa1334.js",
  "/_app/immutable/chunks/stores-91d847f9.js",
  "/_app/immutable/components/pages/_page.svelte-c833cdc7.js",
  "/_app/immutable/chunks/TimelineHeatmap-4206a88f.js",
  "/_app/immutable/chunks/Disclaimer-1b4cf4d6.js",
  "/_app/immutable/chunks/Footer-08234dcd.js",
  "/_app/immutable/chunks/SvelteMarkdown-fa3353b3.js",
  "/_app/immutable/components/error.svelte-68af4bdd.js",
  "/_app/immutable/chunks/index-90e0c4e4.js",
  "/_app/immutable/start-2a69d7a0.js",
  "/_app/immutable/chunks/0-a06417a9.js",
  "/_app/immutable/chunks/1-baa87350.js",
  "/_app/immutable/chunks/2-d5713228.js",
  "/_app/immutable/chunks/4-de76d1a9.js",
  "/_app/immutable/chunks/5-1dad0ba7.js",
  "/_app/immutable/chunks/9-24be76c3.js",
  "/_app/immutable/chunks/10-129dd381.js",
  "/_app/immutable/modules/pages/_entry_/_layout.js-df8d1489.js",
  "/_app/immutable/modules/pages/_page.js-8da6f1e5.js",
  "/_app/immutable/components/pages/_entry_/_type_/_slug_/_page.svelte-74e8e94f.js",
  "/_app/immutable/components/pages/_layout.svelte-f846d3a3.js",
  "/_app/immutable/components/pages/_entry_/_page.svelte-1ae25394.js",
  "/_app/immutable/chunks/_layout-fa9967c9.js",
  "/_app/immutable/chunks/CollectionList-32d51a76.js",
  "/_app/immutable/components/layout.svelte-36dadd6b.js",
  "/_app/immutable/components/pages/_entry_/_type_/_page.svelte-c60e2eb2.js",
  "/_app/immutable/chunks/Header-cf985b3a.js",
  "/_app/immutable/chunks/6-58975837.js",
  "/_app/immutable/chunks/CalendarList-f5c99f56.js",
  "/_app/immutable/chunks/7-67381525.js",
  "/_app/immutable/chunks/8-5e860165.js",
  "/_app/immutable/components/pages/_entry_/day/_date_/_page.svelte-fb6a81e7.js",
  "/_app/immutable/components/pages/_entry_/for-speakers/_page.svelte-d5c630c4.js",
  "/_app/immutable/chunks/utils-1e199f41.js",
  "/_app/immutable/components/pages/_entry_/for-sponsors/_page.svelte-497adb66.js",
  "/_app/immutable/chunks/control-e7f5239e.js",
  "/_app/immutable/chunks/DisclaimerHidden-f8bb199f.js",
  "/_app/immutable/chunks/3-b926e0f8.js",
  "/_app/immutable/components/pages/_entry_/schedule/_page.svelte-a06c987a.js",
  "/_app/immutable/chunks/_page-6ce32609.js"
], u = [
  "/bg-prg.png",
  "/favicon.png",
  "/img/pbw23-banner-square.png",
  "/img/pbw23-twitter-card.png",
  "/manifest.json",
  "/preview.jpg"
], l = "1675547083496", n = `cache-${l}`, m = [
  ...c,
  // the app itself
  ...u
  // everything in `static`
];
self.addEventListener("install", (e) => {
  async function a() {
    await (await caches.open(n)).addAll(m);
  }
  e.waitUntil(a());
});
self.addEventListener("activate", (e) => {
  async function a() {
    for (const s of await caches.keys())
      s !== n && await caches.delete(s);
  }
  e.waitUntil(a());
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET")
    return;
  async function a() {
    const s = new URL(e.request.url), t = await caches.open(n);
    if (m.includes(s.pathname))
      return t.match(e.request);
    try {
      const p = await fetch(e.request);
      return p.status === 200 && t.put(e.request, p.clone()), p;
    } catch {
      return t.match(e.request);
    }
  }
  e.respondWith(a());
});

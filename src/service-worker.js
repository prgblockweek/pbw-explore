import { build, files, version } from '$service-worker';
import data from '$lib/data.json' assert { type: 'json' };
import { config } from '$lib/pbw.js';

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

const images = [];
for (const col in config.collections) {
	if (config.collections[col].virtual) continue;
	images.push(...data[col].map((x) => x.logo || x.photoUrl || x.photo).filter((e) => e));
}
for (const ev of data.events) {
	if (ev.speakers) {
		images.push(...ev.speakers.map((s) => s.photoUrl).filter((x) => x));
	}
}

const ASSETS = [
	...build, // the app itself
	...files, // everything in `static`
	...images
];

console.log(ASSETS);

self.addEventListener('install', (event) => {
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}

	event.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (event) => {
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	}

	event.waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', (event) => {
	// ignore POST requests etc
	if (event.request.method !== 'GET') return;

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);

		// `build`/`files` can always be served from the cache
		if (ASSETS.includes(url.pathname)) {
			return cache.match(event.request);
		}

		// for everything else, try the network first, but
		// fall back to the cache if we're offline
		try {
			const response = await fetch(event.request);

			if (response.status === 200) {
				cache.put(event.request, response.clone());
			}

			return response;
		} catch {
			return cache.match(event.request);
		}
	}

	event.respondWith(respond());
});

const cacheVersion = "BlackC4t-2019.11.1";
const urlsToPrefetch = [
	"/PWA.BlackC4t/",

	"/PWA.BlackC4t/index.html",
	"/PWA.BlackC4t/2kotp.html",
	"/PWA.BlackC4t/public.html",
	"/PWA.BlackC4t/password.html",

	"/PWA.BlackC4t/scripts/otp.js",
	"/PWA.BlackC4t/scripts/password.js",
	"/PWA.BlackC4t/scripts/public.js",


	"/css/theme/auto.css",
	"/css/theme/black.css",
	"/css/theme/dark.css",
	"/css/theme/light.css",
	"/css/main.css",
	"/css/settings.css",
	"/scripts/navbar.js",
	"/scripts/script.js",
	"/scripts/settings.js",
	"/images/pageicons/info.svg",
	"/images/pageicons/settings.svg",
	"/images/pageicons/keyboard_backspace.svg",
	"/images/appicons/squircle-256.png"
];



self.addEventListener("install", function (event) {
	event.waitUntil(
		caches.open(cacheVersion).then(function (cache) {
			return cache.addAll(urlsToPrefetch);
		})
	);
});

self.addEventListener("activate", function(event) {
	event.waitUntil(
		caches.keys().then(function(keyList){
			return Promise.all(keyList.map(function(key){
				if (key !== cacheVersion){
					return caches.delete(key);
				}
			}));
		})
	);
	return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  let responsePromise = caches.match(event.request).then((response) => {
    return response || fetch(event.request);
  });

  event.respondWith(responsePromise);
});

const cacheVersion = "fredhappyface";
const urlsToPrefetch = [
  "/PWA.BlackC4t/",

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
  "/images/pageicons/keyboard_backspace.svg"
];



this.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(cacheVersion).then(function(cache) {
      return cache.addAll(urlsToPrefetch);
    })
  );
});


this.addEventListener("fetch", (event) => {
  let responsePromise = caches.match(event.request).then((response) => {
    return response || fetch(event.request);
  });

  event.respondWith(responsePromise);
});

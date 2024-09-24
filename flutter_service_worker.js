'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "52533a9dbd995ae68359a73560c89332",
"assets/AssetManifest.bin.json": "f28cc43a2dd944b1e3831704931faaf3",
"assets/AssetManifest.json": "bc1ca130cff5e4a9185c1f67b694c8af",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d549d7970b57c2f3485d0788a59873f5",
"assets/images/1.jpg": "3cfa4bcf0fdccb7ffb7be8607b75c65e",
"assets/images/2.jpg": "05af1ab1600f4114f1868856261ee334",
"assets/images/3.jpg": "eb0a4e55fe4ddafb9924ce3194b4ff9b",
"assets/images/background.jpg": "c31050399320929b22a606b739efbf6b",
"assets/images/dg.jpg": "32d0b7898086af070ba5b1b14fbc4bd4",
"assets/images/fouine.mp4": "a0e9b37913f7012370938cf04bcfc22e",
"assets/images/humaine.jpg": "211d029438ff28719a906bdb6439a548",
"assets/images/jardin.jpg": "f6ce6e307289d05d9dd74095967e37e7",
"assets/images/jardin2.jpg": "65242828f7a47f9aa3f920f168ae91ac",
"assets/images/logo.jpg": "88231cacbc5a6b7295a770173c8f163c",
"assets/images/logo.png": "4e18e5878d1c84b5ce13f054aa024254",
"assets/images/logoblack.jpg": "82c2c83c55554d76b3b5dc2be5fa9e8c",
"assets/images/logoblue.png": "6f3fd9ba8c30e0e07792bf3788f0fcd1",
"assets/images/logowhite.jpg": "f5776d6ed799bb4f8f06e38a7bb14b49",
"assets/images/photodg.jpg": "3549bcd7c27ac50285d005fa25014746",
"assets/images/photo_2024-09-06_16-19-57.jpg": "88231cacbc5a6b7295a770173c8f163c",
"assets/images/photo_2024-09-06_16-20-02.jpg": "88231cacbc5a6b7295a770173c8f163c",
"assets/images/photo_2024-09-20_19-37-33.jpg": "7e86ae6d33ab86b7573d83614b2b90cc",
"assets/images/photo_2024-09-22_20-23-02.jpg": "3549bcd7c27ac50285d005fa25014746",
"assets/images/presentation.jpg": "ca64f16aa2ec95f57991218008215f93",
"assets/images/rangecar2.jpg": "7e53481caee8c4d21378a096097c9447",
"assets/images/rangecard.jpg": "a53689bdf5a2fb9d3a16873045269af9",
"assets/images/rangecard3.jpg": "7e53481caee8c4d21378a096097c9447",
"assets/images/washcard.jpg": "a7fd980550de346d735d0758237e17f8",
"assets/images/washcard1.jpg": "33da7a41e25184aa49289f20250bd92d",
"assets/images/washearth.jpg": "7ec3e408be4df8497ef6b7465a616185",
"assets/images/washflouer.jpg": "0f48b7ae6f594720d83a2c30337520bb",
"assets/images/washflouer1.jpg": "d558d44b966276a062624c55d1e42572",
"assets/images/washhopital.jpg": "efdf075e1636aeb05cdd08fa931df1f4",
"assets/images/washhospital.jpg": "1a7b8d6c22b86104eef7e48c23173b2f",
"assets/images/washmarket.jpg": "83c22aa325f6fe9d13285bd4dc5bf9ff",
"assets/images/washmarket2.jpg": "d4b47c557aed6ea92b9ea8da12ec2481",
"assets/NOTICES": "c008a34f6f5cca479fbbdf4232e70b2f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "00182b3bc9d3f2644755e41f26b11544",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fb1b0b14afe3ea7c805a3e846887f053",
"/": "fb1b0b14afe3ea7c805a3e846887f053",
"main.dart.js": "3a723b3c9af34401d47452ac1855ed6d",
"manifest.json": "b13dc7ce4ab6be3b0e0f5816a35f39a7",
"version.json": "cdfdc674af3658532ce8ccef5222e8a5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

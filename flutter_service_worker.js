'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "156e73c8e70d4dfecc191384a992118c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/back.jpg": "cae5c08fbaaedcf94be22ef5fcf37b79",
"assets/images/loadpage.jpg": "1e6edcece76f88a822a766c856b39adc",
"assets/images/loginsap.jpg": "371c1c49ff66544b845b96db35e259ad",
"assets/images/Logo%2520Design%2520Unibrain%2520par%2520Dossine.jpg.png": "f20857791c93ac6e9ef2ba42a46b700c",
"assets/images/Logo%2520Design%2520Unibrain%2520White%2520par%2520Dossine.jpg": "7f4f7633be6cee8f3d854bdcdfa90648",
"assets/images/Logo%2520Design%2520Unibrain%2520White.png": "0058b3b558615e3013263942c76066d7",
"assets/images/Logo%2520Design%2520Unibrain.png": "8adfdd20d8c07d88e81e414e67dac5ac",
"assets/images/Logo%2520Unibrain-01.jpg": "efc34e0bb4a3de11e33433240e3c68fb",
"assets/images/Logo%2520Unibrain-01.png": "47e49a7848c7e686c2aee09e5559c332",
"assets/images/Logo%2520Unibrain-02.jpg": "9454c5a15581d7770a022f8ce8d1c214",
"assets/images/Logo%2520Unibrain-02.png": "c46a24a4dfa7e3c42c6c5816c25fc606",
"assets/images/Logo%2520Unibrain-03.jpg": "70a38aa639b0151e8606d5b2ea40520e",
"assets/images/Logo%2520Unibrain-03.png": "f9ebde919f2717317418101af2849e52",
"assets/images/Logo%2520Unibrain-04.jpg": "6524f9fbd0ea12b97602bf29aad144f4",
"assets/images/Logo%2520Unibrain-04.png": "26091a362c6722d6e201f2d3a8dbc8f8",
"assets/images/Logo%2520Unibrain-05.jpg": "885d4597a6f5a80d53cbf2f0a5f8d283",
"assets/images/Logo%2520Unibrain-05.png": "07430694e1a0c52d2bd92d45629b5de6",
"assets/images/Logo%2520Unibrain-06.jpg": "23cce8657bb72983be06e27a0881b806",
"assets/images/Logo%2520Unibrain-06.png": "83ce99f493dda200ff87ddb26edc908e",
"assets/images/Logo%2520Unibrain-07.jpg": "2d97a0a14cf7678a769e988bb4c99536",
"assets/images/Logo%2520Unibrain-07.png": "841abfaa97600776dae8dfad7f2f8d13",
"assets/images/Logo%2520Unibrain-08.jpg": "d13ff383f9078d018797d3f3c06fc808",
"assets/images/Logo%2520Unibrain-08.png": "c86b71741e85851d29ad9a88a9fa2c90",
"assets/images/Logo%2520Unibrain-09.jpg": "1d4e03b703ad0169af3a66cd95923c8e",
"assets/images/Logo%2520Unibrain-09.png": "17a7debf002dd700ce24d2db1096ec28",
"assets/images/Logo%2520Unibrain-10.jpg": "92f6194699c730074621f401cc0bf4d5",
"assets/images/Logo%2520Unibrain-10.png": "806af004f7d004e6763b2926fc5a34c1",
"assets/images/Logo%2520Unibrain-11.jpg": "1c873138cab29862bd413a1b3a8493e4",
"assets/images/Logo%2520Unibrain-11.png": "39baf067bcb67a4dfef822a289e184ba",
"assets/images/Logo%2520Unibrain-12.jpg": "3d4b91e418287d3a5890a15a6acea798",
"assets/images/Logo%2520Unibrain-12.png": "9f2c1f56d6abd37504a7c0440bd259d4",
"assets/images/Logo%2520Unibrain-13.jpg": "18a49fa0e3b9f70f87c13f651c7db0cc",
"assets/images/Logo%2520Unibrain-14.jpg": "543bef2b4e519491e64380c94e15fe35",
"assets/images/Logo%2520Unibrain-14.png": "f1bee859667e1ee36452d86e9627e5ec",
"assets/images/post.jpg": "7fcd014d2a2634be3af2d7d45c7e5865",
"assets/images/profils.gif": "b6bddea4ccb7ce783a32e86c379ddf53",
"assets/images/sceance.jpg": "d9efc204af335e8211ee5667fac1cb17",
"assets/images/uniback.jpg": "d0bf75b8b4008dc1aa5194cbc981d7aa",
"assets/images/unir.jpg": "cff0266c544f4f2f651025054998d443",
"assets/NOTICES": "85e4b3fc26fc83e85acc2bb69b30cfff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/shaders/ink_sparkle.frag": "2ad5fabd6a36a6deff087b8edfd0c1f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bb769b7c39888b19ee9ec75326e10c03",
"/": "bb769b7c39888b19ee9ec75326e10c03",
"main.dart.js": "2eac4e9e71634ca8254be0a4a0a753d1",
"manifest.json": "fafc4d8957d650f6829848f01880a34c",
"version.json": "d188348757f89c92455ed0291b215dd4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

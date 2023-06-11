'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c2a08cda2a1e690bfed5ce9fc4d9e5b1",
"index.html": "b01a6daff4db9208a71b6c59041061b7",
"/": "b01a6daff4db9208a71b6c59041061b7",
"main.dart.js": "7de02057bd87abc454153131251a70d7",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "36f20e0c0789b5f97c2643d9f4593eab",
"assets/AssetManifest.json": "e844aa77b94686c303f6ed553f5e260b",
"assets/NOTICES": "c1656a20171d97e696f0ee363cd50ea4",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/shaders/ink_sparkle.frag": "8db3e38f7bbdc053f550caa1fa6f7390",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/search.svg": "2ab3d882bfdbe5d43bce8b1e5a552850",
"assets/assets/images/tracking.svg": "093f23be279330cefd73938c96c482ac",
"assets/assets/images/offline.svg": "34691e96d1aa53ea08a33c9c8336d0cf",
"assets/assets/images/Expand_down.svg": "47c0b73fb00f47c36ecdbb978d4ad2de",
"assets/assets/images/track.svg": "85e8ad9d68ace1502d26f1ec7513c307",
"assets/assets/images/distance.svg": "fe5c7633c2653852b48355215d50db6b",
"assets/assets/images/user.svg": "f36390ec068be03f1bb0d25cb69f525a",
"assets/assets/images/person.svg": "50eb411d6b346c270f215182f9f9f611",
"assets/assets/images/logout.svg": "438a442b2feb6c2ddcdc5d24908419e1",
"assets/assets/images/car-with-mobile.png": "8749d0aa117624db75bcf78342ced22e",
"assets/assets/images/option.svg": "65b8a7cf99cdda653c7a8f4cf50c8f23",
"assets/assets/images/database.svg": "92033a8c953be93c6b74cb476b1cc502",
"assets/assets/images/terminal.svg": "f26b03b474f4627fce189b5206c77d7c",
"assets/assets/images/checkbox_.svg": "fedad613df88cb58a3f4eb636f41bfb2",
"assets/assets/images/analystics.svg": "772844be94b9f03bd381856217bdb033",
"assets/assets/images/arrow-right.svg": "baf0284cd14355b4a51ba398270b7a77",
"assets/assets/images/car-with-mobile.svg": "7f47151bc0e998c80649495237995997",
"assets/assets/images/cart.svg": "3979e0169d48c8404d3db463adb06de3",
"assets/assets/images/mantainanance.svg": "58af74d28467d40175fa6fd018c8bad8",
"assets/assets/images/gps.svg": "2a84bb64af9228e7b2ece7f3c243fa38",
"assets/assets/images/cpu.svg": "24f6dc4fd66404922e84f560c8345c10",
"assets/assets/images/share-2.svg": "d69d6759bb6bffa141e7284fc9b4e612",
"assets/assets/images/rss.svg": "b4696b12693c97a41fb735a1ca18703c",
"assets/assets/images/wifi.svg": "28d80fa2190f8383c96475d453f3f3de",
"assets/assets/images/refresh-ccw.svg": "ea3f542eb7b4713127791c49c1a5a837",
"assets/assets/images/refresh.svg": "0c33820efbacc35ce8d8af38c9dc5aa3",
"assets/assets/images/uncheck.svg": "08f7159bc4dae3fa5d9456bf3c8681f1",
"assets/assets/images/setting.svg": "5cb30a6ba2d85bba69a4984bff58518d",
"assets/assets/images/icon%2520globe.svg": "8defdc63f8da1e01dba8ddf2565f94cd",
"assets/assets/images/excel.png": "7a41fbd8a1f23b64818fa21d9d76dc9c",
"assets/assets/images/up-arrow.svg": "871610e2ab1718930c7abc259b57ec57",
"assets/assets/images/logo.png": "1ffb9325757ef0ae4ec40fae24e29a69",
"assets/assets/images/Bell_pin.svg": "03802acb60ad4942937d629c7de9d4ed",
"assets/assets/images/trending.svg": "92c3a2c241085ce4710f5be38e2e2675",
"assets/assets/images/car.png": "cde8bb57da67617832defb6da34780ac",
"assets/assets/images/current.svg": "fcd5f3f9024c96ba501da6ffcd86ee78",
"assets/assets/images/avtar.png": "4f0f7b1d03422f9fb4c16254bff70e1a",
"assets/assets/images/pdf.png": "7585077b5efcacbf28d7ef457e8f14b9",
"assets/assets/images/call.svg": "f2944b0f6bcd1ac347382431cba5d62a",
"assets/assets/images/eye.svg": "ceb42312fdc654675d51ccefa884228e",
"assets/assets/images/cross.svg": "0e569e2aadbc2b05a896df7d0ce5b941",
"assets/assets/images/radious.svg": "b0c552df1f6944e8c0b276d3c9403ce7",
"assets/assets/images/menu.svg": "9196a9c3b18b70262368dfa6088eb6ca",
"assets/assets/images/icon%2520location.svg": "e80ee9166302d2c24d0efdc0f4172df8",
"assets/assets/images/users.svg": "56408de2977b3630645600c15d7fae07",
"assets/assets/images/monitor.svg": "dbc0f5899dc86165282deaa80cb4559e",
"assets/assets/images/icon%2520language.svg": "a14ec79b9dbfe10f0f003f338c921556",
"assets/assets/images/moon.svg": "8f72a8055561b6908136aa473773fe25",
"assets/assets/images/manage.svg": "51e37a13ca3cd67912200f9c41587957",
"assets/assets/logo/bluecar.png": "da41963ab96db6669bfdb6ee44546e45",
"assets/assets/logo/logo.gif": "66347ae83903553279e0c61f9974833f",
"assets/assets/logo/start_marker.png": "b85d01739c2629951ad508b4e86b3137",
"assets/assets/logo/bike.png": "4ec6f583751fd30e123addebb1d1e80c",
"assets/assets/logo/start_marker2.png": "369eb531db65aa183f5e42bebc6f8521",
"assets/assets/logo/redcar.png": "8ee9aadfde8e9ba8dfd52bc220cced18",
"assets/assets/logo/yellocar.png": "3e58f4bd732d20210606f2c055a50181",
"assets/assets/logo/start_marker1.png": "458a51a8fb4720bd6359eae492dfadd0",
"assets/assets/logo/logo.png": "ff871ab4bce604a7459ef6918d216ef1",
"assets/assets/logo/stop_marker.png": "83c4625d3111e33b46da5412bacd4921",
"assets/assets/logo/car.png": "0cf0409e5e3c6ddf568d8464c312b2da",
"assets/assets/logo/install_car.png": "64743bf80aaea80089335744332360af",
"assets/assets/logo/change_password.svg": "3542c2b1699e8c24b560609677969b5a",
"assets/assets/logo/barcode.png": "81d5e9145fe5cd5c81ca8eb5fc8ce8ae",
"assets/assets/logo/bike2.png": "7311bea8d6ed9dd72785206077cbd05f",
"assets/assets/logo.png": "af4e5c6837bf824b34f50be548c2b230",
"assets/assets/cars/alert_screen.png": "ad4f5939e4f69bb56f35c1eab429869e",
"assets/assets/cars/8.png": "a6ac62eb3d9e951ecc705f5761a0220b",
"assets/assets/cars/9.png": "2d361971ba68cc252104e1fcb6fe9f9f",
"assets/assets/cars/14.png": "edb68b84c5b9c472314fc5521cbe9a9e",
"assets/assets/cars/15.png": "936102bcb7fbcf81509f0176163c1d58",
"assets/assets/cars/17.png": "bad199a69aad4c492c61b9418148fc4c",
"assets/assets/cars/16.png": "a8a05bdfc5b2ed225ef04dc6e7af1ee0",
"assets/assets/cars/12.png": "bafb144214fe884a5d055eea1c4369c2",
"assets/assets/cars/13.png": "0510e06439e137fd6b8c9cc89952ac6d",
"assets/assets/cars/11.png": "06b8cd94142d0c34c633c24ca9e64e58",
"assets/assets/cars/10.png": "25eb57f427ebad6a0a62f7ac79ef4ba6",
"assets/assets/cars/alert.mp3": "875e6c0a73ce8829f651f819bb4dce77",
"assets/assets/cars/20.png": "5bd9d08f5d533f48ee071f000c935292",
"assets/assets/cars/18.png": "458bcec643fa90108101139941840bb9",
"assets/assets/cars/19.png": "ccadac8d0a28ef15bd2e013a97f6f0c3",
"assets/assets/cars/4.png": "872c3bfd8b98cb846ff946031e96cb1c",
"assets/assets/cars/5.png": "1471131187fb61bc76a5a74f6c03efaa",
"assets/assets/cars/7.png": "f1695123bd64db2d0b665a6253050b1e",
"assets/assets/cars/6.png": "1e43f39a3149bb257c4624b8677282e2",
"assets/assets/cars/2.png": "2cada07b9279b860826c9d53c3242c61",
"assets/assets/cars/3.png": "9bde7a26597cdb6ff53f632ed219f5d8",
"assets/assets/cars/1.png": "3de10f18e7b9b091148c28da93258d47",
"assets/assets/cache.db": "d41d8cd98f00b204e9800998ecf8427e",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
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

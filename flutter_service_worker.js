'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "aa03863c821ff6fb56192798508b6dad",
"version.json": "cd9d049a905780d09083a5118e16daea",
"res/splash_logo.png": "760423516d48b16481193292a6f12a24",
"splash/img/light-2x.png": "a6907cabc205c7b99418a2ddbc90e4a2",
"splash/img/dark-4x.png": "42c422b788d5458c3223b77595a07f13",
"splash/img/light-3x.png": "9ac10e414c38861221357f33147be613",
"splash/img/dark-3x.png": "26fe09ac131eed672f6327026134a5f0",
"splash/img/light-4x.png": "c3edc8400981870004c50ca3787d2850",
"splash/img/dark-2x.png": "d493e2c27d793846a3838ea81d653b42",
"splash/img/dark-1x.png": "1b951feffc9a59a06b7ce6d53f07ef53",
"splash/img/light-1x.png": "f6bf398cc0830498d17c8ee9da7e5de2",
"splash/splash.js": "248eb976a6d7e1be08cefcb611840075",
"splash/style.css": "9bdc602b68ad2211258638c7d2874dc0",
"index.html": "9acd478ff979bbd43ae599b6b2b45155",
"/": "9acd478ff979bbd43ae599b6b2b45155",
"firebase-messaging-sw.js": "86eb0a044e7d6d147cd209cdcd7e61ca",
"main.dart.js": "b6c9fdb729fe54c76f559dd94d6c6cbb",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"style/style.css": "f7616fe490df4a25e7b7204d5ee25d34",
"script/configure_app_helper.js": "705ecd9cd6cdc787d02d6c42249b8467",
"script/get_contact.js": "ee1f97c82df10bc0b5147231a99e572f",
"script/check_pwa.js": "b3d4e6f739b482746002648b54784b51",
"script/loading.js": "ee19863c366b0fcb6dac0dc6722ebcc4",
"script/auth.js": "4d1517fdf3cb9ddd2e3e2f1d3e61a38c",
"script/canvas_color.js": "709a08a3f32891602bb07061b3790639",
"favicon.png": "9341789dfb119c9f3f9a462e4e960932",
"icons/Icon-192.png": "fe69601e819f979ea02a4fc8c2a3c7ff",
"icons/Icon-maskable-192.png": "fe69601e819f979ea02a4fc8c2a3c7ff",
"icons/Icon-maskable-512.png": "7edca39cfadfd0912874e54f93f0a10f",
"icons/Icon-512.png": "7edca39cfadfd0912874e54f93f0a10f",
"manifest.json": "788b9f5f99fee70b1ad743da7c8261fe",
"flutter_service_worker_js.dart": "5c025e8128641c8069612c0b37970f86",
"assets/AssetManifest.json": "61b82ed9722666d8439ed6425497add8",
"assets/NOTICES": "63c22d4239e749897218a3c3c3d6d0d6",
"assets/FontManifest.json": "80c1cddd56330ab0741424e615cc6de0",
"assets/AssetManifest.bin.json": "e3e9d328aee75744872e83fffbcf0e87",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a07007f234b0b42a6e1cb53b6cd7d752",
"assets/fonts/MaterialIcons-Regular.otf": "0e6b016990cf441cfe619c31ae763c16",
"assets/assets/splash/1.5x/splash_dark.png": "57e9c40fc212d24efd12d4a56a17b4a2",
"assets/assets/splash/1.5x/splash.png": "c8aef8ab6eab640f86762aee7e87ad6d",
"assets/assets/splash/2.0x/splash_dark.png": "d731bae91d43741cd93e48991eb490be",
"assets/assets/splash/2.0x/splash.png": "30d4a755e48f9b33dfb99176c43e9cbc",
"assets/assets/splash/splash_dark.png": "868cf8a0328a8cd7d959525976a5b6d8",
"assets/assets/splash/3.0x/splash_dark.png": "62736a3b0d7ed9f41efb0ad9e5f2f474",
"assets/assets/splash/3.0x/splash.png": "46473aa93f75cc7185fac0ddf014a7e4",
"assets/assets/splash/splash_android12.png": "4962e537916e96817da1e2c89ef72b16",
"assets/assets/splash/4.0x/splash_dark.png": "760d6f2392cd0b428e81402742d70084",
"assets/assets/splash/4.0x/splash.png": "0bb6197a51c8494105d54a12efd38285",
"assets/assets/splash/splash.png": "760423516d48b16481193292a6f12a24",
"assets/assets/splash/0.75x/splash_dark.png": "e0452ae842e4e3c7acb501d9b7ea67cc",
"assets/assets/splash/0.75x/splash.png": "d436960de5a04c88c3bfee7f5eca0dd0",
"assets/assets/splash/splash_dark_android12.png": "d020d464283e414f9e4589797d918c3e",
"assets/assets/images/ios_install_first_step.png": "da441194a3c916a932bd85a890391a92",
"assets/assets/images/3x/empty_icon.png": "201d03a03bb7a546eda925b63d95f7cd",
"assets/assets/images/3x/am_icon.png": "e837ca4c601911dfe9de091a4fd8bb85",
"assets/assets/images/3x/lenta_icon.png": "b2fac67374a5cd0e70834c9eb2aab7cb",
"assets/assets/images/3x/mcd_icon.png": "967941a25f803859d0396bc51ccbea28",
"assets/assets/images/3x/banner_decoration.png": "a581057d5e18a1fbeb0903d849acdf0c",
"assets/assets/images/3x/lukoil_icon.png": "c6e8a086dc0a2913e8f82c0fb0a7dc5d",
"assets/assets/images/3x/wm_icon.png": "6f5ec2bda9334ab905d124fc3a8da9cc",
"assets/assets/images/3x/clock_icon.png": "051e6429d6f2c0933d4b5b67e02c9402",
"assets/assets/images/3x/market_icon.png": "235c6694fe06c9034998ddb4c4b7485d",
"assets/assets/images/3x/copy_icon.png": "058064a1f330482304559e25a924315e",
"assets/assets/images/empty_icon.png": "94cad80173fbc7bc6ef69b377f9ea2d7",
"assets/assets/images/rustore_logo.png": "b17b212eafcc83412381e3ff252a647c",
"assets/assets/images/profitable_deposits.png": "457452c8a5463fc2f2e45105b26eaaf3",
"assets/assets/images/ios_install_second_step.png": "da32f20f31d1133ed97cdffcde4f5236",
"assets/assets/images/am_icon.png": "eafac396909207598568ff23650826c3",
"assets/assets/images/lenta_icon.png": "743eda4a3ad8ab2153cb836c6205274c",
"assets/assets/images/mcd_icon.png": "58dc0d5ba7ad7888fd157e959ead99de",
"assets/assets/images/card_image_001.jpg": "94531ed6e4fe7b1fd8b675cbb2744a65",
"assets/assets/images/banner_decoration.png": "a581057d5e18a1fbeb0903d849acdf0c",
"assets/assets/images/lukoil_icon.png": "1dce94172d76acfc2a8ea9640836d511",
"assets/assets/images/card_image_002.jpg": "bbcd7d3eefcecda6633351741c5cf419",
"assets/assets/images/business-app.png": "d11e259541e749befe830c58b614c35d",
"assets/assets/images/wm_icon.png": "b5bd012c8f67a4c2c2dd0f05aab86c12",
"assets/assets/images/card_image_003.jpg": "b03fc13bb9833a308b05c960bc0efc92",
"assets/assets/images/clock_icon.png": "207191eb3aed8c9c9028d0d4b2c277d0",
"assets/assets/images/understandable-analytics.png": "f5115c98f1f6fed40df571183e1d2407",
"assets/assets/images/purchase-bonus.webp": "1f9a36820d161958f1d51fffc2cf728f",
"assets/assets/images/banner_shield.png": "34e11d1e56f487f10a5345768b300aa5",
"assets/assets/images/market_icon.png": "a7b1177d3094f3c6f0e9edda0295975f",
"assets/assets/images/2x/empty_icon.png": "6d1d789ff16a497dd42218adf3eed64f",
"assets/assets/images/2x/am_icon.png": "57b6f81360781c732b5f0c4a316c0db4",
"assets/assets/images/2x/lenta_icon.png": "6bbd8182a1f97abe3f461afd4d7ad69e",
"assets/assets/images/2x/mcd_icon.png": "2a1a02036cb032b766736bfc960fead4",
"assets/assets/images/2x/banner_decoration.png": "48ae8820536832be7a810f0fc0d1ce6e",
"assets/assets/images/2x/lukoil_icon.png": "2af16093d6ad365a405989ae88bb31a4",
"assets/assets/images/2x/wm_icon.png": "60540717493a3b8bda5b43dbd1e46789",
"assets/assets/images/2x/clock_icon.png": "cdae4b9b8b9a5400b7f225acfd863f25",
"assets/assets/images/2x/market_icon.png": "0d8c784ad3e6ee66e1f6c2ed9d8a6255",
"assets/assets/images/2x/copy_icon.png": "9a5b87a5f2dd6bd80c80f2ca9e3c58a7",
"assets/assets/images/copy_icon.png": "19693cbff1fac35244a5ccaa73fa4767",
"assets/assets/launcher_icons/launcher_icon.png": "c8ea45ad26670e34e8f110aeb6edb07a",
"assets/assets/icons/passport.svg": "908f9e90dc676da4811be57628b7773b",
"assets/assets/icons/search.svg": "fca0a596b3b452e3ffdd75483607bbe2",
"assets/assets/icons/Method_Visa.svg": "479db14d21831150d76689e16672834d",
"assets/assets/icons/debt.svg": "d61b016d9bfca2d78dbe7f4eed0f281b",
"assets/assets/icons/friend.svg": "b96aed36a95b01fc56a7cc1a8cb6d9be",
"assets/assets/icons/qr_pay.svg": "71985e8799ed191aab3cac9c7ae3b12e",
"assets/assets/icons/transfer_to_card.svg": "a83c7fbd1cee843927605373e2b3f427",
"assets/assets/icons/eye_off.svg": "0dabc3aacfe55b73e7274b01c3f517da",
"assets/assets/icons/ic_main.svg": "76f70f80610b46021eda8e2f0d280194",
"assets/assets/icons/add_green.svg": "0d0861ac564721b0255552e25e1a324a",
"assets/assets/icons/face_id.svg": "1e82f219696ef194176bfafd08ecef5b",
"assets/assets/icons/home.svg": "b69c49d2130c2713476d0bd38bf28009",
"assets/assets/icons/auto_pay.svg": "e62f5e49751abd82a7010ec08720845c",
"assets/assets/icons/cancel.svg": "b67616b89eb633724948d1049f49542f",
"assets/assets/icons/ic_plus.svg": "8d8f03181c5f03b00ce26eb74abd8b81",
"assets/assets/icons/credit_card.svg": "5182a963533d6fc7e01a2672b708e453",
"assets/assets/icons/services.svg": "6cce486434c6134f65456ea252810b94",
"assets/assets/icons/ic_minus.svg": "b76fbe35a7ef6db9e31aad116007fc12",
"assets/assets/icons/phone_pay.svg": "14f88d12dbd561aa3f2e602378dfa94b",
"assets/assets/icons/clear.svg": "174ff45f8388c59f6588c04a7143bbc1",
"assets/assets/icons/service.svg": "a4c7cd57e815b8bdf72f6794e44fdf69",
"assets/assets/icons/gold_card.svg": "6932877fed4f46e0d2957057af4ac49d",
"assets/assets/icons/purchase.svg": "11d72e763eb37488335e10f6bb439a91",
"assets/assets/icons/service_colored.svg": "97a307d224902fa46271982515069da5",
"assets/assets/icons/card_transfer.svg": "7d1a40b3ff10827cb6305987f09f85db",
"assets/assets/icons/arrow_left.svg": "c3b7a959ab59b3be70f357efe80b89f1",
"assets/assets/icons/between_accounts.svg": "648973631f3c1c5146c023662769d935",
"assets/assets/icons/settings.svg": "01a08f15335315774353e1ac2ab56e74",
"assets/assets/icons/tv.svg": "3a9cbde481e5c7f7bebe4b00eead9a40",
"assets/assets/icons/arrow_up.svg": "ad50b7929632415a2707c0a6394acded",
"assets/assets/icons/card_red.svg": "e9f7a6a06d52b79a9d30670572749614",
"assets/assets/icons/eye_on.svg": "b386121cf85cbb42ca86b0210d55ae1b",
"assets/assets/icons/notification_on.svg": "a6364fbdc26881cf50c6a8a673c0b40c",
"assets/assets/icons/tick.svg": "26bbd545168840ee956a4b11d93b655e",
"assets/assets/icons/arrow_right.svg": "1032b8b03dc46b2a6b5588aecc02779a",
"assets/assets/icons/plus.svg": "6bc65aee7fb2d93b82a857bc52518ad3",
"assets/assets/icons/cashback.svg": "fe20548096012051ccf0eb94c60095b0",
"assets/assets/icons/internet.svg": "850c798304a9bef46090057fb70247c3",
"assets/assets/icons/info.svg": "be03b1268d4861096114dbcba98046f8",
"assets/assets/icons/add.svg": "1410b377a7c4c1a729fe749f52c95bf1",
"assets/assets/icons/black_card.svg": "7edba6ca7d8c2080ef7dee5a9e1512e3",
"assets/assets/icons/dashed_border_plus.svg": "c3ce96f7330b2ed0ce4abc650db31063",
"assets/assets/icons/social_media.svg": "85c069e016cb6251f48d06892da2af2a",
"assets/assets/icons/chi.svg": "975b9f56d8f3c8904b457fd024c39a57",
"assets/assets/icons/card_savings.svg": "b4ea658de060330b0075f736f1e4bb72",
"assets/assets/icons/request_money.svg": "33202306abcc24261197bf711fa2b212",
"assets/assets/icons/silver_card.svg": "4c351492576cf87391f5b260a2abd48d",
"assets/assets/icons/method_mir.svg": "ed988df0639e2086c285ada759bee7a4",
"assets/assets/icons/arrow_down.svg": "2c4342b2a2a39edeab44328c79045186",
"assets/assets/icons/chat.svg": "cfe7d6d13bca24228e0d4d052298d55c",
"assets/assets/icons/pig.svg": "79128736a5392a87650b316240474e1e",
"assets/assets/icons/send.svg": "ab6f86fd7c30d97fb7526b845422ce26",
"assets/assets/icons/public_utilities.svg": "63fbf3144b06831283645cb658217e15",
"assets/assets/icons/open_an_account.svg": "908e1eb65598187d3a826c017d4b8c85",
"assets/assets/icons/sun.svg": "a89807bd8125cc97b93ca37a2494978b",
"assets/assets/icons/arrow_right_gray.svg": "75aad2f105e5c933bc5e5c6211051f32",
"assets/assets/icons/mobile_connection.svg": "1e79ce9506f02315f0070c08e5f992ac",
"assets/assets/icons/purchase_colored.svg": "842e5695c7546162695ee7479bffe357",
"assets/assets/icons/exit.svg": "54b13ac82643cba44d592c889cb093f5",
"assets/assets/icons/phone.svg": "8b127d194c16ff42490217dba42c1b88",
"assets/assets/icons/call.svg": "17c593a50eb06ade89593e981c3b6410",
"assets/assets/icons/notification_off.svg": "8bb673cd5595ccdb4cd86f5af07deab3",
"assets/assets/icons/withdraw_cash.svg": "b26ff72b79f562e73528b89ac2290f74",
"assets/assets/icons/car.svg": "9662ea8921b306f4c6a07a4ee8f42325",
"assets/assets/icons/ios_share.svg": "d01c2eca984648649ace7faeffa5ccfb",
"assets/assets/icons/credit_colored.svg": "458d2f9a23952959d01cf3b2a05fab9f",
"assets/assets/icons/calendar.svg": "caa912a3c458bccbb411917117b4cd7c",
"assets/assets/icons/payments.svg": "8406b2f76979cc18972ea95b205d40b1",
"assets/assets/icons/notify.svg": "0799d751c91d234c89348f99aca38b6c",
"assets/assets/icons/Method_Visa_gray.svg": "4cd653bacf1034bea0a82df8cef35b8f",
"assets/assets/icons/transfer_colored.svg": "a12d1a86106ecda6bccb0ba907f76964",
"assets/assets/icons/by_details.svg": "19d2e54163641aaa4b8ad2c6e7d0c3c7",
"assets/assets/icons/debit_card.svg": "614e3ad8dddb6bbb58dc3c94fbc413c3",
"assets/assets/icons/contact_book.svg": "908f9e90dc676da4811be57628b7773b",
"assets/assets/icons/history.svg": "60be14e775691f51d6f84e4e6d5bb545",
"assets/assets/icons/sniels.svg": "18b873bd7ed08fd0bfd025ce51e13904",
"assets/assets/icons/Method_Mastercard.svg": "83d83f56575b37379c935dc21fbfbfd6",
"assets/assets/icons/add_yellow.svg": "201d681d315f7e91ebb5d331e7f0607b",
"assets/assets/fonts/Rubik-MediumItalic.ttf": "510d0b3b67b4b1073bcaa961b1d8fc6d",
"assets/assets/fonts/Rubik-Bold.ttf": "f70066a21af08705d0503ad692446de1",
"assets/assets/fonts/Rubik-SemiBoldItalic.ttf": "8f5f4daa5488df8814ffa00cdae5ea4d",
"assets/assets/fonts/Rubik-Light.ttf": "98df4209c27b1be565511cc954fa307d",
"assets/assets/fonts/Rubik-Medium.ttf": "bb476f36e32039a411d1f3afaf5a81af",
"assets/assets/fonts/Rubik-ExtraBoldItalic.ttf": "df3262d88de88ab5b32e47c2b79eb964",
"assets/assets/fonts/Rubik-Black.ttf": "f7672ebc1b97272bdcbb9212f05f263d",
"assets/assets/fonts/Rubik-Italic.ttf": "163a47c632b9876470b6e78922adbaf9",
"assets/assets/fonts/Rubik-LightItalic.ttf": "7554406307bd4872a640e69b56317f5a",
"assets/assets/fonts/Rubik-SemiBold.ttf": "75600733020f310eca3713eee83ddb56",
"assets/assets/fonts/Rubik-BlackItalic.ttf": "4189902bdb53c83f1ee124beb3ce7fc3",
"assets/assets/fonts/Rubik-ExtraBold.ttf": "9f8c4a8202ef48c56a027ef49fbb2e35",
"assets/assets/fonts/Rubik-Regular.ttf": "e100d91366c744a9fcf055b7c5af9961",
"assets/assets/fonts/Rubik-BoldItalic.ttf": "8d5522a532a05a5a962b9e336261e1fb",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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

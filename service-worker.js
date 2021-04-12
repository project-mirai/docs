/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "46e12d9ae77d73f54e84264fd8f9b617"
  },
  {
    "url": "assets/css/0.styles.8a53cc28.css",
    "revision": "3d76e72705323794d7506bfe2ab22931"
  },
  {
    "url": "assets/img/a6a3b24b.7c79ea3c.png",
    "revision": "7c79ea3c4208f77aa204907923a53d39"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.867d45d8.svg",
    "revision": "867d45d8f9c0da0e3e733dd5e7a8d263"
  },
  {
    "url": "assets/js/10.d0ea5246.js",
    "revision": "37f2e1bce3d0a26595f2934606959f67"
  },
  {
    "url": "assets/js/11.3487e977.js",
    "revision": "341aedfc5a0e2b24489bbf653679fbf6"
  },
  {
    "url": "assets/js/12.a48eb973.js",
    "revision": "a0bb388fa0236d1e9aa6545a7af73ddb"
  },
  {
    "url": "assets/js/13.704b3b01.js",
    "revision": "7a7e07106c9bfd4b168c29bb9e72caa2"
  },
  {
    "url": "assets/js/14.91ee9d3d.js",
    "revision": "ac2ab5d32f239daff5fe30d20a7b5b8c"
  },
  {
    "url": "assets/js/15.587bf681.js",
    "revision": "8ec24a16be0e6ccbbcae1dbbdf74112d"
  },
  {
    "url": "assets/js/16.31f8d50e.js",
    "revision": "b25e70daf1704faec64b5068bc538583"
  },
  {
    "url": "assets/js/17.34c3c55a.js",
    "revision": "1f8989c6f73e8afe38270518d4135804"
  },
  {
    "url": "assets/js/18.9f0441e9.js",
    "revision": "c88f1bc44d1d413dc6e92247c02678ef"
  },
  {
    "url": "assets/js/19.0f5579f9.js",
    "revision": "651ce044c0606eece4a0ad0402130c2b"
  },
  {
    "url": "assets/js/2.182961f2.js",
    "revision": "d28f7ca78417278f0541ccf57f132400"
  },
  {
    "url": "assets/js/20.af9d0560.js",
    "revision": "5825fa70a1786cb9265cac33d6affa78"
  },
  {
    "url": "assets/js/21.1f5cbf3d.js",
    "revision": "9452e2c2f7d8b70085c03e1df2f5cef0"
  },
  {
    "url": "assets/js/22.f2c1ad27.js",
    "revision": "abb4facef09a3ab47d059db3cae71bf7"
  },
  {
    "url": "assets/js/23.7455dc27.js",
    "revision": "3b84ca7e89981b644bdde328adf01c0e"
  },
  {
    "url": "assets/js/24.1f8c9cc9.js",
    "revision": "c358cbc88d9bead76dbd4ea12236016a"
  },
  {
    "url": "assets/js/25.34896e09.js",
    "revision": "3342648ba89499c133a4ba6ab9d3d117"
  },
  {
    "url": "assets/js/26.c7db9a2e.js",
    "revision": "a508769ecd1f55431f2c6ed96be69843"
  },
  {
    "url": "assets/js/27.bb67f043.js",
    "revision": "40ec4e9722e11df6c3430d89aced727b"
  },
  {
    "url": "assets/js/28.d381eb07.js",
    "revision": "5e731acaf82e904cccd8af5948918d13"
  },
  {
    "url": "assets/js/29.c6e57520.js",
    "revision": "c3e6f58e04303ec04eff69bcc66bc5bf"
  },
  {
    "url": "assets/js/3.71802cfc.js",
    "revision": "0e26efe2fd884bc652686b0bd33ca95c"
  },
  {
    "url": "assets/js/30.7fb7a639.js",
    "revision": "aea9b7c3ac9f3572dcab6d72257b8e77"
  },
  {
    "url": "assets/js/31.5e922da3.js",
    "revision": "eace383a6a64537f530627cedbf53581"
  },
  {
    "url": "assets/js/32.09fec57f.js",
    "revision": "316364d32a94953d6c120124d5962104"
  },
  {
    "url": "assets/js/33.74801ad6.js",
    "revision": "35613640a830de793ddb07c13e3973c7"
  },
  {
    "url": "assets/js/34.7d454a51.js",
    "revision": "6ebb6bb409041c591eb128a2dfe5d3b1"
  },
  {
    "url": "assets/js/4.0cbccfd1.js",
    "revision": "252ae2997792ffe4807b54cd4abd8ea2"
  },
  {
    "url": "assets/js/5.74981209.js",
    "revision": "cbcf8dca57670bf985c0e3a10976dd84"
  },
  {
    "url": "assets/js/6.f38e9957.js",
    "revision": "277dc571a68ba5d06dcb3ac06b3f1f87"
  },
  {
    "url": "assets/js/7.909bf9fb.js",
    "revision": "bbecd42e9083b452b654200c7f970c6e"
  },
  {
    "url": "assets/js/8.2b58c2f0.js",
    "revision": "6c704590b5f3f6526ce5136f0ba78aea"
  },
  {
    "url": "assets/js/9.12a4bbdb.js",
    "revision": "a3df61a4bb655282aa15b33471c384ef"
  },
  {
    "url": "assets/js/app.9a24769f.js",
    "revision": "6d3ba56caf1d4b44c818bb1da52e61d1"
  },
  {
    "url": "Bots.html",
    "revision": "9acaf3bbec6e7eb090740b9c62a3235c"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "f526d8f33adcaad1fc034f87397a5f4f"
  },
  {
    "url": "console/Appendix.html",
    "revision": "7d36d48cd1aa47710b00e85306a20b16"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "6a6e44d51548e00b5ebb63aa0d3bdb3e"
  },
  {
    "url": "console/Commands.html",
    "revision": "f525b1acebf86dd703c31700f8639a98"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "a5524e14ed921a7a9f263b96f3d33b4b"
  },
  {
    "url": "console/Contributing.html",
    "revision": "0bf763fa9f4e2ebffec71cc448a37d9a"
  },
  {
    "url": "console/Extensions.html",
    "revision": "1834058e04c00d89e5d58d3bb1b2702c"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "13cbc98f4a1cce2750ce4128125e118d"
  },
  {
    "url": "console/index.html",
    "revision": "2236471f3b63ba1b402fc5bce8bf5d21"
  },
  {
    "url": "console/Permissions.html",
    "revision": "bfba239e2344e229118df8cb4fc262f1"
  },
  {
    "url": "console/PluginData.html",
    "revision": "7ea002e7739e4b83f056215d303169b4"
  },
  {
    "url": "console/Plugins.html",
    "revision": "72c4b57c782a7589bbcfee9669a8e030"
  },
  {
    "url": "console/QA.html",
    "revision": "cefe15cf163f4bea0f9fb1a21d74e70e"
  },
  {
    "url": "console/Run.html",
    "revision": "9728241fa5160f3d7d9e90cf8682f8f1"
  },
  {
    "url": "Contacts.html",
    "revision": "d5aa913f0690a5ee40b505cfa1121123"
  },
  {
    "url": "CoreAPI.html",
    "revision": "31f0e89f0225772af570758e25b3d5be"
  },
  {
    "url": "Events.html",
    "revision": "2f1d57283741527e98c80cd7e56a529b"
  },
  {
    "url": "Evolution.html",
    "revision": "33e7181f2c59050e5d64b6f4361d97d0"
  },
  {
    "url": "index.html",
    "revision": "affca16be5077a053987047d50b5d816"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "732a81c7d1b8d76402178a1cf0bb5702"
  },
  {
    "url": "Messages.html",
    "revision": "2eba3138def55c82678b1bb4c5235b5d"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "a6f80f1a8b6f092105828b8759c77684"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "636dfb6b00358fb3b39a37fcf0f2da1c"
  },
  {
    "url": "Preparations.html",
    "revision": "29daeb53301fbc14dbb07885442bafdd"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "fbdd074f13ea3548a46fafa3fed4dfb4"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "b50c19b5fc62ab3843da542284cd378d"
  },
  {
    "url": "UserManual.html",
    "revision": "4877f54e5b342fdf8bd902599a8e84b0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

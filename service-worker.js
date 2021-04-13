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
    "revision": "25bd7542518ca4390fb6ba5c8e86ce90"
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
    "url": "assets/js/10.27627c35.js",
    "revision": "0331bf5d2191b1e4fab6de2db2b3caef"
  },
  {
    "url": "assets/js/11.b7436b69.js",
    "revision": "de730e17bf8916a16923cbb63c0130de"
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
    "url": "assets/js/19.5a9aa48a.js",
    "revision": "6c934fa3018a83269f74d8d49ed92834"
  },
  {
    "url": "assets/js/2.9d3940bb.js",
    "revision": "d28f7ca78417278f0541ccf57f132400"
  },
  {
    "url": "assets/js/20.9570f3d2.js",
    "revision": "ccf23350d397714ab9bd461c82e0ccbc"
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
    "url": "assets/js/23.0025eceb.js",
    "revision": "ade4446ea8b5ed6114a82d7db34249fd"
  },
  {
    "url": "assets/js/24.9288b391.js",
    "revision": "155eedcf8eb16da5620b0c2aa844f280"
  },
  {
    "url": "assets/js/25.063b1456.js",
    "revision": "b13dd947fc436152dff08ecb844ec43d"
  },
  {
    "url": "assets/js/26.1e8ca84e.js",
    "revision": "e93bac46ea6f4e2fcdf29ed3f598fe58"
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
    "url": "assets/js/29.9d978b15.js",
    "revision": "15d9d0a8c3e447d48a76b04ed8a97e62"
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
    "url": "assets/js/app.0630bb2b.js",
    "revision": "d0a6e7c7c8b073d17e22493f1531100c"
  },
  {
    "url": "Bots.html",
    "revision": "adf130932bd9b93017de57fea5e8c81c"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "96d95db32457f132945fc45d5c7eec0b"
  },
  {
    "url": "console/Appendix.html",
    "revision": "c8eda77fa631c2e0e54a29ec42204526"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "7dbaeda1d52f2d635c1bb36eef97751f"
  },
  {
    "url": "console/Commands.html",
    "revision": "60f949f5b8886b4f37b43df260abc582"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "6580fbcfa9625ed720f73c5b8766adcd"
  },
  {
    "url": "console/Contributing.html",
    "revision": "20bd4725e4dcdb79b9610d8ccaccdb52"
  },
  {
    "url": "console/Extensions.html",
    "revision": "ea54ccb775c7f92ead4574ed7bb2d462"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "74809ade6244c8e0400057659a8a6ff3"
  },
  {
    "url": "console/index.html",
    "revision": "798810d13c09c3fabf0f5210f1ace1f5"
  },
  {
    "url": "console/Permissions.html",
    "revision": "f5c15ad8335a68a9aac1da7267b729d9"
  },
  {
    "url": "console/PluginData.html",
    "revision": "f338355cf380115316f74efb743cec05"
  },
  {
    "url": "console/Plugins.html",
    "revision": "7847dd93e07ff6f253fb4f6d1592c6f8"
  },
  {
    "url": "console/QA.html",
    "revision": "a8263e1bbc110c63a7b0c2b110842f29"
  },
  {
    "url": "console/Run.html",
    "revision": "e02d4c119dc9e3345faa9798aa836b59"
  },
  {
    "url": "Contacts.html",
    "revision": "1da0b214e2bae80572657254711a3410"
  },
  {
    "url": "CoreAPI.html",
    "revision": "32b4b782da4d51dd1d0951f8ca30970a"
  },
  {
    "url": "Events.html",
    "revision": "7b44351b14e94d45039082f30d4de404"
  },
  {
    "url": "Evolution.html",
    "revision": "548801bacc02bbbb26dbaac5ecdd73dd"
  },
  {
    "url": "index.html",
    "revision": "2198d9c8c45d9ef403aafd54a90e9128"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "e534b666e73def93e27d3bd3369a0a89"
  },
  {
    "url": "Messages.html",
    "revision": "2ba7361700acd1b8f1a0deebf8f79a4d"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "6c3556a2898e4e8642e668ea8197602f"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "03591b8d8a9c4cb0b086db4a00c45584"
  },
  {
    "url": "Preparations.html",
    "revision": "14033bcc00182a67e4783ceae5ea7cbe"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "29de2d0f56e694eaae40dbd59f9f5925"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "0b39577e20d7ce0c8864f5a0f2400ce5"
  },
  {
    "url": "UserManual.html",
    "revision": "76bc3a8c34e2c0a9c2208d0d952c5690"
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

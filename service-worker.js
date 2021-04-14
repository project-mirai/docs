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
    "revision": "9411c6555932ddb6cf32fe9afab2196e"
  },
  {
    "url": "assets/css/0.styles.f46ac581.css",
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
    "url": "assets/js/10.47a9dfa2.js",
    "revision": "2e62b641645c05620009db7049fae74a"
  },
  {
    "url": "assets/js/11.3487e977.js",
    "revision": "341aedfc5a0e2b24489bbf653679fbf6"
  },
  {
    "url": "assets/js/12.06640d66.js",
    "revision": "87361ba3558137bd637cdd49fb83169c"
  },
  {
    "url": "assets/js/13.67fae22f.js",
    "revision": "69fac01a2ebcb00926ebe47cb2bc9e15"
  },
  {
    "url": "assets/js/14.276473a2.js",
    "revision": "1a7863abed605db1177d35c597253139"
  },
  {
    "url": "assets/js/15.75bda647.js",
    "revision": "d3a41a986f15173b96b61b35ec934ce7"
  },
  {
    "url": "assets/js/16.333ad944.js",
    "revision": "9a87efe964c22018662bb2c8c96a2c98"
  },
  {
    "url": "assets/js/17.de678f79.js",
    "revision": "71bfdb8148dc5d2f238b790a81f06a5c"
  },
  {
    "url": "assets/js/18.e26e1091.js",
    "revision": "4b67ac76df8aaadd3299420085144752"
  },
  {
    "url": "assets/js/19.2e713713.js",
    "revision": "1143f6cd904ab76a7c180adf89209c88"
  },
  {
    "url": "assets/js/2.6b9a1e76.js",
    "revision": "d28f7ca78417278f0541ccf57f132400"
  },
  {
    "url": "assets/js/20.14da2619.js",
    "revision": "b5b7aac096ca7df7a143d123619cd2ce"
  },
  {
    "url": "assets/js/21.85e0f9d0.js",
    "revision": "7ef9522a601745a5b36f1b5b5d967515"
  },
  {
    "url": "assets/js/22.f1f5663d.js",
    "revision": "17dac88e0d3db9bbb4b8b620349a4be8"
  },
  {
    "url": "assets/js/23.1ce95a89.js",
    "revision": "68349a580bb713f1d7ce76b8ecea9e11"
  },
  {
    "url": "assets/js/24.9288b391.js",
    "revision": "155eedcf8eb16da5620b0c2aa844f280"
  },
  {
    "url": "assets/js/25.2c31135d.js",
    "revision": "d007d51bac0dc3b8a9968fb4197807c8"
  },
  {
    "url": "assets/js/26.c7db9a2e.js",
    "revision": "a508769ecd1f55431f2c6ed96be69843"
  },
  {
    "url": "assets/js/27.48f7b75d.js",
    "revision": "1d133268540d1b542fe43d241026cd3f"
  },
  {
    "url": "assets/js/28.d381eb07.js",
    "revision": "5e731acaf82e904cccd8af5948918d13"
  },
  {
    "url": "assets/js/29.e9cdb282.js",
    "revision": "190a2d31fe9d61e914d5cf08eabc91d3"
  },
  {
    "url": "assets/js/3.71802cfc.js",
    "revision": "0e26efe2fd884bc652686b0bd33ca95c"
  },
  {
    "url": "assets/js/30.4ffa6372.js",
    "revision": "e1746429c01980b52b1f079727a6f073"
  },
  {
    "url": "assets/js/31.0cd5bfeb.js",
    "revision": "480e6158fdea9aa335de31a992dda6d1"
  },
  {
    "url": "assets/js/32.59a47434.js",
    "revision": "753bdfa2bd078f5d52c5438233dc1efc"
  },
  {
    "url": "assets/js/33.97b028ba.js",
    "revision": "b3914188cff8fea5a4368122ecefb5e5"
  },
  {
    "url": "assets/js/34.7d454a51.js",
    "revision": "6ebb6bb409041c591eb128a2dfe5d3b1"
  },
  {
    "url": "assets/js/4.f545fedd.js",
    "revision": "030918c0f24040f3de472490ebac0895"
  },
  {
    "url": "assets/js/5.a54ee413.js",
    "revision": "b32c627e84a29811481d69f15c85514e"
  },
  {
    "url": "assets/js/6.6d1b1044.js",
    "revision": "07deae429547ee4f848bc2f99beed5cd"
  },
  {
    "url": "assets/js/7.909bf9fb.js",
    "revision": "bbecd42e9083b452b654200c7f970c6e"
  },
  {
    "url": "assets/js/8.4a0c1fdc.js",
    "revision": "a5ee45eca3fb1de243d64b13f8d16dac"
  },
  {
    "url": "assets/js/9.eebe0a44.js",
    "revision": "e7345de7824eff2c1f3a41d827e0daad"
  },
  {
    "url": "assets/js/app.236a9962.js",
    "revision": "576eb28c22de6a45779187fc7d93b71d"
  },
  {
    "url": "Bots.html",
    "revision": "f0c19af67df3fcc6bbb75fc889fefc80"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "c5d433d34491269f4953a87946d24201"
  },
  {
    "url": "console/Appendix.html",
    "revision": "e7888f4c077ec2c94ef3576d94620bae"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "cc876669a65398583c60ae2aefdbfc97"
  },
  {
    "url": "console/Commands.html",
    "revision": "1dec30739fce2e0b931bcd521c9d7364"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "ca1e4b2dbbbdf243d3f8e89dcceb1f86"
  },
  {
    "url": "console/Contributing.html",
    "revision": "b35e427538a19b81c1f287d1f0b52a1a"
  },
  {
    "url": "console/Extensions.html",
    "revision": "b1b9160cee83ef7cc5046e66c6eba855"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "1fbfc5141579ef0f634dbefb362803da"
  },
  {
    "url": "console/index.html",
    "revision": "2c201190d4727005651d0695ca0c8e0a"
  },
  {
    "url": "console/Permissions.html",
    "revision": "e16ebaec40c3d21d61524f487c82a21e"
  },
  {
    "url": "console/PluginData.html",
    "revision": "a3fdb3df5a9d4e8481e95a7315492bcf"
  },
  {
    "url": "console/Plugins.html",
    "revision": "1c82d8fa0781c912aa3b7e2bc62f78c3"
  },
  {
    "url": "console/QA.html",
    "revision": "3c13b3e5383b0ec7dee88d0f2faa9a2a"
  },
  {
    "url": "console/Run.html",
    "revision": "60f816d5801bc8b32438eecdb7e8d960"
  },
  {
    "url": "Contacts.html",
    "revision": "d76cb5afe79ff514b3bb108d37747917"
  },
  {
    "url": "CoreAPI.html",
    "revision": "0200ff96be4ae157cf4a105fd25d90cb"
  },
  {
    "url": "Events.html",
    "revision": "ec7b0c14365113f51bc9ef90ff51e156"
  },
  {
    "url": "Evolution.html",
    "revision": "d14dd74e6f0df58480713b2f0f7fdd3e"
  },
  {
    "url": "index.html",
    "revision": "6ab4e00e8c8ade4586913d7a6509d9ef"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "3081e9611d6b695275f36f70f2cfcf01"
  },
  {
    "url": "Messages.html",
    "revision": "82395bba96f4e4ed9b30a995ed1e164d"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "e59f132f6c6e05cb7831360ab903e81d"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "6fb574deb9165d2ab02abd54d79818dd"
  },
  {
    "url": "Preparations.html",
    "revision": "cb137dd52bf0c6b9c6da17c8f48fc8d5"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "214ee91ac887cbbefc6218ccc91169c9"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "66e50d36ca2681dcd92f367d1fe31e0b"
  },
  {
    "url": "UserManual.html",
    "revision": "8bdc11d91e2dfe7ff9cda24ecc97bb29"
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

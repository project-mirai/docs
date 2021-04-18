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
    "revision": "085bc4ea21f86e9902e7e8a23b5411e5"
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
    "url": "assets/js/5.3d6d31ae.js",
    "revision": "784c1377c26d3d9d5c3fcd1e8507a353"
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
    "url": "assets/js/8.69c61cf1.js",
    "revision": "e131e26ef74885d40c5e57e97b96fcf9"
  },
  {
    "url": "assets/js/9.a788443b.js",
    "revision": "c162140cc21734d5272b2bab9fe6ed9d"
  },
  {
    "url": "assets/js/app.42a3696d.js",
    "revision": "4128142185b00778907b7ce1f021aaae"
  },
  {
    "url": "Bots.html",
    "revision": "2a001ca3e51852022aebe7053f731e25"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "f61192481501f831663c629b0e79625d"
  },
  {
    "url": "console/Appendix.html",
    "revision": "aa2fef7a677d761e615ee0786ba46c49"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "a9c897d9c8cb3926669fd9434ae53512"
  },
  {
    "url": "console/Commands.html",
    "revision": "f5ee382c0e94810c269de68a8bc04ec1"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "eccb0bd90af7b24c23b57b1ebdb40f8d"
  },
  {
    "url": "console/Contributing.html",
    "revision": "c5c9b977278fdca8f5d74a726d0ff0e4"
  },
  {
    "url": "console/Extensions.html",
    "revision": "bd125d583840bc8fe512c291d7ccb330"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "ee008a1a0d4a82ac999a750a15ece50a"
  },
  {
    "url": "console/index.html",
    "revision": "aac6895cd5e6fc387d387dfd6dc18c9c"
  },
  {
    "url": "console/Permissions.html",
    "revision": "d4fe8437da6f3af18afa09e803a54046"
  },
  {
    "url": "console/PluginData.html",
    "revision": "76c9d099c0e07a6fd2aa67fb97fee386"
  },
  {
    "url": "console/Plugins.html",
    "revision": "655e7cfd25ff28ac07eed6d7e487c74b"
  },
  {
    "url": "console/QA.html",
    "revision": "c33067c09937845d2bb54038750ec443"
  },
  {
    "url": "console/Run.html",
    "revision": "657c407f1901a67cbb5d6354ce4d6b83"
  },
  {
    "url": "Contacts.html",
    "revision": "cdd70084590573272a60ca8919ba613d"
  },
  {
    "url": "CoreAPI.html",
    "revision": "27722521bcd525f6b1901c1d016d2c03"
  },
  {
    "url": "Events.html",
    "revision": "d06e1c730fc3b82f3028eb13bd4089b6"
  },
  {
    "url": "Evolution.html",
    "revision": "eb690610e4a7afc3e8d80d6afa7015f2"
  },
  {
    "url": "index.html",
    "revision": "36ed9c97cec73c9748ebc6bb90b2a84a"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "8c612f79c5f291583273cce40438a7ef"
  },
  {
    "url": "Messages.html",
    "revision": "82ffd7b7f5cb2fa63b4b453646b578f7"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "c03f6ef3d3cfacfb6fba265e692a5ec6"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "8ec9b994b97f69db579f1bbe009ffd63"
  },
  {
    "url": "Preparations.html",
    "revision": "1739e05caae1b5a344b3bedaaaff3221"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "2fb157436ac8b65b6643989f640a239a"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "1d2f361ba81f22a07b8c9cd2650d4753"
  },
  {
    "url": "UserManual.html",
    "revision": "973f9eed869d3cc7da4bbe9c450fb201"
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

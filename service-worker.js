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
    "revision": "c84f0256cb12c52734ca008849e68e6a"
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
    "url": "assets/js/10.d4775745.js",
    "revision": "e73189a13f68a3fbcb8e4bf1a4bf25a9"
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
    "url": "assets/js/21.b51772e7.js",
    "revision": "712aa569ccc51f95b6852a74049eaa02"
  },
  {
    "url": "assets/js/22.96e27543.js",
    "revision": "6de8812070543628a5b561141d8a049b"
  },
  {
    "url": "assets/js/23.1ce95a89.js",
    "revision": "68349a580bb713f1d7ce76b8ecea9e11"
  },
  {
    "url": "assets/js/24.ab98f754.js",
    "revision": "7490e16c016aada7595ff575341e20b4"
  },
  {
    "url": "assets/js/25.b86bf4ed.js",
    "revision": "f04c0e023076ec98a00ceb583262cf1e"
  },
  {
    "url": "assets/js/26.7b67d7ec.js",
    "revision": "c913b8223a547648bdec89a23ff26c94"
  },
  {
    "url": "assets/js/27.72ebef9b.js",
    "revision": "5a06de2c36f81de7f177725f15d0c734"
  },
  {
    "url": "assets/js/28.d381eb07.js",
    "revision": "5e731acaf82e904cccd8af5948918d13"
  },
  {
    "url": "assets/js/29.70140eb6.js",
    "revision": "7e5fbbca3166a1ec6c9b2b54e1064983"
  },
  {
    "url": "assets/js/3.71802cfc.js",
    "revision": "0e26efe2fd884bc652686b0bd33ca95c"
  },
  {
    "url": "assets/js/30.aa48e1c2.js",
    "revision": "45d269d691b1f5a453ed3a9866686049"
  },
  {
    "url": "assets/js/31.1e732e08.js",
    "revision": "c094371c485963d0eac5624cddc31656"
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
    "url": "assets/js/9.d9c0e5da.js",
    "revision": "1de25577c37c55d77e50dc06512c38e6"
  },
  {
    "url": "assets/js/app.e423eb3e.js",
    "revision": "e17cfdfc81125aae66c085732fc549f4"
  },
  {
    "url": "Bots.html",
    "revision": "cf26fbd27b50a44ccef52013f6efb711"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "1e77763dc6788f56cc4bfb921291b8e0"
  },
  {
    "url": "console/Appendix.html",
    "revision": "1b9f118f31323689061189a379ae55aa"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "31dd8474acc46107237727af0779b5a7"
  },
  {
    "url": "console/Commands.html",
    "revision": "340eca6385495795b7a65b2a8bcde38a"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "886d39d4ecf9f14868273cb7e7ce31b6"
  },
  {
    "url": "console/Contributing.html",
    "revision": "3ea6954314b60ac2ea03d784fcbf5a4f"
  },
  {
    "url": "console/Extensions.html",
    "revision": "c59f5cbe1f69ec768f803fedd3392095"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "acf1cbf42e7dfba05e7745c62eaf308a"
  },
  {
    "url": "console/index.html",
    "revision": "7dac2132d84d85f4fb3f267f1998511b"
  },
  {
    "url": "console/Permissions.html",
    "revision": "b801f45dde25b8924564ab9867786657"
  },
  {
    "url": "console/PluginData.html",
    "revision": "723d4d7f8e8f332a363a5c65f74b6ea5"
  },
  {
    "url": "console/Plugins.html",
    "revision": "08f03349afc51a460c0c90d642b8c667"
  },
  {
    "url": "console/QA.html",
    "revision": "9aeffc5838afa37bc18ef8ecdb3df250"
  },
  {
    "url": "console/Run.html",
    "revision": "a666ef5beb98c98ccac11c1518766d33"
  },
  {
    "url": "Contacts.html",
    "revision": "ccba091ca439eb2718b41585b6ececd6"
  },
  {
    "url": "CoreAPI.html",
    "revision": "e653139a3808016aa5dd90d978cf3ee5"
  },
  {
    "url": "Events.html",
    "revision": "719e3182c6c2ace082bd34b4736643a4"
  },
  {
    "url": "Evolution.html",
    "revision": "1a4404b79da1c354ade589018abfda22"
  },
  {
    "url": "index.html",
    "revision": "8443802ddb9418a166ec45742568af06"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "3bcfd65a3eb010ccf4ed82d6b69eaaaf"
  },
  {
    "url": "Messages.html",
    "revision": "7b5bd8482f564ad37d8e5dfc71172ae8"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "0e1190db90c44cfd86e9c5000c36d2aa"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "98c78e2adacc8ed6bf36ac141edf84db"
  },
  {
    "url": "Preparations.html",
    "revision": "317f49d4d7578ee441ec37a62a286183"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "58430e97e6974babc7b642372c9bb30a"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "d5d2c09fb0bcea7561f42aa186f891c2"
  },
  {
    "url": "UserManual.html",
    "revision": "c8a516d7a2dd412e8d212ae25437373d"
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

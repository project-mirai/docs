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
    "revision": "d79ef06f3261e2c1f52531ed3ee7f03e"
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
    "url": "assets/img/img4.595b3088.png",
    "revision": "595b3088a0ae9a0dfce52b4203783581"
  },
  {
    "url": "assets/img/img5.417d99f5.png",
    "revision": "417d99f55149aefc7b721f904197b410"
  },
  {
    "url": "assets/img/img6.c537e515.png",
    "revision": "c537e515c512c40733f820b04e72faec"
  },
  {
    "url": "assets/img/mirai.a2af7a4d.svg",
    "revision": "a2af7a4d5ebeced62ddab5f990362b8c"
  },
  {
    "url": "assets/img/mirai.a6a3d797.png",
    "revision": "a6a3d797a9c97452666c561dc8a708a3"
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
    "url": "assets/js/10.5a817418.js",
    "revision": "b7fa0617d6117ee2b9cdd0b81cf20a82"
  },
  {
    "url": "assets/js/11.c773278e.js",
    "revision": "03a49bd459c67ee83ed1c11a41bb6b2a"
  },
  {
    "url": "assets/js/12.dec58767.js",
    "revision": "d7fe7f0da04c5c592f3e6b2a01a04ba5"
  },
  {
    "url": "assets/js/13.b10e5efb.js",
    "revision": "6abf7a5712f23af75d80231f784d2131"
  },
  {
    "url": "assets/js/14.34805a6e.js",
    "revision": "fca4908d1ce816c0366c86da4b155235"
  },
  {
    "url": "assets/js/15.4c3a98ed.js",
    "revision": "d1ba302beec5c945b937593619b5afc5"
  },
  {
    "url": "assets/js/16.8c1f6fdd.js",
    "revision": "794b547c5bc528e9bdb35caf377c5c17"
  },
  {
    "url": "assets/js/17.9bcd5a13.js",
    "revision": "93233b55c65dd07a6ef801b9a86d8e7d"
  },
  {
    "url": "assets/js/18.51994263.js",
    "revision": "fdb259f00194116a80c6b4e93e02286b"
  },
  {
    "url": "assets/js/19.2ff56e7d.js",
    "revision": "694dcc22ab6713441317687c8ec84e6f"
  },
  {
    "url": "assets/js/2.71842359.js",
    "revision": "469d0079c3255826bb1dedffb7325a64"
  },
  {
    "url": "assets/js/20.ff48cc5d.js",
    "revision": "3e256b82758acfe5cc2853949d970bb4"
  },
  {
    "url": "assets/js/21.05b662ae.js",
    "revision": "83b964aed7ae69e52f25bc8b8f9e7a7c"
  },
  {
    "url": "assets/js/22.5ccd7cbc.js",
    "revision": "e1c3c4a6e442bca4272a702eb2fbe55e"
  },
  {
    "url": "assets/js/23.35eace4e.js",
    "revision": "5f9ae8582585fcf42b8e651f61502a07"
  },
  {
    "url": "assets/js/24.44878d20.js",
    "revision": "a669d1d4172bfc87c8f7953680da10b9"
  },
  {
    "url": "assets/js/25.d719f050.js",
    "revision": "a6ed15264c90479ac76da0c859ae85db"
  },
  {
    "url": "assets/js/26.1695b129.js",
    "revision": "7f14990c7adcf00d79537bd624beffae"
  },
  {
    "url": "assets/js/27.0c0caa4a.js",
    "revision": "4ae2180146de7bb6848ffa7924e91c2f"
  },
  {
    "url": "assets/js/28.9c9d4ba9.js",
    "revision": "83ae50d8690ad13dfeda402513cf7809"
  },
  {
    "url": "assets/js/29.340c82a0.js",
    "revision": "5578b49931d6b070419ff51e4c07fc17"
  },
  {
    "url": "assets/js/3.26ab4a98.js",
    "revision": "1483e2eabbed1f7082a7b42568af17ca"
  },
  {
    "url": "assets/js/30.d6337455.js",
    "revision": "06f29c59ae74f9b0a1c17fb81e916016"
  },
  {
    "url": "assets/js/31.225d2815.js",
    "revision": "2fcfec616518567fb278121c214140e6"
  },
  {
    "url": "assets/js/32.f85aa24a.js",
    "revision": "9392f497c6d2c78ea2ebcdb9edd2891e"
  },
  {
    "url": "assets/js/33.67ba2f3e.js",
    "revision": "9cf883ecf3a65d11c9e7fbc51063ab3e"
  },
  {
    "url": "assets/js/34.ad938a77.js",
    "revision": "6eb2da130d62da1a0d4e77a94f970994"
  },
  {
    "url": "assets/js/35.d1cb0c90.js",
    "revision": "198f0c5a687b400777db6ac8058b71e8"
  },
  {
    "url": "assets/js/36.d8d8540f.js",
    "revision": "5d9ba30dc18bfa97854b6fc068a19642"
  },
  {
    "url": "assets/js/37.f04da8d1.js",
    "revision": "2a5b19f7415106134da92557f554f6ff"
  },
  {
    "url": "assets/js/38.9b12e5f2.js",
    "revision": "07c25024323436923a370c2ea5387bc2"
  },
  {
    "url": "assets/js/39.afef12c4.js",
    "revision": "72a8c706761e9be95682732ea9594dff"
  },
  {
    "url": "assets/js/4.dc44f699.js",
    "revision": "d0731ad386c1da5c9fca8a306f6e94a0"
  },
  {
    "url": "assets/js/40.3c332ceb.js",
    "revision": "93355cdbfddf430c22a9afecb6ab7790"
  },
  {
    "url": "assets/js/41.0115ec7c.js",
    "revision": "fc59d9a80ea70118350d6d9f195edd0d"
  },
  {
    "url": "assets/js/42.6e0adf39.js",
    "revision": "c110705e8b2e74b053c8982f16ac41a1"
  },
  {
    "url": "assets/js/43.6d62f2a0.js",
    "revision": "1b000e106f7063aa547c9b8ceb9e7a68"
  },
  {
    "url": "assets/js/44.71facd2b.js",
    "revision": "f38ffa09769b71d27ffa6bbdd8628679"
  },
  {
    "url": "assets/js/45.c1a838ca.js",
    "revision": "f3dd524e2ba8d61ed30d0af3247d5cc6"
  },
  {
    "url": "assets/js/46.6c181704.js",
    "revision": "6297e6842daa521f296f17d79868496c"
  },
  {
    "url": "assets/js/47.f3058f88.js",
    "revision": "71a6a7b6cd7bc89adc8b0b11d4b7cd35"
  },
  {
    "url": "assets/js/48.17f31634.js",
    "revision": "37e9115fa4cd94ceef28e5cd1d048358"
  },
  {
    "url": "assets/js/5.1ed72318.js",
    "revision": "61503600dd8e180ca1749149472da5bc"
  },
  {
    "url": "assets/js/6.f44dc1b3.js",
    "revision": "fbf74d80c27718eb4657546c9d047824"
  },
  {
    "url": "assets/js/7.4283167d.js",
    "revision": "b6afb057ffa9e76377bb0e256615e671"
  },
  {
    "url": "assets/js/8.c17033b8.js",
    "revision": "48c1032521ca986c018097bd6a73d1b3"
  },
  {
    "url": "assets/js/9.aa9afcac.js",
    "revision": "424c5f55de7d68b2a79289d71f362d7f"
  },
  {
    "url": "assets/js/app.2fe0604e.js",
    "revision": "9f829c35ad4a30493ad11176108fdab6"
  },
  {
    "url": "Bots.html",
    "revision": "e2d5e7e0f80d5471fa31a395e2aeb117"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "0e10d4761e9a36eabe50e9f1445b9db5"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "ff5ba3b2904f0e8e3f56918a6e09f8a9"
  },
  {
    "url": "console/Appendix.html",
    "revision": "e6dc0c772fc6c3e761dd29cba7b0b979"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "93567bdc37b9376feb07c52e3ef5d8f6"
  },
  {
    "url": "console/Commands.html",
    "revision": "7d573d1ddb1fb4b994e72e8201390e03"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "99b3f465d4168c0f21e1428f5e3e651f"
  },
  {
    "url": "console/Contributing.html",
    "revision": "944cc152237a86ffc55d08a852d4fea6"
  },
  {
    "url": "console/Extensions.html",
    "revision": "4a7cbf078411319fbd40e7bc7c083717"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "1bbe9b20adfa3119f89e46bb5e0a3443"
  },
  {
    "url": "console/index.html",
    "revision": "5987473b24a42e3937935409246df690"
  },
  {
    "url": "console/Permissions.html",
    "revision": "1ba96dc73d9a907dc9d6112da0392cb9"
  },
  {
    "url": "console/PluginData.html",
    "revision": "b73277f72444e9257befd4452fb98ce8"
  },
  {
    "url": "console/Plugins.html",
    "revision": "38603e20d94238b41a53a27ad677927c"
  },
  {
    "url": "console/QA.html",
    "revision": "e04f8dc3c41cddb9509546eceadbec06"
  },
  {
    "url": "console/Run.html",
    "revision": "7e55c93c0f68f607149c17471f677b16"
  },
  {
    "url": "Contacts.html",
    "revision": "957db1b4296cd835ad842c2d4c1b084d"
  },
  {
    "url": "CoreAPI.html",
    "revision": "4b4881a5e1f88cc9ce80bdc8ee8416ab"
  },
  {
    "url": "EventList.html",
    "revision": "da12f9ca1be2a2b32d76265a2c061b6a"
  },
  {
    "url": "Events.html",
    "revision": "0de901f36685d474e854f87681f4e686"
  },
  {
    "url": "Evolution.html",
    "revision": "053e12add7bc1dc5f6a0d9ab7263960c"
  },
  {
    "url": "index.html",
    "revision": "9b5bfce41316d426cfac4d073c2d202a"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "66d1f158bba65c91bf0726c64bfbc9b4"
  },
  {
    "url": "Messages.html",
    "revision": "48098d1d266fdf37d80a2a3b1e667218"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "8486eb4bce8393adab4f8350818cecb1"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "92d924554e6c7577c8b45c20adebc4c7"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "6ea440e26c80607d235ff5455d6c829b"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "d90a10a4060413d68495c990d8e88dc3"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "6eaf0316c67a3a708b74ebcf692c42b4"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "57b8685c8c71d5a824844d399ca3ed95"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "299594feece8f943a9a642505e0d812f"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "b87f816e08852a858e3b65278c6e157c"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "1a590dcd5b0d20100f6804444a77a5a8"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "05a4404d1d5f8af77ec5b68b15324f06"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "1d34dde3ac1ca1c44ffa293349f17e23"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "24245f48f12eed9c562bcb7af1488173"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "d6c9c7cb668e887d2d3d1af187f37183"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "fa0fe6a175eca7812ffd9824d699eec9"
  },
  {
    "url": "Preparations.html",
    "revision": "c8be820214c6e15072e3e012ca3504f0"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "79971798782039d2be2b9b303df1c87b"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "a9a5eb057bc2039153555a403fb3482d"
  },
  {
    "url": "UserManual.html",
    "revision": "28017acb51fba782baa7e47a059c816e"
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

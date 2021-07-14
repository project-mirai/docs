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
    "revision": "27bbeb10aa568b31bd4231024e531c1f"
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
    "url": "assets/js/3.6ffed82a.js",
    "revision": "1d94f3f6c27eb3b812f7a919f5dd879c"
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
    "url": "assets/js/34.abeac824.js",
    "revision": "319acdd81e13e687b35e6a4828e6c193"
  },
  {
    "url": "assets/js/35.122a8cb5.js",
    "revision": "71f60f1c2891e02817c682670476f109"
  },
  {
    "url": "assets/js/36.515b9965.js",
    "revision": "f17f14d88330446ee65a2b2ba30ac084"
  },
  {
    "url": "assets/js/37.f9fb5227.js",
    "revision": "150a2c12468683e173ef94aa54ee692d"
  },
  {
    "url": "assets/js/4.592c417a.js",
    "revision": "3175e409f7f7c5cff1f5230da8ddeca8"
  },
  {
    "url": "assets/js/5.29d2b894.js",
    "revision": "976cd8b5e974879f1bd56557f2c5d4ee"
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
    "url": "assets/js/app.1e5e5885.js",
    "revision": "b1c512ecfe0abe463bdb3224fbe9a93c"
  },
  {
    "url": "Bots.html",
    "revision": "2d87c41058ea84a82fe6c200884356d4"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "eae380ab057484277bb9c13843f6552f"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "b354282b17093d237165dcb682e653d6"
  },
  {
    "url": "console/Appendix.html",
    "revision": "ef5c42f4f73787e7e2e2fb29907ac64a"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "628247d539e33bf6b923e18c5604c947"
  },
  {
    "url": "console/Commands.html",
    "revision": "fc273365555ce5be451336fdfa44c71b"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "cde4ce3081abe75f776fb9ab1fbb9388"
  },
  {
    "url": "console/Contributing.html",
    "revision": "06bd30de5e829e314f2d2ea813d07b13"
  },
  {
    "url": "console/Extensions.html",
    "revision": "a090612a95bfc2833200778d9b7c9cd4"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "f97cd799f263b6be92b6ba8e86f72fa6"
  },
  {
    "url": "console/index.html",
    "revision": "db9fda2626220d7a7b87352d4527749e"
  },
  {
    "url": "console/Permissions.html",
    "revision": "3be0b5c19d459254ffea0bf39aa85608"
  },
  {
    "url": "console/PluginData.html",
    "revision": "ff927746f5fa7ba242923b5813b0a1a5"
  },
  {
    "url": "console/Plugins.html",
    "revision": "f5834325975037387a6b508f076c6285"
  },
  {
    "url": "console/QA.html",
    "revision": "f93f536f648639b7677b32204b8035d9"
  },
  {
    "url": "console/Run.html",
    "revision": "95aa435322c084d03f54d0eaee2a3c6c"
  },
  {
    "url": "Contacts.html",
    "revision": "40c56ded2354d23da8678ad4f3e3a7bc"
  },
  {
    "url": "CoreAPI.html",
    "revision": "ac98eadcc5b3054b1233267ef82b42d4"
  },
  {
    "url": "EventList.html",
    "revision": "16610bfa35ef760182980bf0a2c12f0f"
  },
  {
    "url": "Events.html",
    "revision": "9871f22343f999f343e5680a9f3b10a2"
  },
  {
    "url": "Evolution.html",
    "revision": "df0ff3a0c3df3452d80d6c06a4b30c52"
  },
  {
    "url": "index.html",
    "revision": "dce900bd4312f831538db044356d20f4"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "c582016266c5c8c204ec25d33a33e6b9"
  },
  {
    "url": "Messages.html",
    "revision": "999b2dabe6d207e9804e4267c7669f36"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "93d683d2a2a7c044ee3ed4af0a76a7a2"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "fb274518ea7f1c0aa48cbc8e73e27ecf"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "720dd25d1ee19410675cee5c89b33955"
  },
  {
    "url": "Preparations.html",
    "revision": "3309f739e3388acb0bcc171ba52f63ff"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "c0f691aadcaadbefe6de96a9393d4280"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "2cd6cbbbc5fd18283f61970e2e22d545"
  },
  {
    "url": "UserManual.html",
    "revision": "e439541d223cab7f558affa9475227e9"
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

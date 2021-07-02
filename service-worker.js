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
    "revision": "d526a92697eb98f28347df237b6ed918"
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
    "url": "assets/js/10.9bdba2fc.js",
    "revision": "188705303dd970acc7ce1a9ebc00f0b0"
  },
  {
    "url": "assets/js/11.7c19f6ad.js",
    "revision": "f4e3b2ac6e5925a125b9102dff33f520"
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
    "url": "assets/js/21.c043f79a.js",
    "revision": "63678554dceb67aa5b675a2efd4e1e7b"
  },
  {
    "url": "assets/js/22.8ef8e806.js",
    "revision": "45aa345d8fde0aac258983e30723ae29"
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
    "url": "assets/js/30.0a8140a7.js",
    "revision": "1c46f60c1a80803b643f81dc69495178"
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
    "url": "assets/js/9.66c3bfa9.js",
    "revision": "834880204732fb07da0544492a6051d3"
  },
  {
    "url": "assets/js/app.d68afd28.js",
    "revision": "d6c8c68bdd2554dbf266490b7906f7fd"
  },
  {
    "url": "Bots.html",
    "revision": "363fa323c51602b7afce8a5b5d792548"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "fd6d064b7c0ceab78c0c3b18c6ee0aac"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "3bd31368bdbfb93a36181295cf2f14bd"
  },
  {
    "url": "console/Appendix.html",
    "revision": "41bb3d6843370a315aa8ab6aee6ea988"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "84afe50d30c9f4a30ec85a8878b17c4f"
  },
  {
    "url": "console/Commands.html",
    "revision": "a54d036dcf198ec3b0c6465d97d663b7"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "b323fa6c7f617cf790ae5b40d8bfb3bb"
  },
  {
    "url": "console/Contributing.html",
    "revision": "c19437dbeeb3bb3fd5608f4fa39d9e19"
  },
  {
    "url": "console/Extensions.html",
    "revision": "e8a82c3b6a251ea4b21e85bad318e09d"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "6bd0b1fecb265ea09873a7adedd6ccda"
  },
  {
    "url": "console/index.html",
    "revision": "369a108fc472d4b7deaea8dc06f901cd"
  },
  {
    "url": "console/Permissions.html",
    "revision": "fed5116f90b562f8f2635398a98489d7"
  },
  {
    "url": "console/PluginData.html",
    "revision": "b57acbaf4ce6dbe123f3ec2b0f3b9768"
  },
  {
    "url": "console/Plugins.html",
    "revision": "9cdabe41b3d20407e28b0baea713ce46"
  },
  {
    "url": "console/QA.html",
    "revision": "4c37c2f88752da7db9504204a4104fe2"
  },
  {
    "url": "console/Run.html",
    "revision": "13b7c93990b77e5d37c7ce08b4e12f52"
  },
  {
    "url": "Contacts.html",
    "revision": "1b4e1d16476d8d543f93e65e75e4400d"
  },
  {
    "url": "CoreAPI.html",
    "revision": "fbfd650c3174ec8d2bf11f090f21e484"
  },
  {
    "url": "EventList.html",
    "revision": "f25f10cc97f1afb3f0cead2b4acd499d"
  },
  {
    "url": "Events.html",
    "revision": "bb1c7216520c31388b36cd45699ee3f3"
  },
  {
    "url": "Evolution.html",
    "revision": "e65e0ab8fd9a4ba34a36fff0b2d8b048"
  },
  {
    "url": "index.html",
    "revision": "45d00e69821c2a886a2075c5bef89e88"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "f5d8e47fb8f2d7a07f09c548e1bda4e2"
  },
  {
    "url": "Messages.html",
    "revision": "fe5819a33496b5b3c1bc603bbaab8526"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "7ed8ce38296515faef14daa8e8795f7c"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "cbd2040578103a93fbe68b8a92571fef"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "d7e393466255847d752f0ebaf1c5d880"
  },
  {
    "url": "Preparations.html",
    "revision": "04495eff7922d7d734c695be4084be26"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "6e2bb9a27836eab86e13f71dd288272c"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "7240c0d65f7c1b213512bcbd650fcc1b"
  },
  {
    "url": "UserManual.html",
    "revision": "2132821a33c7e455944f70aae19d9891"
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

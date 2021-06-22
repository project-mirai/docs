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
    "revision": "2c608366586c0b3edfd426aad0f7e322"
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
    "url": "assets/js/25.d04f7886.js",
    "revision": "328be3191cf9bc3b5b56db9bf8cfd0fb"
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
    "url": "assets/js/33.7262ceab.js",
    "revision": "0d21999dcc6b2c2df75ca7622b273548"
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
    "url": "assets/js/app.278b937a.js",
    "revision": "6f820d9f0fed3cedcf0c57d9f4516760"
  },
  {
    "url": "Bots.html",
    "revision": "6b892cf8d317ee0d90255ff2c639ad9c"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "76624e7c3ed0267f4fb860287b31477b"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "fd2958d0a4c925622ded6a1ce7aaad44"
  },
  {
    "url": "console/Appendix.html",
    "revision": "0f2ff0f6fc8b768f6deb5e0c05dc1872"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "d3efbc4b304a610ddf30900f5a55dfcb"
  },
  {
    "url": "console/Commands.html",
    "revision": "61488a6b6d9e2840d6b777ea5a9c1953"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "32be407481f8b24fb19db90f9e1d7a8b"
  },
  {
    "url": "console/Contributing.html",
    "revision": "7be2013b2943a008556776e2a4531671"
  },
  {
    "url": "console/Extensions.html",
    "revision": "f89c5f5e775af2c51e7345d06e0ae8e1"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "b5a60d45d79c46441f57e2593ce92f4c"
  },
  {
    "url": "console/index.html",
    "revision": "2ff53407a1a4eefd270c07cf5a7dfc9a"
  },
  {
    "url": "console/Permissions.html",
    "revision": "951df84498a29038d81dfa496204830e"
  },
  {
    "url": "console/PluginData.html",
    "revision": "75c914cdb8155d160fae384f774d7e57"
  },
  {
    "url": "console/Plugins.html",
    "revision": "155c48a82beb57e6b176a14f0d357338"
  },
  {
    "url": "console/QA.html",
    "revision": "3b76d3e8ac34f14528f97e3a8b2503ac"
  },
  {
    "url": "console/Run.html",
    "revision": "9a0cef5320e16f28e69537c1ad0f6f26"
  },
  {
    "url": "Contacts.html",
    "revision": "7ae6a9c9f900f55cb9a25dc152efab12"
  },
  {
    "url": "CoreAPI.html",
    "revision": "c510d3eae7c2f238852b94056d47d29a"
  },
  {
    "url": "EventList.html",
    "revision": "962fb77d9bed1b846a2623565d512dcc"
  },
  {
    "url": "Events.html",
    "revision": "bf837bbc8fc79ed8e3faee670197bbf3"
  },
  {
    "url": "Evolution.html",
    "revision": "8c547f9d2f5dbaaaf42487caff0b5327"
  },
  {
    "url": "index.html",
    "revision": "e825f50a100d47ce7d0d9bbccdb88b62"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "b2b1c213b01b317f65970aa839946f78"
  },
  {
    "url": "Messages.html",
    "revision": "8ffe2e8633157f73f9d22577c63753e7"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "7309847ba2382a8e01662ed405d6d1eb"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "e4a2521628a8a30c9c56a9be1efaa110"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "2d8213897b35eb524fd26dccb744c7c8"
  },
  {
    "url": "Preparations.html",
    "revision": "7cd839517c336835a7cac5f117eef6f1"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "bdd6e01a9b295b8bdffdda4551eac69d"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "a2f960b217fb21315b240c82ec9ee1e8"
  },
  {
    "url": "UserManual.html",
    "revision": "24cbbdb301a2780556a2f38ad9e23e16"
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

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
    "revision": "48bd2cb1b7c50d718c5e47fb07943245"
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
    "url": "assets/js/15.a606eb11.js",
    "revision": "fcec4a10f7671247d3f7672a5f25105f"
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
    "url": "assets/js/18.ca8e0e43.js",
    "revision": "fde42201746b5faaff3099e695b15f63"
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
    "url": "assets/js/22.407f1453.js",
    "revision": "e9b40584cfc9d362a79a6aac479c4aa6"
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
    "url": "assets/js/9.314063c8.js",
    "revision": "b566e67ba211f4b2ace26b2907aa48ab"
  },
  {
    "url": "assets/js/app.302fbccf.js",
    "revision": "5028d42e93d09c405203b89be3cdd116"
  },
  {
    "url": "Bots.html",
    "revision": "3539aefa1d4dfee3ad37ba25c5120df0"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "0dc18c0008666988a2be491b5d2dc32e"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "a20a65713277dcd408a92f4d800b5ca0"
  },
  {
    "url": "console/Appendix.html",
    "revision": "d7a9320859f17186a0527104ee4e6772"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "7958c75755e490cd17b2197077e1be12"
  },
  {
    "url": "console/Commands.html",
    "revision": "f5d5d58263f1d869369ac0da1bba0fb4"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "44c0d8cb76cc9658688f2d3cd576ea11"
  },
  {
    "url": "console/Contributing.html",
    "revision": "b6d7f118bc530be6c1a893ae133ec899"
  },
  {
    "url": "console/Extensions.html",
    "revision": "7e2d3de0b72f227ceb938f83cc90e94d"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "9860cd8a05ee1633f200fcd31347b3fb"
  },
  {
    "url": "console/index.html",
    "revision": "7d4b66b3f1b0ad8e73660f71ea51d91f"
  },
  {
    "url": "console/Permissions.html",
    "revision": "cdff4009b76e9ed68b4378d62b4343ce"
  },
  {
    "url": "console/PluginData.html",
    "revision": "c070f114f11285c61b295a51a04ff991"
  },
  {
    "url": "console/Plugins.html",
    "revision": "afbbabda8e70c1fba483a395c4799e9a"
  },
  {
    "url": "console/QA.html",
    "revision": "1907b125e45a89e4702dc2229d024655"
  },
  {
    "url": "console/Run.html",
    "revision": "a461fba9a189a360fb526eb0c79c2e1e"
  },
  {
    "url": "Contacts.html",
    "revision": "988505ca42db1a8cbfb72e71cb7546f2"
  },
  {
    "url": "CoreAPI.html",
    "revision": "e1fa31e6c55a306d7a78b02fe091b704"
  },
  {
    "url": "EventList.html",
    "revision": "47d76c4fa4c70756246c1533746bfaec"
  },
  {
    "url": "Events.html",
    "revision": "bb7c751584be1545477461aa86a7d62f"
  },
  {
    "url": "Evolution.html",
    "revision": "b745cd51d336e21aa7032038b60901fd"
  },
  {
    "url": "index.html",
    "revision": "485467b8ea0472191bda4d937263b0e9"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "a49caa3cadd16f47c1b573be4f82fe68"
  },
  {
    "url": "Messages.html",
    "revision": "061898941cd32abe751b23f7521c7697"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "6e3c958b445633cc0efc6869d4069779"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "36ae9fa84337394a4975f0dc6bf9782a"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "0450c30eb5ad644780c0016aecf1e017"
  },
  {
    "url": "Preparations.html",
    "revision": "8f5d76c25229110cec1bd94b9f5b413a"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "c025e9226038d911bbb546c79468279e"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "62a4d77dbde0009a7bd422933a469f73"
  },
  {
    "url": "UserManual.html",
    "revision": "63db74e7466f8ebbc08e0ca7a6844f70"
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

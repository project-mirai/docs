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
    "revision": "848459c7f58f5c35fb93129058437f88"
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
    "url": "assets/js/app.f30aa62d.js",
    "revision": "c419bfd844b0f509d817e9359ef1d809"
  },
  {
    "url": "Bots.html",
    "revision": "d896965425947d78eaff2c3bf36d5670"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "9468785a25b9d1f2a68b91a2266e213e"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "69283a9527e948b0d8aa401b00ee79f4"
  },
  {
    "url": "console/Appendix.html",
    "revision": "adee851b1344134047065e63b7feaea8"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "f87a0d4f489f3f0a9a49c3a433354fdc"
  },
  {
    "url": "console/Commands.html",
    "revision": "68ad49114d6e84be253d63c26f92317b"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "3099589eb21c24676863f7d0c4d5f8e4"
  },
  {
    "url": "console/Contributing.html",
    "revision": "e8dc4eff6bf96eddd93a193f7b64a898"
  },
  {
    "url": "console/Extensions.html",
    "revision": "c44bcb14566dab13e8552c57ce851b02"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "e84af6de26dd38ea1a646820fe522960"
  },
  {
    "url": "console/index.html",
    "revision": "3f98038f937fac25af475839914a5a8f"
  },
  {
    "url": "console/Permissions.html",
    "revision": "9a7e98b00b6cf52ad9fe500799e71f62"
  },
  {
    "url": "console/PluginData.html",
    "revision": "fdddd8970bb9fe087ab3f1b944419ab8"
  },
  {
    "url": "console/Plugins.html",
    "revision": "1eff925f232ba1f8c7601b646e7556bb"
  },
  {
    "url": "console/QA.html",
    "revision": "c9e0c5177471967dc38d6e9a6eebb159"
  },
  {
    "url": "console/Run.html",
    "revision": "5ad50469f831f6bfc6178c6708db8d1b"
  },
  {
    "url": "Contacts.html",
    "revision": "c1e30b39e76640d8a3402b41616a048c"
  },
  {
    "url": "CoreAPI.html",
    "revision": "2656f7623a7d141e91d888d9e883d03f"
  },
  {
    "url": "EventList.html",
    "revision": "ef0f5798a1900da5de27301da5793c58"
  },
  {
    "url": "Events.html",
    "revision": "238e753ce8d64feb156fca734bbf9d4f"
  },
  {
    "url": "Evolution.html",
    "revision": "4e2705e918e4671e5247dc0a2b047bcb"
  },
  {
    "url": "index.html",
    "revision": "fefa4a17059466e403a02919c6e058b5"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "67ac2a1b0dfc924a985cf3a35fff66a0"
  },
  {
    "url": "Messages.html",
    "revision": "b59f88ce1e511ed1e9d83310d7bb2fc5"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "860848f8226573f043d39fac2a5f19d8"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "6861c86d885b329d77b8490d17283964"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "e0c2bb5bb7a0719cdf7f4a6acef58ad1"
  },
  {
    "url": "Preparations.html",
    "revision": "a7a9209040af2527b584e26e731bd95c"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "efc78275784741088f1ac0ce60324edc"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "d8e14958c3f036d974df793e9f76f8e0"
  },
  {
    "url": "UserManual.html",
    "revision": "cd363c07fce22a677d3ab14743ed0b11"
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

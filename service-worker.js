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
    "revision": "1f5657d25b920ca1fc8cea367a7e93bf"
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
    "url": "assets/js/10.168c5088.js",
    "revision": "5c789a20118df3f5249412a881690f3f"
  },
  {
    "url": "assets/js/11.d6f88faa.js",
    "revision": "6df139a166aacd472626dbd26aadb42a"
  },
  {
    "url": "assets/js/12.a55bc776.js",
    "revision": "9911d387e7e92175582856f25465b752"
  },
  {
    "url": "assets/js/13.21a0ba16.js",
    "revision": "240700c9c2cfb986ecd33578a4887f93"
  },
  {
    "url": "assets/js/14.5aaa4217.js",
    "revision": "2ae56d637f88d22f3af86142b83e3e5d"
  },
  {
    "url": "assets/js/15.28e2a9b3.js",
    "revision": "ffeb72bf6ca6d423b1bafcd726dc88e9"
  },
  {
    "url": "assets/js/16.844b1b62.js",
    "revision": "23f78924e9d4a78cfa72779d856c12ff"
  },
  {
    "url": "assets/js/17.e99fc27d.js",
    "revision": "654410f4b192a576c3e77be330ec25bf"
  },
  {
    "url": "assets/js/18.b7b9b6fc.js",
    "revision": "8fe62452cdf59b8c9b82bbce193ea017"
  },
  {
    "url": "assets/js/19.1f3f1238.js",
    "revision": "34cdf883ddf2b214d0f8e5b708d81b74"
  },
  {
    "url": "assets/js/2.71842359.js",
    "revision": "469d0079c3255826bb1dedffb7325a64"
  },
  {
    "url": "assets/js/20.d9250a0a.js",
    "revision": "1d6533d1fe71864d326f9d29b6abfd34"
  },
  {
    "url": "assets/js/21.85bbf2d0.js",
    "revision": "8d3568a48c4a95d0383e47ee25b34805"
  },
  {
    "url": "assets/js/22.1c609d25.js",
    "revision": "ffd8a77ff396dd7d6b077b719202020a"
  },
  {
    "url": "assets/js/23.6ec3915d.js",
    "revision": "2c1230b5a089240114ee868d09a735ac"
  },
  {
    "url": "assets/js/24.40a073fe.js",
    "revision": "b5a6c45b10e796d060574e9f318c4a0e"
  },
  {
    "url": "assets/js/25.12533ed9.js",
    "revision": "7f04ca4ed9a8b0d6648c79b75cd85354"
  },
  {
    "url": "assets/js/26.5bfea068.js",
    "revision": "8b0b7c5b47b8c6557fd533c982b64abd"
  },
  {
    "url": "assets/js/27.050fe302.js",
    "revision": "dcb1b943cd874d5aa2cf2a6fdd9c529c"
  },
  {
    "url": "assets/js/28.4245df28.js",
    "revision": "09bb7f84bc21820270c497199e29aa8d"
  },
  {
    "url": "assets/js/29.8bed2800.js",
    "revision": "cc836a9da67bae66e3c713894a453128"
  },
  {
    "url": "assets/js/3.f6866a7f.js",
    "revision": "bb8c1126b872c85d4364668a9c6287da"
  },
  {
    "url": "assets/js/30.ba55532d.js",
    "revision": "f4ca094a333a82bb9a4002ae67751c3a"
  },
  {
    "url": "assets/js/31.a3f61a47.js",
    "revision": "e88e62833a74d48afbe510489596dd44"
  },
  {
    "url": "assets/js/32.542ed60c.js",
    "revision": "b005ae27d899933ed299b46a6d932ba4"
  },
  {
    "url": "assets/js/33.5d5844bf.js",
    "revision": "5c882082aee443e7896c53edb81d7b37"
  },
  {
    "url": "assets/js/34.0bcd825a.js",
    "revision": "dabac8df9cccb854de39a933de5be4f0"
  },
  {
    "url": "assets/js/35.cf13f812.js",
    "revision": "5dbfb8b07ab7da044fa0b41b4d27f25d"
  },
  {
    "url": "assets/js/36.7e80386c.js",
    "revision": "17fe03fc3ee616ea80ead8bf514f6607"
  },
  {
    "url": "assets/js/4.592c417a.js",
    "revision": "3175e409f7f7c5cff1f5230da8ddeca8"
  },
  {
    "url": "assets/js/5.9de30eb9.js",
    "revision": "8bec0931878fb71122538247d35fda27"
  },
  {
    "url": "assets/js/6.0e6149bf.js",
    "revision": "1d9d0100841a7ff918f1b807e591859a"
  },
  {
    "url": "assets/js/7.e23987ed.js",
    "revision": "350c0c4dca3f4aba4a4ac66f96f8007c"
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
    "url": "assets/js/app.3f4ff3e4.js",
    "revision": "be89e58fe51f11657b5076589538421d"
  },
  {
    "url": "Bots.html",
    "revision": "369cb97e667994c42634c3c475f5aea9"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "2c6bbd233d3347b58d90b08b8c5f6b8b"
  },
  {
    "url": "console/Appendix.html",
    "revision": "7c868b8b799ad5b268c46c822d18e405"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "7f65a85de0b958cbf19827ad9501f20b"
  },
  {
    "url": "console/Commands.html",
    "revision": "a001d75021cbf11ea58408d8afa13b37"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "6ecdd891d147fe029da057164f88ab5a"
  },
  {
    "url": "console/Contributing.html",
    "revision": "b8c53d3767c2ef51012b2a49311c6b5a"
  },
  {
    "url": "console/Extensions.html",
    "revision": "0aabcfea980d74fb2f0c5a241dac5041"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "c6d13978a4e8e6101e2b2392c030a1c2"
  },
  {
    "url": "console/index.html",
    "revision": "63126e79bf67afa26ac8d3d9265c5d59"
  },
  {
    "url": "console/Permissions.html",
    "revision": "c406d4d6c388991a7dabc43a7ea4cbb3"
  },
  {
    "url": "console/PluginData.html",
    "revision": "77426696a0c929ade9210c98ee823fcf"
  },
  {
    "url": "console/Plugins.html",
    "revision": "abd6a1182caf0d583e0b43d6ee724afa"
  },
  {
    "url": "console/QA.html",
    "revision": "bcddd111531bbfba7ec49d36def60bce"
  },
  {
    "url": "console/Run.html",
    "revision": "b4cb9e75a3910406d6d232f2f759c30e"
  },
  {
    "url": "Contacts.html",
    "revision": "f9856f2e5aeb82bb91a099717adcf294"
  },
  {
    "url": "CoreAPI.html",
    "revision": "de31eaf4e992c7b7df99ed6634194b89"
  },
  {
    "url": "EventList.html",
    "revision": "aa4ba0ef6a493462cf02e904c639e13c"
  },
  {
    "url": "Events.html",
    "revision": "4892a1f34e09f74deb8557689e56a1a6"
  },
  {
    "url": "Evolution.html",
    "revision": "6f668279dfa50418949a64a21c9cdde9"
  },
  {
    "url": "index.html",
    "revision": "7b22b67cd8d1a99df8c9c5c2eed2e2d2"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "958cf027473642ce4ebcc2633eb62867"
  },
  {
    "url": "Messages.html",
    "revision": "aa29c3b5790bdc127de219fd6e2428f9"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "e4e05aed76b94dc8d725bab4b1e2aded"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "7bf5131cfb619177bc3dd34c3a057478"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "438c710f07470687fc1f2bb0f903289a"
  },
  {
    "url": "Preparations.html",
    "revision": "ae9fcfdb33717f4d87540924f115580c"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "f248071760cfc8027ae955e49b05ca59"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "07ccc285f3b151be9c920496d4477f3a"
  },
  {
    "url": "UserManual.html",
    "revision": "fdddbc523f9b1321a0f01ac66d8f6673"
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

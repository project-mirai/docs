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
    "revision": "e0101cdd379b1fabca6d89e59c2f3324"
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
    "url": "assets/js/12.9aead096.js",
    "revision": "dd6ccd0f2a7a7f990bb5df26a2a1c981"
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
    "url": "assets/js/17.f6bc20ce.js",
    "revision": "021504a9c5a3e101eb49bc5372049a4c"
  },
  {
    "url": "assets/js/18.b7b9b6fc.js",
    "revision": "8fe62452cdf59b8c9b82bbce193ea017"
  },
  {
    "url": "assets/js/19.9cccafcd.js",
    "revision": "91911c3932910a2d8878bed4b5d87fce"
  },
  {
    "url": "assets/js/2.71842359.js",
    "revision": "469d0079c3255826bb1dedffb7325a64"
  },
  {
    "url": "assets/js/20.a909ca88.js",
    "revision": "8b966d1339436a4405ea191b2d0da31b"
  },
  {
    "url": "assets/js/21.5dbec692.js",
    "revision": "a56b902a920c9264becbc50d2908a76d"
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
    "url": "assets/js/33.a6e1168e.js",
    "revision": "f8bc4ff5847d3f9cd22022a6de57deb2"
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
    "url": "assets/js/app.3d647958.js",
    "revision": "05bd3714de2fe770e71c8442fa027709"
  },
  {
    "url": "Bots.html",
    "revision": "6a76a2236569a7e8c3c5fb7685abb8cc"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "225c7c460e4b0aa5dc9cc2bcc6e9b2dd"
  },
  {
    "url": "console/Appendix.html",
    "revision": "1cb4654a7e61ffef24f18a33e0564fe4"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "31309fde1ef63f980b8b9b3c8864f168"
  },
  {
    "url": "console/Commands.html",
    "revision": "add3423f9bcea8ea8b36f6388a1bc1c5"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "097e83e2e38d011e8a5f99e560118d3b"
  },
  {
    "url": "console/Contributing.html",
    "revision": "2c6bea9a0be0c3bd9b127b5fb0a196f2"
  },
  {
    "url": "console/Extensions.html",
    "revision": "3ee56d6ef6981ea2e0de54813c98d03c"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "533c0a5308a8e044bd1b0c4178abc4d1"
  },
  {
    "url": "console/index.html",
    "revision": "bd638872e29c9a8b21dfe04c68826a2b"
  },
  {
    "url": "console/Permissions.html",
    "revision": "a9ed752e93decdbf3c9c05661bf3871a"
  },
  {
    "url": "console/PluginData.html",
    "revision": "c053c2e7d2c3f1803513bccaf2d556a0"
  },
  {
    "url": "console/Plugins.html",
    "revision": "754cc7c48b136d4802c81343aa4d7884"
  },
  {
    "url": "console/QA.html",
    "revision": "98a906ffd6cbae0931c94e6cae75daa1"
  },
  {
    "url": "console/Run.html",
    "revision": "1d5fe500fdd2e14c93e87ab83505661a"
  },
  {
    "url": "Contacts.html",
    "revision": "48992e3a84ff72d7954f52e736380c01"
  },
  {
    "url": "CoreAPI.html",
    "revision": "03cb8b5b91911a683701e2ce64d0985b"
  },
  {
    "url": "EventList.html",
    "revision": "81e0c5c48e0e55ffe0e3c854c85e378d"
  },
  {
    "url": "Events.html",
    "revision": "e3c5af416fbe949b342f2f7eab195f5a"
  },
  {
    "url": "Evolution.html",
    "revision": "a136ff1ede5dbd5e36a6fe22b86dcc2d"
  },
  {
    "url": "index.html",
    "revision": "efb9d5d1dc7a659dac58eb6f24c94b74"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "5cfb1df0af59cf62c5f44951ccd3cdb3"
  },
  {
    "url": "Messages.html",
    "revision": "c025a9f108a54b2bad75158073624866"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "0e869148faa0c702bed6cc3f40b9cee8"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "bbc79470fc74581d0ac49e67e257012b"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "b9039e555ed66b67a7b7b29eea40a949"
  },
  {
    "url": "Preparations.html",
    "revision": "f87d5042a322a2bc8d3abad7aa9fefb6"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "5812fa813375332c77be6a23ec856947"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "e0777328c3d43b2676f8cc679985dc8d"
  },
  {
    "url": "UserManual.html",
    "revision": "1c609be03bf2fbca9ca4ed07372557dc"
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

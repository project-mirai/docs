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
    "revision": "9240dcd34b6e1aed4bd1665f454d8a3e"
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
    "url": "assets/js/20.f3a25a66.js",
    "revision": "c6cc350c6d35d362ab2c7f9c04f2663e"
  },
  {
    "url": "assets/js/21.01745d19.js",
    "revision": "daf84db969447fd446c2a7b8e4d68b42"
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
    "url": "assets/js/app.05a03be4.js",
    "revision": "030003502520e11ea96caa3876a4ccd7"
  },
  {
    "url": "Bots.html",
    "revision": "02b7aac53b635a32ded69b1a432916d3"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "b9a1c2eb4b532a7cf2e292b8bcecc9a1"
  },
  {
    "url": "console/Appendix.html",
    "revision": "684d72ecf28a8c197dd2d1a9dbcabd20"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "8a7ffc145d70d2795aec1676f2cc9598"
  },
  {
    "url": "console/Commands.html",
    "revision": "fc570b28667b521661c59743942f3191"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "afbad6426716710d5c085fb9c2dad3a3"
  },
  {
    "url": "console/Contributing.html",
    "revision": "c736d695dad09530b194511041fafb6b"
  },
  {
    "url": "console/Extensions.html",
    "revision": "061b8168c8a6b6e41ba4899c7ead257f"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "d2650cc4cb0ff0f2de9c64949d3e2459"
  },
  {
    "url": "console/index.html",
    "revision": "f434b95fa07f5309b0d2ed5c4ab4600e"
  },
  {
    "url": "console/Permissions.html",
    "revision": "7229fb8a0e757b83b00b452771557729"
  },
  {
    "url": "console/PluginData.html",
    "revision": "68643ee486d74b009778cc70f81c0f22"
  },
  {
    "url": "console/Plugins.html",
    "revision": "edf7901a17aa6781bbbda4da1f8acba5"
  },
  {
    "url": "console/QA.html",
    "revision": "8da65c6b783a79ac4ff324ff04e80466"
  },
  {
    "url": "console/Run.html",
    "revision": "12bb94f652f755fd043ac6e06be2e32a"
  },
  {
    "url": "Contacts.html",
    "revision": "28a2e73d5477758427a0a0be314a2cc0"
  },
  {
    "url": "CoreAPI.html",
    "revision": "7eb026f955cb696a553f443b8a860245"
  },
  {
    "url": "EventList.html",
    "revision": "c4ccd77125e19553a29084dd2d8ef865"
  },
  {
    "url": "Events.html",
    "revision": "baf5d0c79a5f62ef9eb9990d68899154"
  },
  {
    "url": "Evolution.html",
    "revision": "941769a02ef7d882b1b32677d0fbcab4"
  },
  {
    "url": "index.html",
    "revision": "aff6072eb9e6e0c48371f67db96fe531"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "5ec47ba0e92b80fbba7ba4adc40f7e2a"
  },
  {
    "url": "Messages.html",
    "revision": "4e912786a8f79304b1a7edf4330ce817"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "f1023e6b78b05411fdebedd7151671b4"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "cc663eb429e951cdaa18f42a2ff572f4"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "a73cd36bfb525e2e1334715dc15ad702"
  },
  {
    "url": "Preparations.html",
    "revision": "035b83b200a31811b5f2c3fab3eb7867"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "4cf0bf47391a71ae775c6cb4b6f8e7f0"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "472354deb040961f759a8d97586e36af"
  },
  {
    "url": "UserManual.html",
    "revision": "74681b24ef799500a3c7b663b5e4e9fe"
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

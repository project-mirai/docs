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
    "revision": "54612592d06445e4498da331aa41a2f6"
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
    "url": "assets/js/26.dde66cdd.js",
    "revision": "056a47e7e0df973726db7559fcf3d0c3"
  },
  {
    "url": "assets/js/27.52c29bc2.js",
    "revision": "5509141398efe3c3505cc31f62c79928"
  },
  {
    "url": "assets/js/28.e63db7a7.js",
    "revision": "fb767b4bbde41826e4cb384ba18cf770"
  },
  {
    "url": "assets/js/29.737deefe.js",
    "revision": "5ee6ec23be814f9b5b1182157b6847b0"
  },
  {
    "url": "assets/js/3.f864fde9.js",
    "revision": "c5a371e6c5dd49e03ef857eff7cbe1d3"
  },
  {
    "url": "assets/js/30.3be29391.js",
    "revision": "d6ceac2448ff64363d42194b990404ab"
  },
  {
    "url": "assets/js/31.2f6718a9.js",
    "revision": "664c22cdffc3fa72a3022b4eae6ee325"
  },
  {
    "url": "assets/js/32.e4b08ec6.js",
    "revision": "cc83180c56af226d0c0af2a4933f47f0"
  },
  {
    "url": "assets/js/33.496344d0.js",
    "revision": "a5a958705c1838fd6b07c3c9e36c3f57"
  },
  {
    "url": "assets/js/34.cc62bc15.js",
    "revision": "17900b77d41ac6759d9e37847eac797e"
  },
  {
    "url": "assets/js/35.763f7e12.js",
    "revision": "be0f9faab6a69395b7dbef2ffdee5ae2"
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
    "url": "assets/js/7.68cc2776.js",
    "revision": "4353ae9282675482d244304cb16cd3e4"
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
    "url": "assets/js/app.4a801924.js",
    "revision": "ea639b37d79257a9326dfe44e3273b80"
  },
  {
    "url": "Bots.html",
    "revision": "8bfdad6fdfb9607386202f11fa2980cd"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "73519c722ea5f3800321d715354d3de2"
  },
  {
    "url": "console/Appendix.html",
    "revision": "7d2baa532c30584a62d933411ba36994"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "51dedd9d0df8776565c66d6c85eac191"
  },
  {
    "url": "console/Commands.html",
    "revision": "85bc853d8999e64ab0f478bbdc72cf71"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "0676026871c3af49e5a3da512507e0a1"
  },
  {
    "url": "console/Contributing.html",
    "revision": "ebf68ee112511fec3c2f52bb68f3deb6"
  },
  {
    "url": "console/Extensions.html",
    "revision": "f6426e67e4fba0a076b65f86186599de"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "70d448ad3e816d37588f4e25677af028"
  },
  {
    "url": "console/index.html",
    "revision": "6d54b2e2e443bdf2c363f52f48c35ca0"
  },
  {
    "url": "console/Permissions.html",
    "revision": "88aae2b5d2c53fb3d6889b8a35a51a53"
  },
  {
    "url": "console/PluginData.html",
    "revision": "a29aa50def684ec0b559a400d3119fe8"
  },
  {
    "url": "console/Plugins.html",
    "revision": "c05a6d8b1b797856251bfa77d43c3a78"
  },
  {
    "url": "console/QA.html",
    "revision": "fa59d3e3d3e15b72933dd69a3bbef884"
  },
  {
    "url": "console/Run.html",
    "revision": "278af5dc446da369fa530c58aebfdbd6"
  },
  {
    "url": "Contacts.html",
    "revision": "baf5301cc8d93bc6f05b4f369f8a8660"
  },
  {
    "url": "CoreAPI.html",
    "revision": "8831c5e57a6e99706dcce15f38137aa0"
  },
  {
    "url": "EventList.html",
    "revision": "454872bdba3bc755eb7f3180b2922df8"
  },
  {
    "url": "Events.html",
    "revision": "f9d501cb2a61291d088638f51b4b367d"
  },
  {
    "url": "Evolution.html",
    "revision": "9b32321395c085fd98ea0a4dba4b6917"
  },
  {
    "url": "index.html",
    "revision": "a404804ba143693bb1aeec04172f5c6e"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "3fba3c3d705c085680986570a6490360"
  },
  {
    "url": "Messages.html",
    "revision": "dec11ab0e8434f1cd3ba2d3f8ec54060"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "92c8bb4d1c5625de683320de930ab397"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "01ed972b7fdc44b2afa0d5626461e2c8"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "6b320553700908e82dbff46ea19391a6"
  },
  {
    "url": "Preparations.html",
    "revision": "bc0e86755fa88d568a1f9b2c15ec2b46"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "50d96e6c6902ce6e09f32cb84d8ad6aa"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "3d4679d3119b51724421ce4f93dbfe51"
  },
  {
    "url": "UserManual.html",
    "revision": "07523305ad614911e6faac9684043d45"
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

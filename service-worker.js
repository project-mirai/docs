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
    "revision": "2167509047af2af6d016874333a0abfb"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.867d45d8.svg",
    "revision": "867d45d8f9c0da0e3e733dd5e7a8d263"
  },
  {
    "url": "assets/js/10.a3bd66c5.js",
    "revision": "d52fe4c80a0fe4bf2068d94eec37a158"
  },
  {
    "url": "assets/js/11.3b4de603.js",
    "revision": "18d0279dd1e6c096da847e4491c0a4e6"
  },
  {
    "url": "assets/js/12.9a5c4e52.js",
    "revision": "6cb5272198bf3a1680fff04926679d05"
  },
  {
    "url": "assets/js/13.73fde5b3.js",
    "revision": "984e0a7a8c06fbd1d153161504d8dc15"
  },
  {
    "url": "assets/js/14.8395e1b4.js",
    "revision": "e1a6fc6f2d0c36f5b887df702a6b794c"
  },
  {
    "url": "assets/js/15.188a2733.js",
    "revision": "a0efda6857b2bc047b51ce43a809bf47"
  },
  {
    "url": "assets/js/16.6201728f.js",
    "revision": "8acd3483d4f98a966d4693c9fd59b1e7"
  },
  {
    "url": "assets/js/17.abfcbd32.js",
    "revision": "fe49545a54b4963337bd10600e5c24c5"
  },
  {
    "url": "assets/js/18.e08f4987.js",
    "revision": "f8c134572f5edc247076e199e798d3e5"
  },
  {
    "url": "assets/js/19.94505c68.js",
    "revision": "dfd0b0ddb10667ca2e43707aec5e7b94"
  },
  {
    "url": "assets/js/2.6b9a1e76.js",
    "revision": "d28f7ca78417278f0541ccf57f132400"
  },
  {
    "url": "assets/js/20.faaf90f3.js",
    "revision": "98e62255e14c46463f115e1aea78a3fb"
  },
  {
    "url": "assets/js/21.173ae619.js",
    "revision": "43457def4616040a4006c827c084b991"
  },
  {
    "url": "assets/js/22.25ff1dd8.js",
    "revision": "e1be735acd1e315f6aa8ba287877ae2b"
  },
  {
    "url": "assets/js/23.b811b5ba.js",
    "revision": "9952541b60732b5ea1c98b440b73e173"
  },
  {
    "url": "assets/js/24.997f3220.js",
    "revision": "cbdd85390a2b9e00b3e455a37fc69938"
  },
  {
    "url": "assets/js/25.86431c9c.js",
    "revision": "5e61de5ace928c8559234d4a59172dba"
  },
  {
    "url": "assets/js/26.9a0e4718.js",
    "revision": "00d6fa9f7414eaf36020a16b57955419"
  },
  {
    "url": "assets/js/27.7cee7250.js",
    "revision": "eeccf1f15ab77f32c4bda05cd7c74be7"
  },
  {
    "url": "assets/js/28.28f6fa05.js",
    "revision": "423896343a3e354b0aac844bb6d435d3"
  },
  {
    "url": "assets/js/29.de030fab.js",
    "revision": "b1be70edaf4b2126a67c433cd9453569"
  },
  {
    "url": "assets/js/3.71802cfc.js",
    "revision": "0e26efe2fd884bc652686b0bd33ca95c"
  },
  {
    "url": "assets/js/30.e5c13cd2.js",
    "revision": "c0c0021d2fc9a7310ef8921869517abf"
  },
  {
    "url": "assets/js/31.8fd51058.js",
    "revision": "91bec7197b15de89cc2fd6af1db4bc6f"
  },
  {
    "url": "assets/js/32.3b96fc5d.js",
    "revision": "5554c09e25677401ea16e1341bc369ec"
  },
  {
    "url": "assets/js/4.0cbccfd1.js",
    "revision": "252ae2997792ffe4807b54cd4abd8ea2"
  },
  {
    "url": "assets/js/5.fc5489b6.js",
    "revision": "6c351a026c4967b08e8b88fe8d683b2e"
  },
  {
    "url": "assets/js/6.3766c492.js",
    "revision": "dfe5605a9d4840b67ac951b69efffbcd"
  },
  {
    "url": "assets/js/7.909bf9fb.js",
    "revision": "bbecd42e9083b452b654200c7f970c6e"
  },
  {
    "url": "assets/js/8.7d00775c.js",
    "revision": "186ba0e22e423ae48d101679b38c68db"
  },
  {
    "url": "assets/js/9.ec0453c6.js",
    "revision": "a265554f6788874cb73231ad1ad78bb7"
  },
  {
    "url": "assets/js/app.e5af7259.js",
    "revision": "2bc135ec3aed437ccb50ff17a5719606"
  },
  {
    "url": "Bots.html",
    "revision": "d129725a6ac64588e89550719dcf4300"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "70ab98ab8bd4d59fe3b5e9e6ee122817"
  },
  {
    "url": "console/Appendix.html",
    "revision": "d395da6bc2058913f3e54ce04e6cc0d6"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "9901efb6e9b117b1e00995346cee492f"
  },
  {
    "url": "console/Commands.html",
    "revision": "2d1877c577595d5c22cf93de00e0d766"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "4db89c0ba27b47231184308d4c206139"
  },
  {
    "url": "console/Contributing.html",
    "revision": "deb1b80f28defc00e9ff09eed61f8ba3"
  },
  {
    "url": "console/Extensions.html",
    "revision": "2f0764e627aafe7f38092cdfd418dbbb"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "80f40371f47aa5cb1b864c46ef47072d"
  },
  {
    "url": "console/index.html",
    "revision": "1d4bd59c988e6fa99d1a1c2a057a7316"
  },
  {
    "url": "console/Permissions.html",
    "revision": "ede333704c1cda8366b9f24dccb441fb"
  },
  {
    "url": "console/PluginData.html",
    "revision": "a97c79b8f7b3c0c3037d35bce6e4c0d9"
  },
  {
    "url": "console/Plugins.html",
    "revision": "89d9e7898ac91128a0b7973653aa267d"
  },
  {
    "url": "console/QA.html",
    "revision": "88613d9936c4aba5d094f7ad2d1aa675"
  },
  {
    "url": "console/Run.html",
    "revision": "cfc959a5c16a5037cfbd20692a8a5cfa"
  },
  {
    "url": "Contacts.html",
    "revision": "37bf281d2bf2162d23abeb3671377960"
  },
  {
    "url": "Events.html",
    "revision": "6292ad6358a3599fae7ecc542fdf492f"
  },
  {
    "url": "Evolution.html",
    "revision": "7db9f59e0b726da41859f53def60a67f"
  },
  {
    "url": "index.html",
    "revision": "58c84466abe04e3484e7c02d84bf2ca1"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "0a0d968cd64732e08b9ed9897362cacb"
  },
  {
    "url": "Messages.html",
    "revision": "fb8ee32b04325759bb17319eddf070a3"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "25fa9fd14fe795272eca259f47802dac"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "f23a101047fd9b2c2e70298756681d53"
  },
  {
    "url": "Preparations.html",
    "revision": "36e68d5b52df9f592297f927504d2a63"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "ad68d7a5680eb1246d9b304accf8f54f"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "57dc2803fef4ec600d217bdb68a812e7"
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

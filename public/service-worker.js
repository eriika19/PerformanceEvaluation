self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.5269d4eeeff7e26f0086.js",
    "revision": "a6e98f922135bd5f9ec2"
  },
  {
    "url": "/_next/static/chunks/styles.49a503e49b6d598377c5.js",
    "revision": "c50e6a5c5636dfe8b990"
  },
  {
    "url": "/_next/static/css/styles.3e19a1bf.chunk.css",
    "revision": "c50e6a5c5636dfe8b990"
  },
  {
    "url": "/_next/static/runtime/main-87f2a153985a1390819a.js",
    "revision": "a1f4bbd5b84f9df302f1"
  },
  {
    "url": "/_next/static/runtime/polyfills-ebd4705da3402b2d78e1.js",
    "revision": "eac62969129f68ad8f31"
  },
  {
    "url": "/_next/static/runtime/webpack-9369c5c69dbf6d4912cb.js",
    "revision": "339869abd27a67efd9af"
  },
  {
    "url": "/_next/static\\04T_cTScq0lk5btJoa-Zy\\pages\\_app.js",
    "revision": "9549e27d35a52bfd2006"
  },
  {
    "url": "/_next/static\\04T_cTScq0lk5btJoa-Zy\\pages\\_error.js",
    "revision": "c90b14d60d4b5db2cc5f"
  },
  {
    "url": "/_next/static\\04T_cTScq0lk5btJoa-Zy\\pages\\home.js",
    "revision": "a5b7d6b4d3a7ebb14b87"
  },
  {
    "url": "/_next/static\\04T_cTScq0lk5btJoa-Zy\\pages\\index.js",
    "revision": "78e111cde6a2da3bf38b"
  },
  {
    "url": "/_next/static\\04T_cTScq0lk5btJoa-Zy\\pages\\question.js",
    "revision": "08d11340ce6947e0593e"
  },
  {
    "url": "/_next/static\\04T_cTScq0lk5btJoa-Zy\\pages\\results.js",
    "revision": "8311ef3e491ebe8d15e3"
  },
  {
    "url": "/_next/static\\04T_cTScq0lk5btJoa-Zy\\pages\\suggest.js",
    "revision": "c03e0708e81eb48963df"
  }
];

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

importScripts(
  
);

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"OfflineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/sheetsu.com\/apis\/v1.0bu\//, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"api-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
workbox.routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/(results | question)/, new workbox.strategies.NetworkFirst({ plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ], headers: { 'x-test': 'true' } })] }), 'GET');

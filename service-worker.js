"use strict";var precacheConfig=[["/clicky-game/index.html","9fadd54fd5692235accdcae0500f5445"],["/clicky-game/static/css/main.fd53b6ef.css","878fc543c905e3278f2407f7b72fa070"],["/clicky-game/static/js/main.43948fc9.js","8b94405c6d15d308511c18745b52c492"],["/clicky-game/static/media/image0.482dc60e.jpg","482dc60eb1866151c72fccb3b1e29891"],["/clicky-game/static/media/image1.9aafbda3.jpg","9aafbda30896bf450e167647982a7718"],["/clicky-game/static/media/image10.2629fca3.jpg","2629fca3e0a486ad875d8fb0b4b7d43c"],["/clicky-game/static/media/image11.913b0cd9.jpg","913b0cd91ec7559669543833bc1c0136"],["/clicky-game/static/media/image2.42d0d8f5.jpg","42d0d8f59e28457ae6bca626b9509d39"],["/clicky-game/static/media/image3.4b437d52.jpg","4b437d52e298db60a3b9fd9850a936cd"],["/clicky-game/static/media/image4.64af754b.jpg","64af754b928a9c811a77f03af4386ab6"],["/clicky-game/static/media/image5.ece629b7.jpg","ece629b78ac3f7e353283b18af37a536"],["/clicky-game/static/media/image6.6870581d.jpg","6870581df15990307c32816cbca0e021"],["/clicky-game/static/media/image7.c681e512.jpg","c681e512a1348894c28eb41ab2e0ef62"],["/clicky-game/static/media/image8.58e597a8.jpg","58e597a86c8401a36d72ad547f1eca94"],["/clicky-game/static/media/image9.c8a879a8.jpg","c8a879a8f81d07ba79f303347ed2f3e4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/clicky-game/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});
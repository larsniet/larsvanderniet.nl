if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>a(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/UF1Dhq2oEbpf_ELmIdhkP/_buildManifest.js",revision:"9262961651e0d7fa108aef74f09893fc"},{url:"/_next/static/UF1Dhq2oEbpf_ELmIdhkP/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/227-3cf448c7f48a88ca.js",revision:"UF1Dhq2oEbpf_ELmIdhkP"},{url:"/_next/static/chunks/2443530c-4883ee68a8e02297.js",revision:"UF1Dhq2oEbpf_ELmIdhkP"},{url:"/_next/static/chunks/578-21b9080e866bf420.js",revision:"UF1Dhq2oEbpf_ELmIdhkP"},{url:"/_next/static/chunks/707-447eb8e052ca1563.js",revision:"UF1Dhq2oEbpf_ELmIdhkP"},{url:"/_next/static/chunks/920-343f3a502ab98fb4.js",revision:"UF1Dhq2oEbpf_ELmIdhkP"},{url:"/_next/static/chunks/app/%5Blang%5D/about/page-243519f1452f853a.js",revision:"UF1Dhq2oEbpf_ELmIdhkP"},{url:"/_next/static/chunks/app/%5Blang%5D/articles/%5Bslug%5D/page-7eadcfa9406b8f01.js",revision:"UF1Dhq2oEbpf_ELmIdhkP"},{url:"/_next/static/chunks/app/%5Blang%5D/articles/page-1884d21a807463c0.js",revision:"UF1Dhq2oEbpf_ELmIdhkP"},{url:"/_next/static/chunks/app/%5Blang%5D/layout-874c81eebad89232.js",revision:"UF1Dhq2oEbpf_ELmIdhkP"},{url:"/_next/static/chunks/app/%5Blang%5D/page-6d4a7c60d2b9d2aa.js",revision:"UF1Dhq2oEbpf_ELmIdhkP"},{url:"/_next/static/chunks/app/%5Blang%5D/projects/page-d477173e135ffdf7.js",revision:"UF1Dhq2oEbpf_ELmIdhkP"},{url:"/_next/static/chunks/app/%5Blang%5D/thank-you/page-f3d2c6992426e31c.js",revision:"UF1Dhq2oEbpf_ELmIdhkP"},{url:"/_next/static/chunks/app/%5Blang%5D/uses/page-80fa99f55f88f8c9.js",revision:"UF1Dhq2oEbpf_ELmIdhkP"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"UF1Dhq2oEbpf_ELmIdhkP"},{url:"/_next/static/chunks/main-app-6a1179c6f83a749c.js",revision:"UF1Dhq2oEbpf_ELmIdhkP"},{url:"/_next/static/chunks/main-c468df9833700dfd.js",revision:"UF1Dhq2oEbpf_ELmIdhkP"},{url:"/_next/static/chunks/pages/_app-b555d5e1eab47959.js",revision:"UF1Dhq2oEbpf_ELmIdhkP"},{url:"/_next/static/chunks/pages/_error-d79168f986538ac0.js",revision:"UF1Dhq2oEbpf_ELmIdhkP"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-1abee73317e9d054.js",revision:"UF1Dhq2oEbpf_ELmIdhkP"},{url:"/_next/static/css/99c4806c9852d01e.css",revision:"99c4806c9852d01e"},{url:"/_next/static/media/image-2.349444f8.jpg",revision:"c1db9d7e54fce624911f40ae45a1c788"},{url:"/_next/static/media/image-3.f7d988a0.jpg",revision:"6ad061bcbb78dd1593025fb4b2eebc2d"},{url:"/_next/static/media/image-5.7f566ad5.jpg",revision:"968b5a73778a1357191ecb75de3e6cfd"},{url:"/_next/static/media/logo.39a6a7e9.webp",revision:"439bea4298403b3724229d1ee0f14f73"},{url:"/_next/static/media/portrait.e24f5f11.jpg",revision:"19ed74d2a670395681725cb02d6955c6"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!!e&&!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

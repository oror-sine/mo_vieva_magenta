if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,o)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(n[t])return;let r={};const a=e=>i(e,t),c={module:{uri:t},exports:r,require:a};n[t]=Promise.all(s.map((e=>c[e]||a(e)))).then((e=>(o(...e),r)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"final_pjt_front"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/mo_vieva_magenta/css/app.9f0c558d.css",revision:null},{url:"/mo_vieva_magenta/index.html",revision:"07195cca003e8316bcc77aee826610d1"},{url:"/mo_vieva_magenta/js/app.30823ab2.js",revision:null},{url:"/mo_vieva_magenta/js/chunk-vendors.b418a345.js",revision:null},{url:"/mo_vieva_magenta/manifest.json",revision:"bd74c7f033275a0feab2df613d63d214"},{url:"/mo_vieva_magenta/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map

const C='wywoz-czluchow-2026-09-27-1.7';
const F=["./", "index.html", "manifest.webmanifest", "ikona-180.png", "ikona-192.png", "ikona-512.png", "kalendarz/rejon-1.ics", "kalendarz/rejon-2.ics", "kalendarz/rejon-3.ics", "kalendarz/rejon-4.ics", "kalendarz/rejon-5.ics", "kalendarz/rejon-6.ics", "kalendarz/rejon-7.ics", "kalendarz/rejon-8.ics", "kalendarz/rejon-9.ics"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r;}).catch(()=>caches.match(e.request)));});

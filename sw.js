// Minimalni service worker (potreban za instalaciju na nekim preglednicima). Ništa ne sprema.
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => self.clients.claim());
self.addEventListener("fetch", () => {});

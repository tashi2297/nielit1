self.addEventListener("install", e =>{
    e.waitUntil(
        caches.open("static").then(Cache => {
            return Cache.addAll(["./","./src/master.css","./images/logo192.png"]);
        })
    );
    });

    self.addEventListener("fetch",e => {
        console.log('Intercepting fetch request for: ${e.request.url}');
        });
        
        self.addEventListener("fetch", e => {
            e.respondWith(
                caches.match(e.request).then(Response => {
                return Response || fetch(e.request);

                })
    
            );

        });
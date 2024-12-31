const nombreCache = 'apv-v1';

const archivos = [
    '/',
    'index.html',
    '/css/styles.css',
    '/css/bootstrap.css',
    '/js/app.js',
    '/js/apv.js'

];

//instalar
self.addEventListener('install', e=>{
    console.log('Instalando servir worker');
    console.log(e);
    e.waitUntil(
        caches.open(nombreCache)
        .then(cache =>{
            console.log("cacheando");
            cache.addAll(archivos);
        })
    )
})

//ACTIVAR EL SSERVICE WORKER 
self.addEventListener('activate', e=>{
    console.log("service worker activado");
    console.log(e);
})

self.addEventListener('fetch', e=>{
    console.log("fetch..." ,e);
})
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(registrado => console.log("se registro correctamente", registrado))
    .catch(error => console.log("hubo un error", error))
}else{
    console.log("no se pudo crear el service Worker");
}
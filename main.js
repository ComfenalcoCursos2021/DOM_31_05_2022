let ws = new Worker('webWorker.js');
ws.postMessage({mensaje: false});

let frag = document.createDocumentFragment();
let mydiv = document.createElement("DIV");
ws.addEventListener("message", (e)=>{
    if(e.data.mensaje){
        console.log(frag);
        document.body.appendChild(frag);
        document.querySelector(".mensaje").innerHTML = "";
    }else{
        console.log(e.data.plantilla);
        document.querySelector(".mensaje").innerHTML = "Cargando...";
        mydiv.insertAdjacentHTML("beforeend", e.data.plantilla);
        frag.append(mydiv);
    }
})

function iniciar(){
    ws.postMessage({mensaje: true});
}

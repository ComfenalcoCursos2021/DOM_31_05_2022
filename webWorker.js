addEventListener("message", (e)=>{
    if(e.data.mensaje){
        for (let i = 0; i < 20000; i++) {
            let plantilla =  //html
            `
                <span>${i}</span>
            `;
            postMessage({mensaje: false, plantilla: plantilla});
          
        }
        postMessage({mensaje: true});
    }
})

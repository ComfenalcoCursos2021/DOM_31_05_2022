
let mydiv = document.createElement('DIV');
let texto = document.createTextNode('Miguel Angel Castro Escamilla');
let mybr = document.createElement('BR');

mydiv.appendChild(texto);
mydiv.appendChild(mybr);
mydiv.id = "MYID";
mydiv.setAttribute('name', "nombreDIV");
mydiv.insertAdjacentHTML("beforeend", //html
    `
        edad: <b id="myid">23</b>
    `
);
document.body.insertAdjacentElement("beforeend", mydiv);

console.log(mydiv);

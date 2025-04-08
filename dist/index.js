import { obten_broma_prpal } from './joke.js';
import { obten_chuck } from './chuck.js';
export const reportAcudits = [];
let fecha;
let fechaISO;
const boton = document.getElementById("boton");
const botonTresPuntos = document.getElementById("botonTresPuntos");
const botonDosPuntos = document.getElementById("botonDosPuntos");
const botonUnPuntos = document.getElementById("botonUnPuntos");
boton.addEventListener("click", dame_broma);
botonTresPuntos.addEventListener("click", () => puntua_chiste(3));
botonDosPuntos.addEventListener("click", () => puntua_chiste(2));
botonUnPuntos.addEventListener("click", () => puntua_chiste(1));
dame_broma();
function dame_broma() {
    let num = Math.floor(Math.random() * 2);
    if (num) {
        // Llamar a la función de la API y pasar las variables necesarias
        alert("broma prpal");
        obten_broma_prpal(reportAcudits);
    }
    else {
        alert("jajajaj chuck");
        obten_chuck();
    }
}
function puntua_chiste(nota) {
    fecha = new Date();
    fechaISO = fecha.toISOString();
    reportAcudits[reportAcudits.length - 1].score = nota;
    reportAcudits[reportAcudits.length - 1].date = fechaISO;
    console.log(reportAcudits);
}

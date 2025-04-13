import { obten_broma_prpal } from './joke.js';
import { obten_chuck } from './chuck.js';
import { mostrar_clima } from './clima.js';

export interface objAcudit {
    joke: string;
    score: number;
    date: string;
}
export const reportAcudits: objAcudit[] = [];

let fecha: Date;
let fechaISO: string;

const boton = document.getElementById("boton")!;
const botonTresPuntos = document.getElementById("botonTresPuntos")!;
const botonDosPuntos = document.getElementById("botonDosPuntos")!;
const botonUnPuntos = document.getElementById("botonUnPuntos")!;

boton.addEventListener("click", dame_broma);
botonTresPuntos.addEventListener("click", () => puntua_chiste(3));
botonDosPuntos.addEventListener("click", () => puntua_chiste(2));
botonUnPuntos.addEventListener("click", () => puntua_chiste(1));






dame_broma();
mostrar_clima();


function dame_broma() { 
    
    let num = Math.floor(Math.random()*2);
    
    if(num){
        obten_broma_prpal(reportAcudits);
    }else{
        obten_chuck();

    }
}

function puntua_chiste(nota: number) {
    
    fecha = new Date();
    fechaISO = fecha.toISOString();

    reportAcudits[reportAcudits.length - 1].score = nota;
    reportAcudits[reportAcudits.length - 1].date = fechaISO;

    console.log(reportAcudits);
}


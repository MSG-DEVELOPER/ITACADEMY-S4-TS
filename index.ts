import { obten_broma_prpal } from './joke.js';
import { obten_chuck } from './chuck.js';

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

dame_broma();//para que nada mas cargar la pagina te de una broma y luego a demanada con el boton



function dame_broma() { //genera un 0 o 1 de forma aleatoria para elegir a que api se atacatrá de forma aleatoria cada vez que se pide una broma
    
    let num = Math.floor(Math.random()*2);
    if(num){
        obten_broma_prpal(reportAcudits);
    }else{
        obten_chuck();

    }
}

function puntua_chiste(nota: number) {//cuando le das aun boton de puntos llama a la funcion pasando los puntos.Actualiza el ultimo elemento del array con la nueva fecha y puntuación. Mientras no se pida un nuevo chiste , el ultimo siempre sera el mismo por lo que puedes cambiarle la puntuación las veces que quieras.
    fecha = new Date();
    fechaISO = fecha.toISOString();

    reportAcudits[reportAcudits.length - 1].score = nota;
    reportAcudits[reportAcudits.length - 1].date = fechaISO;

    console.log(reportAcudits);
}

//recomiendo mirar primero el archivo chuck.ts que es mas simple ( chiste de la api de chuck) y luego joke.ts que 
//ataca a la otra api , pero tiene mas funcionalidades...
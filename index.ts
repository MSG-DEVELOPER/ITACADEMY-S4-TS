import { get_joke } from './joke.js';

export interface objAcudit {
    joke: string;
    score: number;
    date: string;
}
const reportAcudits: objAcudit[] = [];

let fecha: Date;
let fechaISO: string;

const chiste = document.getElementById("chiste")!;
const boton = document.getElementById("boton")!;
const botonTresPuntos = document.getElementById("botonTresPuntos")!;
const botonDosPuntos = document.getElementById("botonDosPuntos")!;
const botonUnPuntos = document.getElementById("botonUnPuntos")!;

// Manejadores de eventos
boton.addEventListener("click", get_some_joke);
botonTresPuntos.addEventListener("click", () => puntua_chiste(3));
botonDosPuntos.addEventListener("click", () => puntua_chiste(2));
botonUnPuntos.addEventListener("click", () => puntua_chiste(1));

get_some_joke();



function get_some_joke() {
    // Llamar a la función de la API y pasar las variables necesarias
    get_joke(reportAcudits);
}

function puntua_chiste(nota: number) {
    fecha = new Date();
    fechaISO = fecha.toISOString();

    reportAcudits[reportAcudits.length - 1].score = nota;
    reportAcudits[reportAcudits.length - 1].date = fechaISO;

    console.log(reportAcudits);
}

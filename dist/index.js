"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const chiste = document.getElementById("chiste");
const boton = document.getElementById("boton");
const botonTresPuntos = document.getElementById("botonTresPuntos");
const botonDosPuntos = document.getElementById("botonDosPuntos");
const botonUnPuntos = document.getElementById("botonUnPuntos");
boton.addEventListener("click", get_joke);
botonTresPuntos.addEventListener("click", () => puntua_chiste(3));
botonDosPuntos.addEventListener("click", () => puntua_chiste(2));
botonUnPuntos.addEventListener("click", () => puntua_chiste(1));
get_joke();
const reportAcudits = [];
let jokeScore = 0;
let fecha;
let fechaISO;
function get_joke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fetch("https://icanhazdadjoke.com/", {
                headers: {
                    'Accept': 'application/json'
                }
            });
            const joke = yield data.json();
            chiste.textContent = joke.joke;
            console.log(joke.joke);
            actualiza_array(joke.joke, jokeScore);
        }
        catch (er) {
            console.log("error en la conexión", er);
        }
    });
}
function actualiza_array(broma, jokeScore) {
    fecha = new Date();
    fechaISO = fecha.toISOString();
    reportAcudits.push({ joke: broma, score: jokeScore, date: fechaISO });
    console.log(reportAcudits);
}
function puntua_chiste(nota) {
    fecha = new Date();
    fechaISO = fecha.toISOString();
    reportAcudits[reportAcudits.length - 1].score = nota;
    reportAcudits[reportAcudits.length - 1].date = fechaISO;
    console.log(reportAcudits);
}

// api.ts

// api.ts

// Esta es la URL de la API
// api.ts
import { objAcudit } from './index.js';  // Asegúrate de que la ruta del archivo sea correcta
let jokeScore: number = 0;

// Tu código...

const url = "https://icanhazdadjoke.com/";

async function get_joke(reportAcudits: objAcudit[]) {
    try {
        const data = await fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        });

        const joke = await data.json();
        mostrar_chiste(joke.joke);
        actualiza_array(joke.joke, reportAcudits);
    } catch (er) {
        console.log("error en la conexión", er);
    }
}

function mostrar_chiste(joke: string) {
    const chiste = document.getElementById("chiste");
    if (chiste) {
        chiste.textContent = joke;
    }
}

function actualiza_array(broma: string, reportAcudits: objAcudit[]) {
    let fecha = new Date();
    let fechaISO = fecha.toISOString();
    reportAcudits.push({ joke: broma, score: jokeScore, date: fechaISO });
    console.log(reportAcudits);
}

// Exporta las funciones necesarias
export { get_joke, mostrar_chiste, actualiza_array };

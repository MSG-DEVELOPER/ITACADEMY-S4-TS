// api.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let jokeScore = 0;
// Tu código...
const url = "https://icanhazdadjoke.com/";
function get_joke(reportAcudits) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fetch(url, {
                headers: {
                    'Accept': 'application/json'
                }
            });
            const joke = yield data.json();
            mostrar_chiste(joke.joke);
            actualiza_array(joke.joke, reportAcudits);
        }
        catch (er) {
            console.log("error en la conexión", er);
        }
    });
}
function mostrar_chiste(joke) {
    const chiste = document.getElementById("chiste");
    if (chiste) {
        chiste.textContent = joke;
    }
}
function actualiza_array(broma, reportAcudits) {
    let fecha = new Date();
    let fechaISO = fecha.toISOString();
    reportAcudits.push({ joke: broma, score: jokeScore, date: fechaISO });
    console.log(reportAcudits);
}
// Exporta las funciones necesarias
export { get_joke, mostrar_chiste, actualiza_array };

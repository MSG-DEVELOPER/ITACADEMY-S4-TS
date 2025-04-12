var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { uso_api } from './API.js';
const config = {
    headers: {
        Accept: "application/json"
    }
};
let puntosBroma = 0;
const url = "https://icanhazdadjoke.com/";
let llamadaPrpal = new uso_api(url);
function obten_broma_prpal(reportAcudits) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield llamadaPrpal.obten_datos(config);
        mostrar_chiste(data.joke);
        actualiza_array(data.joke, reportAcudits);
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
    reportAcudits.push({ joke: broma, score: puntosBroma, date: fechaISO });
    console.log(reportAcudits);
}
export { obten_broma_prpal, mostrar_chiste, actualiza_array };

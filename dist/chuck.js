var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { mostrar_chiste } from "./joke.js";
import { actualiza_array } from "./joke.js";
import { reportAcudits } from "./index.js";
const url = "https://api.chucknorris.io/jokes/random";
export function obten_chuck() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fetch(url);
            const chiste = yield data.json();
            mostrar_chiste(chiste.value); //esta funcion qu esta en joke.js es simple manipulacion del dom para mostrar el chiste
            actualiza_array(chiste.value, reportAcudits); //pasamos el chiste y el array que los contiene , pasa "subirlo " al array, ahora que lo pienso podría haberlo echo aqui mismo no ?
        }
        catch (er) {
            console.log("Chuck no está de humor... ", er);
        }
    });
}

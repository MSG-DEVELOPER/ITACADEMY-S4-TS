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
import { uso_api } from "./API.js";
const url = "https://api.chucknorris.io/jokes/random";
let apiChuck = new uso_api(url);
export function obten_chuck() {
    return __awaiter(this, void 0, void 0, function* () {
        let chiste = yield apiChuck.obten_datos();
        mostrar_chiste(chiste.value);
        actualiza_array(chiste.value, reportAcudits);
    });
}

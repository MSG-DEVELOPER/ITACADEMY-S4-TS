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
class uso_api {
    constructor(url) {
        this.url = url;
    }
    muestra_url() {
        console.log(this.url);
    }
    obten_datos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield fetch(this.url);
                const chiste = yield data.json();
                console.log(chiste.value);
            }
            catch (er) {
                console.log("Chuck no está de humor... ", er);
            }
        });
    }
}
let apiChuck = new uso_api("https://api.chucknorris.io/jokes/random");
apiChuck.obten_datos();

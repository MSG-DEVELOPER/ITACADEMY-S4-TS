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
document.addEventListener("DOMContentLoaded", get_joke);
boton.addEventListener("click", get_joke);
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
        }
        catch (er) {
            console.log("error en la conexión", er);
        }
    });
}

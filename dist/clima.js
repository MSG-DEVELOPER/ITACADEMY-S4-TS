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
const clima = document.getElementById("clima");
const TU_API_KEY = "f8f9fc72c29078e5fd330dc83c7ee6ca";
let latitude;
let longitude;
let latitudeFormateado;
let longitudeFormateado;
mostrar_clima();
function mostrar_clima() {
    return __awaiter(this, void 0, void 0, function* () {
        yield conseguir_ubi();
        muestra_clima();
    });
}
function conseguir_ubi() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                latitude = position.coords.latitude;
                latitudeFormateado = Math.round(latitude * 100) / 100;
                longitude = position.coords.longitude;
                longitudeFormateado = Math.round(longitude * 100) / 100;
                resolve();
            }, function (error) {
                reject("Error al obtener la ubicación: " + error.message);
            });
        }
        else {
            console.warn("La geolocalización no está soportada por este navegador.");
        }
    });
}
function muestra_clima() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("en este moemnto el valor es" + latitudeFormateado);
            const data = yield fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitudeFormateado}&lon=${longitudeFormateado}&appid=${TU_API_KEY}&units=metric`);
            const response = yield data.json();
            clima.innerText = response.main.temp + " C";
        }
        catch (er) {
            console.warn("error en la conexión de la API del tiempo", er);
        }
    });
}

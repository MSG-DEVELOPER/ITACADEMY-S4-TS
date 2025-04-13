
import { uso_api } from "./API.js";
import { conseguir_ubi } from "./geolocalizacion.js";

const clima=document.getElementById("clima")!;

let url : string=" ";
let apiClima = new uso_api(url);


export async function mostrar_clima(){

  try{
    url = await conseguir_ubi();
    apiClima.url = url;
    muestra_clima();
  }catch(error){
    console.error("Error al obtener el clima:", error);
  }

}

async function muestra_clima(){

  let data = await apiClima.obten_datos();
  clima.innerText=data.main.temp + " C";
  
}
















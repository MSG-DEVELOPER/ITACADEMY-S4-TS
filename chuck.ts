 import { mostrar_chiste } from "./joke.js";
 import { actualiza_array } from "./joke.js";
 import { reportAcudits } from "./index.js";

 const url = "https://api.chucknorris.io/jokes/random";


 export async function obten_chuck(){
try{

 const data = await fetch(url);
 const chiste=await data.json();
mostrar_chiste(chiste.value); //esta funcion qu esta en joke.js es simple manipulacion del dom para mostrar el chiste
 actualiza_array(chiste.value, reportAcudits);//pasamos el chiste y el array que los contiene , pasa "subirlo " al array, ahora que lo pienso podría haberlo echo aqui mismo no ?

 }catch(er){
    console.log("Chuck no está de humor... " , er);
} 
}
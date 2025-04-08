 import { mostrar_chiste } from "./joke.js";
 import { actualiza_array } from "./joke.js";
 import { reportAcudits } from "./index.js";

 const url = "https://api.chucknorris.io/jokes/random";

 //obten_chuck();

 export async function obten_chuck(){
try{
    alert("jajajaj dentro de la f de chuck");

 const data = await fetch(url);
 const chiste=await data.json();
console.log(chiste.value);
mostrar_chiste(chiste.value);
 actualiza_array(chiste.value, reportAcudits);
//return chiste.value;

 }catch(er){
    console.log("Chuck no está de humor... " , er);
} 
}
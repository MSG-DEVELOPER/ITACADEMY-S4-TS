 import { mostrar_chiste } from "./joke.js";
 import { actualiza_array } from "./joke.js";
 import { reportAcudits } from "./index.js";
 import { uso_api } from "./API.js";

 const url :string = "https://api.chucknorris.io/jokes/random";
 let apiChuck = new uso_api(url);



  export async function obten_chuck(){
 let chiste=await apiChuck.obten_datos();
 mostrar_chiste(chiste.value);
 actualiza_array(chiste.value, reportAcudits)
 }





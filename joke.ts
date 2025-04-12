
import { objAcudit } from './index.js';  
import { uso_api } from './API.js';

const config = {
    headers: {
      Accept: "application/json"
    }
  };

let puntosBroma: number = 0;
const url = "https://icanhazdadjoke.com/";


let llamadaPrpal = new uso_api(url);




async function obten_broma_prpal(reportAcudits:objAcudit[]){
let data = await llamadaPrpal.obten_datos(config);
mostrar_chiste(data.joke);
actualiza_array(data.joke,reportAcudits);
}


function mostrar_chiste(joke: string) {
    const chiste = document.getElementById("chiste");
    if (chiste) {
        chiste.textContent = joke;
    }
}

 function actualiza_array(broma: string, reportAcudits: objAcudit[]) {
    let fecha = new Date();
    let fechaISO = fecha.toISOString();
    reportAcudits.push({ joke: broma, score: puntosBroma, date: fechaISO });
    console.log(reportAcudits);
}



export {  obten_broma_prpal , mostrar_chiste, actualiza_array };

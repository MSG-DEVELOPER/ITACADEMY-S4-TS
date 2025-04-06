const chiste=document.getElementById("chiste")!;
const boton=document.getElementById("boton")!;
const botonTresPuntos=document.getElementById("botonTresPuntos")!;
const botonDosPuntos=document.getElementById("botonDosPuntos")!;
const botonUnPuntos=document.getElementById("botonUnPuntos")!;
document.addEventListener("DOMContentLoaded",get_joke);
boton.addEventListener("click",get_joke);
botonTresPuntos.addEventListener("click" , ()=>puntua_chiste(3));
botonDosPuntos.addEventListener("click" , ()=>puntua_chiste(2));
botonUnPuntos.addEventListener("click" , ()=>puntua_chiste(1));

interface objAcudit {
    joke:string;
    score:number;
    date:string;
}

const reportAcudits:objAcudit[] = [];
let jokeScore :number = 0;
let fecha :Date;
let fechaISO :string;



async function get_joke() {
    
    try{
     const data = await fetch( "https://icanhazdadjoke.com/",{
        headers:{
            'Accept': 'application/json'
        }
        });

        const joke = await data.json();
        chiste.textContent=joke.joke;
        console.log(joke.joke);
        actualiza_array(joke.joke,jokeScore)
    }catch(er){
        console.log("error en la conexión" , er)
    }
}



function actualiza_array(broma:string,jokeScore:number){
fecha=new Date();
fechaISO=fecha.toISOString();
reportAcudits.push({joke:broma,score:jokeScore,date:fechaISO});
console.log(reportAcudits);
}


function puntua_chiste(nota:number){
fecha=new Date();
fechaISO=fecha.toISOString();

reportAcudits[reportAcudits.length-1].score=nota;
reportAcudits[reportAcudits.length-1].date=fechaISO;

console.log(reportAcudits);
}






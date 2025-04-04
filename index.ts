const chiste=document.getElementById("chiste")!;
const boton=document.getElementById("boton")!;
document.addEventListener("DOMContentLoaded",get_joke);
boton.addEventListener("click",get_joke);

interface objAcudit {
    joke:String;
    score:number;
}

const reportAcudits:objAcudit[] = [];

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
        actualiza_array(joke.joke)
    }catch(er){
        console.log("error en la conexión" , er)
    }
}

function actualiza_array(broma:String){
reportAcudits.push({joke:broma,score:1});
console.log(reportAcudits);
}







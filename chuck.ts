const url = "https://api.chucknorris.io/jokes/random";

obten_chuck();

async function obten_chuck(){
try{
const data = await fetch(url);
const chiste=await data.json();
console.log(chiste.value);
}catch(er){
    console.log("Chuck no está de humor... " , er);
}
}
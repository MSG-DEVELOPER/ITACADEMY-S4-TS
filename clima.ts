const clima=document.getElementById("clima")!;
let TU_API_KEY="f8f9fc72c29078e5fd330dc83c7ee6ca"

muestra_clima();

async function muestra_clima() {
    
    try{
     const data = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=${TU_API_KEY}&units=metric`);
    const response = await data.json();
    clima.innerText=response.main.temp + " C";   
    }catch(er){
        console.log("error en la conexión de la API del tiempo" , er)
    }
}

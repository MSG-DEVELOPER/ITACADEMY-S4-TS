


const clima=document.getElementById("clima")!;
const TU_API_KEY="f8f9fc72c29078e5fd330dc83c7ee6ca";

let latitude : number;
let longitude : number;
let latitudeFormateado:number;
let longitudeFormateado:number;



mostrar_clima();

async function mostrar_clima(){

await conseguir_ubi();
muestra_clima();

}






function conseguir_ubi(){//esta f nos da las coordenadas de nuestra ubi para pasarsela a la api

  return new Promise<void>((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
         latitude  = position.coords.latitude;
         latitudeFormateado=Math.round(latitude * 100) / 100;
         longitude = position.coords.longitude;
         longitudeFormateado = Math.round(longitude * 100) / 100;
       

        resolve();
      }, function(error) {
        reject("Error al obtener la ubicación: " + error.message);
      });
    } else {
      console.warn("La geolocalización no está soportada por este navegador.");
    }
  });
 

}

  
async function muestra_clima() {
    
    try{
      console.log("en este moemnto el valor es" + latitudeFormateado);
     const data = await fetch( `https://api.openweathermap.org/data/2.5/weather?lat=${latitudeFormateado}&lon=${longitudeFormateado}&appid=${TU_API_KEY}&units=metric`);
    const response = await data.json();
    clima.innerText=response.main.temp + " C";   
    }catch(er){
        console.warn("error en la conexión de la API del tiempo" , er)
    }
}


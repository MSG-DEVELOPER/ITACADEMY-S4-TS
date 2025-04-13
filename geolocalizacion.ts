const TU_API_KEY="f8f9fc72c29078e5fd330dc83c7ee6ca";


let latitude : number;
let longitude : number;
let latitudeFormateado:number;
let longitudeFormateado:number;


export function conseguir_ubi(){
    return new Promise<string>((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
           latitude  = position.coords.latitude;
           latitudeFormateado=formatear_ubi(latitude);
           longitude = position.coords.longitude;
           longitudeFormateado =formatear_ubi(longitude);
           let url:string=`https://api.openweathermap.org/data/2.5/weather?lat=${latitudeFormateado}&lon=${longitudeFormateado}&appid=${TU_API_KEY}&units=metric`
           
          resolve(url);
        }, function(error) {
          reject("Error al obtener la ubicación: " + error.message);
        });
      } else {
        console.warn("La geolocalización no está soportada por este navegador.");
        reject("Geolocalización no soportada");
      }
    });
   
  
  }

  function formatear_ubi(n:number){
    return Math.round(n * 100) / 100;
    }
    
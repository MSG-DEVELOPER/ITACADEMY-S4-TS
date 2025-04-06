const clima=document.getElementById("clima")!;

let TU_API_KEY="f8f9fc72c29078e5fd330dc83c7ee6ca"

iniciar();



function iniciar() {
    //let API = `https://openweathermap.org/find?q=barcelona`;
    let API = `https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=${TU_API_KEY}&units=metric`;

  
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.main.temp);
       console.log(data.wind.speed);
       clima.innerText=data.main.temp + " C";
       
      });
  }
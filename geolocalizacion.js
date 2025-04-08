if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log("Latitud: " + latitude);
      console.log("Longitud: " + longitude);
    }, function(error) {
      console.log("Error al obtener la ubicación: " + error.message);
    });
  } else {
    console.log("La geolocalización no está soportada por este navegador.");
  }
  
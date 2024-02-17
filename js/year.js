function actualizarAnio() {
    var elementoAnio = document.getElementById('year');
    var fechaActual = new Date();
    var anio = fechaActual.getFullYear();
    elementoAnio.textContent = anio;
  }
  
  actualizarAnio();
  
  setInterval(actualizarAnio, 1000);
  
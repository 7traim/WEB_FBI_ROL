document.addEventListener("DOMContentLoaded", function() {
    const unirse = document.querySelector(".btn__singup");
    const contact = document.querySelector(".contact");
    const alerta = document.querySelector(".alerta");
    const cerrarAlerta = document.querySelector(".cerrar__alerta");
  
    contact.addEventListener("click", function() {
       alerta.style.display = "block"; 
       
    });

    unirse.addEventListener("click", function() {
        alerta.style.display = "block"; 
        
     });


    cerrarAlerta.addEventListener("click", function() {
        alerta.style.display = "none"; 
     });

    

  });
  
  
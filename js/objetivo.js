document.addEventListener("DOMContentLoaded", function() {
    const proteger = document.querySelector(".card__proteger");
    const combatir = document.querySelector(".card__combatir");
    const perfeccionar = document.querySelector(".card__perfeccionar");
    const prouno = document.querySelector(".proteger__uno");
    const prodos = document.querySelector(".proteger__dos");
    const protres = document.querySelector(".proteger__tres");
    const comuno = document.querySelector(".combatir__uno");
    const comdos = document.querySelector(".combatir__dos");
    const comtres = document.querySelector(".combatir__tres");
    const peruno = document.querySelector(".perfeccionar__uno");
    const perdos = document.querySelector(".perfeccionar__dos");
    const pertres = document.querySelector(".perfeccionar__tres");
    const cerrarproteger = document.querySelector(".cerrar__proteger");
    const cerrarcombatir = document.querySelector(".cerrar__combatir");
    const cerrarperfeccionar = document.querySelector(".cerrar__perfeccionar");

  
    proteger.addEventListener("click", function() {
       prouno.style.display = "block"; 
       prodos.style.display = "block"; 
       protres.style.display = "block"; 
       proteger.style.display = "none"; 
       combatir.style.display = "none"; 
       perfeccionar.style.display = "none"; 
       
    });

    cerrarproteger.addEventListener("click", function() {
        prouno.style.display = "none"; 
        prodos.style.display = "none"; 
        protres.style.display = "none"; 
        proteger.style.display = "block"; 
        combatir.style.display = "block"; 
        perfeccionar.style.display = "block"; 
        
     });

     combatir.addEventListener("click", function() {
        comuno.style.display = "block"; 
        comdos.style.display = "block"; 
        comtres.style.display = "block"; 
        proteger.style.display = "none"; 
        combatir.style.display = "none"; 
        perfeccionar.style.display = "none"; 
        
     });

     cerrarcombatir.addEventListener("click", function() {
        comuno.style.display = "none"; 
        comdos.style.display = "none"; 
        comtres.style.display = "none"; 
        proteger.style.display = "block"; 
        combatir.style.display = "block"; 
        perfeccionar.style.display = "block"; 
        
     });

     perfeccionar.addEventListener("click", function() {
        peruno.style.display = "block"; 
        perdos.style.display = "block"; 
        pertres.style.display = "block"; 
        proteger.style.display = "none"; 
        combatir.style.display = "none"; 
        perfeccionar.style.display = "none"; 
        
     });

     cerrarperfeccionar.addEventListener("click", function() {
        peruno.style.display = "none"; 
        perdos.style.display = "none"; 
        pertres.style.display = "none"; 
        proteger.style.display = "block"; 
        combatir.style.display = "block"; 
        perfeccionar.style.display = "block"; 
        
     });

  });
  
  
  
  
document.addEventListener("DOMContentLoaded", function() {
  const openBtn = document.querySelector(".open");
  const historiaCard = document.querySelector(".historia__card");
  const historiaClic = document.querySelector(".historia__clic");
  const closedBtn = document.querySelector(".closed");
  const fundador = document.querySelector(".fundador");
  const btnlegal = document.querySelector(".legal");
  const legalClic = document.querySelector(".legal__clic");
  const closedLegal = document.querySelector(".closed__legal");

  openBtn.addEventListener("click", function() {
     historiaClic.style.display = "block"; 
     
      // historiaCard.style.display = "none"; 
      // openBtn.style.display = "none"; 
  });

  btnlegal.addEventListener("click", function() {
    legalClic.style.display = "block"; 
    
 });

 closedBtn.addEventListener("click", function() {
      historiaClic.style.display = "none"; // Oculta el cuadro de historia
      historiaCard.style.display = "block"; // Muestra el cuadro legal nuevamente
      openBtn.style.display = "block";
      
  });

  closedLegal.addEventListener("click", function() {
    legalClic.style.display = "none"; // Oculta el cuadro de historia
    
});
});




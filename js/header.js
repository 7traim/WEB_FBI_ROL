
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    var navTogle = document.querySelector(".btn__singup");
    var navMenu = document.querySelector(".nav-menu");
    var btnSingUp = document.querySelector(".btn__singup");
    var home = this.document.getElementById("home");
    var agentes = this.document.getElementById("agentes");
    var protocolo = this.document.getElementById("protocolo");
    var ig = this.document.getElementById("ig");
    

    navbar.classList.toggle("scrolled", window.scrollY > 0);
    navTogle.classList.toggle("scrolled", window.scrollY > 0);
    navMenu.classList.toggle("scrolled", window.scrollY > 0);
    btnSingUp.classList.toggle("scrolled", window.scrollY > 0);
    home.classList.toggle("scrolled", window.scrollY > 0);
    agentes.classList.toggle("scrolled", window.scrollY > 0);
    protocolo.classList.toggle("scrolled", window.scrollY > 0);
    ig.classList.toggle("scrolled", window.scrollY > 0);
    
});


var button = document.querySelector('.nav-toggle');
var container = document.querySelector('.menu__container');
var menu = document.querySelector('.nav-menu');

button.addEventListener('click', function() {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});
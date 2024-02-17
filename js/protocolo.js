

container.addEventListener('click', function() {
  if (container.style.display === 'none') {
    container.style.display = 'block';
    menu.style.display = 'block';
  } else {
    container.style.display = 'none';
    menu.style.display = 'none';
  }
});


var cajas = document.querySelectorAll('.card__dotacion');

cajas.forEach(caja => {
  caja.addEventListener('click', function() {
    caja.classList.toggle('active');
  });
});

var rango = document.querySelectorAll('.card__rango');

rango.forEach(caja => {
  caja.addEventListener('click', function() {
    caja.classList.toggle('active');
  });
});

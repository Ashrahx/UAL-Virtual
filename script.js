/* Carousel */

var carousel;
$(document).ready(function () {
    carousel = $("#scrolling ul");
    carousel.itemslide();
});

/* Whatsapp */

window.addEventListener("scroll", function() {
    var whatsappButton = document.getElementById("whatsappButton");
    if (window.scrollY > 100) { // Cambiar este valor según cuándo quieras mostrar el botón
      whatsappButton.style.display = "block";
    }
  });
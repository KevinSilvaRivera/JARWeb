document.addEventListener("DOMContentLoaded", function () {
    var menuToggle = document.getElementById("menu-toggle");
    var navLinks = document.querySelectorAll("nav ul li a");
    var menuOverlay = document.getElementById("menu-overlay");

    // Función para cerrar el menú cuando se hace clic en un enlace de navegación
    function closeMenu() {
        menuToggle.checked = false;
        menuOverlay.classList.add('hidden');
    }

    // Agregar evento de clic a cada enlace de navegación
    navLinks.forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

    // Agregar evento de clic al fondo semitransparente para cerrar el menú
    menuOverlay.addEventListener('click', function() {
        menuToggle.checked = false;
        menuOverlay.classList.add('hidden');
    });
});

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC66sIPzea7QZmcXb8R4NC23f9pn1FdPQg&callback=initMap" async defer></script>

// Inicializar el mapa
function initMap() {
    // Coordenadas de las oficinas (cambia estas coordenadas por las de tus oficinas)
    var oficinas = { lat: 16.249801894884587, lng: -92.01535736801351 };

    // Crear un mapa centrado en las coordenadas de las oficinas
    var mapa = new google.maps.Map(document.getElementById('google-map'), {
        zoom: 15, // Nivel de zoom
        center: oficinas // Centrar el mapa en las coordenadas de las oficinas
    });

    // Marcador en las coordenadas de las oficinas
    var marcador = new google.maps.Marker({
        position: oficinas,
        map: mapa,
        title: 'Nuestras Oficinas' // Texto que se muestra al pasar el cursor sobre el marcador
    });
}

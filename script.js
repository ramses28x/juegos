document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón "Informacion"
    var infoButton = document.querySelector('.btn-1');

    // Obtener el botón "Juegos"
    var gamesButton = document.querySelectorAll('.btn-1')[1];

    // Obtener todos los botones "Comprar"
    var buyButtons = document.querySelectorAll('.btn-2');

    // Función para mostrar un mensaje de alerta al hacer clic en el botón "Informacion"
    infoButton.addEventListener('click', function() {
        alert("Esta pagina a sido creada con la finalidad de simular una tienda virtual de videojuegos");
    });

    // Función para mostrar un mensaje de alerta al hacer clic en el botón "Juegos"
    gamesButton.addEventListener('click', function() {
        alert("Juegos increibles a un buen precio");
    });

    // Función para mostrar un mensaje de alerta al hacer clic en cualquier botón "Comprar"
    buyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert("Has comprado este juego");
        });
    });
});

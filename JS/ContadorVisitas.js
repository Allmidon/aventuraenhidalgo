document.addEventListener("DOMContentLoaded", function () {
    var counterElement = document.getElementById("counter");
    var resetButton = document.getElementById("resetButton");

    // Comprueba si ya hay un contador en el almacenamiento local
    var visits = localStorage.getItem("visits");

    if (visits) {
        // Si ya hay un contador, lo incrementa
        visits = parseInt(visits) + 1;
    } else {
        // Si no hay un contador, inicia uno nuevo
        visits = 1;
    }

    // Actualiza el contador en el almacenamiento local y en la página
    localStorage.setItem("visits", visits);
    counterElement.textContent = visits;

    // Función para restablecer el contador
    function resetCounter() {
        localStorage.removeItem("visits");
        counterElement.textContent = 0;
    }

    // Asignar evento al botón de reset
    resetButton.addEventListener("click", resetCounter);
});

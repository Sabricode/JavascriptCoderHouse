document.addEventListener('DOMContentLoaded', function () {
  const reiniciarBtnElement = document.getElementById('btnReiniciar');

  // Manejar el evento de clic en el botón de reiniciar
  reiniciarBtnElement.addEventListener('click', reiniciarJuego);

  // Función para reiniciar el juego
  function reiniciarJuego() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    const mensajeElement = document.getElementById('mensaje');
    const inputNumeroElement = document.getElementById('inputNumero');
    const btnAdivinarElement = document.getElementById('btnAdivinar');

    mensajeElement.textContent = '';
    inputNumeroElement.value = '';
    inputNumeroElement.disabled = false;
    btnAdivinarElement.disabled = false;

    // Limpiar estilos
    mensajeElement.style.color = '';
  }
});

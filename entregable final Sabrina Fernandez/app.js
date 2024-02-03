document.addEventListener('DOMContentLoaded', function () {
  // Generar un número aleatorio entre 1 y 100
  const numeroSecreto = Math.floor(Math.random() * 10) + 1;

  // Obtener elementos del DOM
  const mensajeElement = document.getElementById('mensaje');
  const inputNumeroElement = document.getElementById('inputNumero');
  const btnAdivinarElement = document.getElementById('btnAdivinar');

  // Manejar el evento de clic en el botón
  btnAdivinarElement.addEventListener('click', function () {
    // Obtener el número ingresado por el usuario
    const numeroUsuario = parseInt(inputNumeroElement.value);

    // Verificar si el número es correcto
    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 10) {
      mensajeElement.textContent = 'Selecciona un piso del 1 al 10 para descubrir el departamento.';
    } else {
      // Comparar el número ingresado con el número secreto
      if (numeroUsuario === numeroSecreto) {
        mensajeElement.style.color = '#4CAF50';
        mensajeElement.textContent = '¡AQUÍ ES! ¡AQUÍ ESTÁ LA PUERTA ROJA!';
        desactivarJuego();
      } else {
        mensajeElement.style.color = '#900';
        mensajeElement.textContent = `Aqui no hay puerta roja... Tu amigo recuerda: "Creo que mi piso no está ${numeroUsuario > numeroSecreto ? 'arriba' : 'abajo'} del piso ${numeroUsuario}." ¡Prueba otro piso!`;
      }
    }
  });

  // Desactivar el juego al finalizar
  function desactivarJuego() {
    inputNumeroElement.disabled = true;
    btnAdivinarElement.disabled = true;
  }
});
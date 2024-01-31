document.addEventListener('DOMContentLoaded', function () {
  const listaCarrito = document.getElementById('lista-carrito');
  const totalCarrito = document.getElementById('total');

  mostrarCarrito();

  // Muestra los productos en el carrito
  function mostrarCarrito() {
    listaCarrito.innerHTML = '';
    let total = 0;

    const carrito = obtenerCarrito() || [];

    carrito.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `${item.nombre} - Cantidad: ${item.cantidad} - Precio: $${(item.precio * item.cantidad).toFixed(2)}`;
      listaCarrito.appendChild(li);

      total += item.precio * item.cantidad;
    });

    totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
  }

  // Función para obtener el carrito desde localStorage
  function obtenerCarrito() {
    return JSON.parse(localStorage.getItem('carrito'));
  }

  // Vaciar el carrito
  document.getElementById('vaciar-carrito').addEventListener('click', function () {
    localStorage.removeItem('carrito');
    mostrarCarrito();
  });
});
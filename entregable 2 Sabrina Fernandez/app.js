document.addEventListener('DOMContentLoaded', function () {
  const productos = document.getElementById('productos');

  // Agrega un producto al carrito
  function agregarAlCarrito(id) {
    const productoSeleccionado = document.querySelector(`.producto[data-id="${id}"]`);
    const nombre = productoSeleccionado.dataset.nombre;
    const precio = parseFloat(productoSeleccionado.dataset.precio);

    let carrito = obtenerCarrito() || [];

    // Verifica si el producto ya está en el carrito
    const enCarrito = carrito.find(item => item.id === id);

    if (enCarrito) {
      enCarrito.cantidad++;
    } else {
      carrito.push({
        id: id,
        nombre: nombre,
        precio: precio,
        cantidad: 1
      });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  // Evento para agregar al carrito cuando se hace clic en el botón
  productos.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
      const id = parseInt(event.target.parentElement.dataset.id);
      agregarAlCarrito(id);
    }
  });

  // Función para obtener el carrito desde localStorage
  function obtenerCarrito() {
    return JSON.parse(localStorage.getItem('carrito'));
  }
});
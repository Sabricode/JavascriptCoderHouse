
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProductos = document.querySelector(
	'.container-cart-productos'
);

btnCart.addEventListener('click', () => {
	containerCartProductos.classList.toggle('hidden-cart');
});

/* ========================= */
const cartInfo = document.querySelector('.cart-producto');
const rowProducto = document.querySelector('.row-producto');
// Lista de todos los contenedores de productos
const productosList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProductos = [];

const valorTotal = document.querySelector('.total-pagar');

const countProductos = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productosList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const producto = e.target.parentElement;

		const infoProducto = {
			quantity: 1,
			title: producto.querySelector('h2').textContent,
			price: producto.querySelector('p').textContent,
		};

		const exits = allProductos.some(
			producto => producto.title === infoProducto.title
		);

		if (exits) {
			const productos = allProductos.map(producto => {
				if (producto.title === infoProducto.title) {
					producto.quantity++;
					return producto;
				} else {
					return producto;
				}
			});
			allProductos = [...productos];
		} else {
			allProductos = [...allProductos, infoProducto];
		}

		showHTML();
	}
});

rowProducto.aprend('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const producto = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProductos = allProductos.filter(
			producto => producto.title !== title
		);

		console.log(allProductos);

		showHTML();
	}
});

const showHTML = () => {
	if (!allProductos.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProducto.innerHTML = '';

	let total= 0;
	let totalOfProducts= 0;

	allProductos.forEach(producto => {
		const containerProducto = document.createElement('div');
		containerProducto.classList.add('cart-producto');

		containerProducto.innerHTML = `
            <div class="info-cart-producto">
                <span class="cantidad-producto-carrito">${producto.quantity}</span>
                <p class="titulo-producto-carrito">${producto.title}</p>
                <span class="precio-producto-carrito">${producto.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		rowProducto.addEventListener(containerProducto);

		total =
			total + parseInt(producto.quantity * producto.price.slice(1));
		totalOfProductos = totalOfProductos + producto.quantity;
	});

	valorTotal.innerText = `$${total}`;
	countProductos.innerText = totalOfProductos;
};

let listaProductos = document.querySelector("#listaProductos");
let listaCategorias = document.querySelector("#listaCategorias");
let carrito = [];
let toggleDarkMode = document.getElementById('toggleDarkMode');
let body = document.body;
let carritoCount = document.getElementById('carrito-count');
let listaCarrito = document.getElementById('listaCarrito');
let totalCarrito = document.getElementById('totalCarrito');
const URL = "https://fakestoreapi.com/products/";
const URLCATEGORIAS = "https://fakestoreapi.com/products/categories";

// Toggle Dark Mode
toggleDarkMode.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    const icon = toggleDarkMode.nextElementSibling.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('bi-moon', 'bi-brightness-high');
        toggleDarkMode.nextElementSibling.innerHTML = '<i class="bi bi-brightness-high"></i>&nbsp;&nbsp;Modo Claro';
    } else {
        icon.classList.replace('bi-brightness-high', 'bi-moon');
        toggleDarkMode.nextElementSibling.innerHTML = '<i class="bi bi-moon"></i>&nbsp;&nbsp;Modo Oscuro';
    }
});

// Fetch products from API and render them
fetch(URL)
    .then(res => res.json())
    .then(productosObtenidos => {
        console.log(productosObtenidos);
        listaProductos.innerHTML = "";
        productosObtenidos.forEach((producto, indice) => {
            listaProductos.innerHTML += `
                <div class="col-12 col-md-3 py-5">
                    <div class="card">
                        <img src="${producto.image}" class="p-3 imagenProducto card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${producto.title.slice(0, 20)}</h5>
                            <p class="card-text">${producto.description.slice(0, 70)}</p>
                            <p class="card-text text-danger">$ ${producto.price}</p>
                            <a href="#" class="btn btn-primary w-100" onclick="agregarAlCarrito(${indice})">Añadir al carrito</a>
                        </div>
                    </div>
                </div>
            `;
        });
        window.productos = productosObtenidos; // Guardar productos para acceso global
    })
    .catch(error => {
        console.error('Error fetching products:', error);
        listaProductos.innerHTML = "<p>Hubo un error al cargar los productos. Intente nuevamente más tarde.</p>";
    });

// Fetch categories from API and render them
fetch(URLCATEGORIAS)
    .then(res => res.json())
    .then(categoriasObtenidas => {
        console.log(categoriasObtenidas);
        listaCategorias.innerHTML = "";
        categoriasObtenidas.forEach((categoria, indice) => {
            categoria = categoria.replace("'", "");
            listaCategorias.innerHTML += `
                <li class="nav-item">
                    <a href="#" onclick="muestraProductos('${categoria}')" class="nav-link">
                        ${categoria.toUpperCase()}
                    </a>
                </li>
            `;
        });
    })
    .catch(error => {
        console.error('Error fetching categories:', error);
        listaCategorias.innerHTML = "<p>Hubo un error al cargar las categorías. Intente nuevamente más tarde.</p>";
    });

// Add product to cart
function agregarAlCarrito(indice) {
    const producto = window.productos[indice];
    carrito.push(producto);
    actualizarCarrito();
}

// Update cart count and display products in the cart
function actualizarCarrito() {
    carritoCount.innerText = carrito.length;
    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach((producto, indice) => {
        total += producto.price;
        listaCarrito.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${producto.title}
                <span>$${producto.price.toFixed(2)}</span>
                <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${indice})">Eliminar</button>
            </li>
        `;
    });

    totalCarrito.innerText = `Total: $${total.toFixed(2)}`;
}

// Remove product from cart
function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
}

// Show products by category
function muestraProductos(categoria) {
    fetch(`${URL}category/${categoria}`)
        .then(res => res.json())
        .then(productosFiltrados => {
            console.log(productosFiltrados);
            listaProductos.innerHTML = "";
            productosFiltrados.forEach((producto, indice) => {
                listaProductos.innerHTML += `
                    <div class="col-12 col-md-3 py-5">
                        <div class="card filtered-product">
                            <img src="${producto.image}" class="p-3 imagenProducto card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.title.slice(0, 20)}</h5>
                                <p class="card-text">${producto.description.slice(0, 70)}</p>
                                <p class="card-text text-danger">$ ${producto.price}</p>
                                <a href="#" class="btn btn-primary w-100" onclick="agregarAlCarrito(${indice})">Añadir al carrito</a>
                            </div>
                        </div>
                    </div>
                `;
            });
            window.productos = productosFiltrados; // Guardar productos filtrados para acceso global
        })
        .catch(error => {
            console.error('Error fetching category products:', error);
            listaProductos.innerHTML = "<p>Hubo un error al cargar los productos. Intente nuevamente más tarde.</p>";
        });
}

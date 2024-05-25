let listaProductos = document.querySelector("#listaProductos");
let listaCategorias = document.querySelector("#listaCategorias");
let carrito = [];
let toggleDarkMode = document.getElementById('toggleDarkMode');
let body = document.body;
const URL = "https://fakestoreapi.com/products/";

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
                            <a href="#" class="btn btn-primary w-100">Comprar</a>
                        </div>
                    </div>
                </div>
            `;
        });
    })
    .catch(error => {
        console.error('Error fetching products:', error);
        listaProductos.innerHTML = "<p>Hubo un error al cargar los productos. Intente nuevamente más tarde.</p>";
    });

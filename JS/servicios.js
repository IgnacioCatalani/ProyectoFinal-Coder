const productos = [
    {id: 1, nombre: "Pastillas de freno", precio: 30000, img:"./Img/psf.jpg" },
    {id: 2, nombre: "Fuelles", precio: 4500, img:"./Img/fuelles.jpg" },
    {id: 3, nombre: "Cazoletas", precio: 18900, img:"./Img/cazoletas.jpg" },
    {id: 4, nombre: "Bombas Hidráulicas", precio: 50000, img:"./Img/bomba.jpg"  }
    ];

const contenedorProductos = document.createElement('div');
contenedorProductos.classList.add('productos-container');
document.body.appendChild(contenedorProductos);

productos.forEach(producto => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta-producto');

    const imagen = document.createElement('img');
    imagen.src = producto.img;
    imagen.alt = producto.nombre;
    tarjeta.appendChild(imagen);

    const nombre = document.createElement('h2');
    nombre.textContent = producto.nombre;
    tarjeta.appendChild(nombre);

    const precio = document.createElement('p');
    precio.textContent = `Precio: $${producto.precio }`;
    tarjeta.appendChild(precio);

    const boton = document.createElement('button');
    boton.textContent = 'Añadir al carrito';
    
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto);
    });
    tarjeta.appendChild(boton);

    contenedorProductos.appendChild(tarjeta);
});

//Filtrado de productos

const tarjetas = document.querySelectorAll('.tarjeta-producto');
const posicionesOriginales = Array.from(tarjetas).map(tarjeta => {
    return {
        tarjeta,
        display: tarjeta.style.display
    };
});
const inputBusqueda = document.getElementById('busqueda');

inputBusqueda.addEventListener('input', () => {
    const valorBusqueda = inputBusqueda.value.toLowerCase();

    posicionesOriginales.forEach(({ tarjeta, display }) => {
        const nombreProducto = tarjeta.querySelector('h2').textContent.toLowerCase();
        if (nombreProducto.includes(valorBusqueda)) {
            tarjeta.style.display = display; 
        } else {
            tarjeta.style.display = 'none'; 
        }
    });
});


inputBusqueda.addEventListener('blur', () => {
    posicionesOriginales.forEach(({ tarjeta, display }) => {
        tarjeta.style.display = display; 
    });
});

// CARRITO

function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    
    actualizarCarritoVisual();
}

function actualizarCarritoVisual() {
    const carritoTable = document.getElementById('carrito').getElementsByTagName('tbody')[0];
    carritoTable.innerHTML = '';

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.forEach(producto => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td><button onclick="eliminarDelCarrito(${producto.id})">Eliminar</button></td>
        `;
        carritoTable.appendChild(fila);
    });
}

function eliminarDelCarrito(idProducto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(id => id !== idProducto);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    
    actualizarCarritoVisual();
}


actualizarCarritoVisual();

function terminarCompra() {
    localStorage.removeItem('carrito');
    actualizarCarritoVisual(); 
}
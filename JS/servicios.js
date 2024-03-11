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
        
        console.log(`Añadir al carrito: ${producto.nombre}`);
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


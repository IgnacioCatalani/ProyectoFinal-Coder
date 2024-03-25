document.addEventListener('DOMContentLoaded', function() {
    const formularioCompra = document.querySelector('.formulario-compra');
    formularioCompra.addEventListener('submit', function(event) {
        event.preventDefault();

        Swal.fire({
            icon: 'success',
            title: 'Compra completada con éxito',
            showConfirmButton: false,
            timer: 3000
        }).then(() => {
            window.location.href = 'servicios.html';
        });
    });
});
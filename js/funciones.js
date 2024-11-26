let indice = 0; // Índice de la imagen actual
const slides = document.querySelectorAll('.slide'); // Obtener todas las imágenes
const totalSlides = slides.length; // Total de imágenes

// Función para cambiar la imagen del carrusel
function cambiarImagen(direccion) {
    const carrusel = document.querySelector('.carrusel-images');

    // Cambiar el índice basado en la dirección
    indice += direccion;

    // Si el índice es mayor o igual al total de imágenes, volvemos al principio
    if (indice >= totalSlides) {
        indice = 0;
        carrusel.style.transition = 'none'; // Desactivamos la transición temporalmente
        carrusel.style.transform = `translateX(0)`; // Volver al principio sin animación

        // Luego, restauramos la transición después de un corto tiempo
        setTimeout(() => {
            carrusel.style.transition = 'transform 0.5s ease-in-out'; // Restablecer la transición
        }, 50); // Un retardo mínimo
    }

    // Si el índice es menor que 0, vamos a la última imagen
    if (indice < 0) {
        indice = totalSlides - 1;
    }

    // Mover el carrusel para mostrar la imagen actual
    carrusel.style.transform = `translateX(-${indice * 100}%)`;
}

// Función para hacer que el carrusel sea infinito
function loopCarrusel() {
    const carrusel = document.querySelector('.carrusel-images');
    
    // Clonamos el primer slide y lo añadimos al final
    const firstSlide = document.querySelector('.slide');
    const clonedSlide = firstSlide.cloneNode(true); // Clonamos la primera imagen
    carrusel.appendChild(clonedSlide); // Añadimos la imagen clonada al final

    // Se asegura de que el carrusel comience de nuevo con la primera imagen
    setTimeout(() => {
        carrusel.style.transition = 'transform 0.5s ease-in-out'; // Restauramos la transición
        carrusel.style.transform = `translateX(0)`; // Regresamos al primer slide
    }, 50); // Le damos tiempo para que se añadan las imágenes
}

// Llamamos a loopCarrusel después de cada cambio de imagen
function cambiarImagenConLoop(direccion) {
    cambiarImagen(direccion);
    loopCarrusel();
}

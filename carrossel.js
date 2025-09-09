const carrosselInner = document.querySelector('.carrossel-inner');
const slides = document.querySelectorAll('.carrossel-inner .slide');
let index = 0;

function mostrarSlide(i) {
    if (i < 0) index = slides.length - 1;
    else if (i >= slides.length) index = 0;
    else index = i;

    carrosselInner.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    mostrarSlide(index + 1);
}

function prevSlide() {
    mostrarSlide(index - 1);
}

// Inicializa
mostrarSlide(index);

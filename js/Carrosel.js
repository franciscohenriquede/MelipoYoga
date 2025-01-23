

let currentSlide = 0;

function updateSlidePosition() {
    const carrosselInner = document.querySelector('.carrossel-inner');
    carrosselInner.style.transform = `translateX(-${currentSlide * 35}%)`;
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length; // Loop para o primeiro slide
    updateSlidePosition();
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop para o último slide
    updateSlidePosition();
}

 
 
 
let currentIndex = 0;

function showSlides(index) {
    const slidesContainer = document.querySelector('.slides-container');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const slideWidth = slides[0].offsetWidth;
    slidesContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

function nextSlide() {
    showSlides(currentIndex + 1);
}

function prevSlide() {
    showSlides(currentIndex - 1);
}

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(currentIndex);
});

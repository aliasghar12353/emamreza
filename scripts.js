let currentSlide = 0;

function showSlide(index) {
    const slider = document.getElementById('heroSlider');
    const slides = slider.children;
    const totalSlides = slides.length;
    currentSlide = (index + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function filterByCategory(category) {
    alert(`Filtering by category: ${category}`);
}

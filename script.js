// Smooth scroll
document.querySelectorAll('[data-scroll]').forEach(el => {
    el.addEventListener('click', () => {
        const target = document.querySelector(el.dataset.scroll);
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Slider functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slides .slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}
prevBtn.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
});
nextBtn.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
});

// Auto-slide
setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}, 8000);

// Video CTA
document.getElementById('play-main-video').addEventListener('click', () => {
    alert("Video play functionality placeholder.");
});

// Contact form
document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Form submitted!');
});

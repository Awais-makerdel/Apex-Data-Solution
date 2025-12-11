// Smooth scroll for CTA buttons
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(e){
    e.preventDefault();
    const href = this.getAttribute('href');
    if(href.startsWith('#')) {
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in sections on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.classList.add('hidden'); // Initially hidden
  observer.observe(section);
});

// Sticky CTA on scroll
const cta = document.querySelector('#cta');
window.addEventListener('scroll', () => {
  if(window.scrollY > 600){ // adjust pixel value as needed
    cta.classList.add('sticky-cta');
  } else {
    cta.classList.remove('sticky-cta');
  }
});

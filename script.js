// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click', e=>{
    const href = link.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Fade-in sections on scroll (IntersectionObserver)
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('fade-in');
  });
},{threshold:0.18});
document.querySelectorAll('section').forEach(s=>{
  s.classList.add('hidden');
  io.observe(s);
});

// Hero video play fallback (click)
const heroPlay = document.getElementById('heroPlay');
if(heroPlay){
  heroPlay.addEventListener('click', ()=>{
    const v = document.getElementById('heroVideo');
    if(!v) return;
    if(v.paused) { v.play(); heroPlay.textContent='▶ Playing'; }
    else { v.pause(); heroPlay.textContent='▶ Play VSL'; }
  });
}

// Small accessibility: enable keyboard to jump to sections from nav items
document.querySelectorAll('.nav a').forEach(a=>{
  a.setAttribute('role','link');
  a.setAttribute('tabindex','0');
});

// Optional: small sticky shadow on header on scroll
window.addEventListener('scroll', ()=>{
  const header = document.querySelector('.site-header');
  if(window.scrollY>12) header.style.boxShadow='0 6px 22px rgba(0,0,0,0.45)';
  else header.style.boxShadow='none';
});

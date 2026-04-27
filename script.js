const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const heroSlides = Array.from(document.querySelectorAll('.hero-slide'));
let heroIndex = 0;
let heroTimer;

function showHeroSlide(index) {
  if (!heroSlides.length) return;
  heroIndex = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, i) => slide.classList.toggle('active', i === heroIndex));
}

function startHeroRotation() {
  if (heroSlides.length <= 1 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  clearInterval(heroTimer);
  heroTimer = setInterval(() => showHeroSlide(heroIndex + 1), 5200);
}

showHeroSlide(0);
startHeroRotation();

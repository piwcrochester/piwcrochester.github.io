document.addEventListener('DOMContentLoaded', function() {
  // MOBILE NAV TOGGLE
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('open');
  });

  // FADE-IN ON SCROLL
  const fadeElements = document.querySelectorAll('.fade-in-element');
  const observerOptions = { threshold: 0.1 };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  // Mobile menu toggle
  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('open');
  });

  // Close menu when link is clicked (optional for single-page nav)
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('open');
    });
  });

  // Fade-in on Scroll with Intersection Observer
  const fadeElements = document.querySelectorAll('.fade-in-element');
  const observerOptions = { threshold: 0.1 };

  const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => fadeInOnScroll.observe(el));
});

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

  // === Fade-in on Scroll ===
  // 1. Find all elements that should fade in
  const fadeElements = document.querySelectorAll('.fade-in-element');

  // 2. Use Intersection Observer to watch these elements
  const observerOptions = {
    threshold: 0.1  // Trigger when 10% of the element is visible
  };

  const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the 'show' class to start the CSS transition
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Stop observing once it's shown
      }
    });
  }, observerOptions);

  // 3. Attach the observer to each fade-in element
  fadeElements.forEach(el => {
    fadeInOnScroll.observe(el);
  });
});

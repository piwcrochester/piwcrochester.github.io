// Toggle mobile navigation menu
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('open');
  });
  
  // Optional: Close menu when a link is clicked (for one-page navigation)
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('open');
    });
  });
});

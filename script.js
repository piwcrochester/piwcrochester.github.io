/* Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Open Sans', sans-serif;
  color: #333;
  line-height: 1.6;
  background: #FFFFFF;
}

/* Navigation Bar */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0F40A1; /* Deep blue background */
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 999; /* Ensure the navbar stays on top during scroll */
}
.brand {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5em;
  font-weight: 700;
  color: #FFFFFF;
}
.nav-menu {
  list-style: none;
  display: flex;
}
.nav-menu li {
  margin-left: 2em;
}
.nav-menu a {
  text-decoration: none;
  font-weight: 600;
  color: #FFFFFF;
}
.nav-menu a:hover {
  text-decoration: underline;
}
.nav-toggle {
  display: none;
  font-size: 1.5em;
  background: none;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
}

/* Hero Section (Parallax) */
.hero {
  /* Ensure the section fills at least one viewport height for strong parallax effect */
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Parallax background image */
  background: url('assets/hero-bg.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed; /* This is the key for parallax in CSS */
}

/* Foreground content in hero section */
.hero-content {
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8); /* A white overlay with slight transparency */
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
}
.hero-logo {
  max-width: 150px;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}
.hero h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5em;
  color: #0F40A1;
  margin-bottom: 0.5em;
}
.hero p {
  font-size: 1.1em;
  margin-bottom: 1em;
  color: #333;
}
.btn-primary {
  display: inline-block;
  padding: 0.75em 1.5em;
  background-color: #0F40A1;
  color: #FFFFFF;
  text-decoration: none;
  font-weight: 600;
  border-radius: 4px;
}
.btn-primary:hover {
  background-color: #0c3580; /* darker blue on hover */
}

/* Sections (About, Plan a Visit, Contact) */
.section {
  padding: 60px 20px;
  text-align: center;
}
.section h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2em;
  color: #0F40A1;
  margin-bottom: 20px;
}
.section p {
  max-width: 600px;
  margin: 0 auto 20px auto;
  font-size: 1.1em;
}
.section ul {
  text-align: left;
  list-style: disc;
  max-width: 600px;
  margin: 0 auto;
}
.section li {
  margin: 5px 0;
  line-height: 1.5;
}

/* Contact links */
#contact a {
  color: #0F40A1;
  text-decoration: none;
}
#contact a:hover {
  text-decoration: underline;
}

/* Footer */
footer {
  background-color: #f4f4f4;
  text-align: center;
  padding: 10px;
  font-size: 0.9em;
  color: #333;
}

/* Mobile / Responsive */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    background-color: #0F40A1;
    padding: 10px 0;
  }
  .nav-menu li {
    margin: 10px 0;
    text-align: center;
  }
  .nav-menu.open {
    display: flex;
  }
  .nav-toggle {
    display: block;
  }
  .section {
    text-align: left;
  }
  .section h2 {
    text-align: center;
  }
  .hero-content {
    margin: 0 20px; /* small padding on mobile screens */
  }
}

/* Fade-in Effect */
.fade-in-element {
  opacity: 0;          /* elements start invisible */
  transform: translateY(40px); /* slightly below final position */
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.fade-in-element.show {
  opacity: 1;          /* fade to visible */
  transform: translateY(0);   /* move to final position */
}

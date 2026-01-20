// ===== Mobile Menu Toggle =====
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== Smooth Scrolling =====
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });

    // Close menu on mobile after clicking
    if(navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// Select all nav links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  // Click pop effect
  link.addEventListener('click', () => {
    link.style.transform = 'scale(1.2)';
    link.style.transition = 'transform 0.2s ease';

    setTimeout(() => {
      link.style.transform = 'scale(1)';
    }, 200);
  });

  // Hover pop effect
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'scale(1.1)';
    link.style.transition = 'transform 0.2s ease';
  });

  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1)';
  });
});
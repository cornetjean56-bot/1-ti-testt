const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    e.preventDefault();
    link.style.transform = 'scale(1.3)';
    link.style.transition = 'transform 0.2s ease, background-color 0.2s ease';
    link.style.backgroundColor = '#fefdfdff'; // Flash color

    setTimeout(() => {
      link.style.transform = 'scale(1)';
      link.style.backgroundColor = ''; // Reset color
    }, 200);
  });
});

// Create bottom border
const bottomBorder = document.createElement("div");
bottomBorder.style.position = "fixed";
bottomBorder.style.bottom = "0";
bottomBorder.style.left = "0";
bottomBorder.style.width = "100%";
bottomBorder.style.height = "4px";
bottomBorder.style.backgroundColor = "#333";
bottomBorder.style.zIndex = "9999";
document.body.appendChild(bottomBorder);

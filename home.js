let links = document.querySelectorAll(".nav-link");

for (let i = 0; i < links.length; i++) {
  let link = links[i];

  link.addEventListener("mouseenter", () => {
    link.style.transform = "scale(1.1)";
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "scale(1)";
  });
}
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    link.style.transform = 'scale(1.2)';
    link.style.transition = 'transform 0.2s ease';
    setTimeout(() => {
      link.style.transform = 'scale(1)';
    }, 200);
  });

  link.addEventListener('mouseenter', () => {
    link.style.transform = 'scale(1.1)';
    link.style.transition = 'transform 0.2s ease';
  });

  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1)';
  });
});

  // Create a new div element
  const bottomBorder = document.createElement("div");

  // Style it directly with JavaScript
  bottomBorder.style.position = "fixed";
  bottomBorder.style.bottom = "0";
  bottomBorder.style.left = "0";
  bottomBorder.style.width = "100%";
  bottomBorder.style.height = "4px"; // Thickness of the border
  bottomBorder.style.backgroundColor = "#bb3a0cff"; // Border color
  bottomBorder.style.zIndex = "9999"; // Make sure it's on top

  // Add it to the body
  document.body.appendChild(bottomBorder);
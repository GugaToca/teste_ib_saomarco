// Menu Hamburger
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Fechar o menu automaticamente ao clicar em qualquer link
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('active');
  });
});
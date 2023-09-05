const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.getElementById('navbar-links');
const closeButton = document.getElementById('close-button');

navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
  navbarLinks.classList.remove('active');
});
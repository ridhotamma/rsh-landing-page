document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuContainer = document.querySelector('.menu-container');
  
    hamburgerMenu.addEventListener('click', function () {
      hamburgerMenu.classList.toggle('hamburger-menu--active');
      menuContainer.classList.toggle('menu-container--show');
    });
  });
  
const hamburgerMenu = document.querySelector('.hamburger-menu');
const searchMenu = document.querySelector('.search-menu');

 hamburgerMenu.addEventListener('click', () => {
        searchMenu.classList.toggle('active');
    });

   

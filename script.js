const hamburgerMenu = document.querySelector('.hamburger-menu');
const searchMenu = document.querySelector('.search-menu');

 hamburgerMenu.addEventListener('click', () => {
        searchMenu.classList.toggle('active');
    });

   
    document.addEventListener("DOMContentLoaded", () => {
        const loadingSpinner = document.getElementById('loading-spinner');
        if (loadingSpinner) {
            loadingSpinner.style.display = 'none'; // Hide the spinner once the page is fully loaded
        }
    });
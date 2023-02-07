let menuActive = document.querySelector('.dropdown_menu');
let headerMenu = document.querySelector('.user-menu');

function toggleMenu(){
    menuActive.classList.toggle('hidden');
}

headerMenu.addEventListener('click', toggleMenu);



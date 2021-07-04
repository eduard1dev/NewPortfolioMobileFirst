
let isMenuOpen = false;

const menu = document.querySelector('.menu');
const menuContainer = document.querySelector('.menu-container')

menu.addEventListener('click', () => {
    if (isMenuOpen) {
        menuContainer.classList.remove('open')
        isMenuOpen = false
    } else {
        menuContainer.classList.add('open')
        isMenuOpen = true
    }
})
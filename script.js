let isMenuOpen = false;

const menu = document.querySelector('.menu'),
      menuContainer = document.querySelector('.menu-container'),
      menu_buttons = document.querySelectorAll('.menu-button'),
      home_button = document.querySelector('#home_button'),
      about_button = document.querySelector('#about_button'),
      contact_button = document.querySelector('#contact_button'),
      section_hero = document.querySelector("#sec-hero"),
      section_about = document.querySelector("#sec-about")
      

menu.addEventListener('click', () => {
    if (isMenuOpen) {
        menuContainer.classList.toggle('open')
        menu.classList.remove('rotate')
        isMenuOpen = false
    } else {
        menuContainer.classList.toggle('open')
        menu.classList.add('rotate')
        isMenuOpen = true
    }
})

menu_buttons.forEach(element => {
    element.addEventListener('click', () => {
        menuContainer.classList.toggle('open')
        isMenuOpen = false
    })
});









// Smooth scroll to sections
/* home_button.addEventListener('click', () => {
    section_hero.scrollIntoView({
        behavior: "smooth"
    })
});

about_button.addEventListener('click', () => {
    section_about.scrollIntoView({
        behavior: "smooth"
    })
    console.log(section_about.innerHTML)
});

contact_button.addEventListener('click', () => {
    home_button.scrollIntoView({
        behavior: "smooth"
    })
}); */
//end Smooth scroll to sections 
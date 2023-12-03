const menu = document.querySelector('#menu')
const navToggleMenu = document.querySelector('.nav__toggle-menu')
const links = document.querySelectorAll('.links')


navToggleMenu.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open') 
        navToggleMenu.classList.remove('active')
    }
    else {
        menu.classList.add('open')
        navToggleMenu.classList.add('active')
    }
})

Array.from(links).forEach(e => {
    e.addEventListener('click', () => {
        if (menu.classList.contains('open')) {
            menu.classList.remove('open') 
            navToggleMenu.classList.remove('active')
        }
        else {
            menu.classList.add('open')
            navToggleMenu.classList.add('active')
        }      
    })
})
// menu-contact 
menuContact = document.querySelector('.menu-contact')
closeMenuContact = menuContact.querySelector('#close_menu-contact')
openMenuContact = document.querySelector('#open_menu-contact')
closeMenuContact.addEventListener('click', () => {
    menuContact.classList.remove('active')
    openMenuContact.classList.add('active')
})
openMenuContact.addEventListener('click', () => {
    menuContact.classList.add('active')
    openMenuContact.classList.remove('active')
})

// header-menu 
headerMenu = document.querySelector('.header-menu')
burger = document.querySelector('.burger')
console.log(burger)
closeHeaderMenu = headerMenu.querySelector('#close_header-menu')
burger.addEventListener('click', () => {
    headerMenu.classList.add('active')
})

closeHeaderMenu.addEventListener('click', () => {
    headerMenu.classList.remove('active')
})

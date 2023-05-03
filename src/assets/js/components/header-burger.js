const burgerOpen = document.getElementById("burger-open")
const burgerClose = document.getElementById('burger-close')
const burgerMenuParent = document.querySelector('.header')

burgerOpen.addEventListener('click', () => {
    burgerMenuParent.classList.add('menu--open')
})

burgerClose.addEventListener('click', () => {
    burgerMenuParent.classList.remove('menu--open')
})


const burgerOpen = document.getElementById("burger-open")
const burgerClose = document.getElementById('burger-close')
const burgerMenuParent = document.querySelector('.header')
const burgerBody = document.querySelector('.body')

burgerOpen.addEventListener('click', () => {
    burgerMenuParent.classList.add('menu--open')
    burgerBody.classList.add('menu--open')
})

burgerClose.addEventListener('click', () => {
    burgerMenuParent.classList.remove('menu--open')
    burgerBody.classList.remove('menu--open')
})


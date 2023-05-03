const searchOpen = document.querySelector('.header__search-open')
const searchClose = document.querySelector('.header__search-close')
const searchParent = document.querySelector('.header__top-box')
const searchForm = document.getElementById('header-search')
const searchActive = document.querySelector('.header__top-box.search--open')

searchOpen.addEventListener('click', () => {
    searchParent.classList.add('search--open')
    
})

searchClose.addEventListener('click', (e) => {
    e.preventDefault()
    searchParent.classList.remove('search--open')
    
})





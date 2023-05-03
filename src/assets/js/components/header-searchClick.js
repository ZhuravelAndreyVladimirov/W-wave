const searchOpen = document.querySelector('.header__search-open')
const searchClose = document.querySelector('.header__search-close')
const searchParent = document.querySelector('.header__top-box')
const searchForm = document.getElementById('header-search')

searchOpen.addEventListener('click', () => {
    searchParent.classList.add('search--open')

})

searchClose.addEventListener('click', (e) => {
    e.preventDefault()
    searchParent.classList.remove('search--open')

})

window.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        let searchActive = document.querySelector('.header__top-box.search--open')
        if (searchActive) {
            searchActive.classList.remove('search--open')
        }
    }
})



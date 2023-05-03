const openBtns = document.querySelectorAll('.header-entryClick')
const headerModalParent = document.getElementById('modal')
const closeBtn = document.querySelector('.modal__close')
const modalBox = document.getElementById('modal__box')
const modalBody = document.querySelector('.body')



for (const openBtn of openBtns) {
    openBtn.addEventListener('click', () => {
        headerModalParent.classList.add('modal--open')
        modalBody.classList.add('modal--open')
        let searchOpen = document.querySelector('.header__top-box.search--open')
        if (searchOpen) {
            searchOpen.classList.remove('search--open')
        }
    })
}
closeBtn.addEventListener('click', () => {
    headerModalParent.classList.remove('modal--open')
    modalBody.classList.remove('modal--open')
})

modalBox.addEventListener('click', function (event) {
    event._isClick = true;
})

headerModalParent.addEventListener('click', function (event) {
    if (event._isClick == true) return
    headerModalParent.classList.remove('modal--open')
    modalBody.classList.remove('modal--open')

})
window.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        let modalIsOpen = document.querySelector('.modal.modal--open')

        if (modalIsOpen) {
            modalIsOpen.classList.remove('modal--open')
            modalBody.classList.remove('modal--open')
        }
    }
})
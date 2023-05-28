const headerLinkArr = document.querySelectorAll('.header__nav-link')
const header = document.getElementById('header')
const footerLinkArr = document.querySelectorAll('.footer__nav-link')


headerLinkArr.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()
        const menuOpen = document.querySelector('.header.menu--open')
        const bodyMenu = document.querySelector('.body.menu--open')
        const anchorId = this.getAttribute('href')
        document.querySelector(anchorId).scrollIntoView({ block: "start", behavior: "smooth" })
        if (menuOpen) {
            header.classList.remove('menu--open')
        }
        if (bodyMenu) {
            bodyMenu.classList.remove('menu--open')
        }
    })
});


footerLinkArr.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()
        const anchorId = this.getAttribute('href')
        document.querySelector(anchorId).scrollIntoView({ block: "start", behavior: "smooth" })
    })
});





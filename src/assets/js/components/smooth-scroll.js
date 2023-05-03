let headerLinkArr = document.querySelectorAll('.header__nav-link')
let header = document.getElementById('header')

headerLinkArr.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault()
        let menuOpen = document.querySelector('.header.menu--open')
        let bodyMenu = document.querySelector('.body.menu--open')
        let anchorId = this.getAttribute('href')
        document.querySelector(anchorId).scrollIntoView({block: "start", behavior: "smooth"})
        if (menuOpen) {
            header.classList.remove('menu--open')
        }
        if (bodyMenu) {
            bodyMenu.classList.remove('menu--open')
        }
    })
});

let footerLinkArr = document.querySelectorAll('.footer__nav-link')

footerLinkArr.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault()
        let anchorId = this.getAttribute('href')
        document.querySelector(anchorId).scrollIntoView({block: "start", behavior: "smooth"})
    })
});


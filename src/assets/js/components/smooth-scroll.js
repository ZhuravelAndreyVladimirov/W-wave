let headerLinkArr = document.querySelectorAll('.header__nav-link')

headerLinkArr.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
    })
});
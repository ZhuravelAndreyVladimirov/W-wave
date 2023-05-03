


//play-click
const buttons = document.querySelectorAll('.play-btn')

for (let btn of buttons) {
    btn.addEventListener('click', e => {
        const activeBtn = document.querySelector('.play-btn.btn--play')
        btn.classList.toggle('btn--play')        
        if (activeBtn !== e.target) {
            activeBtn.classList.remove('btn--play')
        }
    })
}

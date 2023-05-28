//accordion

new Accordion('.accordion-container');


// tabs

const tabsBtn = document.querySelectorAll(".guests__name-btn")
const tabsCard = document.querySelectorAll('.guests__card')

tabsBtn.forEach((item) => {
    item.addEventListener('click', () => {
        const curentBtn = item
        const tabID = curentBtn.getAttribute('data-tab')
        const curentTab = document.querySelector(tabID)

        tabsBtn.forEach((item) => {
            item.classList.remove("active-tab")
        })

        tabsCard.forEach((item) => {
            item.classList.remove("active-tab")
        })
        curentBtn.classList.add('active-tab')
        curentTab.classList.add('active-tab')

        if (window.innerWidth <= 992) {

            const tabBox = document.getElementById('tab-box')
            if (tabBox) {
                tabBox.scrollIntoView({ block: "start", behavior: "smooth" })
            }

        }
    })
})

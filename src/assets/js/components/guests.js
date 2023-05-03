//accordion

new Accordion('.accordion-container');


// tabs

const tabsBtn = document.querySelectorAll(".guests__name-btn")
const tabsCard = document.querySelectorAll('.guests__card')

tabsBtn.forEach((item) => {
    item.addEventListener('click', () => {
        let curentBtn = item
        let tabID = curentBtn.getAttribute('data-tab')
        let curentTab = document.querySelector(tabID)

        tabsBtn.forEach((item) => {
            item.classList.remove("active-tab")
        })

        tabsCard.forEach((item) => {
            item.classList.remove("active-tab")
        })


        curentBtn.classList.add('active-tab')
        curentTab.classList.add('active-tab')
    })
})

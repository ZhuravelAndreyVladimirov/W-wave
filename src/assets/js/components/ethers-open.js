//ethers-open
const ethersOpen = document.getElementById('ethers-btns-open')
const ethersParent = document.getElementById('header')

ethersOpen.addEventListener('click', () => {
    ethersParent.classList.toggle('ethers--open')
})

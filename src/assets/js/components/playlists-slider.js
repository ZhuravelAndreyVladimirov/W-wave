
// import Swiper, { Navigation, Pagination } from '../node_modules/swiper';



const cliderPlayLists = new Swiper('.playlists__swiper', {
    direction: 'horizontal',
    autoHeight: true,
    slidesPerView: 2,
    spaceBetween: 20,
    centerInsufficientSlides: true,
    loop: true,
    enabled: true,

    breakpoints: {
        599: {
            enabled: false,
        }
    },
})
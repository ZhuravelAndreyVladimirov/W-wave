// import Swiper, { Navigation, Pagination } from '../node_modules/swiper';

const swiper = new Swiper('.about__swiper', {

 
  // Optional parameters
  direction: 'horizontal',
  autoHeight: true,
  slidesPerView: 2,
  spaceBetween: 25,
  centerInsufficientSlides: true,
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    599: {
      slidesPerView: 2,
      paceBetween: 30,
    },

    1200: {
      slidesPerView: 4,
      paceBetween: 30,
      loop: false,
    }
    
  },
 
});
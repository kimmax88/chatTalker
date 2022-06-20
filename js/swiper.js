//  // core version + navigation, pagination modules:
//  import Swiper, { Navigation, Pagination } from 'swiper';
//  // import Swiper and modules styles
//  import 'swiper/css';
//  import 'swiper/css/navigation';
//  import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween:16 ,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
    900: {
      slidesPerView: 3
    },
    /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
    700: {
      slidesPerView: 2
    },
    /* 更小時都顯示 1 欄 */
    0: {
      slidesPerView: 1
    }
  },

  autoplay: {
    delay:3000,
  }

 
});
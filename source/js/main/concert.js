"use strict";
(function () {
   const swiper = new Swiper(".js-concert-swiper-container", {
      slidesPerView: 4,
      spaceBetween: 40,
      navigation: {
        nextEl: ".concert-button-next",
        prevEl: ".concert-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
 
})();

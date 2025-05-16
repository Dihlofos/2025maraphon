"use strict";
(function () {
   const concertSwiper = new Swiper(".js-concert-swiper-container", {
      slidesPerView: 4,
      spaceBetween: 40,
      navigation: {
        nextEl: ".concert-button-next",
        prevEl: ".concert-button-prev",
      },
      breakpoints: {
         1024: {
            slidesPerView: 4,
            spaceBetween: 40,
         },
        768: {
         slidesPerView: 2,
         spaceBetween: 40,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
 
})();

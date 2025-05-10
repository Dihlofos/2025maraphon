"use strict";
(function () {
   const swiper = new Swiper(".js-fitness-swiper-container", {
      slidesPerView: 3,
      spaceBetween: 40,
      navigation: {
        nextEl: ".fitness-button-next",
        prevEl: ".fitness-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
 
})();

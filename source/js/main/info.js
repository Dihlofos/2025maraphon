"use strict";
(function () {
  const zonesSwiper = new Swiper(".js-zones-swiper-container", {
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
      nextEl: ".zone-button-next",
      prevEl: ".zone-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });

  // Infoswiper

  let infoSwiper;

  function initInfoSwiper() {
    new Swiper(".js-info-swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 40,
      navigation: {
        nextEl: ".info-button-next",
        prevEl: ".info-button-prev",
      },
      breakpoints: {
        768: { spaceBetween: 40 },
        480: { spaceBetween: 20 },
      },
    });
  }

  window.addEventListener("load", initInfoSwiper);
  window.addEventListener("resize", initInfoSwiper);
})();


 
"use strict";
(function () {
   const swiper = new Swiper(".js-info-swiper-container", {
      slidesPerView: 3,
      spaceBetween: 40,
      navigation: {
        nextEl: ".info-button-next",
        prevEl: ".info-button-prev",
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
   
   
   function equalizeSlideHeights() {
      const slides = document.querySelectorAll('.slider__item');
      let maxHeight = 0;
   
      slides.forEach(slide => {
      slide.style.height = 'auto'; 
      maxHeight = Math.max(maxHeight, slide.offsetHeight);
      });
   
      slides.forEach(slide => {
      slide.style.height = maxHeight + 'px';
      });
   }
   
   window.addEventListener('load', equalizeSlideHeights);
   window.addEventListener('resize', equalizeSlideHeights);
})();

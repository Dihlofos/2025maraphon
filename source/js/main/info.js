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
      if (window.innerWidth <= 1024 && !infoSwiper) {
         const infoSwiper = new Swiper(".js-info-swiper-container", {
            slidesPerView: 'auto',
            spaceBetween: 40,
            slidesPerGroup: 1,
            navigation: {
              nextEl: ".info-button-next",
              prevEl: ".info-button-prev",
            },
            breakpoints: {
              768: { spaceBetween: 30 },
              480: { spaceBetween: 20 },
            },
          });
      } else if (window.innerWidth > 1024 && infoSwiper) {
         infoSwiper.destroy(true, true);
         infoSwiper = null;
      }
   }
   
   window.addEventListener('load', initInfoSwiper);
   window.addEventListener('resize', initInfoSwiper);
    
   
   
   function equalizeSlideHeights() {
      const slides = document.querySelectorAll('.zone-slider-item');
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

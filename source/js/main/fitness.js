"use strict";
(function () {
   const swiper = new Swiper(".js-fitness-swiper-container", {
      slidesPerView: 3,
      spaceBetween: 40,
      allowTouchMove: false, 
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

   const sliderItems = document.querySelectorAll(".fitness__slider-item");
   const scheduleWrappers = document.querySelectorAll(".schedule-fitness-wrapper");
   
   sliderItems.forEach((item) => {
      item.addEventListener("click", () => {
      const id = item.getAttribute("data-id");
   
      scheduleWrappers.forEach((el) => {
         if (el.getAttribute("data-id") === id) {
            el.style.display = "flex";
         } else {
            el.style.display = "none";
         }
      });
   
      sliderItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      });
   });
   
   if (sliderItems[0]) {
      sliderItems[0].click();
   }

})();

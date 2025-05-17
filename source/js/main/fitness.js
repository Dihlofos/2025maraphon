"use strict";
(function () {
   const fitnessSwiper = new Swiper(".js-fitness-swiper-container", {
      slidesPerView: 3,
      spaceBetween: 20,
      allowTouchMove: false, 
      centeredSlides: false,
      navigation: {
        nextEl: ".fitness-button-next",
        prevEl: ".fitness-button-prev",
      },
      breakpoints: {
         
         
         1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
          },
        
        
      },
    });

   // const fitnessSwiper = new Swiper(".js-fitness-swiper-container", {
   //    // Базово — 1 слайд
   //    slidesPerView: 1,
   //    spaceBetween: 20,          // отступ между слайдами и от кнопок ≤ 20px
   //    allowTouchMove: false,     // свайп отключён
   //    centeredSlides: true,     // без центрирования
   //    navigation: {
   //      nextEl: ".fitness-button-next",
   //      prevEl: ".fitness-button-prev",
   //    },
   //    breakpoints: {
   //      // от 1024 до 1279px — 2 слайда
   //      1024: {
   //        slidesPerView: 2,
   //        spaceBetween: 20
   //      },
   //      // от 1280px и выше — 3 слайда
   //      1280: {
   //        slidesPerView: 3,
   //        spaceBetween: 20
   //      }
   //    }
   //  });
    

   const sliderItems = document.querySelectorAll(".fitness__slider-item-image-wrapper");
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

   document.addEventListener("DOMContentLoaded", () => {
      const slides = document.querySelectorAll(".fitness__slider-item");
      const prevButton = document.querySelector(".fitness-button-prev");
      const nextButton = document.querySelector(".fitness-button-next");
    
      const isDesktop = window.innerWidth >= 1024;
    
      if (isDesktop && slides.length < 4) {
         prevButton.style.display = "none";
         nextButton.style.display = "none";
      } 
    });
    

})();

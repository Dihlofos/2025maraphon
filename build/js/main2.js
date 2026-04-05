// "use strict";
// (function () {
//   let upButton = document.querySelector(".up");

//   if (upButton) {
//     window.onscroll = function () {
//       if (window.pageYOffset > 260) {
//         upButton.classList.add("up--shown");
//       } else {
//         upButton.classList.remove("up--shown");
//       }
//     };
//   }
// })();

"use strict";
(function () {
  const vw = window.innerWidth;
  if (vw >= 768) {
    return;
  }
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

"use strict";
(function () {
  const key = "maraphon-cookie-modal-shown";
  let modal = document.querySelector(".js-cookie");
  if (!modal) {
    return;
  }

  let closeButton = modal.querySelector(".js-cookie-close");

  if (!window.localStorage.getItem(key)) {
    modal.classList.remove("hidden");
  }

  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
    window.localStorage.setItem(key, true);
  });
})();

// "use strict";
// (function () {
//   const dropdowns = document.querySelectorAll(".js-dropdown");

//   if (!dropdowns.length) {
//     return;
//   }

//   dropdowns.forEach((dropdown) => {
//     const trigger = dropdown.querySelector(".js-dropdown-trigger");

//     trigger.addEventListener("click", () => {
//       dropdown.classList.toggle("open");
//     });
//   });
// })();

"use strict";
(function () {
  const togglers = document.querySelectorAll(".js-faq-toggler");
  if (!togglers.length) return;

  togglers.forEach((toggler) => {
    toggler.addEventListener("click", (event) => {
      const target = event.currentTarget;
      if (!target) return;
      const content = target.nextElementSibling;
      if (!content) return;
      target.classList.toggle("active");
      content.classList.toggle("active");
    });
  });
})();

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

  const sliderItems = document.querySelectorAll(
    ".fitness__slider-item-image-wrapper"
  );
  if (!sliderItems.length) return;
  const scheduleWrappers = document.querySelectorAll(
    ".schedule-fitness-wrapper"
  );

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

      sliderItems.forEach((i) => i.classList.remove("active"));
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

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.style.top = "0";
  } else {
    header.style.top = "7.5rem";
  }
});

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

"use strict";
(async function () {
  const locations = [
    {
      name: "Основная сцена",
      index: 1,
      coords: [[55.714125, 37.561102].reverse()],
    },
  ];

  // Пока решили без карты, просто картинкой сделаем
  // initMap();

  async function initMap() {
    const vw = window.innerWidth;
    await ymaps3.ready;

    const {
      YMap,
      YMapDefaultSchemeLayer,
      YMapMarker,
      YMapDefaultFeaturesLayer,
    } = ymaps3;

    const map = new YMap(
      document.querySelector(".js-map"),
      {
        location: {
          center: [37.56045, 55.714471],
          zoom: vw > 767 ? 18 : 18,
        },
      },
      [
        // Add a map scheme layer
        new YMapDefaultSchemeLayer({}),
        // Add a layer of geo objects to display the markers
        new YMapDefaultFeaturesLayer({}),
      ],
    );

    locations.forEach((location) => {
      location.coords.forEach((coord) => {
        const markerElement = document.createElement("div");
        markerElement.className = "map__marker js-marker";
        markerElement.innerText = location.index;
        markerElement.dataset.thumbIndex = location.index;
        console.log("coord", coord);
        const marker = new YMapMarker(
          {
            coordinates: coord,
            draggable: false,
            mapFollowsOnDrag: false,
          },
          markerElement,
        );

        map.addChild(marker);

        markerElement.addEventListener("click", () => {
          // const legendItem = Array.from(legendItems).find(
          //   (item) => Number(item.dataset.thumbIndex) === Number(location.index),
          // );
          // setActiveLegend(Number(location.index));
          // legend.scrollTop = findPosition(legendItem) - findPosition(legend);
          // clearMarkers();
          // markerElement.classList.add("is-active");
          // map.setLocation({
          //   center: coord,
          //   zoom: 17,
          //   duration: 200, // Animation of moving map will take 200 milliseconds
          //   easing: "ease-in-out", // Animation easing function
          // });
        });
      });
    });

    return map;
  }

  function findPosition(obj) {
    let currenttop = 0;
    if (obj.offsetParent) {
      do {
        currenttop += obj.offsetTop;
      } while ((obj = obj.offsetParent));
      return currenttop;
    }
  }

  function clearMarkers() {
    const markers = document.querySelectorAll(".js-marker");
    Array.from(markers).forEach((marker) => {
      marker.classList.remove("is-active");
    });
  }
})();

// "use strict";
// (function () {
//    const paths = document.querySelectorAll("#locations path[data-index]");

//    paths.forEach((path) => {
//      const index = path.getAttribute("data-index");
 
//      path.addEventListener("mouseenter", () => {
//        const info = document.querySelector(`.locations-info[data-index="${index}"]`);
//        path.classList.add("hovered");
//        info?.classList.add("hovered");
//      });
 
//      path.addEventListener("mouseleave", () => {
//        const info = document.querySelector(`.locations-info[data-index="${index}"]`);
//        path.classList.remove("hovered");
//        info?.classList.remove("hovered");
//      });
//    });

// })();



"use strict";
(function () {
   const paths = document.querySelectorAll("#locations path[data-index]");

   paths.forEach((path) => {
     const index = path.getAttribute("data-index");

     path.addEventListener("mouseenter", () => {
       const info = document.querySelector(`.locations-info[data-index="${index}"]`);
       const locItem = document.querySelector(`.loc-item[data-index="${index}"]`);
       const locNumber = locItem?.querySelector(".loc-number");
       const locDesc = locItem?.querySelector(".loc-desc");

       path.classList.add("hovered");
       info?.classList.add("hovered");
       locNumber?.classList.add("hovered");
       locDesc?.classList.add("show");
     });

     path.addEventListener("mouseleave", () => {
       const info = document.querySelector(`.locations-info[data-index="${index}"]`);
       const locItem = document.querySelector(`.loc-item[data-index="${index}"]`);
       const locNumber = locItem?.querySelector(".loc-number");
       const locDesc = locItem?.querySelector(".loc-desc");

       path.classList.remove("hovered");
       info?.classList.remove("hovered");
       locNumber?.classList.remove("hovered");
       locDesc?.classList.remove("show");
     });
   });
})();



"use strict";
(function () {
  const nav = document.querySelector('.js-nav');
  const toggler = nav.querySelector('.js-nav-toggler');
  const closeButton = nav.querySelector('.js-nav-close');
  const links = nav.querySelectorAll('.js-scroll');

  toggler.addEventListener('click', () => {
    nav.classList.toggle('is-active');
  })

  closeButton.addEventListener('click', () => {
    closeNav();
  })

  links.forEach((link) => {
    link.addEventListener('click', () => {
      closeNav();
    })
  })


  function closeNav() {
    nav.classList.remove('is-active');
  }


})();

// "use strict";
// (function () {
//   const slider = document.querySelector(".js-people-slider-concert-container");
//   const vw = window.innerWidth;
//   const wrapper = slider.querySelector(".swiper-wrapper");

//   if (wrapper.childNodes.length > 3 && vw >= 744) {
//     new Swiper(`.js-people-slider-concert`, {
//       // Optional parameters
//       slidesPerView: 3,
//       spaceBetween: 30,
//       initialSlide: 0,
//       draggable: false,
//       pagination: false,
//       loop: false,
//       navigation: {
//         nextEl: ".js-people-next-concert",
//         prevEl: ".js-people-prev-concert",
//       },
//     });
//   } else {
//     slider.classList.add("disabled");
//   }
// })();

"use strict";
(function () {
  window.scroll = new SmoothScroll(".js-scroll", {
    speed: 800,
    speedAsDuration: true,
    easing: "easeOutQuad",
  });
})();

"use strict";
(function () {
  const stagebuttons = document.querySelectorAll(".stage-btn");
  if (!stagebuttons.length) return;
  const stageContents = document.querySelectorAll(".stage-content");

  if (!stagebuttons.length || !stageContents.length) return;

  stagebuttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-stage");

      stagebuttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      stageContents.forEach((content) => content.classList.remove("active"));

      const targetContent = document.querySelector(`.stage-content--${target}`);
      if (targetContent) targetContent.classList.add("active");
    });
  });
})();

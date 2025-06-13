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



"use strict";
(function () {
   const paths = document.querySelectorAll("#locations path[data-index]");

   paths.forEach((path) => {
     const index = path.getAttribute("data-index");
 
     path.addEventListener("mouseenter", () => {
       const info = document.querySelector(`.locations-info[data-index="${index}"]`);
       path.classList.add("hovered");
       info?.classList.add("hovered");
     });
 
     path.addEventListener("mouseleave", () => {
       const info = document.querySelector(`.locations-info[data-index="${index}"]`);
       path.classList.remove("hovered");
       info?.classList.remove("hovered");
     });
   });

})();

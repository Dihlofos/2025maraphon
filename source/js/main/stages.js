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

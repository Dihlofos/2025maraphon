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

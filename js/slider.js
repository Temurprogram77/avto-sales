document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 5,
    perMove: 1,
    breakpoints: {
      1200: { perPage: 5 }, // Tablets
      1024: { perPage: 4 }, // Mobile devices
      768: { perPage: 3 }, // Small screens
      600: { perPage: 3 }, // Extra small screens
      400: { perPage: 2 }, // Extra extra small screens
    },
    arrows: true,
    autoplay: true,
    snap: true,
    pagination: false,
    type: "loop",
    focus: "start",
  }).mount();
});

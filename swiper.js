const prev = document.querySelector(".prev_slide");
const next = document.querySelector(".next_slide");
let swiper = new Swiper(".swiper-top", {
  loop: true,
  spaceBetween: 32,
  speed: 500,
  grabCursor: true,
  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let swiper_bottom = new Swiper(".swiper-bottom", {
  loop: true,
  spaceBetween: 32,
  speed: 500,
  grabCursor: true,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 5,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

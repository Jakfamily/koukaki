console.log("animationCarrousel.js en direct de la lune !");

const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabcursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  direction: "horizontal",

  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },

  loop: "true",
  loopedSlides: 3,
  loopAdditionalSlides: 0,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

  speed: 800,
});

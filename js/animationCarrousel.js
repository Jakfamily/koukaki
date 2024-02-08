/*
-Le script commence par afficher un message dans la console pour indiquer qu'il est en cours d'exécution.
-Il utilise la bibliothèque Swiper pour créer un carrousel interactif avec diverses configurations.
-Les options Swiper définissent le type d'effet de transition, la présence d'un curseur, la centralisation des diapositives, le nombre de diapositives visibles, la direction du carrousel, l'espacement entre les diapositives, l'effet de coverflow spécifique, la boucle infinie, la configuration de l'autoplay, et la vitesse de transition.
-L'objet Swiper est initialisé avec la classe CSS .swiper pour sélectionner le conteneur du carrousel.
*/

console.log("allo la terre animationCarrousel.js en direct de la lune !");

const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabcursor: true,
  centeredSlides: true,
  slidesPerView: "3",
  direction: "horizontal",
  spaceBetween: 70,

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },

  loop: true,
  loopedSlides: 3,
  loopAdditionalSlides: 0,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

  speed: 800,
});

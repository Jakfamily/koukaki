/*
  Nom du fichier: animationMenu.js

  Description :
  Ce script JavaScript gère l'interaction d'un menu burger, permettant l'ouverture et la fermeture animée du menu. Il intègre une fonctionnalité pour empêcher le défilement du corps lorsque le menu est ouvert et rétablir le défilement lorsqu'un lien du menu ou un élément avec les classes "Animetitre" ou "animateTitle" est cliqué.

  Éléments du DOM :
  - boutonMenu : Sélectionne l'élément du DOM avec la classe ".boutonMenu".
  - burger : Sélectionne l'élément du DOM avec la classe ".MenuFull".
  - menuLinks : Sélectionne tous les liens <a> à l'intérieur des éléments <li> de la liste <ul> dans ".MenuFull".
  - animTitles : Sélectionne tous les éléments avec les classes ".Animetitre" et ".animateTitle".

  Fonction toggleMenu :
  - Description : Bascule l'état de la classe "nav_open" pour l'élément ".MenuFull" et de la classe "active" pour l'élément ".boutonMenu".
  - Effets : Modifie le style "overflow" du corps pour empêcher ou permettre le défilement en fonction de l'état du menu.

  Gestion de l'ouverture du menu :
  - Ajoute un écouteur d'événements sur le clic du bouton ".boutonMenu" pour appeler la fonction toggleMenu.

  Gestion de la fermeture du menu au clic sur un lien :
  - Ajoute des écouteurs d'événements sur chaque lien dans ".MenuFull" pour retirer les classes "nav_open" et "active" et fermer le menu lorsqu'un lien est cliqué. Rétablit également le défilement du corps.

  Annulation du défilement :
  - Conditions : Si un élément avec les classes "Animetitre" ou "animateTitle" est cliqué.
  - Effet : Annule le style "overflow: hidden;" pour rétablir le défilement du corps.
*/

console.log("allo la terre ici animationMenu.js en direct de la lune");

// Sélection des éléments du DOM
const boutonMenu = document.querySelector(".boutonMenu");
const burger = document.querySelector(".MenuFull");
const menuLinks = document.querySelectorAll(".MenuFull ul li a");
const animTitles = document.querySelectorAll(".Animetitre, .animateTitle");

// Fonction pour basculer l'état du menu et du bouton
const toggleMenu = () => {
  burger.classList.toggle("nav_open");
  boutonMenu.classList.toggle("active");

  // Empêche le défilement du corps lorsque le menu est ouvert
  document.body.style.overflow = burger.classList.contains("nav_open")
    ? "hidden"
    : "auto";
};

// Gestion de l'ouverture du menu au clic sur le bouton
boutonMenu.addEventListener("click", toggleMenu);

// Gestion de la fermeture du menu au clic sur un lien
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("nav_open");
    boutonMenu.classList.remove("active");
    document.body.style.overflow = "auto"; // Rétablit le défilement du corps
  });
});

// Annule le style "overflow: hidden;" lorsque "Animetitre" ou "animateTitle" est cliqué
animTitles.forEach((title) => {
  title.addEventListener("click", () => {
    document.body.style.overflow = "auto";
  });
});

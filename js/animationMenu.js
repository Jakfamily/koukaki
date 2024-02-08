/*
Sélection des éléments du DOM :
boutonMenu: Sélectionne l'élément du DOM avec la classe ".boutonMenu".
burger: Sélectionne l'élément du DOM avec la classe ".MenuFull".
menuLinks: Sélectionne tous les liens <a> à l'intérieur des éléments <li> de la liste <ul> dans ".MenuFull".

Fonction toggleMenu :
Cette fonction bascule l'état de la classe "nav_open" pour l'élément ".MenuFull" et de la classe "active" pour l'élément ".boutonMenu".

Gestion de l'ouverture du menu :
Ajoute un écouteur d'événements sur le clic du bouton ".boutonMenu" pour appeler la fonction toggleMenu.

Gestion de la fermeture du menu au clic sur un lien :
Ajoute des écouteurs d'événements sur chaque lien dans ".MenuFull" pour retirer les classes "nav_open" et "active" et fermer le menu lorsqu'un lien est cliqué.
*/

console.log("allo la terre ici animationMenu.js en dirrect de la lune");

// Sélection des éléments du DOM
const boutonMenu = document.querySelector(".boutonMenu");
const burger = document.querySelector(".MenuFull");
const menuLinks = document.querySelectorAll(".MenuFull ul li a");

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
  });
});

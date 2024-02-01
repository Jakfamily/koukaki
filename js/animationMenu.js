//console.log(" Message dans la console, pour vérifier que le JavaScript est fonctionnel ")
console.log(
  " le script javascript lancé se nomme menu_burger.js et il est fonctionnel "
);

// Sélection des éléments du DOM
const boutonMenu = document.querySelector(".boutonMenu");
const burger = document.querySelector(".MenuFull");
const menuLinks = document.querySelectorAll(".MenuFull ul li a");

// Fonction pour basculer l'état du menu et du bouton
const toggleMenu = () => {
  burger.classList.toggle("nav_open");
  boutonMenu.classList.toggle("active");
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

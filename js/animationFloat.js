/*
-Le script commence par afficher un message dans la console pour indiquer qu'il est en cours d'exécution.
-Il utilise l'événement DOMContentLoaded pour s'assurer que le DOM (Document Object Model) est entièrement chargé avant d'exécuter le script. Cela garantit que le script s'exécute après le chargement initial de la page.
-Il sélectionne un élément du DOM avec la classe CSS .banner__parallaxe-logo à l'aide de document.querySelector().
-Il utilise setTimeout pour ajouter la classe CSS .float à l'élément après un délai de 4000 millisecondes (4 secondes). Cela pourrait être utilisé pour déclencher une animation de flottement (ou autre effet) sur l'élément après un certain temps.
*/

console.log("allo la terre animationFloat.js est en direct de la lune !");

document.addEventListener("DOMContentLoaded", function () {
  let element = document.querySelector(".banner__parallaxe-logo");

  setTimeout(function () {
    element.classList.add("float");
  }, 4000);
});

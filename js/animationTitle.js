/*
https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API
-Le script commence par afficher un message dans la console pour indiquer qu'il est en cours d'exécution.
-Deux instances IntersectionObserver (observateur et observateur2) sont créées pour gérer les animations en fonction de la visibilité des éléments.
-Le premier observateur (observateur) est configuré pour ajouter/supprimer la classe animateTitle en fonction du statut d'intersection des éléments avec la classe Animetitre.
-Le deuxième observateur (observateur2) est configuré de manière similaire pour les éléments avec la classe Animetitre2.
-Les boucles forEach sont utilisées pour appliquer les observateurs à tous les éléments pertinents de la page.
*/

console.log(
  "allo la terre le script animationTitle.js en dirrect de la lune !"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animateTitle");
    } else {
      entry.target.classList.remove("animateTitle");
    }
  });
});

const sections = document.querySelectorAll(".Animetitre");
sections.forEach((section) => {
  observer.observe(section);
});

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animateTitle2");
    } else {
      entry.target.classList.remove("animateTitle2");
    }
  });
});

const sections2 = document.querySelectorAll(".Animetitre2");
sections2.forEach((section) => {
  observer2.observe(section);
});

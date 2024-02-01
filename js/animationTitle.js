/*
https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API
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

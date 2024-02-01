/*
-Le script commence par afficher un message dans la console pour indiquer qu'il est en cours d'exécution.
-Il utilise document.getElementById pour sélectionner l'élément du DOM avec l'ID "NuagesBleu".
-Il définit la vitesse de déplacement des nuages bleus avec la variable NuagesBleuVitesse.
-La position initiale des nuages est définie par la variable NuagesBleuPosition en fonction de la moitié de la hauteur de la fenêtre.
-la fonction scrollNuage est appelée à chaque événement de défilement (scroll). Elle calcule la nouvelle position horizontale des nuages en fonction du défilement vertical de la page et applique la transformation nécessaire pour déplacer visuellement les nuages.
-Un écouteur d'événement est ajouté à la fenêtre pour détecter le défilement et déclencher la fonction scrollNuage en conséquence. Cela permet d'obtenir un effet de déplacement des nuages en fonction du défilement de la page.
*/

console.log("allo la terre animationCloud.js en direct de la lune !");

const NuagesBleu = document.getElementById("NuagesBleu");
const NuagesBleuVitesse = 0.3;
const NuagesBleuPosition = window.innerHeight / 2 - 40; //position du nuage

function scrollNuage() {
  const NuagesBleuX = -window.scrollY * NuagesBleuVitesse + NuagesBleuPosition; //déplacement du nuage
  NuagesBleu.style.transform = `translateX(${NuagesBleuX}px)`; //applique le déplacement
}

window.addEventListener("scroll", scrollNuage);

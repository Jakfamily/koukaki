console.log("allo la terre le script animationCloud.js en direct de la lune !");

const NuagesBleu = document.getElementById("NuagesBleu");
const NuagesBleuVitesse = 0.3;
const NuagesBleuPosition = window.innerHeight / 2 - 40; //position du nuage

function scrollNuage() {
  const NuagesBleuX = -window.scrollY * NuagesBleuVitesse + NuagesBleuPosition; //déplacement du nuage
  NuagesBleu.style.transform = `translateX(${NuagesBleuX}px)`; //applique le déplacement
}

window.addEventListener("scroll", scrollNuage); //écouteur d'événement pour défilement nuage

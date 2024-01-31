const NuagesBleu = document.getElementById("NuagesBleu"); //selectionne l'élément html avec l'id NuagesBleu
const NuagesBleuVitesse = 0.3; //vitesse de déplacement du nuage
const NuagesBleuPosition = window.innerHeight / 2 - 40; //position du nuage

function scrollNuage() {
  const NuagesBleuX = -window.scrollY * NuagesBleuVitesse + NuagesBleuPosition; //déplacement du nuage
  NuagesBleu.style.transform = `translateX(${NuagesBleuX}px)`; //applique le déplacement
}

window.addEventListener("scroll", scrollNuage); //écouteur d'événement pour défilement nuage

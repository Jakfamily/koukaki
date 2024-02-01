console.log("allo la terre animationFloat.js est en direct de la lune !");

document.addEventListener("DOMContentLoaded", function () {
  let element = document.querySelector(".banner__parallaxe-logo");

  setTimeout(function () {
    element.classList.add("float");
  }, 4000);
});

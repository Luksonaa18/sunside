const burgerMenu = document.querySelector(".fa-solid");
const hiddenMenu = document.querySelector(".cont-desk");

burgerMenu.addEventListener("click", function () {
  hiddenMenu.classList.toggle("shown");
});
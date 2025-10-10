const cardsPopUp = document.querySelectorAll(".overlay__cards");
const popupcards = document.querySelector(".popupcards");
const cardsPopUpClose = document.querySelector(".cardsPopUp__img ");

cardsPopUp.forEach((card) => {
  card.addEventListener("click", () => {
    popupcards.classList.add("open");
  });
});

cardsPopUpClose.addEventListener("click", () => {
  popupcards.classList.remove("open");
});

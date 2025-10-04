const btnOpen = document.querySelectorAll(".drafting__info-title, .drafting__info-img ");
const overlay = document.querySelector(".drafting__overlay");
const btnClose = document.querySelector(".draftion__overlay-title");
const header = document.querySelector(".header");
const side = document.querySelector(".side");
const slide = document.querySelector(".swiper-screen-5");
const form = document.querySelector(".form__visible");

btnOpen.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (window.innerWidth > 768) {
      overlay.classList.add("active");
      header.classList.add("none");
      side.classList.add("none");
      form.classList.add("none");
      slide.classList.add("swiper-no-swiping");
    }
  });
});
btnClose.addEventListener("click", () => {
  overlay.classList.remove("active");
  header.classList.remove("none");
  side.classList.remove("none");
  form.classList.remove("none");
  slide.classList.remove("swiper-no-swiping");
});

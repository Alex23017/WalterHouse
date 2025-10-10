document.addEventListener("DOMContentLoaded", () => {
  const moreBtn = document.querySelector(".more");
  const burger = document.querySelector(".burger__body");
  const aboutForm = document.querySelector(".form__about");
  const aboutPagination = document.querySelector(".pagination");
  const AboutScreen = document.querySelectorAll(".form__visible, .form");
  const sideLogoAbout = document.querySelector(".side__logo");
  const moreSelect = document.querySelector(".more--select");

  function openAboutForm() {
    aboutForm.classList.add("open");
    aboutPagination.classList.add("hidden");
    AboutScreen.forEach((btn) => {
      btn.classList.add("hidden");
    });
  }

  function closeAboutForm() {
    aboutForm.classList.remove("open");
    aboutPagination.classList.remove("hidden");
    AboutScreen.forEach((btn) => {
      btn.classList.add("hidden");
    });
  }

  moreBtn.addEventListener("click", openAboutForm);
  moreSelect.addEventListener("click", openAboutForm);

  burger.addEventListener("click", closeAboutForm);
  sideLogoAbout.addEventListener("click", closeAboutForm);
});

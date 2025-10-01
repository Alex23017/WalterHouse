import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const pgn = document.querySelectorAll(".pagination__figure");
  const side = document.querySelector(".side");
  const form = document.querySelector(".form__visible");

  function setPgn(index) {
    pgn.forEach((btn, i) => btn.classList.toggle("active", i === index));

    if (side) {
      side.classList.toggle("active", index >= 1);
    }
    if (form) {
      form.classList.toggle("active", index === 2);
    }
  }

  setPgn(swiper.activeIndex);

  swiper.on("slideChange", () => setPgn(swiper.activeIndex));
});

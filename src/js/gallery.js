import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

document.addEventListener("DOMContentLoaded", () => {
  const swiperGallery = new Swiper(".container-gallery", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-next-gallery",
      prevEl: ".swiper-prev-gallery",
    },
    pagination: {
      el: ".swiper-pagination-gallery",
      clickable: true,
    },
  });

  const allArrowSlideNext = document.querySelectorAll(
    ".swiper-next-gallery, .swiper-next-gallery--768, .swiper-next-gallery--320",
  );
  const allArrowSlidePrev = document.querySelectorAll(
    ".swiper-prev-gallery, .swiper-prev-gallery--768, .swiper-prev-gallery--320",
  );
  allArrowSlideNext.forEach((btn) => {
    btn.addEventListener("click", () => {
      swiperGallery.slideNext();
    });
  });
  allArrowSlidePrev.forEach((btn) => {
    btn.addEventListener("click", () => {
      swiperGallery.slidePrev();
    });
  });

  const galleryCurrent = document.querySelector(".gallery__number-curent");
  const galleryAll = document.querySelector(".gallery__number-all");
  const openAnimation = document.querySelector(".line__gallery--320");
  const lineAnimationOne = document.querySelector(".gallery__line-1");
  const lineAnimationSecond = document.querySelector(".gallery__line-2");
  const circleOne = document.querySelector(".circle2__gallery--768");
  const circleAnimation = document.querySelector(".gallery__circle-animation");
  const circleTwo = document.querySelectorAll(
    ".circle__radius--one, .circle__radius--two, .circle__radius--third",
  );
  openAnimation.addEventListener("click", () => {
    openAnimation.classList.toggle("fade-circle");
    lineAnimationOne.classList.toggle("active");
    lineAnimationSecond.classList.toggle("active");
    circleAnimation.classList.toggle("active");
  });

  circleOne.addEventListener("click", () => {
    circleTwo.forEach((btn) => {
      btn.classList.toggle("active");
    });
  });

  if (galleryCurrent) galleryCurrent.innerHTML = `0${swiperGallery.activeIndex + 1}`;
  if (galleryAll) galleryAll.innerHTML = `0${swiperGallery.slides.length}`;
  swiperGallery.on("slideChange", () => {
    if (galleryCurrent) galleryCurrent.innerHTML = `0${swiperGallery.activeIndex + 1}`;
  });
});

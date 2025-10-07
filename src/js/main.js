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

  const header = document.querySelector(".header");

  function setPgn(index) {
    pgn.forEach((btn, i) => btn.classList.toggle("active", i === index));

    if (side) {
      side.classList.toggle("active", index >= 1);
    }
    if (form) {
      form.classList.toggle("active", index === 2);
    }
    if (form) {
      form.classList.toggle(index !== 5);
      form.innerHTML = `<div class="form__visible"><div class="form form--ds">
  <div class="input__line input__line--name">
    <input type="text" placeholder="Your name" class="input__name" />
  </div>
  <div class="input__line input__line--number">
    <input type="number" required placeholder="Your phone number" class="input__number" />
  </div>

  <a class="form__link" href=""
    >discuss a project
    <svg
      class="arrow"
      xmlns="http://www.w3.org/2000/svg"
      width="125"
      height="30"
      viewBox="0 0 125 60"
    >
      <line
        class="line__arrow"
        x1="-60"
        y1="30"
        x2="142"
        y2="30"
        stroke="#f9a12a"
        stroke-width="1.5"
        stroke-linecap="round"
      />

      <polyline
        class="polyline__arrow"
        points="150,10 180,30 150,50"
        fill="none"
        stroke="#f9a12a"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </a>
</div>`;
    }

    if (header) {
      if (index === 3 && window.innerWidth <= 992) {
        header.style.display = "none";
      } else {
        header.style.display = "";
      }
    }
    if (side) {
      if (index === 3 && window.innerWidth <= 992) {
        side.style.display = "none";
      } else {
        side.style.display = "";
      }
    }
  }

  setPgn(swiper.activeIndex);

  swiper.on("slideChange", () => setPgn(swiper.activeIndex));
  window.addEventListener("resize", () => setPgn(swiper.activeIndex));
});

const blocks = document.querySelectorAll(
  ".elite__pagination, .vip__pagination, .extra__pagination, .elite__pagination-line, .elite__circle-1, .elite__circle-2",
);

const price = document.querySelector(".select__price-number");

function priceRender() {
  let activeBlock = document.querySelector(
    ".elite__pagination.active, .vip__pagination.active, .extra__pagination.active",
  );

  if (!activeBlock) {
    activeBlock = document.querySelector(".elite__pagination");
  }

  if (activeBlock) {
    price.textContent = activeBlock.dataset.price;
  }
}

priceRender();

blocks.forEach((block) => {
  block.addEventListener("click", () => {
    blocks.forEach((b) => b.classList.remove("active"));
    block.classList.add("active");
    priceRender();
  });
});

window.addEventListener("resize", priceRender);
/////////// MENU
const body = document.querySelector(".body");
const paginationMenu = document.querySelector(".pagination");
const formClose = document.querySelectorAll(".form__visible, .form");
const burger = document.querySelector(".burger__body");
const menu = document.querySelector(".menu");
const formMenuOpen = document.querySelector(".formMenu");
const screen = document.querySelectorAll(".screen__3--mob, .screen__5--mob, .screen__6--mob");

burger.addEventListener("click", () => {
  if (!menu) return;
  menu.classList.toggle("open");
  formMenuOpen.classList.toggle("open");
  body.classList.toggle("open");

  if (menu.classList.contains("open")) {
    screen.forEach((el) => {
      el.style.display = "none";
    });

    formClose.forEach((btn) => {
      btn.style.display = "none";
    });
    paginationMenu.style.display = "none";
  } else {
    screen.forEach((el) => {
      el.style.display = "";
    });

    formClose.forEach((btn) => {
      btn.style.display = "flex";
    });
    paginationMenu.style.display = "flex";
  }
});

// MORE SERVICEC
const closeMore = document.querySelector(".service__img");
const openMore = document.querySelector(".menu__link--services");
const servicePopUp = document.querySelector(".service__popup-menu");

openMore.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  servicePopUp.classList.toggle("open");
  formMenuOpen.classList.remove("open");
});

closeMore.addEventListener("click", () => {
  servicePopUp.classList.toggle("open");
  formMenuOpen.classList.add("open");
});

// ORDER
const screenOrder = document.querySelectorAll(
  ".screen__3--mob, .screen__4--mob, .screen__5--mob, .screen__6--mob",
);
const orderPopUp = document.querySelector(".order");
const orderOpen = document.querySelector(".request__body-call");
const number = document.querySelector(".number__body");
const nuv = document.querySelector(".nav");
const phone = document.querySelector(".phone__body");
const orderClose = document.querySelector(".order__close");
const form = document.querySelector(".form__visible");
const formOrder = document.querySelector(".formOrder");
const formSuccess = document.querySelector(".form__success ");
const input = document.querySelector(".input__number");
const pagination = document.querySelector(".pagination");
const errorText = input.nextElementSibling;
orderOpen.addEventListener("click", () => {
  number.classList.add("open");
  orderPopUp.classList.add("open");
  phone.classList.add("open");
  nuv.classList.add("open");
  orderClose.classList.add("open");
  form.style.display = "none";
  pagination.style.display = "none";
  screenOrder.forEach((el) => {
    el.style.display = "none";
  });
  formClose.forEach((btn) => {
    btn.style.display = "none";
  });
  if (formMenuOpen) {
    formMenuOpen.classList.remove("open");
  }

  menu.classList.remove("open");
});

orderClose.addEventListener("click", () => {
  orderPopUp.classList.remove("open");
  orderClose.classList.remove("open");
  nuv.classList.remove("open");
  number.classList.remove("open");
  phone.classList.remove("open");
  form.style.display = "";
  formSuccess.style.display = "none";
  formOrder.classList.remove("hidden");
  pagination.style.display = "";

  input.value = "";
  input.classList.remove("error");
  errorText.style.display = "none";
});

formOrder.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!input.value.trim()) {
    errorText.style.display = "inline";
  } else {
    input.classList.remove("error");
    errorText.style.display = "none";
    formOrder.classList.add("hidden");
    formSuccess.style.display = "flex";
    nuv.classList.add("hidden");
  }
});

const orderBack = document.querySelector(".order__back");
orderBack.addEventListener("click", () => {
  orderPopUp.classList.remove("open");
  orderClose.classList.remove("open");
  nuv.classList.remove("open");
  number.classList.remove("open");
  phone.classList.remove("open");
  form.style.display = "";
  formSuccess.style.display = "none";
  formOrder.classList.remove("hidden");
  nuv.classList.remove("hidden");
  screenOrder.forEach((el) => {
    el.style.display = "";
  });
  formClose.forEach((btn) => {
    btn.style.display = "";
  });

  input.value = "";
  input.classList.remove("error");
  errorText.style.display = "none";
});

import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

document.addEventListener("DOMContentLoaded", () => {
  window.swiper = new Swiper(".swiper-container", {
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
  const galleryCurrent = document.querySelector(".gallery__number-curent");
  const galleryAll = document.querySelector(".gallery__number-all");
  const isGalleryPage = window.location.pathname.includes("gallery.html");
  const header = document.querySelector(".header");

  function setPgn(index) {
    pgn.forEach((btn, i) => btn.classList.toggle("active", i === index));

    if (galleryCurrent) galleryCurrent.innerHTML = `0${index + 1}`;
    if (galleryAll) galleryAll.innerHTML = `0${swiper.slides.length}`;

    if (side) {
      if (isGalleryPage || index >= 1) {
        side.classList.add("active");
      } else {
        side.classList.remove("active");
      }
    }
    if (form) {
      if (isGalleryPage && index === 2) {
        form.style.display = "flex";
      } else {
        form.classList.toggle("active", index === 2);
      }
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
      if (isGalleryPage) {
        header.style.display = window.innerWidth <= 768 ? "none" : "";
      } else {
        header.style.display = index === 3 && window.innerWidth <= 992 ? "none" : "";
      }
    }
    if (side) {
      if (isGalleryPage) {
        side.style.display = window.innerWidth <= 768 ? "none" : "";
      } else if (index === 3 && window.innerWidth <= 992) {
        side.style.display = "none";
      } else {
        side.style.display = "";
      }
    }

    const slideLinks = document.querySelectorAll(".go-to-slide");

    slideLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        menu.classList.remove("open");

        const slideIndex = parseInt(link.dataset.slide, 10);
        if (isNaN(slideIndex)) return;

        swiper.slideTo(slideIndex, 1000);

        setPgn(slideIndex);
      });
    });
  }

  setPgn(swiper.activeIndex);

  swiper.on("slideChange", () => setPgn(swiper.activeIndex));
  window.addEventListener("resize", () => setPgn(swiper.activeIndex));

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
  const wrapper = document.querySelector(".wrapper");
  const sideLogo = document.querySelector(".side__logo");

  sideLogo.addEventListener("click", () => {
    menu.classList.remove("open");
  });

  burger.addEventListener("click", () => {
    if (!menu) return;
    menu.classList.toggle("open");
    body.classList.toggle("open");
    wrapper.classList.toggle("active");

    if (menu.classList.contains("open")) {
      formMenuOpen.classList.add("open")
    } else {
      formMenuOpen.classList.remove("open")
    }

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


  //MENU
  const menuLinks = document.querySelector(".menu__link--blog");
  menuLinks.addEventListener("click", (e) => {
    e.preventDefault();
    aboutOpen.classList.add("open");
  });

  // MORE SERVICEC
  const closeMore = document.querySelector(".service__img");
  const openMore = document.querySelector(".menu__item--services");
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
  const aboutOpen = document.querySelector(".form__about");
  const orderPopUp = document.querySelector(".order");
  const orderOpen = document.querySelector(".request__body-call");
  const number = document.querySelector(".number__body");
  const nuv = document.querySelector(".nav");
  const phone = document.querySelector(".phone__body");
  const orderClose = document.querySelector(".order__close");
  const formInOrder = document.querySelector(".form__visible");
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
    formInOrder.style.display = "none";
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
    formInOrder.style.display = "";
    formSuccess.style.display = "none";
    if (aboutOpen) aboutOpen.classList.remove("open");
    formOrder.classList.remove("hidden");
    pagination.style.display = "";
    screenOrder.forEach((el) => {
      el.style.display = "";
    });
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
    formInOrder.style.display = "";
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
  const linksMobMenu = document.querySelectorAll(".menu__link-mob");
  const linksDs = document.querySelectorAll(".menu__item");
  const linksCosts = document.querySelector(".menu__link-mob--costs");
  const linksSteps = document.querySelector(".menu__link-mob--steps");
  const linksStyles = document.querySelector(".menu__link-mob--styles");
  const linksBlog = document.querySelector(".menu__link--blog");
  const linksService = document.querySelector(".menu__item--services");
  const screenOrderMob = document.querySelectorAll(
    ".screen__3--mob, .screen__4--mob, .screen__5--mob, .screen__6--mob",
  );
  const formMobMenu = document.querySelectorAll(".form__visible, .form");
  const formMenuDs = document.querySelector(".formMenu");

  linksDs.forEach((btn) => {
    btn.addEventListener("click", () => {
      formMenuDs.classList.remove("open");
      formMobMenu.forEach((element) => {
        element.style.display = "flex";
      });
    });
  });

  linksMobMenu.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      formMobMenu.forEach((element) => {
        element.style.display = "flex";
      });
      screenOrderMob.forEach((btn) => {
        btn.style.display = "flex";
      });
      menu.classList.remove("open");
      formMenuOpen.classList.remove("open");
      wrapper.classList.remove("active");
    });
  });

  function setTime(delay, height) {
    setTimeout(() => {
      window.scrollTo({
        top: height,
        behavior: "smooth",
      });
    }, delay);
  }

  linksCosts.addEventListener("click", () => {
    setTime(500, 1400);
  });
  linksSteps.addEventListener("click", () => {
    if (window.innerWidth >= 768) {
      setTime(500, 2650);
    } else if (window.innerWidth <= 768) {
      setTime(500, 2200);
    }
  });
  linksStyles.addEventListener("click", () => {
    setTime(500, 800);
  });
  linksBlog.addEventListener("click", () => {
    aboutOpen.style.setProperty("display", "flex", "important");
  });
  linksService.addEventListener("click", (e) => {
    header.style.zIndex = "149";
    console.log(e.target);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const serviceVipPopUp = document.querySelector(".service__vip");
  const serviceBtnVip = document.querySelectorAll(
    ".gallery__link-sevices, .screen__6--mob .gallery__link-sevices",
  );
  const serviceNav = document.querySelector(".nav");
  const serviceSide = document.querySelector(".side");
  const servicePagination = document.querySelector(".pagination");

  const array = [
    {
      title: "ELITE",
      close: "img/Home/screen_6Mob/close.png",
      style: "ELITE style",
      textMob:
        "В стоимость стиля ELITE входит весь базовый набор работ, необходимый для отличного ремонта.",
      text: `
    <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>


      `,
    },
    {
      title: "VIP",
      close: "img/Home/screen_6Mob/close.png",
      style: "VIP style",
      textMob:
        "В стоимость стиля VIP входит весь базовый набор работ, необходимый для отличного ремонта.",
      text: `
       <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>



      `,
    },
    {
      title: "EXTRA",
      close: "img/Home/screen_6Mob/close.png",
      style: "EXTRA style",
      textMob:
        "В стоимость стиля EXTRA входит весь базовый набор работ, необходимый для отличного ремонта.",
      text: `
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
    

      `,
    },
  ];

  serviceVipPopUp.innerHTML = `
  <div class="service__vip-header">
    <img src="img/Home/screen_6Mob/close.png" alt="close" class="service__img service__img--close" />
  </div>
  <div class="service__info service__info--service service__info--mob">
    <p class="service__price service__price--mob">от 3000 грн.</p>
      <p class="service__text--mob">В стоимость стиля EXTRA входит весь базовый набор работ, необходимый для отличного ремонта.</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
      <p class="service__info-text service__info-text--service">Демонтаж и Возведение межкомнатных перегородок</p>
  </div>
  <svg
    class="gallery__title gallery__title--service elite__title elite__title--ds"
    fill="none"
    width="200px"
    height="174px"
    viewBox="0 0 200 174"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="gallary__path-color elite__path-color"
      d="M100 0 A87 87 0 0 1 100 174"
      stroke="#000000"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <text
      class="gallary__title-color elite__title-color"
      x="101"
      y="89"
      font-size="24"
      fill="#000000"
      text-anchor="middle"
      alignment-baseline="middle"
    >
      STYLE
    </text>
  </svg>
`;

  const closeBtn = serviceVipPopUp.querySelector(".service__img--close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      serviceVipPopUp.classList.remove("open");
      serviceNav.classList.remove("hidden");
      serviceSide.classList.remove("hidden");
      servicePagination.classList.remove("hidden");
      if (window.swiper) window.swiper.allowTouchMove = true;
    });
  }

  serviceBtnVip.forEach((service, index) => {
    service.addEventListener("click", (e) => {
      e.preventDefault();
      serviceVipPopUp.classList.add("open");
      serviceNav.classList.add("hidden");
      serviceSide.classList.add("hidden");
      servicePagination.classList.add("hidden");
      window.swiper.allowTouchMove = false;
      const idx = parseInt(service.dataset.index);
      const item = array[idx];

      serviceVipPopUp.innerHTML = `
          <div class="service__vip-header">
            <img src="${item.close}" alt="close" class="service__img service__img--close" />
          </div>
          <div class="service__info service__info--service">
             <p class="service__price">от 3000 грн.</p>
             <p class="service__style">${item.style}</p>
             <p class="service__text--mob">${item.textMob}</p>
             
            ${item.text}
          </div>
          <svg
        class="gallery__title gallery__title--service elite__title elite__title--ds"
        fill="none"
        width="200px"
        height="174px"
        viewBox="0 0 200 174"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="gallary__path-color elite__path-color"
          d="M100 0 A87 87 0 0 1 100 174"
          stroke="#000000"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <text
          class="gallary__title-color elite__title-color"
          x="101"
          y="89"
          font-size="24"
          fill="#000000"
          text-anchor="middle"
          alignment-baseline="middle"
        >
          ${item.title}
        </text>
      </svg>
     
        `;

      const serviceClose = serviceVipPopUp.querySelector(".service__img--close");

      serviceClose.addEventListener("click", () => {
        serviceVipPopUp.classList.remove("open");
        serviceNav.classList.remove("hidden");
        serviceSide.classList.remove("hidden");
        servicePagination.classList.remove("hidden");
        window.swiper.allowTouchMove = true;
      });
    });
  });
  const menuAdditional = document.querySelector(".menu__link--additional");
  menuAdditional.addEventListener("click", (e) => {
    e.preventDefault();
    serviceVipPopUp.classList.add("open");
  });
});

const cards = document.querySelectorAll(".overlay__cards");
const visible = document.querySelector(".form__visible");
const screenBody = document.querySelector(".screen6__body");

const classes = ["photo", "camera", "sofa", "kitchen", "salute"];
const contentsForm = [
  `<div class="form form--ds">
  <h2 class="form__photo-title">Video surveillance and alarm</h2>
  <p class="form__photo-text">Purchase, installation and setup of video surveillance,
   both open and hidden, for indoor and outdoor use.
   Help with registering the system on the security panel.</p>`,
  `<div class="form form--ds">
  <h2 class="form__photo-title">Camera surveillance and alarm</h2>
  <p class="form__photo-text">Purchase, installation and setup of video surveillance,
   both open and hidden, for indoor and outdoor use.
   Help with registering the system on the security panel.</p>`,
  `<div class="form form--ds">
  <h2 class="form__photo-title">Sofa surveillance and alarm</h2>
  <p class="form__photo-text">Purchase, installation and setup of video surveillance,
   both open and hidden, for indoor and outdoor use.
   Help with registering the system on the security panel.</p>`,
  `<div class="form form--ds">
  <h2 class="form__photo-title">Kitchen surveillance and alarm</h2>
  <p class="form__photo-text">Purchase, installation and setup of video surveillance,
   both open and hidden, for indoor and outdoor use.
   Help with registering the system on the security panel.</p>`,
  `<div class="form form--ds">
  <h2 class="form__photo-title">Salute surveillance and alarm</h2>
  <p class="form__photo-text">Purchase, installation and setup of video surveillance,
   both open and hidden, for indoor and outdoor use.
   Help with registering the system on the security panel.</p>`,
];

cards.forEach((card, index) => {
  card.addEventListener("click", (e) => {
    e.stopPropagation();
    visible.className = "form__visible";
    visible.classList.add(classes[index]);
    visible.innerHTML = contentsForm[index];
  });
});

screenBody.addEventListener("click", () => {
  visible.innerHTML = `<div class="form form--ds">
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
</div>
`;
});

//MORE SERVICE

const openMore = document.querySelector(".woman__line");
const servicePopUp = document.querySelector(".service__popup");
const closeMore = document.querySelectorAll(".service__img");
openMore.addEventListener("click", () => {
  if (servicePopUp) {
    servicePopUp.classList.toggle("open");
    openMore.classList.toggle("active");
  }
});
closeMore.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (servicePopUp) {
      servicePopUp.classList.remove("open");
      openMore.classList.remove("active");
    }
  });
});

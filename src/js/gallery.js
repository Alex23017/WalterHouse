const openAnimation = document.querySelector(".line__gallery--320");
const lineAnimationOne = document.querySelector(".gallery__line-1");
const lineAnimationSecond = document.querySelector(".gallery__line-2");
const circleOne = document.querySelector(".circle2__gallery--768");
const circleAnimation = document.querySelector(".gallery__circle-animation");
const circleTwo = document.querySelectorAll(".circle__radius--one, .circle__radius--two, .circle__radius--third")
openAnimation.addEventListener("click", () => {
  openAnimation.classList.toggle("fade-circle");
  lineAnimationOne.classList.toggle("active");
  lineAnimationSecond.classList.toggle("active");
  circleAnimation.classList.toggle("active");
});

circleOne.addEventListener("click", () => {
    circleTwo.forEach((btn => {
    btn.classList.toggle("active")
}))
});

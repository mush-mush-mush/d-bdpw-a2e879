// Load

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loading").classList.add("loading-hide");
  }, 1000);
});

// Slider

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".left-slide");
const btnRight = document.querySelector(".right-slide");

let currentSlide = 0;
const totalSlide = slides.length;

btnLeft.addEventListener("click", prevSlide);

btnRight.addEventListener("click", nextSlide);

function nextSlide() {
  currentSlide++;
  if (currentSlide > 1) {
    currentSlide = 0;
  }
  console.log(currentSlide);
  moveSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide === -1) {
    currentSlide = 1;
  }
  moveSlide(currentSlide);
  console.log(currentSlide);
}

function moveSlide(current) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - current)}%)`;
  });
}

moveSlide(currentSlide);

// Modal

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnOpen = document.querySelectorAll(".open-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpen.length; i++)
  btnOpen[i].addEventListener("click", openModal);

btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

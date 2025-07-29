"use strict";



//  smooth scrolling implementation
const smoothScrolling = function (where) {
  return function () {
    where.scrollIntoView({
      behavior: "smooth",
    });
  };
};

document.addEventListener("DOMContentLoaded", function () {
  navBlog.classList.add("highlight-nav--element"); // navBlog declarat in navbar.js
});


// BLOG PAGE EXCLUSIVE

const sliderHeader = document.querySelector("#slider-header");
const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const sliderBtnRight = document.querySelector("#slider-next");
const sliderBtnLeft = document.querySelector("#slider-prev");
// Slider textShadow transition
sliderContainer.addEventListener("mouseover", function () {
  sliderHeader.style.textShadow = "0px 0px 30px #a91d3a";
});
sliderContainer.addEventListener("mouseout", function () {
  sliderHeader.style.textShadow = "none";
});

// Slider navigation

let currentSlide = 0;
let lastSlide = slides.length - 1;

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

// dots for slider

const dotContainer = document.querySelector(".dots");

const createDots = function () {
  slides.forEach(function (_, i) {
    {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    }
  });
};
createDots();

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};
activateDot(0);

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

activateDot(0);
// slide function

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const nextSlide = function () {
  if (currentSlide === lastSlide) {
    currentSlide = 0;
  } else currentSlide++;
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

//  next slide
sliderBtnRight.addEventListener("click", nextSlide);

//  prev slide
const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = lastSlide;
  } else currentSlide--;
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

sliderBtnLeft.addEventListener("click", prevSlide);

// if left-arrow/ right-arrow, navigate slider
document.addEventListener("keydown", function (e) {
  // console.log(e);
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

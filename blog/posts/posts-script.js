"use strict";

const featuredImage = document.querySelector("#featured--photo");
const articleContainer = document.querySelector(".article");
const titleAndDate = document.querySelector(".title-and-date");

let scrollPos = 0;
const lazyLoading = (y, component) => {
  document.addEventListener("scroll", function () {
    component.classList.add("blurred");
    scrollPos = window.scrollY;
    console.log(scrollPos);
    if (scrollPos > y) {
      component.classList.remove("blurred");
    } else {
      component.classList.add("blurred");
    }
  });
};

featuredImage.classList.add("blurred");
document.addEventListener("DOMContentLoaded", lazyLoading(110, featuredImage));

titleAndDate.classList.add("blurred");
document.addEventListener("DOMContentLoaded", lazyLoading(400, titleAndDate));

articleContainer.classList.add("blurred");
document.addEventListener(
  "DOMContentLoaded",
  lazyLoading(600, articleContainer)
);

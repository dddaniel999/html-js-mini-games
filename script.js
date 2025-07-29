"use strict";

const icon = document.querySelector(".icon");
// const navbar = document.querySelector(".navbar");
// const navlist = document.querySelector(".nav-list");
const btnLearnMore = document.querySelector("#Learn-more");
const aboutPage = document.querySelector(".about");
const navHome = document.querySelector("#nav-home");
// const navBlog = document.querySelector("#nav-blog");
const navServices = document.querySelector("#nav-services");
// const navTeam = document.querySelector("#nav-team");
const navAbout = document.querySelector("#nav-about");
const heroPage = document.querySelector(".hero");
const servicesPage = document.querySelector(".services");
const btnBlog = document.querySelector("#btn--blog");

const service1 = document.querySelector(".service1");
const service2 = document.querySelector(".service2");

//  smooth scrolling implementation
const smoothScrolling = function (where) {
  return function () {
    where.scrollIntoView({
      behavior: "smooth",
    });
  };
};

//ONLY FOR MAIN PAGE

btnLearnMore.addEventListener("click", smoothScrolling(aboutPage));
navHome.addEventListener("click", smoothScrolling(heroPage));
navServices.addEventListener("click", smoothScrolling(servicesPage));
navAbout.addEventListener("click", smoothScrolling(aboutPage));
icon.addEventListener("click", smoothScrolling(heroPage));
btnBlog.addEventListener("click", function () {
  location.href = "blog/index.html";
});
let scrollPos = 0;

document.addEventListener("DOMContentLoaded", function () {
  navHome.classList.add("highlight-nav--element");
});

const highlightMenu = function () {
  if (scrollPos < 500) {
    navHome.classList.add("highlight-nav--element");
  } else {
    navHome.classList.remove("highlight-nav--element");
  }
  if (scrollPos >= 500 && scrollPos < 1000) {
    navAbout.classList.add("highlight-nav--element");
  } else {
    navAbout.classList.remove("highlight-nav--element");
  }
  if (scrollPos >= 1000 && scrollPos) {
    navServices.classList.add("highlight-nav--element");
  } else {
    navServices.classList.remove("highlight-nav--element");
  }
};

document.addEventListener("scroll", function () {
  scrollPos = window.scrollY;
  highlightMenu();
});

service1.addEventListener("click", function () {
  window.open("/games/dice_game/index.html");
});
service2.addEventListener("click", function () {
  window.open("/games/dice_game/index.html");
});

// localStorage.clear("contact");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  const obj = Object.fromEntries(fd);

  // Retrieve existing data from localStorage
  const existingData = localStorage.getItem("contact");

  let dataArray = [];

  if (existingData) {
    try {
      // Parse the existing data if it exists
      const parsedData = JSON.parse(existingData);

      // Check if parsed data is an array, if not, convert it to an array
      if (Array.isArray(parsedData)) {
        dataArray = parsedData;
      } else if (parsedData !== null && typeof parsedData === "object") {
        dataArray = [parsedData];
      } else {
        console.error("Parsed data is not valid:", parsedData);
      }
    } catch (error) {
      console.error("Error parsing existing data:", error);
    }
  }

  // Append the new data to the array
  dataArray.push(obj);

  // Save the updated data back to localStorage
  const json = JSON.stringify(dataArray);
  localStorage.setItem("contact", json);

  // Optionally, log the saved data
  // console.log(dataArray);
});

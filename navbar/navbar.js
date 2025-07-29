"use strict";
const icon = document.querySelector(".icon");
const navbar = document.querySelector(".navbar");
const navlist = document.querySelector(".nav-list");
const navHome = document.querySelector("#nav-home");
const navBlog = document.querySelector("#nav-blog");
const navServices = document.querySelector("#nav-services");
const navTeam = document.querySelector("#nav-team");
const navAbout = document.querySelector("#nav-about");

const navGames = document.querySelector("#nav-games");
const gamesDropDown = document.querySelector(".games-dropdown");
const navGamesArrow = document.querySelector("#nav-games--arrow");
const navSearch = document.querySelector(".search");

// console.log(navGamesArrow.textContent);

//  smooth scrolling implementation
// const smoothScrolling = function (where) {
//   return function () {
//     where.scrollIntoView({
//       behavior: "smooth",
//     });
//   };
// };
// console.log(navGames);

navGames.addEventListener("click", function () {
  gamesDropDown.classList.toggle("hidden");
  if (gamesDropDown.classList.contains("hidden")) {
    gamesDropDown.style.transform = "translateY(0px)";
    navGamesArrow.style.transform = " rotate(0deg)";
  } else {
    gamesDropDown.style.transform = "translateY(100px)";
    navGamesArrow.style.transform = " rotate(90deg)";
  }
});

navbar.classList.add("with-transition");
navlist.addEventListener("mouseover", function () {
  navbar.style.borderRight = "#fff 3px solid";
  navbar.style.borderBottom = "#fff 1px solid";
});
navlist.addEventListener("mouseout", function () {
  navbar.style.border = "#fff 0px solid";
});

icon.addEventListener("mouseover", function () {
  navbar.style.borderLeft = "#fff 3px solid";
  navbar.style.borderBottom = "#fff 1px solid";
});
icon.addEventListener("mouseout", function () {
  navbar.style.border = "#fff 0px solid";
});

navSearch.addEventListener("mouseover", function () {
  navbar.style.borderBottom = "#fff 3px solid";
});
navSearch.addEventListener("mouseout", function () {
  navbar.style.border = "#fff 0px solid";
});

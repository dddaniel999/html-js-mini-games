"use script";

document.addEventListener("DOMContentLoaded", function () {
  navTeam.classList.add("highlight-nav--element"); //navTeam declarat deja in navbar.js
});

const cvDaniel = document.getElementById("cv-daniel");
const cvStefan = document.getElementById("cv-stefan");

const sendToLink = (link) => {
  window.open(link, "_blank");
};

cvDaniel.addEventListener("click", function () {
  sendToLink(
    "https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/daniel-mihai-coman/91a8bf8a-a4ee-4114-b3b0-8d47250531ba?view=html"
  );
});

cvStefan.addEventListener("click", function () {
  sendToLink(
    "https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/stefan-gheban-madalin/"
  );
});

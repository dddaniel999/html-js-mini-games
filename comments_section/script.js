"use strict ";

const userId = {
  name: null,
  identity: null,
  image: null,
  message: null,
  date: null,
};

// localStorage.clear();

const userComment = document.querySelector(".usercomment");
const publishBtn = document.querySelector("#publish");
const comments = document.querySelector(".comments");
const userName = document.querySelector(".user");

//  if no comment value nonono
userComment.addEventListener("input", (e) => {
  if (!userComment.value) {
    publishBtn.setAttribute("disabled", "disabled");
    publishBtn.classList.remove("abled");
  } else {
    publishBtn.removeAttribute("disabled");
    publishBtn.classList.add("abled");
  }
});

function addPost() {
  //   console.log('the button works');
  if (!userComment.value) return;
  userId.name = userName.value;
  if (userId.name === "Anonymous") {
    userId.identity = false;
    userId.image = "/comments_section/anonymous.png";
  } else {
    userId.identity = true;
    userId.image = "/comments_section/unknown.png";
  }

  function generateUniqueId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }

  userId.message = userComment.value;
  userId.date = new Date().toLocaleString();
  const commentId = generateUniqueId();

  let published = `<div class="parents" id="${commentId}">
    <img src="${userId.image}">
    <div>
        <h1>${userId.name}<h1>
        <p>${userId.message}</p>
        <div class="engagements"><img src="/comments_section/like.png"><img src="/comments_section/share.png"><img src="/comments_section/delete.png" class="delete-btn" data-id="${commentId}"></div>
        <span class="date">${userId.date}</span>
    <div>
<div>`;

  comments.innerHTML += published;
  userComment.value = "";

  // calling saveComments function();
  saveCommentsToLocalStorage();

  let commentsNum = document.querySelectorAll(".parents").length;
  document.getElementById("comment").textContent = commentsNum;

  publishBtn.setAttribute("disabled", "disabled");
  publishBtn.classList.remove("abled");

  addDeleteEventListeners();
}

function addDeleteEventListeners() {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.removeEventListener("click", deleteComment);
    button.addEventListener("click", deleteComment);
  });
}

function deleteComment(event) {
  const commentId = event.target.getAttribute("data-id");
  const commentElement = document.getElementById(commentId);
  if (commentElement) {
    commentElement.remove();
    saveCommentsToLocalStorage();

    let commentsNum = document.querySelectorAll(".parents").length;
    document.getElementById("comment").textContent = commentsNum;
  }
}

function saveCommentsToLocalStorage() {
  localStorage.setItem("comments", comments.innerHTML);
}

function loadCommentsFromLocalStorage() {
  const savedComments = localStorage.getItem("comments");
  if (savedComments) {
    comments.innerHTML = savedComments;
    let commentsNum = document.querySelectorAll(".parents").length;
    document.getElementById("comment").textContent = commentsNum;
  }

  addDeleteEventListeners();
}

// Load comments when the page loads
window.onload = loadCommentsFromLocalStorage;

publishBtn.addEventListener("click", addPost);

// console.log(localStorage);

"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct number🎉";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 50;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  let highscore = Number(document.querySelector(".highscore").textContent);

  //  When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "No number!❌";
    displayMessage("No number!❌");
    //  When player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct number🎉";
    displayMessage("Correct number🎉");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".body2").style.backgroundColor = "#00ff00";
    document.querySelector(".number").style.width = "35rem";
    document.querySelector(".number").style.fontSize = "9rem";

    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "Too high..📈" : "Too low..📉";
      displayMessage(guess > secretNumber ? "Too high..📈" : "Too low..📉");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "You lost the game! 😣";
      displayMessage("You lost the game! 😣");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//  When guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Too high..📈";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "You lost the game! 😣";
//       document.querySelector(".score").textContent = 0;
//     }
//     //  When guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Too low..📉";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "You lost the game! 😣";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });

// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
// GOOD LUCK 😀

document.querySelector(".again").addEventListener("click", function () {
  // console.log("Again button clickd");
  score = 50;
  secretNumber = Math.trunc(Math.random() * 50) + 1;

  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";

  document.querySelector(".body2").style.backgroundColor = "#222";
  document.querySelector(".number").width = "15rem";
  document.querySelector(".number").fontSize = "6rem";
});

document.addEventListener("DOMContentLoaded", function () {
  navGames.classList.add("highlight-nav--element");
});

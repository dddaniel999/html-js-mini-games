"use strict";

//  Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

document.addEventListener("DOMContentLoaded", function () {
  navGames.classList.add("highlight-nav--element");
});

//  Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let currentScore, activePlayer, playing;
const scores = [0, 0];

const init = function () {
  diceEl.classList.add("hidden");
  playing = true;
  activePlayer = 0;
  currentScore = 0;
  scores[0] = 0;
  scores[1] = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  document.querySelector(`.player--1`).classList.remove("player--winner");
};
init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//  Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    //  1.Generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //  2.Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //  3. Check if rolled 1: if true,
    if (dice !== 1) {
      //  Add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //  switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    //  pt playerActive, daca apasa butonul, current score se adauga la score.
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      return;
    }
    switchPlayer();
  }
});

btnNew.addEventListener("click", function () {
  player1El.classList.remove("player--active");
  player0El.classList.add("player--active");
  init();
});

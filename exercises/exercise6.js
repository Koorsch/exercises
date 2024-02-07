"use strict";
import { randomNumber } from "../utils/randomNumber.js";

let lowNumber = 0;
let highNumber = 100;
let randomGuess;

const gameButtons = document.querySelector("#gameStart");
const yourNumber = document.querySelector("#yourNumber");
const lockedNumber = document.querySelector("#lockedNumber");
const wrongGuesses = document.querySelector("#wrongGuess");
const gameStartButton = document.querySelector("#start");
const savedNumber = document.querySelector("h2");
let wrongGuess = 0;

gameStartButton.addEventListener("click", () => {
  gameStartButton.classList.add("hidden");
  gameStart();
});

function gameStart() {
  gameStartButton.classList.add("hidden");
  gameButtons.classList.remove("hidden");
  let yourChoice = yourNumber.value;

  if (yourNumber.value === null) {
    yourChoice = randomNumber(100);
  } else {
    yourChoice = yourNumber.value;
  }
  savedNumber.textContent = `You locked ${yourChoice} in as a number.`;
  yourNumber.classList.add("hidden");
  lockedNumber.classList.add("hidden");

  const tooHigh = document.querySelector("#highGuess").addEventListener("click", computerGuess);
  const tooLow = document.querySelector("#lowGuess").addEventListener("click", computerGuess);
  const correct = document.querySelector("#correctGuess").addEventListener("click", gameOver);

  function computerGuess() {}
  function gameOver() {}
}

// "use strict";
// let loNum = 0;
// let hiNum = 100;
// let computerGuess;
// let numberOfGuesses = 0;
// let computerGuessText = document.querySelector("h2");
// const tooHigh = document.querySelector("#lowGuess").addEventListener("click", tooLoOrHi);
// const tooLow = document.querySelector("#highGuess").addEventListener("click", tooLoOrHi);
// computerGuesses();

// function computerGuesses() {
//   numberofGuesses++;
//   computerGuess = Math.round(loNum + (loNum + hiNum) / 2);
//   computerGuessText.textContent = computerGuess;
// }
// function tooLoOrHi(evt) {
//   if (evt.target.id === "tooLo") {
//     loNum = computerGuess;
//   } else {
//     hiNum = computerGuess;
//   }
//   computerGuesses();
// }

/* "use strict";
import { randomNumber } from "../utils/randomNumber.js";

let computer = document.querySelector("h2");
const gameStarter = document.querySelector("#start");
const gameButtons = document.querySelector("#gameStart");
const low = document.querySelector("#lowGuess");
const high = document.querySelector("#highGuess");
const correct = document.querySelector("#correctGuess");
let guess = document.querySelector("#gameWindow>span");
let computerTries;
const computerGuesses = document.querySelector("#computerGuesses");
let fail = 0;
let lowNum = 0;
let highNum = 100;

function game(number) {
  guess.classList.remove("hidden");

  low.addEventListener("click", () => {
    guess.textContent = "Too low!";
    reGuess();
    lowNum = computerTries;
    computerGuesses.textContent = number;
  });
  high.addEventListener("click", () => {
    guess.textContent = "Too high!";
    reGuess();
    computerGuesses.textContent = number;
    highNum = computerTries;
  });
  correct.addEventListener("click", () => {
    guess.textContent = `Computer guessed correct! It guessed ${computerTries}`;
    computerGuesses.textContent = number;
    reset();
  });
  computer.textContent = `Computer guessed: ${computerTries}. What is your answer?`;
}
function reGuess() {
  computerTries = Math.round(lowNum + (lowNum - highNum) / 2);
  computerGuesses.textContent = computerTries;
}
function reset() {
  gameButtons.classList.add("hidden");
  gameStarter.classList.remove("hidden");
  gameStarter.style.filter = "";
  gameStarter.style.pointerEvents = "";
  computer.textContent = "Play again?";
}
gameStarter.addEventListener("click", () => {
  guess.textContent = "";
  gameStarter.classList.add("hidden");
  gameButtons.classList.remove("hidden");
  guess.classList.add("hidden");
  gameStarter.style.filter = "grayscale(50%)";
  gameStarter.style.pointerEvents = "none";
  game(randomNumber(100));
});
 */

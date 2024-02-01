"use strict";

const randBtn = document.querySelector("#randomBtn");
const inputBox = document.querySelector("#guessedNumber");

const rolls = document.querySelector("#rolls");
const result = document.querySelector("h2");
const yourGuess = document.querySelector("#yourGuess");
const computerGuess = document.querySelector("#computerGuess");

let chances = { win: 0, loss: 0, draw: 0 };

function checkNumber(number) {
  let randNumber = Math.floor(Math.random() * 100) + 1;

  if (number != Number(number)) {
    console.log("Input entered not a number!");
  } else if (number === randNumber) {
    console.log(`You guessed (${number}) and it was correct!`);
    result.textContent = "You guessed correct!";
  } else if (number < randNumber) {
    console.log(`You guess (${number}) is lower than the computer(${randNumber}), try again!`);
    result.textContent = "You guessed lower!";
  } else if (number > randNumber) {
    console.log(`You guess (${number}) is higher than the computer(${randNumber}), try again!`);
    result.textContent = "You guessed higher!";
  } else {
    console.log("Derp! User error?!");
  }
  rolls.classList.remove("hidden");
  yourGuess.textContent = number;
  computerGuess.textContent = randNumber;
}

randBtn.addEventListener("click", () => {
  checkNumber(inputBox.value);
});

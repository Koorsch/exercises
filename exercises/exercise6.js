import { randomNumber } from "../utils/randomNumber.js";

let computer = document.querySelector("h2");
const gameStarter = document.querySelector("#start");
const gameButtons = document.querySelector("#gameStart");
const low = document.querySelector("#lowGuess");
const high = document.querySelector("#highGuess");
const correct = document.querySelector("#correctGuess");
let guess = document.querySelector("#gameWindow>span");

function game(cGuess) {
  computer.textContent = `Computer guessed: ${cGuess}. What is your answer?`;
  guess.classList.remove("hidden");

  low.addEventListener("click", () => {
    guess.textContent = "Too low!";
    game(randomNumber(100));
  });
  high.addEventListener("click", () => {
    guess.textContent = "Too high!";
    game(randomNumber(100));
  });
  correct.addEventListener("click", () => {
    guess.textContent = "Computer guessed correct!";
    reset();
  });
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

import { randomNumber } from "../utils/randomNumber.js";

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const btn = document.querySelector("#buttons");
const result = document.querySelector("h2");

let randNum;

function startShake() {
  player1.classList.add("shake");
  player2.classList.add("shake");
}

function computerOutput(input) {
  if (input === 1) {
    player2.classList.add("paper");
  } else if (input === 2) {
    player2.classList.add("rock");
  } else player2.classList.add("scissors");
}

function compareChoices(choice) {
  if ((randNum === 1 && choice === "rock") || (randNum === 2 && choice === "scissors") || (randNum === 3 && choice === "paper")) {
    result.textContent = "You lose!";
  } else if ((randNum === 1 && choice === "paper") || (randNum === 2 && choice === "rock") || (randNum === 3 && choice === "scissors")) {
    result.textContent = "It's a draw";
  } else result.textContent = "You win!";
}

function startGame(choice) {
  startShake();
  // Run the imported randomNumber function and save that as the "choice" of the computer.
  randNum = randomNumber(3);
  player1.addEventListener("animationend", () => {
    player1.classList = "player";
    player1.classList.add(choice);
  });
  player2.addEventListener("animationend", () => {
    player2.classList = "player";
    computerOutput(randNum);
    compareChoices(choice);
  });
}

// To start the game, checks which button you clicked and
// checks the class on that button, starts the game with that string
btn.addEventListener("click", (btn) => {
  if (btn.target.className === "rock") {
    startGame("rock");
  } else if (btn.target.className === "paper") {
    startGame("paper");
  } else startGame("scissors");
});

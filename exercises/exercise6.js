import { $ } from "../utils/dom.js";
import { randomNumber } from "../utils/randomNumber.js";

const gameButtons = $("#gameStart");
const buttonStart = $("#start");
const buttonLower = $("#lowGuess");
const buttonHigher = $("#highGuess");
const buttonCorrect = $("#correctGuess");
const computerNumber = $("#computerNumber");
const userNumber = $("#guessedNumber");
const headerText = $("h2");

let player = $("#yourNumber");
let computer = 50;
let min = 0;
let max = 100;
let count = 0;

function guessNumber(min, max) {
  return Math.round((max - min) / 2 + min);
}

function guessHigher(min, max) {
  computer = guessNumber(min, max);
  buttonHigher.removeEventListener("click", higherClick);
  gameStart();
}
function guessLower(min, max) {
  computer = guessNumber(min, max);
  buttonLower.removeEventListener("click", lowerClick);
  gameStart();
}

function higherClick() {
  min = computer;
  count++;
  guessHigher(min, max);
}

function lowerClick() {
  max = computer;
  count++;
  guessLower(min, max);
}

function gameStart() {
  const userGuess = Number(player.value);

  gameButtons.classList.remove("hidden");
  player.classList.add("hidden");
  buttonStart.classList.add("hidden");
  userNumber.classList.remove("hidden");
  computerNumber.classList.remove("hidden");

  computerNumber.textContent = "Computer guessed " + computer;
  userNumber.textContent = "You guessed: " + player.value;
  headerText.style = "text-decoration: none";

  if (userGuess < 1 || userGuess > 100 || userGuess === null) {
    headerText.style = "text-decoration: underline";
    headerText.textContent = "A number between 0 and 100, please";
  } else if (computer < userGuess) {
    buttonHigher.addEventListener("click", higherClick);
  } else if (computer > userGuess) {
    buttonLower.addEventListener("click", lowerClick);
  } else if (computer === userGuess) {
    buttonCorrect.addEventListener("click", () => {
      headerText.textContent = `COMPUTER WINS ! It took it ${count} tries.`;
      gameButtons.classList.add("hidden");
      player.classList.remove("hidden");
      buttonStart.classList.remove("hidden");
    });
    headerText.style = "text-decoration: none";
  }
}

buttonStart.addEventListener("click", () => {
  //Value reset when button is clicked
  gameButtons.classList.add("hidden");
  player.classList.add("hidden");
  $("#lockedNumber").classList.add("hidden");
  headerText.textContent = "";
  computer = 50;
  count = 0;
  min = 0;
  max = 100;
  gameStart();
});

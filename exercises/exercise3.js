"use strict";
// Make the hree buttons clickable, run the main game function
document.querySelector("#rock").addEventListener("click", game);
document.querySelector("#paper").addEventListener("click", game);
document.querySelector("#scissors").addEventListener("click", game);

const tracker = document.querySelector("#tracker");

let playerC = document.querySelector("#playerChoice");
let computerC = document.querySelector("#computerChoice");
let yourResult = document.querySelector("h2");
let scores = { wins: 0, losses: 0, draws: 0 };

function game(playerChoice) {
  let choices = ["Rock", "Paper", "Scissors"];
  let result = "";

  playerChoice = this.textContent;
  //Make the computer's choice.
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  playerC.textContent = "You chose: " + playerChoice;
  computerC.textContent = "The computer chose: " + computerChoice;
  console.log("Computer chose: " + computerChoice + " you chose: " + playerChoice);

  if (playerChoice === computerChoice) {
    result = "Draw!";
    scores.draws++;
    //Hardcoded check if the .textContent equals the choices
  } else if ((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Scissors" && computerChoice === "Rock") || (playerChoice === "Paper" && computerChoice === "Rock")) {
    result = "You win!";
    scores.wins++;
  } else {
    result = "You lose!";
    scores.losses++;
  }
  yourResult.textContent = result;
  scoreBoard();
}

function scoreBoard() {
  document.querySelector("#wins").textContent = scores.wins;
  document.querySelector("#losses").textContent = scores.losses;
  document.querySelector("#draws").textContent = scores.draws;
  tracker.classList.remove("hidden");
}

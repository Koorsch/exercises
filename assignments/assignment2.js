import { randomNumber } from "../utils/randomNumber.js";

const stop = document.querySelector("#stop");
const window = document.querySelector(".barWindow");
const start = document.querySelector("#start");
let barArray = [];
barArray.length = 20;

function fillWindow(amount) {}

function colorPicker() {}

stop.addEventListener("click", () => {
  start.classList.remove("hidden");
  stop.classList.add("hidden");
});

start.addEventListener("click", () => {
  start.classList.add("hidden");
  stop.classList.remove("hidden");
  fillWindow(barArray);
});

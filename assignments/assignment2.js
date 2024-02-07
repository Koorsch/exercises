"use strict";
import { randomNumber } from "../utils/randomNumber.js";

const stop = document.querySelector("#stop");
const start = document.querySelector("#start");
const clear = document.querySelector("#clear");
const window = document.querySelector("#barWindow");
window.style.display = "none";
let barArray = [];
barArray.length = 20;

stop.addEventListener("click", () => {
  start.classList.remove("hidden");
  stop.classList.add("hidden");
});

start.addEventListener("click", () => {
  start.classList.add("hidden");
  clear.classList.remove("hidden");
  stop.classList.remove("hidden");
  window.style.display = "grid";

  fillWindow(barArray);
});

clear.addEventListener("click", () => {
  clear.classList.add("hidden");
  stop.classList.add("hidden");
  start.classList.remove("hidden");
  window.style.display = "none";
  clearBars();
});

function startBars() {
  const list = document.querySelector("#barWindow");

  barArray.forEach((bar) => {
    console.log(bar);
    if (bar <= barArray.length - 1) {
      console.log(bar);
      list.innerHTML += `<li>${bar}</li>`;
    } else {
      console.log("error!");
    }
  });
}

function fillWindow(amount) {
  console.log("How many bars?", amount);
  amount.forEach((bar) => {
    setInterval(makeBars, 1000);
    console.log("making a bar");
  });
  //
}
const list = document.querySelector("ul");

function makeBars() {
  console.log("Making a bar");
  const makeItem = document.createElement("li");
  makeItem.style.setProperty("--height", randomNumber(100));
  window.appendChild(makeItem);
}
function clearBars() {
  console.log("stuff");
}

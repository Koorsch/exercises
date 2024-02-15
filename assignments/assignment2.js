// #### SECOND WAY, with pre-determined <li>
"use strict";
import { randomNumber } from "../utils/randomNumber.js";
const cueArr = [];

setInterval(generateBars, 1000);

function generateBars() {
  cueArr.push(randomNumber(100));
  document.querySelectorAll("li").forEach((li, i) => {
    li.style.setProperty("--height", cueArr[i]);
    if (cueArr.length > 20) {
      cueArr.shift();
    }
  });
}
// ### FIRST WAY, make <li>
/* "use strict";
import { randomNumber } from "../utils/randomNumber.js";

const list = document.querySelector("ul");
const arrCue = [];

setInterval(makeBars, 1000);
function makeBars() {
  arrCue.push(randomNumber(100));
  const li = document.createElement("li");
  li.style.setProperty("--height", randomNumber(100));
  list.appendChild(li);
  console.log("li");

  if (arrCue.length > 20) {
    arrCue.shift();
    list.removeChild(list.firstChild);
  }
} */

//Styled up and start,stop,clear -- To Be Done (at some point)
/* 
import { randomNumber } from "../utils/randomNumber.js";
const stop = document.querySelector("#stop");
const start = document.querySelector("#start");
const clear = document.querySelector("#clear");
const window = document.querySelector("#barWindow");
window.style.display = "none";
let barArray = [];
barArray.length = 20;
let chosenNumber = 20;

stop.addEventListener("click", () => {
  start.classList.remove("hidden");
  stop.classList.add("hidden");
});

start.addEventListener("click", () => {
  start.classList.add("hidden");
  clear.classList.remove("hidden");
  stop.classList.remove("hidden");
  window.classList.remove("hidden");
  window.style.display = "grid";

  if (chosenNumber <= barArray.length - 1) {
    console.log(this);
  }
});

clear.addEventListener("click", () => {
  clear.classList.add("hidden");
  stop.classList.add("hidden");
  start.classList.remove("hidden");
  window.style.display = "none";
  clearBars();
});

function makeBars() {
  console.log("Making a bar");
  const makeItem = document.createElement("li");
  makeItem.style.setProperty("--height", randomNumber(100));
  window.appendChild(makeItem);
}
function clearBars() {
  console.log("stuff");
}

setInterval(makeBars, 1000);
 */

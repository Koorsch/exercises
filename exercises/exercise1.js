// Make a function that returns a randomly generated number between 0 and 100
"use strict";
const rButton = document.querySelector("#randomBtn");
const rResult = document.querySelector("#randomResult");
const rBox = document.querySelector("#randomBox");

//Function called from clicking rButton.
//Values hardcoded in the EventListener function-call.
//Show rBox, replace its empty value with a max generated number of 100 and do console.log().
function randomNumber(value, result) {
  rBox.style.display = "block";
  let random = Math.floor(Math.random() * value);
  console.log("Computer says: " + random);
  result.innerHTML = random;
}
// Eventlistener on button, fires on click
// Parameters are the value of 100 and the selected result <span> where text is changed.
rButton.addEventListener("click", () => {
  randomNumber(100, rResult);
});

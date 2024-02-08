// Make a function that returns a randomly generated number between 0 and 100
"use strict";
const rButton = document.querySelector(".randomBtn");
const rResult = document.querySelector("h2");

//Function called from clicking rButton.
//Values hardcoded in the EventListener function-call.
//Show rBox, replace its empty value with a max generated number of 100 and do console.log().
function randomNumber(value, result) {
  let random = Math.floor(Math.random() * value + 1);
  console.log("Computer says: " + random);
  //This will return just the text contained.
  result.textContent = "Random number generated: " + random;
}
// Eventlistener on button, fires on click
// Parameters are the value of 100 and the selected result <span> where text is changed.
rButton.addEventListener("click", () => {
  randomNumber(100, rResult);
});

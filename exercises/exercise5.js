"use strict";

const output = document.querySelector("h2");
const inputHeight = document.querySelector("#inputFieldHeight");
const inputWidth = document.querySelector("#inputFieldWidth");

const meters = document.querySelector("#meters").addEventListener("click", () => {
  let height = Number(inputHeight.value);
  let width = Number(inputWidth.value);
  let squared = squareMeters(height, width);
  output.textContent = `Meters squared: ${squared}²`;
});
const feet = document.querySelector("#feet").addEventListener("click", () => {
  let convertToFeet = Number(inputHeight.value) + Number(inputWidth.value);
  let sendFeet = metersToFeet(convertToFeet);
  output.textContent = `Meters to feet: ${sendFeet}`;
});

function squareMeters(height, width) {
  return height * width;
}

function metersToFeet(meters) {
  return meters * 10.76391042;
}

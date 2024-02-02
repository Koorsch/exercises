"use strict";

const output1 = document.querySelector("h2");
const output2 = document.querySelector("h3");
const inputHeight = document.querySelector("#inputFieldHeight");
const inputWidth = document.querySelector("#inputFieldWidth");

const meters = document.querySelector("#meters").addEventListener("click", () => {
  let height = Number(inputHeight.value);
  let width = Number(inputWidth.value);
  let squared = squareMeters(height, width);
  output1.textContent = `Height + Width: ${height + width}m`;
  output2.textContent = `Meters squared: ${squared}m²`;
});
const feet = document.querySelector("#feet").addEventListener("click", () => {
  let convertToFeet = Number(inputHeight.value) + Number(inputWidth.value);
  let sendFeet = metersToFeet(convertToFeet);
  output1.textContent = `Height + Width: ${sendFeet}ft`;
  output2.textContent = `Feet²: ${sendFeet * 2}ft²`;
});

function squareMeters(height, width) {
  return height * width;
}

function metersToFeet(meters) {
  return meters * 10.76391042;
}

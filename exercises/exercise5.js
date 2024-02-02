"use strict";

const output1 = document.querySelector("h2");
const output2 = document.querySelector("h3");
const inputHeight = document.querySelector("#inputFieldHeight");
const inputWidth = document.querySelector("#inputFieldWidth");

const area = document.querySelector("#area").addEventListener("click", () => {
  let height = Number(inputHeight.value);
  let width = Number(inputWidth.value);
  let areal = calcArea(height, width);
  output1.textContent = `Area: ${areal}m`;
  output2.classList.add("hidden");
});

const meters = document.querySelector("#meters").addEventListener("click", () => {
  let height = Number(inputHeight.value);
  let width = Number(inputWidth.value);
  let squared = squareMeters(height, width);
  output1.textContent = `Height + Width: ${height + width}m`;
  output2.textContent = `Meters squared: ${squared}m²`;
  output2.classList.remove("hidden");
});
const feet = document.querySelector("#feet").addEventListener("click", () => {
  let convertToFeet = Number(inputHeight.value) + Number(inputWidth.value);
  let sendFeet = metersToFeet(convertToFeet);
  output1.textContent = `Height + Width: ${sendFeet}ft`;
  output2.textContent = `Feet²: ${sendFeet * 2}ft²`;
  output2.classList.remove("hidden");
});

function calcArea(height, width) {
  return height * 2 + width * 2;
}

function squareMeters(height, width) {
  return height * width;
}

function metersToFeet(meters) {
  return meters * 10.76391042;
}

"use strict";

const value1 = document.querySelector("#value");
const value2 = document.querySelector("#moms");
let calculation = document.querySelector("h2");
let input = document.querySelector("#inputValues");

const btn = document.querySelector("#calcBtn").addEventListener("click", () => {
  let amount = Number(value1.value);
  let moms = Number(value2.value);
  let total = addMoms(amount, moms);
  calculation.textContent = `You calculated ${total}`;
  input.classList.remove("hidden");
  input.textContent = `Value = ${amount} \nMoms= ${moms}%`;
  calculation.scrollLeft;
});

function addMoms(amount, moms = 25) {
  return amount + (amount * moms) / 100;
}

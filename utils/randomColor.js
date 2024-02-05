import { randomNumber } from "./randomNumber.js";
export function randomRGBColor() {
  const r = randomNumber(255);
  const g = randomNumber(255);
  const b = randomNumber(255);
  return `rgb(${r}, ${g}, ${b})`;
}
export function randomHSLColor() {
  const h = randomNumber(360);
  const s = randomNumber(100);
  const l = randomNumber(100);

  return `hsl(${h}, ${s}%, ${l}%)`;
}

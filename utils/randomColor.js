export function getRandomHSLColor() {
  const r = getRandomNumber(255);
  const g = getRandomNumber(255);
  const b = getRandomNumber(255);
  return `rgb(${r}, ${g}, ${b})`;
}
export function getRandomHSLColor() {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(100);

  return `hsl(${h}, ${s}%, ${l}%)`;
}

export function animateText(yourText) {
  yourText.forEach((content) => {
    let target = target.textContent;
    const splittedText = splitToChars(content);
    target.innerHTML = splittedText;
  });

  function splitToChars(string) {
    return string.split("").map(wrapInSpan).join("");
  }
  function wrapInSpan(char, i) {
    return `<span class="animateChar" style="--i: ${i}">${char}</span>`;
  }
}

const profanity = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

const btn = document.querySelector("button").addEventListener("click", checkSFW);
let text = document.querySelector("p").textContent;

function checkSFW() {
  //Method1 iterating through the array
  profanity.forEach((curse) => {
    text = text.replaceAll(curse.bad, curse.good);
    console.log(`Replacing ${curse.bad} with ${curse.good}`);
  });

  //Method2 splitting and joining
  //   const splittedArr = text.split(profanity[0].bad);
  //   console.log("splittedArr", splittedArr);
  //   console.log("joinedArr", splittedArr.join(profanity[0].good));
  //   profanity.forEach((curse) => {
  //     text = text.split(curse.bad).join(curse.good);
  //   });

  document.querySelector("p").textContent = text;
}

// #### Not quite done yet
// missing flags to see if it has been switched out
// if switched, apply color around the switched words.
function isSafe() {
  if (text.includes(profanity.bad)) {
  }
  return !profanity.some((item) => text.includes(item.bad));
}

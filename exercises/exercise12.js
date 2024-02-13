document.querySelector("select").addEventListener("change", selectChange);
let currentCol = "orange";

function selectChange(evt) {
  //Change variable to be the value of the chosen object in the dropdown
  currentCol = evt.target.value;
  //Stop animation by default when it runs
  document.querySelector("#body").classList.remove("ani");
  document.querySelector("#body").style.setProperty("--bgcolor", evt.target.value);
  document.querySelector("#body").addEventListener("animationend", putColorOff);
  document.querySelector("#body").classList.add("ani");
  console.log("change", evt.target.value, "\nCurrent color: ", currentCol);
}
function putColorOff() {
  document.querySelector("#body").classList.remove("ani");
  document.querySelector("#body").style.backgroundColor = currentCol;
  console.log(currentCol);
}

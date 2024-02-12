const switcher = document.querySelector("select").addEventListener("change", (evt) => {
  console.log("Current target: ", evt.currentTarget.value);
  let valuesOf = evt.currentTarget.value;
  //send the chosen value of the dropdown as the data to the function
  colorChange(valuesOf);
});

function colorChange(event) {
  //change the values of the variables in css to reflect the chosen value
  document.querySelector("section").dataset.theme = event;
  console.log(event);
}

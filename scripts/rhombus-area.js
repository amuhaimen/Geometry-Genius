function calculateRhombusArea() {
  const diagonalsOne = getInputValueById("diagonals_one");
  const diagonalsTwo = getInputValueById("diagonals_two");
  const area = 0.5 * diagonalsOne * diagonalsTwo;

  setInnerTextById("rhombus_area", area);
  //   console.log("clicked");
}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputText = inputField.value;
  const inputValue = parseFloat(inputText);
  return inputValue;
}

function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

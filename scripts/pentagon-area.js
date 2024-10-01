function calculatePentagonArea() {
  const pentagonPerimeter = getInputValueById("pentagon_perimeter");
  const pentagonBase = getInputValueById("pentagon_base");
  const area = 0.5 * pentagonPerimeter * pentagonBase;

  setInnerTextById("pentagon_area", area);
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

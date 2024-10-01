function calculateParallelogram() {
  const base = getInputValueById("Parallelogram_base");
  const height = getInputValueById("Parallelogram_height");
  const area = base * height;
  setInnerTextById("Parallelogram_area", area);
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

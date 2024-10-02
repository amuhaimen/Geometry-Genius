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

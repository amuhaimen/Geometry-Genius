function calculateEllipseArea() {
  const semiMajorAxis = getInputValueById("semi_major_axis");
  const semiMinorAxis = getInputValueById("semi_minor_axis");
  const areaNotFixed = Math.PI * semiMajorAxis * semiMinorAxis;
  const areaFixed = areaNotFixed.toFixed(2);

  setInnerTextById("ellipse_area", areaFixed);
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

function rectangleAreaCalculate() {
  const widthField = document.getElementById("rectangle_width");
  const widthText = widthField.value;
  const widthValue = parseFloat(widthText);

  const lengthField = document.getElementById("rectangle_length");
  const lengthText = lengthField.value;
  const lengthValue = parseFloat(lengthText);

  //   rectangle area calculation
  const area = widthValue * lengthValue;
  const rectangleArea = document.getElementById("rectangle_area");
  rectangleArea.innerText = area;
}

function rectangleAreaCalculate() {
  const rectangleWidth = getInputValueById("rectangle_width");
  const rectangleLength = getInputValueById("rectangle_length");
  const area = rectangleWidth * rectangleLength;

  setInnerTextById("rectangle_area", area);
}

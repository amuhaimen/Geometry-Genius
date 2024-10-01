/**
 Objective: get base , height of a triangle. Calculate the area by using the provided formula. and then display the area.
 step 1: get base value of the triangle.
 step 2: added an id in the base input field.
 step 3: use getElementById to access the input field.
 step 4: get value from the input field.(value is string now)
 step 5: convert the value to a number , use parseFloat.
 */

function triangleCalculation() {
  const baseField = document.getElementById("triangle_base");
  const baseText = baseField.value;
  const baseValue = parseFloat(baseText);

  const heightField = document.getElementById("triangle_height");
  const heightText = heightField.value;
  const heightValue = parseFloat(heightText);

  //   area
  const area = 0.5 * baseValue * heightValue;
  const triangleArea = document.getElementById("triangle_area");
  triangleArea.innerText = area;
}

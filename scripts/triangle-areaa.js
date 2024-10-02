/**
 Objective: get base , height of a triangle. Calculate the area by using the provided formula. and then display the area.
 step 1: get base value of the triangle.
 step 2: added an id in the base input field.
 step 3: use getElementById to access the input field.
 step 4: get value from the input field.(value is string now)
 step 5: convert the value to a number , use parseFloat.
 */

function triangleCalculation() {
  const triangleBase = getInputValueById("triangle_base");
  const triangleHeight = getInputValueById("triangle_height");
  const area = 0.5 * triangleBase * triangleHeight;

  setInnerTextById("triangle_area", area);
}

const triangle = document.getElementById("triangle");
triangle.addEventListener("mouseenter", function () {
  triangle.style.backgroundColor = "#FBBCED";
  triangle.style.transition = "background-color 0.5s";
});
triangle.addEventListener("mouseleave", function () {
  triangle.style.backgroundColor = "transparent";
  triangle.style.transition = "background-color 0.5s";
});

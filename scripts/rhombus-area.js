function calculateRhombusArea() {
  const diagonalsOne = getInputValueById("diagonals_one");
  const diagonalsTwo = getInputValueById("diagonals_two");
  const area = 0.5 * diagonalsOne * diagonalsTwo;

  setInnerTextById("rhombus_area", area);
  //   console.log("clicked");
}

const rhombus = document.getElementById("rhombus");
rhombus.addEventListener("mouseenter", function () {
  rhombus.style.backgroundColor = "#69C7F0";
  rhombus.style.transition = "background-color 0.5s";
});
rhombus.addEventListener("mouseleave", function () {
  rhombus.style.backgroundColor = "transparent";
  rhombus.style.transition = "background-color 0.5s";
});

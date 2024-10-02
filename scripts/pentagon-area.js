function calculatePentagonArea() {
  const pentagonPerimeter = getInputValueById("pentagon_perimeter");
  const pentagonBase = getInputValueById("pentagon_base");
  const area = 0.5 * pentagonPerimeter * pentagonBase;

  setInnerTextById("pentagon_area", area);
  //   console.log("clicked");
}

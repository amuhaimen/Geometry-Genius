function calculateEllipseArea() {
  const semiMajorAxis = getInputValueById("semi_major_axis");
  const semiMinorAxis = getInputValueById("semi_minor_axis");
  const areaNotFixed = Math.PI * semiMajorAxis * semiMinorAxis;
  const areaFixed = areaNotFixed.toFixed(2);

  setInnerTextById("ellipse_area", areaFixed);
}

function calculateParallelogram() {
  const base = getInputValueById("Parallelogram_base");
  const height = getInputValueById("Parallelogram_height");
  const area = base * height;
  setInnerTextById("Parallelogram_area", area);
}

// This string based rounding is to get around some funky bitwise
// stuff happening with division.
export function roundToHundredths(num: number) {
  return Math.round(100 * num) / 100;
}

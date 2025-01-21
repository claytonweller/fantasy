export function sortStringsAlphabetical(input: string[]):string[]{
  return input.sort((a,b) => a.localeCompare(b))
}
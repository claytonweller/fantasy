export function addCommasToNumber(number: number){
  const numberString = `${number}`
  const groups = []
  const groupCount = Math.ceil(numberString.length / 3)
  for (let i = 0; i < groupCount; i++) {
    const l = numberString.length
    const startIndex =  l - ((i+1)*3)
    const start = startIndex < 0 
      ? 0 
      : startIndex
    const group = numberString.slice(start, l - ((i*3)))
    groups.unshift(group)
  }
  const comma = groups.join(',')
  return comma
}

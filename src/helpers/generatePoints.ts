interface Point {
  x: number,
  y: number
}

/**
 * 
 * Receives an array of numbers (values Y of chart) and generate an object
 * of Point (add x coordinates). If reverse is true, take de last SIZE numbers
 * in the values array
 * 
 * @param size number
 * @param values number[]
 * @param reverse boolean
 * @returns Point[]
 */
export const generatePoints = (size: number, values: number[], reverse: boolean) : Point[] => {
  let result : Point[] = [];

  if(reverse) {
    for(let i = values.length - 1; i > (values.length - 1) - size; i--) {
      result.push({
        x: i,
        y: values[i]
      })
    }
    return result;
  }

  for(let i = 0; i < size; i++) {
    result.push({
      x: i,
      y: values[i]
    })
  }

  return result;
}
import { randomBetween } from "./randomBetween";

interface DataResult {
  values: number[],
  color: string
}

/**
 * 
 * Function that create an array of random numbers between two values.
 * Returns a color depending on whether the last value is in the first third of the interval, 
 * in the second or in the third, in order to give styles to the graph that will represent the values
 * 
 * @param size 
 * @param min 
 * @param max 
 * @returns DataResult
 */

export function generateData(size: number, min: number, max: number) : DataResult {
  let color = "";
  size = Math.floor(size); min = Math.floor(min); max = Math.floor(max);
  let result : number[] = [];
  for (let i = 0; i < size; i++) {
    result[i] = Math.round(randomBetween(min, max));
  }
  
  const interval = (max - min) / 3;
  const diff = result[size - 1] - min;
  const ind = Math.floor(diff / interval);

  /**
   * FIXME: Colors are not taken from vars in SCSS, so if you want to change it you
   * have to do it manually
   */


  if(ind == 0) color = "#27AC23"
  else if(ind == 1) color = "#DDE054"
  else color = "#FC3C3C"

  return {
    values: result,
    color: color
  };
}
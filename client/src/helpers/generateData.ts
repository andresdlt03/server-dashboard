import { randomBetween } from "./randomBetween";

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

export function generateData(size: number, min: number, max: number) : number[] {
  size = Math.floor(size); min = Math.floor(min); max = Math.floor(max);
  let result : number[] = [];
  for (let i = 0; i < size; i++) {
    result[i] = Math.round(randomBetween(min, max));
  }

  return result;
}
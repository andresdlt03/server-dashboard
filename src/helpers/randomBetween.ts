
/**
 * 
 * Returns a random number between two values
 * 
 * @param min 
 * @param max 
 * @returns number
 */
export function randomBetween(min: number, max: number) : number {
  return Math.random() * (max - min) + min;
}
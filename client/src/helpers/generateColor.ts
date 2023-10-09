import { Range } from "../store/GlobalStore";

export function generateColor(range: Range, value: number) {
  
  const interval = (range.min - range.max) / 3;
  const diff = value - range.max;
  const ind = Math.floor(diff / interval);

  if(ind == 2) return "#27AC23" // green
  else if(ind == 1) return "#DDE054" // yellow
  else return "#FC3C3C" // red

}
import { Range } from "../store/GlobalStore";

export type StateColor = string;

enum Color {
  CORRECT = "#27AC23",
  WARNING = "#DDE054",
  CRITICAL = "#FC3C3C"
}

export function generateColor(range: Range, value: number): StateColor {
  
  const interval = (range.min - range.max) / 3;
  const diff = value - range.max;
  const ind = Math.floor(diff / interval);

  if(ind == 2) return Color.CORRECT // green
  else if(ind == 1) return Color.WARNING // yellow
  else return Color.CRITICAL // red

}
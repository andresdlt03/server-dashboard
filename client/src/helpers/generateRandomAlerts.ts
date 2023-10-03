import { generateRandomDate } from "./generateRandomDate"

/**
 * Function that returns an array of random Alerts, with a title and random date
 * @param num 
 */

interface Alert {
  title: string,
  date: Date
}

export const generateRandomAlerts = (num: number) : Alert[] => {
  
  let result = []

  const alertTitles = [
    "Critic CPU use",
    "High database delay",
    "Database attack attempt",
    "Firewall event",
    "High response delay",
  ]

  for(let i = 0; i < num; i++) {
    result[i] = {
      title: alertTitles[getRandomInt(0, alertTitles.length)],
      date: generateRandomDate()
    }
  }

  return result;

}

const getRandomInt = (min: number, max: number) : number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}


export const formatDate = (date: Date) : string => {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
}

export const formatTime = (date: Date) : string => {
  return `${padTo2Digits(date.getHours())}:${padTo2Digits(date.getMinutes())}:${padTo2Digits(date.getSeconds())}`
}

const padTo2Digits = (num : number) : string => {
  return num.toString().padStart(2, '0');
}
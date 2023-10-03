

export const generateRandomDate = (start: Date = new Date('2022-01-01'), end: Date = new Date()) : Date => { 
  const timeDiff = end.getTime() - start.getTime();
  const randomTime = Math.random() * timeDiff;
  const randomDate = new Date(start.getTime() + randomTime);
  return randomDate;
}
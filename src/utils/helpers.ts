import reviews, { lastNum } from './data';

export const getNextIndex = (index: number) => {
  if (index === lastNum) return 0;

  return index + 1;
};

export const getPrevIndex = (index: number) => {
  if (index === 0) return lastNum;

  return index - 1;
};

export const getRandomIndex = (index: number) => {
  const random = Math.floor(Math.random() * reviews.length);

  if (random === index) return getNextIndex(index);

  return random;
};

export const countNumberOfPrimesFromRange = (rangeStart: number, rangeStop: number) => {
  const result = [];
  const arrayToCheck = Array.from(
    { length: rangeStop - rangeStart + 1 },
    (_, index) => index + rangeStart,
  );
  for (let i = rangeStart; i <= arrayToCheck.length; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result.length;
};

const isPrime = (num: number) => {
  if (num < 1) {
    return;
  }
  const result = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return result.length === 2 ? true : false;
};

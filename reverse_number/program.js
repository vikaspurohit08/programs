var reverse = function (x) {
  const higherLimit = Math.pow(2, 31) - 1;
  const lowerLimit = Math.pow(2, 31) * -1;
  const isNegative = x < 0;
  const num = isNegative ? -1 * x : x;
  let numbers = `${num}`.length - 1;

  let finalValue = 0;
  let currentValue = num;
  do {
    const current = currentValue % 10;
    currentValue = Math.floor(currentValue / 10);
    const positionValue = Math.pow(10, numbers);
    finalValue += positionValue * current;
    numbers--; //1 //0
  } while (numbers >= 0);

  if (finalValue < lowerLimit || finalValue > higherLimit) {
    return 0;
  }
  return isNegative ? -1 * finalValue : finalValue;
};

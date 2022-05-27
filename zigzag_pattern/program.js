var convert = function (s, numRows) {
  let finalString = "";
  if (numRows === 1) {
    return s;
  }
  let set = [];
  for (let i = 0; i < numRows; i++) {
    set.push(i * 2);
  }
  let index = numRows - 1;
  for (let i = 0; i < numRows; i++) {
    let incrementValue = set[index];
    const maxIncrementValue = set[numRows - 1];
    let currentIndex = i;
    while (currentIndex < s.length) {
      finalString += s[currentIndex];
      currentIndex += incrementValue;
      incrementValue =
        incrementValue === set[index] && set[index] !== maxIncrementValue
          ? maxIncrementValue - set[index]
          : set[index];
    }
    if (index === 1) {
      index = numRows - 1;
    } else {
      index--;
    }
  }
  return finalString;
};

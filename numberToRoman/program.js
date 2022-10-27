/**
 * @param {number} num
 * @return {string}
 */
const romanIntMap = [
  { value: 1, roman: "I", diff: 0 },
  { value: 5, roman: "V", diff: 1 },
  { value: 10, roman: "X", diff: 1 },
  { value: 50, roman: "L", diff: 10 },
  { value: 100, roman: "C", diff: 10 },
  { value: 500, roman: "D", diff: 100 },
  { value: 1000, roman: "M", diff: 100 },
];

var intToRoman = function (num) {
  let roman = "";
  while (num > 0) {
    if (num >= 1000) {
      roman += "M";
      num -= 1000;
    } else {
      let minIndex = 0;
      let maxIndex = 0;
      for (let i = 0; i < romanIntMap.length; i++) {
        if (romanIntMap[i].value <= num && romanIntMap[i + 1].value >= num) {
          minIndex = i;
          maxIndex = i + 1;
        }
      }
      if (romanIntMap[maxIndex].value - num <= romanIntMap[maxIndex].diff) {
        const changeIndex = minIndex % 2 === 0 ? minIndex : minIndex - 1;
        roman += romanIntMap[changeIndex].roman + romanIntMap[maxIndex].roman;
        num -= romanIntMap[maxIndex].value - romanIntMap[changeIndex].value;
      } else {
        roman += romanIntMap[minIndex].roman;
        num -= romanIntMap[minIndex].value;
      }
    }
  }
  return roman;
};

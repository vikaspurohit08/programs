const numberLetterMap = new Map([
  ["2", ["a", "b", "c"]],
  ["3", ["d", "e", "f"]],
  ["4", ["g", "h", "i"]],
  ["5", ["j", "k", "l"]],
  ["6", ["m", "n", "o"]],
  ["7", ["p", "q", "r", "s"]],
  ["8", ["t", "u", "v"]],
  ["9", ["w", "x", "y", "z"]],
]);

var letterCombinations = function (digits) {
  let lettersArr = [];
  for (let i = 0; i < digits.length; i++) {
    lettersArr.push(numberLetterMap.get(digits[i]));
  }
  //   console.log(lettersArr);
  let pairs = [];
  for (let i = 0; i < lettersArr.length; i++) {
    for (let j = 0; j < lettersArr[i].length; j++) {
      let pair = lettersArr[i][j];
    }
  }
};

let a = ["a", "b", "c"];
let b = ["d", "e", "f"];

const findPairs = () => {
  let pairs = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      pairs.push([a[i], b[j]]);
    }
  }
  console.log(pairs);
};

// letterCombinations("23");
findPairs();

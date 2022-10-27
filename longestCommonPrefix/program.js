const longestCommonPrefix = (strs) => {
  let result = "";
  let continueLoop = true;
  if (strs.length < 2) {
    return strs && strs[0];
  }
  for (let i = 0; continueLoop; i++) {
    let currentStr = "";
    for (let j = 0; j < strs.length; j++) {
      if (j === 0) {
        currentStr += strs[j][i];
      } else if (strs[j][i] !== currentStr) {
        continueLoop = false;
        break;
      }
    }
    if (continueLoop) {
      result += currentStr;
    }
  }
  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

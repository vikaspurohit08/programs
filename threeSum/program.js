var threeSum = function (nums) {
  let pairs = [];
  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = sortedNums.length - 1;
    while (j < k) {
      const sum = sortedNums[i] + sortedNums[j] + sortedNums[k];
      if (sum === 0) {
        const current = [sortedNums[i], sortedNums[j], sortedNums[k]];
        pairs.push(current);
        j++;
        while (sortedNums[j] === sortedNums[j - 1] && j < k) {
          j++;
        }
      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }

  return pairs;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

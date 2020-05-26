function sumOfAllOddNumbers(nums) {
  // Insert code here;
  let count = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] % 2 == 1) {
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;

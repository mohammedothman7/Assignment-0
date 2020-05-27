function pairSum(nums, target) {
  // Insert code here;
  var set = new Set();

  if (nums.length <= 1) {
    throw new Error("Not enough numbers in array");
  }

  for (var i in nums) {
    var need = Math.abs(target - nums[i]);
    if (set.has(nums[i])) {
      return true;
    } else {
      set.add(need);
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;

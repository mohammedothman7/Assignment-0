class MySolution {
  constructor() {
    this.flag = false;
  }

  binarySearch(nums, target) {
    // Insert code here;
    var start = 0;
    var end = nums.length - 1;

    while (start <= end) {
      var middle = Math.floor(end / 2);

      if (nums[middle] === target) {
        return true;
      } else if (nums[middle] > target) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }
    return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;

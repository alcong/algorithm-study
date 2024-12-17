/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
  for (let i = 0; i < k; i++) {
      let min = Infinity;
      let minIdx = -1;
      for (let idx = 0; idx < nums.length; idx++) {
          if (nums[idx] < min) {
              min = nums[idx];
              minIdx = idx;
          }
      }
      nums[minIdx] *= multiplier;
  }

  return nums;
};
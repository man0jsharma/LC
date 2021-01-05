/*
 * @lc app=leetcode id=523 lang=javascript
 *
 * [523] Continuous Subarray Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    let hash = { 0: -1 };
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        sum = k !== 0 ? sum % k : sum
        if (hash[sum] !== undefined) {
            if ((i - hash[sum]) > 1) return true;
        } else
            hash[sum] = i
    }

    return false;
};

// console.log(checkSubarraySum([23, 2, 6, 4, 7], 0))
console.log(checkSubarraySum([0, 1, 0], 0))
// @lc code=end


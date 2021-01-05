/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {

    let hash = { 0: 1 }
    let sum = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (hash[sum - k] !== undefined) {
            count += hash[sum - k]
        }
        hash[sum] = -~hash[sum]
    }
    return count;
};


// subarraySum([1, 2, 3], 3)
// @lc code=end


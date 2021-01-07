/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (nums.length == 0) {
        return 0;
    }

    let maxans = 1;
    let dp = Array.from({ length: nums.length }, () => 1)
    for (let i = 1; i < nums.length; i++) {
        let maxval = 0;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                maxval = Math.max(maxval, dp[j]);
            }
        }
        dp[i] = maxval + 1;
        maxans = Math.max(maxans, dp[i]);
    }
    return maxans;
};

// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101]))
// console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]))
// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
// console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))
// @lc code=end


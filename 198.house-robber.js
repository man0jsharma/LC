/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    return dp(nums, nums.length - 1);
};


const dp = (nums, i, memo = {}) => {
    if (i < 0) {
        return 0
    }
    if (memo[i] !== undefined) {
        return memo[i]
    }
    const current = nums[i];
    return memo[i] = Math.max(
        dp(nums, i - 2, memo) + current,
        dp(nums, i - 1, memo)
    )
}

// @lc code=end


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
    console.log({ nums })
    const memo = {}
    return dp(nums, nums.length - 1, memo);
};


const dp = (nums, i, memo) => {
    if (i < 0) {
        return 0
    }

    if (memo[i] != undefined) {
        return memo[i]
    }
    let result = Math.max(dp(nums, i - 2, memo) + nums[i], dp(nums, i - 1, memo))
    memo[i] = result;
    return result;
}

// @lc code=end


/*
 * @lc app=leetcode id=376 lang=javascript
 *
 * [376] Wiggle Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
    if (nums.length === 0) return 0;
    let up = 1;
    let down = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            down = up + 1;
        }
        if (nums[i] > nums[i - 1]) {
            up = down + 1;
        }
    }
    return Math.max(up, down)
};
// @lc code=end


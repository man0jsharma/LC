/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let i = 0;
    while (i < nums.length) {
        if (target <= nums[i]) {
            return i;
        }
        i++;
    }
    return i;
};

// @lc code=end


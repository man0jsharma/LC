/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let ones = 0, twos = 0;

    for (let i of nums) {
        ones = (ones ^ i) & (~twos)
        twos = (twos ^ i) & (~ones)
    }

    return ones;
};

// @lc code=end


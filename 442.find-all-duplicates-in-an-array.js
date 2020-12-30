/*
 * @lc app=leetcode id=442 lang=javascript
 *
 * [442] Find All Duplicates in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let res = []
    for (let x of nums) {
        if (nums[Math.abs(x) - 1] < 0) {
            res.push(Math.abs(x));
        } else {
            nums[Math.abs(x) - 1] *= -1
        }
    }
    return res;
};


// @lc code=end


/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let count = 0;
    let prev = null;
    for (let i = 0; i < nums.length; i++) {
        if (prev === null || prev !== nums[i]) {
            nums[count++] = nums[i]
        }
        prev = nums[i]
    }
    return count;
};

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
// console.log(removeDuplicates([-1, 0, 0, 0, 0, 3, 3]))
// @lc code=end


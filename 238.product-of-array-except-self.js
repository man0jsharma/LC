/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    let n = nums.length;

    let l = [1]
    for (let i = 0; i < n - 1; i++) {
        l[i + 1] = nums[i] * l[i]
    }

    let r = []
    r[n - 1] = 1;
    for (let i = n - 1; i > 0; i--) {
        r[i - 1] = nums[i] * r[i];
    }

    let res = []
    for (let i = 0; i < n; i++) {
        res.push(l[i] * r[i])
    }
    return res;

    //Taking the product from left starting with 1 in the first Index
    // Taking the product from right starting with 1 in the last Index
    // Multiply both - that's the answer
};
// @lc code=end


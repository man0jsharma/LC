/*
 * @lc app=leetcode id=334 lang=javascript
 *
 * [334] Increasing Triplet Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {

    let first = second = Number.MAX_SAFE_INTEGER

    // Find the smallest first smallest number
    // then find the second one greater than the first element
    // ,reset the first one if it's smaller

    for (let n of nums) {
        if (n <= first) {
            first = n;
        } else if (n <= second) {
            second = n;
        } else
            return true
    }
    return false;
};

// @lc code=end


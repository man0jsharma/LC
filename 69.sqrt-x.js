/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let i = 1;

    while (Math.pow(i, 2) <= x) {
        i++
    }
    return i - 1;
};

// @lc code=end


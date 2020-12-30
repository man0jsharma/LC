/*
 * @lc app=leetcode id=365 lang=javascript
 *
 * [365] Water and Jug Problem
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */


const GCD = (a, b) => {
    if (!b) {
        return a
    }
    return GCD(b, a % b)
}

var canMeasureWater = function (x, y, z) {
    if ((x + y) < z) return false;
    if (x == z || y == z || x + y == z) return true;
    return z % GCD(x, y) === 0;
};
// @lc code=end


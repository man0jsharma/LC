/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let count = 0;
    let isNegative = false;

    if (dividend < 0) {
        isNegative = !isNegative;
    }
    if (divisor < 0) {
        isNegative = !isNegative
    }
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    if (dividend === divisor) {
        count = 1;
    }
    if (divisor === 1) {
        count = dividend
    } else
        while (dividend > divisor) {//10 > 3 =>  7 > 3 => 4 > 3
            dividend -= divisor; // 7 => 4 => 1
            count++; //1 => 2 => 3
        }
    return isNegative ? (0 - count) : count;
};
// @lc code=end


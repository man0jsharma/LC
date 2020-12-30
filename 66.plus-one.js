/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    let end = digits.length - 1;
    let carry = 1;

    while (end >= 0) {
        res = digits[end] + carry;
        digits[end] = Math.floor(res % 10);
        carry = Math.floor(res / 10)
        end--;
    }

    if (carry) {
        return [carry].concat(...digits)
    }

    return digits
};
// @lc code=end


/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {

    let sqrt = n;
    let previous = [];
    while (sqrt !== 1) {
        const digits = getDigits(sqrt)
        sqrt = Math.floor(digits.reduce((acc, iter) => acc + (iter ** 2), 0))
        if (!previous.includes(sqrt))
            previous.push(sqrt)
        else
            return false;
    }
    return true;
};

var getDigits = function (n) {
    let temp = n;
    let digits = [];
    while (temp >= 1) {
        digits.push(temp % 10);
        temp = Math.floor(temp / 10);
    }
    return digits;
}
// @lc code=end


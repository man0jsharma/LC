/*
 * @lc app=leetcode id=400 lang=javascript
 *
 * [400] Nth Digit
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    let len = 1, i = 1;
    let range = 9;
    while (n > len * range) {
        n -= len * range;
        len++;
        range *= 10;
        i *= 10;
    }

    i += (n - 1) / len;
    let s = i.toString();
    return Number.parseInt(s.charAt((n - 1) % len));
}


// @lc code=end


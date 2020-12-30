/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    const isNegative = n < 0;
    if (x === 1) {
        return x;
    } else if (x === -1) {
        n % 2 === 0 ? 1 : -1
    }

    n = isNegative ? n * -1 : n;

    const res = pow(x, n)
    if (!isNegative) {
        return res;
    } else {
        return 1 / res;
    }
};


const memo = [];
const pow = (x, n) => {
    if (n <= 0) {
        return 1
    }
    if (n === 1) {
        return x;
    }
    if (memo[n - 1]) {
        return memo[n - 1]
    }
    memo[n - 1] = x * pow(x, n - 1)
    return memo[n - 1]
}

// @lc code=end


/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, memo = []) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 2;
    if (memo[n] !== undefined) {
        return memo[n];
    }
    return memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)
};

// console.log(climbStairs(45))
// @lc code=end


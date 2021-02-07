/*
 * @lc app=leetcode id=1035 lang=javascript
 *
 * [1035] Uncrossed Lines
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function (a, b) {
    let [m, n] = [a.length, b.length]
    let dp = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0))
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (a[i - 1] === b[j - 1])
                dp[i][j] = 1 + dp[i - 1][j - 1]
            else
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
        }
    }
    // console.log(dp)
    return dp[m][n];
};
// @lc code=end


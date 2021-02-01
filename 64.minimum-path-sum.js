/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let [m, n] = [grid.length, grid[0].length]

    let isValid = (i, j) => (i >= 0 && j >= 0 && i < m && j < n)

    let dp = Array.from({ length: m }, () => Array.from({ length: n }));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let left = isValid(i, j - 1) ? dp[i][j - 1] : Number.POSITIVE_INFINITY
            let top = isValid(i - 1, j) ? dp[i - 1][j] : Number.POSITIVE_INFINITY
            if (i === 0 && j === 0) {
                dp[i][j] = grid[i][j] // At the beginning
            } else {
                dp[i][j] = grid[i][j] + Math.min(left, top);
            }
        }
    }

    return dp[m - 1][n - 1]
};
// @lc code=end


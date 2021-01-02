/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {

    let n = s.length;
    let dp = Array.from({ length: n }, () => (
        Array.from({ length: n }, () => 0)
    ))

    let count = 0;

    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
        count++;
    }

    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = 1
            count++;
        }
    }

    for (let len = 3; len <= n; ++len)
        for (let i = 0, j = i + len - 1; j < n; ++i, ++j) {
            if (s[i] === s[j] && dp[i + 1][j - 1] === 1) {
                dp[i][j] = 1
                count++;
            }
        }

    return count;
};

// @lc code=end


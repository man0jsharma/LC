/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=end
/**
 * @param {string} s
 * @return {string}
 */


var longestPalindrome = (str) => {
    let n = str.length;

    let dp = Array.from({ length: n }, () => Array.from({ length: n }, () => false));

    let max = Number.NEGATIVE_INFINITY

    let start = 0;
    let end = 0;
    for (let i = 0; i < n; i++) {
        dp[i][i] = true
    }

    for (let i = 0; i < n - 1; i++) {
        if (str[i] === str[i + 1]) {
            start = i;
            end = i + 1
            dp[i][i + 1] = true
        }
    }

    for (let len = n - 2; len >= 0; len--)
        for (let j = n - len, i = 0; i < len; j++, i++) {
            dp[i][j] = str[i] === str[j] && dp[i + 1][j - 1]
            if (dp[i][j] && max < j - i + 1) {
                max = j - i + 1;
                start = i;
                end = j
            }
        }

    return str.slice(start, end + 1)
}


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


const { matprint } = require('./lib/matPrint')
var longestPalindrome = function (s) {
    let n = s.length;
    let dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))

    const dyn = (s, dp, i = 0, j = n - 1, pIndex = n - 1) => {
        if (i > j) {
            return 0
        }
        if (i === j) {
            dp[i][j] = 1
            return 1;
        }
        if (s[i] === s[j]) {
            dp[i][j] = 2 + dyn(s, dp, i + 1, j - 1)
        } else
            dp[i][j] = Math.max(dyn(s, dp, i, j - 1), dyn(s, dp, i + 1, j))
        return dp[i][j]
    }

    let maxLength = dyn(s, dp);
    let end = -1
    for (let j = 0; j < n; j++) {
        if (dp[0][j] === maxLength) {
            end = j
            break;
        }
    }

    return s.substring(end - maxLength + 1, end + 1)
};


// console.log(longestPalindrome("banana"))
// console.log(longestPalindrome("babad"))
// console.log(longestPalindrome("a"))
// console.log(longestPalindrome("aacabdkacaa")
console.log(longestPalindrome("aacabdkacaa"))
// @lc code=end

000000
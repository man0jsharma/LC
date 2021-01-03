/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {

    let ways = 0;
    let dp = [];

    const helper = (index) => {
        if (index >= s.length) {
            return 1;
        }

        if (s[index] === "0") {
            return 0;
        }

        if (dp[index] !== undefined) {
            return dp[index];
        }

        ways = helper(index + 1);
        if (s[index] + s[index + 1] < 27) {
            ways += helper(index + 2);
        }

        return dp[index] = ways;;
    }

    return helper(0)
};


// console.log(numDecodings("2611055971756562"))



// @lc code=end


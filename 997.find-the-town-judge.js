/*
 * @lc app=leetcode id=997 lang=javascript
 *
 * [997] Find the Town Judge
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
let findJudge = function (N, trust) {
    let trustCounts = new Array(N + 1).fill(0);

    for (let [i, j] of trust) {
        trustCounts[i] -= 1;
        trustCounts[j] += 1;
    }

    for (let i = 1; i < trustCounts.length; i++) {
        if (trustCounts[i] === N - 1) {
            return i;
        }
    }

    return -1;
};

// @lc code=end


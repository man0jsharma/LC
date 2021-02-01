/*
 * @lc app=leetcode id=1478 lang=javascript
 *
 * [1478] Allocate Mailboxes
 */

// @lc code=start
/**
 * @param {number[]} houses
 * @param {number} k
 * @return {number}
 */
var minDistance = function (houses, k) {
    let n = houses.length
    let sortedHouses = houses.sort((a, b) => a - b)
    let dp = Array.from({ length: k + 1 }, () => Array.from({ length: n }, () => -1))
    let costs = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++) {
            let median = Math.floor((i + j) / 2)
            for (let t = i; t <= j; t++) {
                // console.log({ i, j, median, t })
                costs[i][j] += Math.abs(sortedHouses[median] - sortedHouses[t]);
            }
        }

    // console.log(costs)

    // console.log(dp)
    const dfs = (mailBoxCount, index) => {
        // console.log(mailBoxCount, index)
        if (mailBoxCount == 0 && index == n) {
            return 0;
        }
        if (mailBoxCount == 0 || index == n) {
            return Number.MAX_SAFE_INTEGER;
        }
        if (dp[mailBoxCount][index] > -1) return dp[mailBoxCount][index]
        let min = Number.MAX_SAFE_INTEGER;
        for (let i = index; i < n; i++) {
            // Basic backtracking by adding index and placing mailbox
            // Also adding the cost of the current [i][j]
            let currentCost = costs[index][i] // Cost of placing a mailbox there 
            let nextCost = dfs(mailBoxCount - 1, i + 1); // plus placing the next mailBox;
            min = Math.min(min, currentCost + nextCost)
        }
        return dp[mailBoxCount][index] = min;
    }

    return dfs(k, 0)
};


// console.log(minDistance([2, 3, 5, 12, 18], 2))
// console.log(minDistance([7, 4, 6, 1], 1))
// console.log(minDistance([1, 4, 8, 10, 20], 3))
// @lc code=end


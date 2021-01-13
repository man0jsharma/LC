/*
 * @lc app=leetcode id=221 lang=javascript
 *
 * [221] Maximal Square
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let rows = matrix.length, cols = rows > 0 ? matrix[0].length : 0;
    let dp = Array.from(Array(rows + 1), () => Array(cols + 1));
    let maxsqlen = 0;
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            if (matrix[i - 1][j - 1] == '1') {
                dp[i][j] = Math.min(dp[i][j - 1] || 0,
                    dp[i - 1][j] || 0,
                    dp[i - 1][j - 1] || 0) + 1; // Max of top left and diagonal
                maxsqlen = Math.max(maxsqlen, dp[i][j]);
            }
        }
    }
    return maxsqlen * maxsqlen;
};

// const isValidPosition = (x, y, m, n, matrix) => {
//     return x >= 0 && y >= 0 && x <= m && y <= n
// }

// const getValueFromNeighbours = (x, y, m, n, matrix, sumArray) => {
//     let neighbours = [[-1, -1], [-1, 0], [0, -1]];
//     let min = Number.POSITIVE_INFINITY;
//     let isAllValidNeighbours = true
//     for (let i = 0; i < neighbours.length; i++) {
//         const [newX, newY] = [x + neighbours[i][0], y + neighbours[i][1]]
//         if (isValidPosition(newX, newY, m, n, matrix)) {
//             min = Math.min(min, sumArray[newX][newY])
//         } else {
//             isAllValidNeighbours = false;
//         }
//     }
//     return isAllValidNeighbours ? min + 1 : 0
// }


// maximalSquare([["0", "1"], ["1", "0"]])
// maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "1"]])
// @lc code=end


/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {

    let m = matrix.length;
    let n = matrix[0].length;

    let rows = []; // Collect rows and cols that has zero
    let cols = [] // We can also set the first row and col as 0 to track
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                if (!rows.includes(i)) {
                    rows.push(i)
                }
                if (!cols.includes(j)) {
                    cols.push(j)
                }
            }
        }
    }

    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < n; j++) {
            matrix[rows[i]][j] = 0;
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < cols.length; j++) {
            matrix[i][cols[j]] = 0;
        }
    }
}


// setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]])
// @lc code=end


/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const swap = (matrix, i, j, l, m) => {
    const temp = matrix[i][j]
    matrix[i][j] = matrix[l][m]
    matrix[l][m] = temp;
}
var rotate = function (matrix) {
    let n = matrix.length - 1
    let start = 0;
    let end = n;

    while (start <= end) {
        let temp = matrix[start];
        matrix[start] = matrix[end];
        matrix[end] = temp;
        start++;
        end--;
    }

    for (let i = 0; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            swap(matrix, i, j, j, i)
        }
    }
    return matrix;
};

// @lc code=end


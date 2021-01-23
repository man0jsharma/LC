/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {

    let n = rowIndex + 1;
    let mat = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))
    let ans = []

    const isValid = (i, j) => {
        return i >= 0 && j >= 0 && i < n && j < n
    }

    const dp = (i, j) => {

        if (!isValid(i, j)) {
            return 0;
        }
        if (i === 0 && j === 0) {
            mat[0][0] = 1;
            return 1;
        }
        if (mat[i][j]) {
            return mat[i][j]
        }
        mat[i][j] = dp(i - 1, j) + dp(i, j - 1)
        return mat[i][j]
    }

    dp(rowIndex, rowIndex)
    for (let i = 0, j = n - 1; i < n && j >= 0; i++, j--)
        ans.push(mat[i][j])

    return ans;
};

// @lc code=end


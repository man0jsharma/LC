/*
 * @lc app=leetcode id=498 lang=javascript
 *
 * [498] Diagonal Traverse
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {

    let m = matrix.length;
    if (m === 0) {
        return matrix;
    }
    let n = matrix[0].length;
    let i = 0;
    let j = 0;
    let ans = [matrix[i][j]];

    let jumps = {
        left: [0, 1],
        bottom: [1, 0]
    }

    let traverse = {
        leftBottom: [1, -1],
        rightTop: [-1, 1]
    }

    let flag = true;
    while (ans.length <= m * n) {
        if (flag)
            if (isValid(jump(i, j, jumps.left), m, n)) {
                [i, j] = jump(i, j, jumps.left)
            } else if (isValid(jump(i, j, jumps.bottom), m, n)) {
                [i, j] = jump(i, j, jumps.bottom)
            } else {
                return ans;
            }
        else
            if (isValid(jump(i, j, jumps.bottom), m, n)) {
                [i, j] = jump(i, j, jumps.bottom)
            } else if (isValid(jump(i, j, jumps.left), m, n)) {
                [i, j] = jump(i, j, jumps.left)
            } else {
                return ans;
            }

        let ts = flag ? traverse.leftBottom : traverse.rightTop
        while (isValid(jump(i, j, ts), m, n)) {
            ans.push(matrix[i][j])
            let [x, y] = jump(i, j, ts)
            i = x;
            j = y;
        }
        ans.push(matrix[i][j])
        flag = !flag
    }

    return ans;
};

const jump = (x, y, [i, j]) => {
    return [x + i, y + j]
}

const isValid = ([x, y], m, n) => {
    return x >= 0 && y >= 0 && x < m && y < n
}
// @lc code=end


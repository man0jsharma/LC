/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const w = matrix.length;
    const h = matrix[0].length;
    const movement = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let current = [0, 0];
    let result = [matrix[0][0]]
    let moveIndex = 0

    while (result.length < w * h) {
        let x = current[0] + movement[moveIndex][0]
        let y = current[1] + movement[moveIndex][1]

        if (isValid(x, y, w, h) && !result.includes(matrix[x][y])) {
            result.push(matrix[x][y])
            current = [x, y];
        } else {
            moveIndex = moveIndex < movement.length - 1 ? moveIndex + 1 : 0;
        }
    }
    return result;
};

const isValid = (x, y, w, h) => {
    return x >= 0 && x < w && y >= 0 && y < h
}


// console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

// console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
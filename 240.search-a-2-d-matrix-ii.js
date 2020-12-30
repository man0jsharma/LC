/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] > target) {
            col--
        } else
            row++
    }

    return false;
};

// const binarySearch = (arr, target, start, end) => {
//     // console.log({ arr, start, end })
//     let mid = Math.floor((start + end) / 2);
//     let res = false
//     if (start >= end) {
//         return false;
//     } else
//         if (arr[mid] === target) {
//             return true;
//         } else if (arr[mid] < target) {
//             res = res || binarySearch(arr, target, mid + 1, end)
//         } else if (arr[mid] > target) {
//             res = res || binarySearch(arr, target, start, mid)
//         }
//     return res;
// }


// let res = searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 1)
// console.log({ res })


// let res = searchMatrix([[1, 3, 5, 7, 9], [2, 4, 6, 8, 10], [11, 13, 15, 17, 19], [12, 14, 16, 18, 20], [21, 22, 23, 24, 25]], 13)
// console.log({ res })
// @lc code=end


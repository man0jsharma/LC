/*
 * @lc app=leetcode id=1253 lang=javascript
 *
 * [1253] Reconstruct a 2-Row Binary Matrix
 */

// @lc code=start
/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function (upper, lower, colsum) {
    let compareValue = 2;
    let total = upper + lower;
    let lowCol = [];
    let upperCol = [];
    let runningSum = null;
    while (compareValue > 0) {
        for (let i = 0; i < colsum.length; i++) {
            if (compareValue === 2) {
                runningSum += colsum[i];
            }
            if (colsum[i] === compareValue && upper > 0) {
                if (!upperCol[i]) {
                    upper--;
                    upperCol[i] = 1;
                    colsum[i] = colsum[i] - 1;
                }
            } else {
                upperCol[i] = upperCol[i] || 0;
            }

            if (colsum[i] === compareValue && lower > 0) {
                if (!lowCol[i]) {
                    lower--;
                    lowCol[i] = 1;
                    colsum[i] = colsum[i] - 1;
                }
            } else {
                lowCol[i] = lowCol[i] || 0;
            }
        }
        compareValue--;
    }

    return runningSum !== total || upper > 0 || lower > 0 ? [] : [upperCol, lowCol];
};
// @lc code=end

// console.log(
//     reconstructMatrix(2, 1, [1, 1, 1])
// )
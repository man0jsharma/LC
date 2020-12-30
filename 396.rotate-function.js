/*
 * @lc app=leetcode id=396 lang=javascript
 *
 * [396] Rotate Function
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function (A) {
    let newArray = [...A, ...A];
    let max = Number.NEGATIVE_INFINITY;
    let rotateCount = 0;
    while (rotateCount < A.length - 1) {
        let start = 0;
        let end = A.length - 1;
        let temp = 0;
        while (start <= end) {
            temp += (start * newArray[rotateCount + start]);
            start++
        }
        max = Math.max(max, temp)
        rotateCount++;
    }
    return max === Number.NEGATIVE_INFINITY ? 0 : max;;
};


// @lc code=end


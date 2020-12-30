/*
 * @lc app=leetcode id=962 lang=javascript
 *
 * [962] Maximum Width Ramp
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var maxWidthRamp = function (A) {
    let max = Number.NEGATIVE_INFINITY

    // for (let i = 0; i < A.length; i++) {
    //     for (let j = i + 1; j < A.length; j++) {
    //         if (A[i] <= A[j])
    //             max = Math.max(max, j - i)
    //     }
    // }

    // return max === Number.NEGATIVE_INFINITY ? 0 : max;

    let cache = [];
    for (let i = 0; i < A.length; i++) {
        cache[i] = i;
    }

    console.log(cache)
};


console.log(maxWidthRamp([6, 0, 8, 2, 1, 5]))
console.log(maxWidthRamp([9, 8, 1, 0, 1, 9, 4, 0, 4, 1]))
// @lc code=end


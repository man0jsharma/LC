/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    let f = [];
    for (let i = 1; i <= num; i++) {
        f[i] = f[i >> 1] + (i & 1)
    };
    return f;
};

// const dp = (n, arr) => {
//     if (n === 0) {
//         arr[n] = 0;
//         return arr[n];
//     }
//     if (n === 1) {
//         arr[n] = 1;
//         return arr[n];
//     }
//     let last = lastPowerOfTwo(n);
//     if (n === last) {
//         arr[n] = 1;
//         return arr[n];
//     }
//     if (arr[n]) {
//         return arr[n];
//     }
//     arr[n] = dp(last, arr) + dp(n - last, arr);
//     return arr[n];
// }


// const lastPowerOfTwo = (n) => {
//     let i = 0;
//     while (Math.pow(2, i + 1) <= n) {
//         i++;
//     }
//     return Math.pow(2, i);
// }

// @lc code=end


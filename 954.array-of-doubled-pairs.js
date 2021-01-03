/*
 * @lc app=leetcode id=954 lang=javascript
 *
 * [954] Array of Doubled Pairs
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canReorderDoubled = function (A) {
    A.sort((a, b) => b - a)
    let freq = {};
    for (let each of A) freq[each] = -~freq[each];
    let count = A.length;
    console.log({ freq })
    for (let each of A) {
        console.log(each)
        if (freq[each] > 0 && freq[2 * each] > 0) {
            freq[each]--;
            freq[each * 2]--;
            count -= 2
        }
    }
    return count === 0
};

// console.log(canReorderDoubled([1, 2, 1, -8, 8, -4, 4, -4, 2, -2]))
// console.log(canReorderDoubled([4, -2, 2, -4]))
// console.log(canReorderDoubled([3, 1, 3, 6]))
// console.log(canReorderDoubled([-6, -3]))
// @lc code=end


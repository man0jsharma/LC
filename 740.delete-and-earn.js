/*
 * @lc app=leetcode id=740 lang=javascript
 *
 * [740] Delete and Earn
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    let oddTotal = 0
    let evenTotal = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evenTotal += nums[i]
        } else {
            oddTotal += nums[i]
        }
    }

    console.log({ oddTotal, evenTotal })
    return Math.max(oddTotal, evenTotal)
};


console.log(deleteAndEarn([8, 10, 4, 9, 1, 3, 5, 9, 4, 10]))
// @lc code=end


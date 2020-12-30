/*
 * @lc app=leetcode id=565 lang=javascript
 *
 * [565] Array Nesting
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
    let result = [];
    let start = 0;
    let end = nums.length - 1;
    let max = Number.NEGATIVE_INFINITY

    while (start < end) {
        result.push(nums[start]);
        let value = nums[result[result.length - 1]]
        while (!result.includes(value)) {
            nums[result[result.length - 1]] = -1
            result.push(value);
            value = nums[result[result.length - 1]]
        }
        max = Math.max(max, result.length);
        result = []
        start++
    }

    return max === Number.NEGATIVE_INFINITY ? nums.length : max;
};

console.log(arrayNesting([5, 4, 0, 3, 1, 6, 2]))
// @lc code=end


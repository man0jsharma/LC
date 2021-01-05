/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    // let hashMap = nums.reduce((acc, each, index) => {
    //     return { ...acc, [each]: index }
    // }, {})



    let hashMap = {}

    for (let i = 0; i < nums.length; ++i) {
        hashMap[nums[i]] = i
    }
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hashMap[complement] !== undefined &&
            hashMap[complement] !== i) {
            return [hashMap[complement], i]
        }
    }
};
// @lc code=end


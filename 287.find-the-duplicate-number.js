/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {

    let tort = nums[0];
    let hare = nums[0];

    // find the circle
    // move the hare 2X speed using nums[nums[*]] than tort
    do {
        tort = nums[tort];
        hare = nums[nums[hare]]
    } while (tort !== hare)

    // We found the circle
    // Now lets move both hare and tort in same speed making tort start from the beginning

    tort = nums[0]
    while (tort !== hare) {
        tort = nums[tort]
        hare = nums[hare]
    }

    return hare;

    // T -> O(N)
    // S -> O(1)
};
// @lc code=end


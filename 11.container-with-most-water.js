/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0;

    let r = height.length - 1;

    let maxArea = -1;
    while (l < r) {
        let val = Math.min(height[l], height[r]) * (r - l)
        maxArea = Math.max(maxArea, val)
        if (height[l] < height[r]) {
            l++
        } else
            r--
    }
    return maxArea;
};
// @lc code=end


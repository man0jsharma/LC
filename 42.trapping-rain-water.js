/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length;
    let left = [], right = [];
    for (let i = 0; i < n; i++) {
        left[i] = Math.max(height[i], left[i - 1] || 0)
    }

    for (let i = n - 1; i >= 0; i--) {
        right[i] = Math.max(height[i], right[i + 1] || 0)
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += Math.min(left[i], right[i]) - height[i]
    }

    //Build left max
    //Build right max
    // Min(left, right) - each
    return ans;
};
// @lc code=end


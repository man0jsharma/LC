/*
 * @lc app=leetcode id=1637 lang=javascript
 *
 * [1637] Widest Vertical Area Between Two Points Containing No Points
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
    const sortedPoints = points.sort((a, b) => a[0] - b[0])

    let max = 0;

    for (let i = 0; i < sortedPoints.length - 1; i++) {
        max = Math.max(sortedPoints[i + 1][0] - sortedPoints[i][0], max)
    }
    return max;
};
// @lc code=end


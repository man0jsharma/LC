/*
 * @lc app=leetcode id=554 lang=javascript
 *
 * [554] Brick Wall
 */

// @lc code=start
/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
    let counts = []
    let max = 0;
    for (let i = 0; i < wall.length; i++) {
        let sum = 0;
        for (let j = 0; j < wall[i].length - 1; j++) {
            sum += wall[i][j];
            counts[sum] = (counts[sum] || 0) + 1;
            max = Math.max(max, counts[sum]);
        }
    }
    return wall.length - max;
};

// @lc code=end


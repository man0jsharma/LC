/*
 * @lc app=leetcode id=807 lang=javascript
 *
 * [807] Max Increase to Keep City Skyline
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
    const height = grid.length;
    const width = grid[0].length;

    const verticalMax = []
    const horizantalMax = [];
    for (let i = 0; i < height; i++) {
        let vMax = 0;
        let hMax = 0
        for (let j = 0; j < width; j++) {
            vMax = Math.max(vMax, grid[i][j]);
            hMax = Math.max(hMax, grid[j][i]);
        }
        verticalMax.push(vMax)
        horizantalMax.push(hMax)
    }

    let total = 0;
    for (let i = 0; i < verticalMax.length; i++) {
        for (let j = 0; j < horizantalMax.length; j++) {
            total += Math.min(verticalMax[i], horizantalMax[j]) - grid[i][j]
        }
    }

    return total
};
// @lc code=end


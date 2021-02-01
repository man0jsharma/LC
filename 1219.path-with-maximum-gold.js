/*
 * @lc app=leetcode id=1219 lang=javascript
 *
 * [1219] Path with Maximum Gold
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */

var getMaximumGold = function (grid) {

    let [row, col] = [grid.length, grid[0].length];
    let directions = [[0, -1], [0, 1], [-1, 0], [1, 0]]
    const isValid = (i, j) => {
        return i >= 0 && j >= 0 && i < row && j < col
    }

    let max
    let total = Number.NEGATIVE_INFINITY
    let visited;

    const dfs = (i, j, localSum, visited) => {
        max = Math.max(localSum, max);
        for (let d = 0; d < directions.length; d++) {
            let x = i + directions[d][0];
            let y = j + directions[d][1];
            if (isValid(x, y) &&
                grid[x][y] > 0 &&
                !visited.includes(`${x}~${y}`)) {
                dfs(x, y, localSum + grid[x][y], [...visited, `${x}~${y}`])
            }
        }
    }

    for (let i = 0; i < row; i++)
        for (let j = 0; j < col; j++)
            if (grid[i][j] !== 0) {
                max = Number.NEGATIVE_INFINITY;
                visited = [];
                dfs(i, j, grid[i][j], [`${i}~${j}`])
                total = Math.max(total, max)
            }

    return total;
};

// @lc code=end


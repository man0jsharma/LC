/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {

    let m = grid.length;
    let n = grid[0].length;

    let visited = Array.from({ length: m }, () => (
        Array.from({ length: n }, () => false)
    ))

    let numCount = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1" && !visited[i][j]) {
                dp(grid, i, j, m, n, visited)
                numCount++;
            }
        }
    }
    return numCount;
};

const dp = (grid, x, y, m, n, visited) => {
    if (grid[x][y] === "0" || !isValid(x, y, m, n)) {
        return;
    }

    if (grid[x][y] === "1")
        visited[x][y] = true;

    let neighbours = [[1, 0], [0, 1], [-1, 0], [0, -1]]

    for (let i = 0; i < neighbours.length; i++) {
        const [newX, newY] = [x + neighbours[i][0], y + neighbours[i][1]];
        if (isValid(newX, newY, m, n) && !visited[newX][newY]) {
            dp(grid, newX, newY, m, n, visited)
        }
    }
}

const isValid = (i, j, m, n) => {
    return i >= 0 && j >= 0 && i < m && j < n
}


// console.log(numIslands([
//     ["1", "1", "1", "1", "0"],
//     ["1", "1", "0", "1", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "0", "1", "1"],
//     ["0", "0", "1", "0", "1"]
// ]))
// console.log(numIslands([
//     ["1", "1", "0", "0", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "1", "0", "0"],
//     ["0", "0", "0", "1", "1"]]))
// console.log(numIslands([
//     ["1", "1", "1"],
//     ["0", "1", "0"],
//     ["1", "1", "1"]]))
// @lc code=end


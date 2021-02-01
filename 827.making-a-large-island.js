/*
 * @lc app=leetcode id=827 lang=javascript
 *
 * [827] Making A Large Island
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */

var largestIsland = function (grid) {

    const n = grid.length;
    const isValid = (i, j) => i >= 0 && j >= 0 && i < n && j < n
    const getNeighbours = (i, j) => {
        let neighbours = [];
        let moves = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        for (let [dr, dc] of moves) {
            let [x, y] = [i + dr, j + dc];
            if (isValid(x, y)) {
                neighbours.push([x, y])
            }
        }
        return neighbours;
    }

    const dfs = (i, j, index) => {
        let ans = 1;
        grid[i][j] = index;
        for (let [x, y] of getNeighbours(i, j)) {
            if (grid[x][y] === 1) {
                ans += dfs(x, y, index)
            }
        }
        return ans;
    }


    let ix = 2;
    let area = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                area[ix] = dfs(i, j, ix++)
            }
        }
    }


    let max = 0;
    for (let x of area) {
        if (x !== undefined)
            max = Math.max(max, x);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                let seen = new Set();
                for (let [x, y] of getNeighbours(i, j)) {
                    if (grid[x][y] > 1)
                        seen.add(grid[x][y]);
                }

                let bonus = 1;
                for (let s of seen) {
                    console.log({ s, a: area[s] })
                    bonus += area[s]
                }
                max = Math.max(max, bonus)
            }
        }
    }
    return max;
}
// @lc code=end


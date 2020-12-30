/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */

const crossHair = (x, y, board, value, rows, cols) => {
    let xIndex = 0
    let yIndex = 0;

    let count = 2;
    if (cols[y]) {
        count -= cols[y].filter(each => each === value).length
    } else {
        let arr = [];
        while (xIndex < 9) {
            board[xIndex][y] !== "." && arr.push(board[xIndex][y])
            if (board[xIndex][y] === value) {
                count--;
            }
            xIndex++;
        }
        cols[y] = arr.concat()
    }

    if (rows[x]) {
        count -= rows[x].filter(each => each === value).length
    } else {
        let arr = [];
        while (yIndex < 9) {
            board[x][yIndex] !== "." && arr.push(board[x][yIndex])
            if (board[x][yIndex] === value) {
                count--;
            }
            yIndex++;
        }
        rows[x] = arr.concat()
    }
    return count === 0;
}


const littleBox = (x, y, board, value) => {
    const boxX = Math.floor(x / 3);
    const boxY = Math.floor(y / 3);

    let topX = boxX * 3;
    let topY = boxY * 3;
    let count = 1;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[topX + i][topY + j] === value) {
                count--;
            }
        }
    }
    return count === 0;
}

var isValidSudoku = function (board) {
    let res = true
    let rows = {};
    let cols = {};
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== ".") {
                res = res && crossHair(i, j, board, board[i][j], rows, cols) && littleBox(i, j, board, board[i][j])// true 
            }
        }
    }
    return res;
};

// @lc code=end


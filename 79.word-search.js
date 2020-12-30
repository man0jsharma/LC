/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

    let charIndex = 0;

    const w = board.length;
    const h = board[0].length;
    let foundWord = ""

    let firstCharIndices = [];
    for (let i = 0; i < w; i++) {
        for (let j = 0; j < h; j++) {
            if (board[i][j] === word[0]) {
                firstCharIndices = [i, j];
                if (dfs(i, j, board, word, charIndex, foundWord, false, [])) {
                    return true
                }
            }
        }
    }

    if (!firstCharIndices.length) {
        return false;
    }
    return false;

};

const isValid = (x, y, w, h) => {
    return x >= 0 && x < w && y >= 0 && y < h
}


const dfs = (x, y, board, word, wordIndex, foundWord, total, visited) => {
    const neighbours = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    if (board[x][y] === word[wordIndex++]) {
        const foundChar = board[x][y]
        board[x][y] = "#"
        foundWord += foundChar
        if (word === foundWord) {
            return true
        }
        for (let i = 0; i < neighbours.length; i++) {
            const newX = x + neighbours[i][0];
            const newY = y + neighbours[i][1];
            if (isValid(newX, newY, board.length, board[0].length)) {
                total = total || dfs(x + neighbours[i][0], y + neighbours[i][1], board, word, wordIndex, foundWord, total, visited)
            }
        }
        board[x][y] = foundChar
    }
    return total;
}



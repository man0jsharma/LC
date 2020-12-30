/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */


const isValid = (n, x, y) => {
    return x >= 0 && y >= 0 && x < n && y < n
}
var generateMatrix = function (n) {
    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    let directionIndex = 0;
    let start = [0, 0];
    let array = [start];
    let valueArray = Array.from(Array(n), () => new Array(n))
    let value = 1;
    valueArray[0][0] = 1

    while (array.length < n * n) {
        let addOn = direction[directionIndex]
        let last = array[array.length - 1];
        let newX = last[0] + addOn[0]
        let newY = last[1] + addOn[1]
        if (isValid(n, newX, newY) && valueArray[newX][newY] === undefined) {
            array.push([newX, newY])
            valueArray[newX][newY] = ++value;
        } else {
            directionIndex = ++directionIndex % direction.length;
        }
    }

    return valueArray
};

console.log(generateMatrix(4))
// @lc code=end


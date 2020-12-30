/*
 * @lc app=leetcode id=1104 lang=javascript
 *
 * [1104] Path In Zigzag Labelled Binary Tree
 */

// @lc code=start
/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {

    let levelValue = 1;
    let levelFound = false
    let runningPowValue = 0
    while (!levelFound) {
        let prev = runningPowValue;
        runningPowValue += Math.pow(2, levelValue - 1);
        if (label >= prev && label <= runningPowValue) {
            levelFound = true
        } else
            levelValue++;
    }

    let result = [label];
    while (levelValue > 1) {
        let value = 0
        levelValue--;
        const parentLocation = Math.ceil(Math.pow(2, levelValue) - (label / 2));
        const powValue = levelValue - 1;
        value = Math.pow(2, powValue) + (parentLocation - 1)
        result.unshift(value)
        label = value;
    }
    return result;

}

// @lc code=end
console.log(pathInZigZagTree(26))
console.log(pathInZigZagTree(14))
console.log(pathInZigZagTree(13))
console.log(pathInZigZagTree(12))
console.log(pathInZigZagTree(11))
console.log(pathInZigZagTree(10))
console.log(pathInZigZagTree(9))
console.log(pathInZigZagTree(8))
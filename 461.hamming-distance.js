/*
 * @lc app=leetcode id=461 lang=javascript
 *
 * [461] Hamming Distance
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let count = 0
    while (x !== 0 || y !== 0) {
        let bitX = x & 1;
        let bitY = y & 1;
        if (bitX !== bitY)
            count++;
        x = x >> 1;
        y = y >> 1;
    }

    return count;
};


// @lc code=end


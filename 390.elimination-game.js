/*
 * @lc app=leetcode id=390 lang=javascript
 *
 * [390] Elimination Game
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
    let remaining = n;
    let head = 1;
    let step = 1;
    let left = true;

    while (remaining > 1) {
        if (left || remaining % 2 === 1) {
            head = head + step
        }
        step = step * 2;
        remaining = Math.floor(remaining / 2);
        left = !left
    }
    return head;
};

// @lc code=end


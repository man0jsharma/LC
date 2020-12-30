/*
 * @lc app=leetcode id=682 lang=javascript
 *
 * [682] Baseball Game
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    let score = 0;
    let history = [];

    for (let i = 0; i < ops.length; i++) {
        switch (ops[i]) {
            case "D": {

                history.push(2 * history[history.length - 1])
                score
                break;
            }
            case "C": {
                history.pop()
                break;
            }
            case "+": {
                history.push(history[history.length - 1] + history[history.length - 2])
                break;
            }
            default: {
                history.push(Number.parseInt(ops[i]))
                break;
            }
        }
    }

    return history.reduce((sum, each) => sum + each, 0);
};

// @lc code=end


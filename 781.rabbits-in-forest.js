/*
 * @lc app=leetcode id=781 lang=javascript
 *
 * [781] Rabbits in Forest
 */

// @lc code=start
/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
    let colors = [];
    let rabbitCount = 0;
    for (let i = 0; i < answers.length; i++) {
        if (!colors.includes(answers[i]) || answers[i] === 0) {
            colors.push(answers[i]);
            rabbitCount += answers[i] + 1
        }
    }
    return rabbitCount;
};
// @lc code=end


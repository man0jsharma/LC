/*
 * @lc app=leetcode id=1491 lang=javascript
 *
 * [1491] Average Salary Excluding the Minimum and Maximum Salary
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    if (salary.length > 2) {
        let min = Number.MAX_SAFE_INTEGER;
        let max = Number.MIN_SAFE_INTEGER;
        let sum = 0;
        let count = 0;

        for (let s of salary) {
            sum += s;
            min = Math.min(min, s)
            max = Math.max(max, s)
            count++;
        }

        // console.log((sumcount))
        return (sum - min - max) / (count - 2);
    }
    return 0;
};
// @lc code=end


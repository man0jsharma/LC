/*
 * @lc app=leetcode id=1208 lang=javascript
 *
 * [1208] Get Equal Substrings Within Budget
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {

    let localCost = 0;

    let i = 0;
    let j = 0
    let maxLength = 0;

    while (j < s.length) {
        localCost += Math.abs(s.charCodeAt(j) - t.charCodeAt(j));
        if (localCost <= maxCost) {
            maxLength = Math.max(maxLength, j - i + 1)
        } else {
            localCost -= Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
            i++;
        }
        j++;
    }

    return maxLength
};


// Only if it is a minimum window question, then you have increment i while not incrementing j.
// @lc code=end


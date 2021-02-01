/*
 * @lc app=leetcode id=819 lang=javascript
 *
 * [819] Most Common Word
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {

    let puncRemoved = paragraph.replace(/[.,\/#!$'?%\^&\*;:{}=\-_`~()]/g, ' ');
    let pList = puncRemoved.split(" ").map(e => e.toLowerCase());

    let hash = {}
    let max = Number.NEGATIVE_INFINITY
    let maxFreqWord = ''
    pList.forEach(w => {
        if (!banned.includes(w) && w) {
            hash[w] = -~hash[w]
            if (hash[w] > max) {
                max = hash[w]
                maxFreqWord = w
            }
        }
    })
    return maxFreqWord
};
// @lc code=end


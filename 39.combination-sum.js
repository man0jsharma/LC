/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let list = []
    candidates = candidates.sort((a, b) => a - b)
    backTracking(candidates, target, list, [], 0)
    return list;
};


const backTracking = (candidates, remain, masterList, tempList, start) => {
    if (remain < 0) {
        return;
    } else if (remain === 0) {
        masterList.push(tempList.concat())
    } else
        for (let i = start; i < candidates.length; i++) {
            tempList.push(candidates[i]);
            backTracking(candidates, remain - candidates[i], masterList, tempList, i);
            tempList.pop();
        }
}

// @lc code=end

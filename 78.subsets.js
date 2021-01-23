/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

    let mstr = [];
    const bt = (tmp = [], start = 0) => {
        mstr.push(tmp.concat())
        for (let i = start; i < nums.length; i++) {
            bt([...tmp, nums[i]], i + 1)
        }
    }
    //backtracking hell yay!
    bt();
    return mstr;
};
// @lc code=end


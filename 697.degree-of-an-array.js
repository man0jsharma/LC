/*
 * @lc app=leetcode id=697 lang=javascript
 *
 * [697] Degree of an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

const mostFreq = (nums) => {
    let freq = {}
    let max = -1;
    for (let i = 0; i < nums.length; i++) {
        if (freq[nums[i]]) {
            freq[nums[i]] += 1;
        } else
            freq[nums[i]] = 1;
    }

    let popular = (Object.keys(freq).reduce((acc, each) => {
        let value = acc[freq[each]] ? [...acc[freq[each]], Number.parseInt(each)] : [Number.parseInt(each)]
        max = Math.max(freq[each], max)
        return {
            ...acc,
            [freq[each]]: value
        }
    }, {}))

    return popular[max];
}

var findShortestSubArray = function (nums) {
    let popularElem = mostFreq(nums);
    let min = Number.MAX_VALUE;
    popularElem.forEach(popular => {
        min = Math.min((nums.lastIndexOf(popular) - nums.indexOf(popular) + 1), min)
    })
    return min;
};


// @lc code=end


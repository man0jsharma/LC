/*
 * @lc app=leetcode id=134 lang=javascript
 *
 * [134] Gas Station
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let startIndex = 0;
    let tank = 0;
    let diff = 0;
    for (let i = 0; i < gas.length; i++) {
        diff += gas[i] - cost[i]
    }
    if (diff < 0) {
        return -1;
    }

    for (let i = 0; i < gas.length; i++) {
        diff = gas[i] - cost[i]
        tank += diff;
        if (tank < 0) {
            startIndex = i + 1;
            tank = 0;
        }
    }
    return startIndex;
};

// @lc code=end


/*
 * @lc app=leetcode id=1094 lang=javascript
 *
 * [1094] Car Pooling
 */

// @lc code=start
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {

    let tripTally = [];

    for (let i = 0; i < trips.length; i++) {
        const [numOfPass, start, end] = trips[i];
        for (let j = start; j < end; j++) {
            if (tripTally[j]) {
                tripTally[j] += numOfPass
            } else {
                tripTally[j] = numOfPass
            }
            if (tripTally[j] > capacity) {
                return false
            }
        }
    }
    return true;
};
// @lc code=end


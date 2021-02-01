/*
 * @lc app=leetcode id=1710 lang=javascript
 *
 * [1710] Maximum Units on a Truck
 */

// @lc code=start
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
    let sorted = boxTypes.sort((a, b) => b[1] - a[1]);
    let index = 0;
    let total = 0;
    let n = sorted.length;
    while (truckSize >= 0 && index < n) {
        let [boxes, units] = sorted[index];
        let diff = Math.min(truckSize, boxes);
        total += diff * units
        truckSize -= diff;
        index++;
    }
    return total;

    //Sort based on the units and board the max units first
};
// @lc code=end


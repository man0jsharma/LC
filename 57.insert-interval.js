/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */


const isOverlapping = ([x1, y1], [x2, y2]) => {
    return Math.max(x1, x2) <= Math.min(y1, y2)
}

var insert = function (intervals, newInterval) {
    if (intervals.length === 0) {
        return [newInterval]
    }
    let toAdd = newInterval;
    let master = [];
    let i = 0;
    while (i < intervals.length) {
        if (intervals[i][0] > toAdd[1]) {
            master.push(toAdd);
            toAdd = intervals[i];
        } else if (isOverlapping(intervals[i], newInterval)) {
            toAdd = [Math.min(intervals[i][0], toAdd[0]), Math.max(intervals[i][1], toAdd[1])]
        } else
            master.push(intervals[i]);

        i++;
    }
    master.push(toAdd)
    return master;

}

// // console.log(insert([[1, 5]], [6, 8]))

// console.log(insert([[1, 3], [6, 9]], [2, 5]))
// // console.log(insert([[5, 6], [6, 9]], [2, 3]))
// console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))

// @lc code=end


/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

const isOverlapping = ([x1, y1], [x2, y2]) => {
    return Math.max(x1, x2) <= Math.min(y1, y2)
}

var merge = function (intervals) {
    let i = 0;
    let j = 1;
    intervals = intervals.sort((a, b) => a[0] - b[0])
    // console.log({ intervals })
    while (j < intervals.length) {
        if (isOverlapping(intervals[i], intervals[j])) {
            intervals[i] = [
                Math.min(intervals[i][0], intervals[j][0]),
                Math.max(intervals[i][1], intervals[j][1])
            ]
            intervals.splice(j, 1);
        } else {
            i = j;
            j++;
        }
    }
    return intervals;
};



console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18], [16, 25]]))
// console.log(merge([[1, 4], [4, 5]]))
console.log(merge([[1, 3], [4, 7], [5, 10]]))
// console.log(merge([[1, 4], [0, 2], [3, 5]]))
// @lc code=end


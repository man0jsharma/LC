/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {

    if (heights.length === 0) return 0;
    let n = heights.length
    let maxArea = 0;
    for (let i = 0; i < n; i++) {
        let minHeights = heights[i]
        for (let j = i; j < n; j++) {
            minHeights = Math.min(minHeights, heights[j]);
            maxArea = Math.max(maxArea, (j - i + 1) * minHeights)
        }
    }
    return maxArea;
};


Array.prototype.peek = function () {
    return this[this.length - 1]
}


Array.prototype.isEmpty = function () {
    return this.length === 0
}


var largestRectangleArea = (heights) => {

    let maxArea = 0;
    let pStack = [];
    let hStack = [];
    heights.push(0);

    for (let i = 0; i < heights.length; i++) {
        let lastWidth = Number.MAX_SAFE_INTEGER;

        while (!hStack.isEmpty() && heights[i] < hStack.peek()) {
            lastWidth = pStack.peek();
            let currArea = (i - pStack.pop()) * hStack.pop();
            maxArea = Math.max(currArea, maxArea)
        }
        if (hStack.isEmpty() || heights[i] > hStack.peek()) {
            hStack.push(heights[i]);
            pStack.push(Math.min(lastWidth, i));
        }

    }
    return maxArea;
}

// console.log(largestRectangleArea([2, 1, 2]))
// @lc code=end


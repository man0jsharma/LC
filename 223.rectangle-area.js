/*
 * @lc app=leetcode id=223 lang=javascript
 *
 * [223] Rectangle Area
 */

// @lc code=start
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function (A, B, C, D, E, F, G, H) {
    let a1 = Math.abs(C - A) * Math.abs(D - B)
    let a2 = Math.abs(G - E) * Math.abs(H - F)
    return a1 + a2 - overLappingArea(A, B, C, D, E, F, G, H)
};

const overLappingArea = (A, B, C, D, E, F, G, H) => {
    let x = Math.min(C, G) - Math.max(A, E)
    let y = Math.min(D, H) - Math.max(B, F)
    return (x > 0 && y > 0) ? x * y : 0
}
// @lc code=end


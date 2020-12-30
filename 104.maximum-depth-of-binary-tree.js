/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    let max = Number.MIN_VALUE
    let maxObj = {
        max,
    }
    dp(root, 1, maxObj)
    return maxObj.max;
};

const dp = (root, level, maxObj) => {
    if (root === null) {
        return
    }
    maxObj.max = Math.max(maxObj.max, level)
    dp(root.left, level + 1, maxObj)
    dp(root.right, level + 1, maxObj)
}
// @lc code=end


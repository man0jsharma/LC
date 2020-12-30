/*
 * @lc app=leetcode id=1379 lang=javascript
 *
 * [1379] Find a Corresponding Node of a Binary Tree in a Clone of That Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

let visited = [];

var getTargetCopy = function (original, cloned, target) {
    if (original !== null) {
        visited.includes(original.val)
        if (original.val === target.val) {
            return cloned;
        } else {
            let leftVal = null;
            let rightVal = null;
            if (original.left && original.left.val && !visited.includes(original.left.val)) {
                leftVal = getTargetCopy(original.left, cloned.left, target)
            }
            if (original.right && original.right.val && !visited.includes(original.right.val)) {
                rightVal = getTargetCopy(original.right, cloned.right, target)
            }
            return leftVal || rightVal
        }
    } else
        return null;
};
// @lc code=end


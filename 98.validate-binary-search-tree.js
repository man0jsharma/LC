/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function (root,) {
    return isValid(root, null, null);
};


var isValid = (root, lower, upper) => {
    if (root === null) {
        return true;
    }

    if ((lower !== null && root.val <= lower) || (upper !== null && root.val >= upper)) {
        return false;
    }

    return isValid(root.left, lower, root.val) &&
        isValid(root.right, root.val, upper)
}
// @lc code=end


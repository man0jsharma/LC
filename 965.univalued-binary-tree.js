/*
 * @lc app=leetcode id=965 lang=javascript
 *
 * [965] Univalued Binary Tree
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
var isUnivalTree = function (root) {
    if (root.left === null && root.right === null) {
        return true;
    }

    return recursion(root, root.val);
};

const recursion = (root, comparor) => {
    if (root === null) {
        return true;
    }
    if (root.val !== comparor) {
        return false;
    }
    return recursion(root.left, comparor) &&
        recursion(root.right, comparor)
}

// @lc code=end


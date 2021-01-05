/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
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
 * @return {void} Do not return anything, modify root in-place instead.
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var flatten = function (root) {
    convertToLL(root)
};

const convertToLL = (root) => {
    if (root === null) {
        return;
    }
    // if (root.left || root.right) {
    convertToLL(root.left)
    convertToLL(root.right)
    root = swap(root)
    // }
}

const scrollRightLast = (root) => {
    while (root.right) {
        root = root.right
    }
    return root
}

const swap = (root) => {
    if (root.left && root.right) {
        const tempLeft = root.left;
        const tempRight = root.right;
        root.left = null;
        root.right = tempLeft;
        if (root.right.right === null) {
            root.right.right = tempRight
        } else {
            lastRight = scrollRightLast(root.right)
            lastRight.right = tempRight
        }
    } else if (root.left) {
        root.right = root.left;
        root.left = null;
    }
    return root;
}
// @lc code=end


/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */

var binaryTreePaths = function (root) {
    let temp = [], master = [];
    if (root !== null) bt(root, temp, master)
    return master;
}

const bt = (root, temp, master) => {
    if (root.left === null && root.right === null) {
        temp = [...temp, root.val]
        master.push(temp.join('->'))
        return;
    }
    if (root.left !== null) bt(root.left, [...temp, root.val], master)
    if (root.right !== null) bt(root.right, [...temp, root.val], master);
}

// @lc code=end


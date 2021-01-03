/*
 * @lc app=leetcode id=450 lang=javascript
 *
 * [450] Delete Node in a BST
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
 * @param {number} key
 * @return {TreeNode}
 */


const findMin = (root) => {
    if (root.left === null) {
        return root.val;
    }
    return findMin(root.left)
}


var deleteNode = function (root, key) {

    if (root === null) {
        return null;
    }

    if (root.val === key) {
        if (!root.left) return root.right; // one/no Child
        if (!root.right) return root.left;// one/no Child
        root.val = findMin(root.right);
        root.right = deleteNode(root.right, root.val)
    }

    if (key < root.val) root.left = deleteNode(root.left, key)
    else if (key > root.val) root.right = deleteNode(root.right, key)
    return root;
};

// @lc code=end


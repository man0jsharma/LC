/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {

    let master = {};
    recursionHelper(root, master)
    return Object.values(master);

};


const recursionHelper = (root, master, depth = 0) => {
    if (root === null) {
        return;
    }

    if (!master[depth]) {
        master[depth] = []
    }

    if (depth % 2 === 0) {
        //even -> left to right
        master[depth] = [...master[depth], root.val]

    } else {
        // odd -> right to left
        master[depth] = [root.val, ...master[depth]]
    }

    recursionHelper(root.left, master, depth + 1)
    recursionHelper(root.right, master, depth + 1)
}
// @lc code=end


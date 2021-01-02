/*
 * @lc app=leetcode id=515 lang=javascript
 *
 * [515] Find Largest Value in Each Tree Row
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
 * @return {number[]}
 */
var largestValues = function (root) {

    let data = {};

    helper(root, data)

    return Object.values(data)
};

const helper = (root, data, depth = 0) => {
    if (root === null) {
        return;
    }

    if (data[depth] === undefined) {
        data[depth] = root.val;
    } else
        data[depth] = Math.max(data[depth], root.val)

    helper(root.left, data, depth + 1)
    helper(root.right, data, depth + 1)
}
// @lc code=end


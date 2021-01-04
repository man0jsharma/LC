/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {

    if (root === null || root.left === null) {
        return root;
    }

    const connectNodes = (nodeLeft, nodeRight) => {
        nodeLeft.next = nodeRight
        if (nodeLeft.left !== null) {
            connectNodes(nodeLeft.right, nodeRight.left);
            connectNodes(nodeLeft.left, nodeLeft.right);
            connectNodes(nodeRight.left, nodeRight.right);
        }
    }

    connectNodes(root.left, root.right);

    return root;
};
// @lc code=end


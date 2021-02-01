/*
 * @lc app=leetcode id=1315 lang=javascript
 *
 * [1315] Sum of Nodes with Even-Valued Grandparent
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
var sumEvenGrandparent = function (root) {
    let sum = 0
    let connectParent = (root, parent = null) => {
        if (root === null) {
            return;
        }
        root.parent = parent;
        connectParent(root.left, root);
        connectParent(root.right, root)
        if (root.parent && root.parent.parent && (root.parent.parent.val % 2) === 0) {
            sum += root.val;
        }
    }

    //Convert the tree to a graph with parent as the third field
    connectParent(root);
    return sum;
};
// @lc code=end


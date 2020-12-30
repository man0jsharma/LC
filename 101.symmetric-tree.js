/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function (root) {
    return root == null || check(root.left, root.right);
};


const check = (l, r) => {
    if (l === null || r === null) {
        return l === r;
    }
    if (l.val !== r.val) {
        return false
    }
    return check(l.left, r.right) && check(l.right, r.left);
}


// @lc code=end


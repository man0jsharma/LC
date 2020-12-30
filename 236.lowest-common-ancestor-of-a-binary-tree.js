/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q, parent) {

    return helper(root, p, q);
};


const helper = (root, p, q) => {
    if (root === null) {
        return null;
    }

    if (root.val === p.val || root.val === q.val) {
        return root;
    }

    let l = helper(root.left, p, q)
    let r = helper(root.right, p, q)

    console.log({ l, r })
    if (l === null) return r;
    if (r === null) return l;
    return root;

}
// @lc code=end


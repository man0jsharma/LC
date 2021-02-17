/*
 * @lc app=leetcode id=889 lang=javascript
 *
 * [889] Construct Binary Tree from Preorder and Postorder Traversal
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
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function (pre, post) {
    let hash = pre.reduce((o, e, i) => ({ ...o, [e]: i }), {})

    let helper = (start = 0, end = post.length - 1) => {
        if (start > end) return null;
        let val = post.shift()
        let index = hash[val];
        let root = new TreeNode(val)
        root.left = helper(start, index - 1)
        root.right = helper(index + 1, end);
        return root;
    }
    return helper()
};
// @lc code=end


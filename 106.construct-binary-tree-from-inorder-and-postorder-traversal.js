/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    let hash = inorder.reduce((obj, each, index) => ({ ...obj, [each]: index }), {})
    const helper = (start = 0, end = postorder.length - 1) => {
        if (start > end) {
            return null;
        }
        let post = postorder.pop();
        let index = hash[post];
        let root = new TreeNode(post);
        root.right = helper(index + 1, end);
        root.left = helper(start, index - 1)
        return root;
    }
    return helper();
};
// @lc code=end


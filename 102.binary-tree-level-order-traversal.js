/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
var levelOrder = function (root) {


    let ans = {};
    const dfs = (root, depth = 0) => {
        if (!root) {
            return;
        }
        if (ans[depth]) {
            ans[depth] = [...ans[depth], root.val]
        } else {
            ans[depth] = [root.val];
        }

        dfs(root.left, depth + 1)
        dfs(root.right, depth + 1)
    }

    dfs(root);

    return Object.values(ans)

};
// @lc code=end


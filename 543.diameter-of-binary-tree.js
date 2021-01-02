/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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
var diameterOfBinaryTree = function (root) {
    let ans = {
        value: 1
    }
    if (root === null) return 0;
    helper(root, ans);
    return ans.value - 1;
};


const helper = (root, ans) => {
    if (root === null) return 0;
    let l = helper(root.left, ans)
    let r = helper(root.right, ans)
    ans.value = Math.max(ans.value, l + r + 1)
    return Math.max(l, r) + 1
}
// @lc code=end


/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
var isBalanced = function (root) {
    let ans = { value: null };
    recurseTree(root, 0, ans);
    return ans.value <= 1;
};


const recurseTree = (root, height, ans) => {
    if (root === null || ans.value > 1) {
        return height;
    }
    let l = recurseTree(root.left, height + 1, ans);
    let r = recurseTree(root.right, height + 1, ans)
    ans.value = Math.max(ans.value, Math.abs(l - r))
    return Math.max(l, r);
}

const maxHeight = (root, height) => {
    if (root === null) {
        return height
    }
    let l = maxHeight(root.left, height + 1);
    let r = maxHeight(root.right, height + 1)
    return Math.max(l, r)
}

// @lc code=end


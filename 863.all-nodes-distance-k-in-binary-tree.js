/*
 * @lc app=leetcode id=863 lang=javascript
 *
 * [863] All Nodes Distance K in Binary Tree
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
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var distanceK = function (root, target, K) {
    let ans = [], seen = [];
    if (!K) {
        ans = [target.val]
    } else {
        dfs(root, null);
        distanceDfs(target, 0, K, ans, seen)
    }
    return ans;
};

const dfs = (root, parent) => {
    if (root === null) {
        return;
    }

    root.parent = parent
    dfs(root.left, root);
    dfs(root.right, root)
}

const distanceDfs = (target, distance, K, ans, seen) => {
    if (target === null) {
        return;
    }

    seen.push(target.val)
    if (distance === K) {
        ans.push(target.val)
        return;
    }

    if (!seen.includes(target.left?.val))
        distanceDfs(target.left, distance + 1, K, ans, seen)
    if (!seen.includes(target.right?.val))
        distanceDfs(target.right, distance + 1, K, ans, seen)
    if (!seen.includes(target.parent?.val))
        distanceDfs(target.parent, distance + 1, K, ans, seen)
}
// @lc code=end


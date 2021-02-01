/*
 * @lc app=leetcode id=1080 lang=javascript
 *
 * [1080] Insufficient Nodes in Root to Leaf Paths
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
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function (root, limit) {
    const isLeaf = (root) => root.left === null && root.right === null
    const dfs = (root, limit) => {
        if (root === null) {
            return null;
        }
        if (isLeaf(root)) {
            return root.val < limit ? null : root;
        } else {
            if (root.left)
                root.left = dfs(root.left, limit - root.val)
            if (root.right)
                root.right = dfs(root.right, limit - root.val)
        }
        return isLeaf(root) ? null : root;
        // if the new leaf 
        // it means it has no valid path leading to an original leaf,
        // we need to remove it.
    }
    return dfs(root, limit)
};
// @lc code=end


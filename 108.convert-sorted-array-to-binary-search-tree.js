/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */


// function TreeNode(val, left, right) {
//     this.val = (val === undefined ? 0 : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
// }
var sortedArrayToBST = function (nums) {

    const buildTree = (start = 0, end = nums.length - 1) => {
        if (start > end) {
            return null;
        }
        let mid = start + Math.ceil((end - start) / 2); // using ceil here
        let root = new TreeNode(nums[mid]);
        root.left = buildTree(start, mid - 1)
        root.right = buildTree(mid + 1, end);
        return root;
    }

    return buildTree();
};


// console.log(JSON.stringify(sortedArrayToBST([-10, -3, 0, 5, 9]), 0, 2))
// @lc code=end


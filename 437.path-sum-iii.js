/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
    return bfs(root, sum)
    // return dp(root, sum, 0, 0)
};

const pathHelper = (root, sum, currentSum, counter, index) => {
    if (root === null) {
        return;
    }
    currentSum += root.val;
    if (currentSum === sum) {
        counter.value++;
    }

    pathHelper(root.left, sum, currentSum, counter, index)
    pathHelper(root.right, sum, currentSum, counter, index);
    currentSum -= root.val;
}

const bfs = (root, sum) => {
    let queue = [];
    queue.push(root);
    let index = 0
    let counter = { value: 0 }
    while (queue.length !== 0) {
        let each = queue.shift();
        if (each !== null) {
            pathHelper(each, sum, 0, counter, ++index)
            queue.push(each.left);
            queue.push(each.right);
        }
    }
    return counter.value;
}
// @lc code=end


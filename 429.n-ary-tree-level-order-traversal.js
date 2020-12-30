/*
 * @lc app=leetcode id=429 lang=javascript
 *
 * [429] N-ary Tree Level Order Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root === null) {
        return [];
    }
    let queue = [];
    let level = [];
    queue.push(root)
    level[root.val] = 0;
    let master = []
    while (queue.length !== 0) {
        let each = queue.shift();
        if (master[level[each.val]]) {
            master[level[each.val]] = [...master[level[each.val]], each.val]
        } else
            master[level[each.val]] = [each.val]

        for (let i = 0; i < each.children.length; i++) {
            level[each.children[i].val] = level[each.val] + 1;
            queue.push(each.children[i]);
        }

    }
    return master;
};



// @lc code=end


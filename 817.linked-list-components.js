/*
 * @lc app=leetcode id=817 lang=javascript
 *
 * [817] Linked List Components
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function (head, G) {

    let total = 0;
    let c = false
    while (head !== null) {
        if (G.includes(head.val)) {
            c = true;
        } else {
            if (c)
                total++;
            c = 0;
        }
        head = head.next;
    }

    if (c) {
        total++
    }
    return total;
};
// @lc code=end


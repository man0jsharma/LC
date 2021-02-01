/*
 * @lc app=leetcode id=1721 lang=javascript
 *
 * [1721] Swapping Nodes in a Linked List
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
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
    let clone = head;
    let first = head;
    let mid = head;
    let last = head;

    for (let i = 0; i < k - 1; i++) {
        first = first.next;
        last = last.next;
    }

    while (last.next) {
        last = last.next
        mid = mid.next;
    }

    let temp = mid.val;
    mid.val = first.val;
    first.val = temp;

    return clone

    //Easy trick is to swap the values
};




// @lc code=end


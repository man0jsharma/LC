/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
// var reverseList = function (head) {
//     if (head === null || head.next === null) {
//         return head;
//     }
//     let tail = reverseList(head.next);
//     head.next.next = head;
//     head.next = null;
//     return tail;
// };


const reverseList = (head) => {

    if (head === null) {
        return null;
    }

    let next = null;
    let curr = head;
    let prev = null;

    while (curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}
// @lc code=end


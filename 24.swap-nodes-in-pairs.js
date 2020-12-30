/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
var swapPairs = function (head) {
    if (head === null || head.next === null) {
        return head;
    }

    let dummy = new ListNode();
    dummy.next = head;
    pt = dummy;

    while (pt.next && pt.next.next) {
        let first = pt.next
        let sec = pt.next.next
        pt.next = sec
        first.next = sec.next
        sec.next = first
        pt = pt.next.next
    }
    return dummy.next;
};
// @lc code=end


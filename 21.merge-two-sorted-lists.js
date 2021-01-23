/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let res = new ListNode(0);
    let ptr = res;

    while (l1 && l2) {
        let v1 = l1.val;
        let v2 = l2.val;

        if (v1 < v2) {
            ptr.next = new ListNode(v1)
            ptr = ptr.next;
            l1 = l1.next;
        } else if (v1 > v2) {
            ptr.next = new ListNode(v2)
            ptr = ptr.next;
            l2 = l2.next;
        } else {
            ptr.next = new ListNode(v1)
            ptr = ptr.next;
            ptr.next = new ListNode(v2)
            ptr = ptr.next;
            l1 = l1.next;
            l2 = l2.next;
        }
    }

    while (l1) {
        let v1 = l1.val;
        ptr.next = new ListNode(v1)
        ptr = ptr.next;
        l1 = l1.next;
    }

    while (l2) {
        let v2 = l2.val;
        ptr.next = new ListNode(v2);
        ptr = ptr.next;
        l2 = l2.next;
    }

    return res.next;
};
// @lc code=end


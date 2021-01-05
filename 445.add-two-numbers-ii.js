/*
 * @lc app=leetcode id=445 lang=javascript
 *
 * [445] Add Two Numbers II
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
var addTwoNumbers = function (l1, l2) {
    let s1 = [];
    let s2 = []


    while (l1 !== null) {
        s1.push(l1.val);
        l1 = l1.next;
    }

    while (l2 !== null) {
        s2.push(l2.val);
        l2 = l2.next;
    }

    let carry = 0;
    let list = new ListNode(0)
    while (s1.length !== 0 || s2.length !== 0) {
        let v1, v2 = 0;
        if (s1.length) {
            v1 = s1.pop()
        }

        if (s2.length) {
            v2 = s2.pop()
        }

        let sum = v1 + v2 + carry;

        let value = sum % 10;
        carry = Math.floor(sum / 10);

        let head = new ListNode(value);

        head.next = list;
        list = head;
    }

    return list.next;
};
// @lc code=end


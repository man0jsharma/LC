/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var deleteDuplicates = function (head) {
    if (head === null) {
        return head;
    }

    var pt = head;

    while (pt.next !== null) {
        if (pt.val === pt.next.val) {
            pt.next = pt.next.next;
        } else {
            pt = pt.next;
        }
    }
    return head;
};


// @lc code=end


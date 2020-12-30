/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
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
 * @param {number} x
 * @return {ListNode}
 */


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


var partition = function (head, x) {

    let leftPartition = new ListNode(0)
    let rightPartition = new ListNode(0)
    let leftHead = leftPartition;
    let rightHead = rightPartition;

    while (head !== null) {
        if (head.val < x) {
            leftPartition.next = head;
            leftPartition = leftPartition.next;
        } else {
            rightPartition.next = head;
            rightPartition = rightPartition.next;
        }
        head = head.next;
    }

    rightPartition.next = null;
    leftPartition.next = rightHead.next;
    return leftHead.next
};

// console.log(JSON.stringify(partition(new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2)))))), 3)))
// @lc code=end


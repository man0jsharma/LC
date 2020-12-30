/*
 @lc app=leetcode id=25 lang=javascript
 *
 [25] Reverse Nodes in k-Group
 */

// @lc code=start
/**
 Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
 */
/**
 @param {ListNode} head
 @param {number} k
 @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var reverseKGroup = function (head, k) {
    let newHead = null;
    if (head === null) {
        return null;
    }
    let i = 0
    let curr = head;
    while (head !== null && i < k) {
        let newNext = head.next;
        head = {
            ...head,
            next: newHead
        }
        newHead = head;
        head = newNext;
        i++
    }
    if (i < k) {
        return curr;
    }
    let each = newHead;
    while (newHead.next !== null) {
        newHead = newHead.next;
    }
    newHead.next = reverseKGroup(head, k)
    return each;
};

// const reverseDp = (head, k, count) => {
//     if (head.next === null || count >= k - 1) {
//         return head;
//     }
//     let newHead = reverseDp(head.next, k, count + 1)
//     head.next.next = head;
//     head.next = null;
//     return newHead;
// }



// let res = reverseKGroup(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))), 3)
// console.log(JSON.stringify(res))
// @lc code=end


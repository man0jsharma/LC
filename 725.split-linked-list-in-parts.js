/*
 * @lc app=leetcode id=725 lang=javascript
 *
 * [725] Split Linked List in Parts
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (root, k) {

    let mstr = [];
    let len = 0;
    let head = root;

    /*
    Find the length of the linkedlist
    */
    while (head) {
        head = head.next;
        len++;
    }


    /*
    Lets say len = 10 k = 3;

    first iterate thru ceil(10 / 3) => 4
    then ceil((10 - 4) / 3 - 1) => 6 / 2 => 3
    then ceil(6 - 3/2 - 1) => 3 / 1 => 3

    That's how we split the array
    */
    while (len) {
        let div = Math.ceil(len / k)
        len = len - div;
        let tmp = root;
        let prev;
        while (div) {
            prev = root;
            root = root.next;
            div--;
        }
        if (prev) prev.next = null;
        mstr.push(tmp);
        k--;
    }

    while (k--) {
        mstr.push(null)
    }
    return mstr
};


// @lc code=end


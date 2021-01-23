/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */





var mergeKLists = function (lists) {
    let ptr = res = new ListNode(0);
    let count = 0;
    while (count < lists.length) {
        count = 0; // Count checks if all the list are processsed.
        let min = Number.MAX_VALUE;
        let index = -1;
        for (let i = 0; i < lists.length; i++) {
            if (lists[i]) {
                let eachValue = lists[i].val
                if (eachValue < min) {
                    min = eachValue;
                    index = i
                }
            } else {
                count++
            }
        }
        if (index !== -1) {
            res.next = new ListNode(lists[index].val)
            res = res.next;
            lists[index] = lists[index].next;
        }
    }

    // This solution in O(N K) 
    // where N is count of nodes and 
    // K is the nodes in the list


    //Best optimal solution is divide and conquer
    // TO DO

    return ptr.next;
};
// @lc code=end


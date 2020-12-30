/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    return findKth(nums, k, 0, nums.length - 1)
};


const findKth = (nums, k, i, j) => {
    let newPivot = partition(nums, i, j);
    if (newPivot === nums.length - k) {
        return nums[newPivot]
    } else if (newPivot < nums.length - k) {
        return findKth(nums, k, newPivot + 1, j)
    } else
        return findKth(nums, k, i, newPivot - 1)
}

function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

const partition = (nums, lo, hi) => {
    let pivot = nums[lo];

    let left = lo;
    let right = hi;
    while (left <= right) {
        while (nums[left] <= pivot) {
            left++;
        }

        while (nums[right] > pivot) {
            right--;
        }

        if (left < right) {
            swap(nums, left, right);
            left++;
            right--;
        }
    }

    swap(nums, lo, right)
    return right;
}

// @lc code=end


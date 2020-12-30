/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    let mIndex = 0;
    let nIndex = 0;
    let newIndex = 0;

    while (mIndex < m) {
        if (nums1[mIndex] < nums2[nIndex]) {
            nums1[newIndex] = nums1[mIndex]
            mIndex++;
        } else if (nums1[mIndex] > nums2[nIndex]) {
            nums1[newIndex] = nums2[nIndex]
            nIndex++
        } else if (nums1[mIndex] === nums2[nIndex]) {
            nums1[newIndex] = nums1[mIndex]
            newIndex++;
            nums1[newIndex] = nums2[nIndex]
            mIndex++;
            nIndex++;
        }
        newIndex++;
    }

    while (mIndex < m) {
        nums1[newIndex] = nums1[mIndex];
        mIndex++
        newIndex++
    }

    while (nIndex < n) {
        nums1[newIndex] = nums2[nIndex];
        nIndex++
        newIndex++
    }

    return nums1
};


console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))

// @lc code=end

